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

export function initPyodide() {
  if (pyodideInstance) return Promise.resolve(pyodideInstance)
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = PYODIDE_URL
    script.onload = async () => {
      try {
        const pyodide = await globalThis.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
        })
        pyodideInstance = pyodide
        resolve(pyodide)
      } catch (err) {
        reject(err)
      }
    }
    script.onerror = () => reject(new Error('Failed to load Pyodide script'))
    document.head.appendChild(script)
  })

  return loadPromise
}

async function getPyodide() {
  if (pyodideInstance) return pyodideInstance
  return initPyodide()
}

const PYTHON_TIMEOUT_MS = 4000
const MAX_OUTPUT_CHARS = 5000
const MAX_OUTPUT_LINES = 100

/**
 * Execute Python code in a fresh namespace with stdout/stderr capture.
 * The code is placed at top level. Any print() output is captured.
 * Returns { stdout, stderr, timedOut, error }.
 */
async function executePython(code) {
  const pyodide = await getPyodide()

  const namespace = pyodide.globals.get('dict')()
  namespace.set('__builtins__', pyodide.globals.get('__builtins__'))

  let stdout = ''
  let stderr = ''
  let timedOut = false
  let error = null

  const wrappedCode = `
import sys
from io import StringIO

_captured_out = StringIO()
_captured_err = StringIO()
_orig_stdout = sys.stdout
_orig_stderr = sys.stderr
sys.stdout = _captured_out
sys.stderr = _captured_err

${code}

sys.stdout = _orig_stdout
sys.stderr = _orig_stderr
_out_val = _captured_out.getvalue()
_err_val = _captured_err.getvalue()
_captured_out.close()
_captured_err.close()
(_out_val, _err_val)
`

  try {
    const execPromise = pyodide.runPythonAsync(wrappedCode, { globals: namespace })
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('TIMEOUT')), PYTHON_TIMEOUT_MS)
    )

    const result = await Promise.race([execPromise, timeoutPromise])

    if (result && result.length === 2) {
      stdout = (result[0] || '').trim()
      stderr = (result[1] || '').trim()
    }
  } catch (err) {
    const errMsg = err.message || String(err)
    if (errMsg === 'TIMEOUT' || errMsg.includes('TIMEOUT')) {
      timedOut = true
      stderr = 'Timeout Error: Execution exceeded 4 seconds. Check for infinite loops.'
    } else {
      error = errMsg
      stderr = errMsg
    }
  } finally {
    namespace.destroy()
  }

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

  return { stdout, stderr, timedOut, error }
}

/**
 * Run user's Python code and return stdout/stderr.
 * Simple execution - no test cases.
 */
export async function runPythonCode(code) {
  return executePython(code)
}

/**
 * Run user code against test cases.
 * 
 * Strategy: For each test case, build a Python script that:
 * 1. Defines the user's function
 * 2. Parses input/expected from JSON
 * 3. Calls the function
 * 4. Compares results
 * 5. Prints JSON result to stdout (captured by executePython wrapper)
 * 
 * The executePython wrapper captures all print() output.
 * We parse the JSON result from the last line of stdout.
 */
export async function runPythonTests(code, testCases, functionName) {
  const results = []
  let capturedStdout = ''
  let capturedStderr = ''

  if (!code || !testCases || testCases.length === 0) {
    return { results: [], stdout: '', stderr: 'No code or test cases provided.', error: 'Missing input' }
  }

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i]

    // Escape single quotes for embedding in Python string
    const safeInput = tc.input.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
    const safeExpected = tc.expected.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

    // Build Python script. The executePython wrapper captures stdout.
    // We print JSON result to stdout so the wrapper captures it.
    const testScript = `
import json, traceback

# Define the user's function
${code}

# Parse test inputs from JSON
_input = json.loads('${safeInput}')
_expected = json.loads('${safeExpected}')

try:
    # Call the function - input is always a list of arguments
    _result = ${functionName}(*_input)

    # Serialize for comparison
    _actual_json = json.dumps(_result, default=str, sort_keys=True)
    _expected_json = json.dumps(_expected, default=str, sort_keys=True)
    _passed = _actual_json == _expected_json
    _error = None
except Exception as _e:
    _passed = False
    _actual_json = None
    _expected_json = json.dumps(_expected, default=str, sort_keys=True)
    _error = traceback.format_exc()

# Print JSON result - captured by executePython wrapper
print(json.dumps({
    "passed": _passed,
    "actual": _actual_json,
    "expected": _expected_json,
    "error": _error
}))
`

    const rawResult = await executePython(testScript)

    if (rawResult.error && !rawResult.error.includes('TIMEOUT')) {
      results.push({
        testNumber: i + 1,
        input: tc.input,
        expected: tc.expected,
        actual: null,
        passed: false,
        error: rawResult.error,
      })
      if (rawResult.stderr) capturedStderr += rawResult.stderr + '\n'
      continue
    }

    // Parse JSON result from stdout
    if (rawResult.stdout) {
      // Find the JSON line (last line that parses as JSON)
      const lines = rawResult.stdout.split('\n').filter(l => l.trim())
      let jsonLine = null
      const userOutput = []

      for (const line of lines) {
        try {
          JSON.parse(line)
          jsonLine = line
        } catch {
          userOutput.push(line)
        }
      }

      if (jsonLine) {
        try {
          const parsed = JSON.parse(jsonLine)
          results.push({
            testNumber: i + 1,
            input: tc.input,
            expected: tc.expected,
            actual: parsed.actual,
            passed: parsed.passed === true,
            error: parsed.error || null,
          })
          if (userOutput.length > 0) capturedStdout += userOutput.join('\n') + '\n'
          continue
        } catch (_) {}
      }
    }

    // Fallback
    results.push({
      testNumber: i + 1,
      input: tc.input,
      expected: tc.expected,
      actual: rawResult.stdout ? rawResult.stdout.slice(0, 200) : null,
      passed: false,
      error: 'Could not parse test result. Check your function signature.',
    })
  }

  return { results, stdout: capturedStdout, stderr: capturedStderr, error: null }
}