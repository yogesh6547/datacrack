/**
 * Pyodide-based real Python runner for browser.
 * Loads CPython via WebAssembly and executes user code with:
 * - 4-second timeout protection
 * - stdout/stderr capture
 * - Output truncation (5000 chars / 100 lines)
 * - Memory cleanup between runs
 * - Test case comparison
 */

let pyodideInstance = null
let loadPromise = null

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js'

async function getPyodide() {
  if (pyodideInstance) return pyodideInstance
  if (loadPromise) return loadPromise

  loadPromise = (async () => {
    const script = document.createElement('script')
    script.src = PYODIDE_URL
    document.head.appendChild(script)
    await new Promise((resolve) => { script.onload = resolve })

    const pyodide = await globalThis.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
    })
    pyodideInstance = pyodide
    return pyodide
  })()

  return loadPromise
}

const PYTHON_TIMEOUT_MS = 4000
const MAX_OUTPUT_CHARS = 5000
const MAX_OUTPUT_LINES = 100

/**
 * Run Python code and return stdout, stderr, any error.
 */
export async function runPythonCode(code) {
  const pyodide = await getPyodide()

  // Reset globals namespace for isolation between runs
  const namespace = pyodide.globals.get('dict')()
  namespace.set('__builtins__', pyodide.globals.get('__builtins__'))

  const capturedOutput = []
  let capturedError = ''
  let timedOut = false

  // Redirect stdout/stderr to our buffer
  const setupCode = `
import sys
from io import StringIO

_captured_out = StringIO()
_captured_err = StringIO()
_orig_stdout = sys.stdout
_orig_stderr = sys.stderr
sys.stdout = _captured_out
sys.stderr = _captured_err

def _flush_output():
    sys.stdout = _orig_stdout
    sys.stderr = _orig_stderr
    out = _captured_out.getvalue()
    err = _captured_err.getvalue()
    _captured_out.close()
    _captured_err.close()
    return out, err
`

  // Teardown code to restore stdout/stderr and flush
  const teardownCode = `
_flush_output()
`

  try {
    await pyodide.runPythonAsync(setupCode, { globals: namespace })

    // Execute with timeout
    const execPromise = pyodide.runPythonAsync(code, { globals: namespace })
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('TIMEOUT')), PYTHON_TIMEOUT_MS)
    )

    await Promise.race([execPromise, timeoutPromise])

    // Flush output
    const result = await pyodide.runPythonAsync(teardownCode, { globals: namespace })
    capturedOutput.push(result)

  } catch (err) {
    if (err.message === 'TIMEOUT' || (err.toString && err.toString().includes('TIMEOUT'))) {
      timedOut = true
      capturedError = 'Timeout Error: Execution exceeded 4 seconds. Check for infinite loops.'
    } else {
      capturedError = err.toString()
    }

    // Try to flush partial output even on error
    try {
      const partial = await pyodide.runPythonAsync(teardownCode, { globals: namespace })
      capturedOutput.push(partial)
    } catch (_) {}
  } finally {
    // Clean up namespace
    namespace.destroy()
  }

  // Process output
  let stdout = capturedOutput.filter(Boolean).join('').trim()
  let stderr = capturedError.trim()

  // Truncation protection
  const lines = stdout.split('\n')
  if (lines.length > MAX_OUTPUT_LINES) {
    stdout = lines.slice(0, MAX_OUTPUT_LINES).join('\n')
    stdout += `\n\n[Output truncated to ${MAX_OUTPUT_LINES} lines to prevent mobile browser crash]`
  }
  if (stdout.length > MAX_OUTPUT_CHARS) {
    stdout = stdout.slice(0, MAX_OUTPUT_CHARS)
    stdout += `\n\n[Output truncated to ${MAX_OUTPUT_CHARS} characters to prevent mobile browser crash]`
  }

  return { stdout, stderr, timedOut, error: capturedError }
}

/**
 * Run user code against test cases.
 * Test cases are converted to Python eval strings.
 */
export async function runPythonTests(code, testCases, functionName) {
  const results = []
  let stdout = ''
  let stderr = ''

  if (!code || !testCases || testCases.length === 0) {
    return { results: [], stdout: '', stderr: 'No code or test cases provided.', error: 'Missing input' }
  }

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i]
    try {
      // Build execution code that imports the user's function
      const execCode = `
import sys, json
from io import StringIO

# Capture stdout during test
_cap = StringIO()
_old = sys.stdout
sys.stdout = _cap

${code}

# Prepare input
_input = ${tc.input}
_expected = ${tc.expected}

# Call the function
_result = ${functionName}(*_input) if isinstance(_input, list) else ${functionName}(_input)

# Compare
_actual_json = json.dumps(_result, default=str)
_expected_json = json.dumps(_expected, default=str) if not isinstance(${tc.expected}, str) else json.dumps(${tc.expected})
_passed = _actual_json == _expected_json

sys.stdout = _old
_cap_val = _cap.getvalue()
_cap.close()

(_passed, _actual_json, _expected_json, _cap_val)
`

      const rawResult = await runPythonCode(execCode)

      if (rawResult.error && !rawResult.error.includes('TIMEOUT')) {
        results.push({
          testNumber: i + 1,
          input: tc.input,
          expected: tc.expected,
          actual: null,
          passed: false,
          error: rawResult.error,
        })
        stdout += rawResult.stdout + '\n'
        if (rawResult.stderr) stderr += rawResult.stderr + '\n'
        continue
      }

      // Parse result tuple from Pyodide
      // The result is a Python tuple: (passed, actual_json, expected_json, captured_stdout)
      if (rawResult.stdout) {
        const lines = rawResult.stdout.split('\n').filter(l => l.trim())
        if (lines.length > 0) {
          try {
            const parsed = JSON.parse(lines[lines.length - 1].replace(/'/g, '"'))
            if (Array.isArray(parsed) && parsed.length >= 3) {
              const [passed, actual, expected] = parsed
              results.push({
                testNumber: i + 1,
                input: tc.input,
                expected: tc.expected,
                actual: actual,
                passed: passed === true || passed === 'True',
                error: null,
              })
              // Capture any print statements
              stdout += parsed[3] || ''
              continue
            }
          } catch (_) {}
        }
      }

      // Fallback: try simple execution
      results.push({
        testNumber: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: rawResult.stdout.slice(0, 200),
        passed: false,
        error: 'Could not parse test result. Check your function signature.',
      })

    } catch (err) {
      results.push({
        testNumber: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: null,
        passed: false,
        error: err.message || String(err),
      })
    }
  }

  return { results, stdout, stderr, error: null }
}