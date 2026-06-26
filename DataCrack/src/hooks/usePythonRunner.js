import { useState, useCallback } from 'react'

/**
 * Transpiles simple Python to JavaScript for mock execution.
 * Handles: def -> function, : -> {, pass -> , Python booleans, None -> null, etc.
 */
function pythonToJs(code) {
  let lines = code.split('\n')
  
  // Phase 1a: Remove multi-line docstrings
  let codeStr = lines.join('\n')
  codeStr = codeStr.replace(/"""[\s\S]*?"""/g, '')
  codeStr = codeStr.replace(/'''[\s\S]*?'''/g, '')
  lines = codeStr.split('\n')

  // Phase 1b: Line-by-line transformations
  const processed = lines.map(line => {
    let l = line
    // Remove comments
    l = l.replace(/#.*$/, '')
    return l
  }).filter(line => {
    const t = line.trim()
    if (t === '') return false
    return true
  })

  // Phase 2: Determine indent levels and add closing braces
  const result = []
  const indentStack = [{ indent: -1, hasBrace: false }]
  
  for (let i = 0; i < processed.length; i++) {
    let line = processed[i]
    const trimmed = line.trim()
    
    if (trimmed === '') continue
    
    // Get the indent level (number of leading spaces)
    const match = line.match(/^(\s*)/)
    const indent = match ? match[1].length : 0
    
    // If indent decreased, close blocks
    while (indentStack.length > 1 && indent <= indentStack[indentStack.length - 1].indent) {
      indentStack.pop()
      result.push(' '.repeat(indentStack.length > 0 ? indentStack[indentStack.length - 1].indent + 4 : 0) + '}')
    }
    
    // Convert Python keywords to JS
    let jsLine = trimmed
    
    // def -> function...{
    jsLine = jsLine.replace(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/, 'function $1($2) {')
    
    // class -> function...{
    jsLine = jsLine.replace(/^class\s+(\w+)\s*:/, 'function $1() {')
    
    // for...in range() -> for (let...)
    jsLine = jsLine.replace(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:$/, 'for (let $1 = 0; $1 < ($2); $1++) {')
    
    // for...in enumerate() -> for (const [i, x] of...)
    jsLine = jsLine.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+enumerate\((\w+)\)\s*:/, 'for (const [$2, $1] of $3.entries()) {')
    
    // for x, y in zip(a, b) -> for loop
    jsLine = jsLine.replace(/^for\s+(\w+)\s*,\s*(\w+)\s+in\s+zip\((\w+),\s*(\w+)\)\s*:/, 'for (let $1i = 0; $1i < $3.length; $1i++) { let $1 = $3[$1i]; let $2 = $4[$1i];')
    
    // for...in... -> for (const x of y) {
    jsLine = jsLine.replace(/^for\s+(\w+)\s+in\s+(\w+)\s*:$/, 'for (const $1 of $2) {')
    
    // if...: -> if (...) {
    jsLine = jsLine.replace(/^if\s+(.+)\s*:$/, 'if ($1) {')
    
    // elif...: -> } else if (...) {
    jsLine = jsLine.replace(/^elif\s+(.+)\s*:$/, '} else if ($1) {')
    
    // else: -> } else {
    jsLine = jsLine.replace(/^else\s*:$/, '} else {')
    
    // while...: -> while (...) {
    jsLine = jsLine.replace(/^while\s+(.+)\s*:$/, 'while ($1) {')
    
    // Replace Python keywords
    jsLine = jsLine.replace(/\bTrue\b/g, 'true')
    jsLine = jsLine.replace(/\bFalse\b/g, 'false')
    jsLine = jsLine.replace(/\bNone\b/g, 'null')
    
    // Handle pass
    if (jsLine === 'pass') {
      jsLine = 'return undefined;'
    }
    
    // Handle len(x) -> x.length
    jsLine = jsLine.replace(/\blen\((\w+)\)/g, '$1.length')
    
    // Handle .append() -> .push()
    jsLine = jsLine.replace(/\.append\(/g, '.push(')
    
    // Handle .strip() -> .trim()
    jsLine = jsLine.replace(/\.strip\(\)/g, '.trim()')
    
    // Handle .split() -> .split("")
    jsLine = jsLine.replace(/\.split\(\)/g, '.split("")')
    
    // Handle is None / is not None
    jsLine = jsLine.replace(/\bis\s+not\s+None\b/g, '!== null')
    jsLine = jsLine.replace(/\bis\s+None\b/g, '=== null')
    
    // Handle not in
    jsLine = jsLine.replace(/(\w+)\s+not\s+in\s+(\w+)/g, '!$2.includes($1)')
    
    // Handle 'not x' -> '!x'
    jsLine = jsLine.replace(/\bnot\s+/g, '!')
    
    // Handle 'and' -> '&&'
    jsLine = jsLine.replace(/\band\b/g, '&&')
    
    // Handle 'or' -> '||'
    jsLine = jsLine.replace(/\bor\b/g, '||')
    
    // Handle sorted()
    jsLine = jsLine.replace(/sorted\((\w+)\)/g, '[...$1].sort((a, b) => a - b)')
    jsLine = jsLine.replace(/sorted\((\w+),\s*reverse\s*=\s*True\)/g, '[...$1].sort((a, b) => b - a)')
    
    // Determine if this line opens a block
    const opensBlock = jsLine.includes('{')
    // Determine if this line already has a closing }
    const hasClosingBrace = jsLine.trim().startsWith('}')
    
    const lineIndent = indentStack.length > 0 ? indentStack[indentStack.length - 1].indent : -1
    
    result.push(' '.repeat(indent) + jsLine)
    
    if (opensBlock && !hasClosingBrace) {
      indentStack.push({ indent, hasBrace: true })
    }
  }
  
  // Close remaining open blocks
  while (indentStack.length > 1) {
    indentStack.pop()
    const closeIndent = indentStack.length > 0 ? indentStack[indentStack.length - 1].indent + 4 : 0
    result.push(' '.repeat(Math.max(0, closeIndent)) + '}')
  }
  
  return result.join('\n')
}

/**
 * Mock Python code runner.
 * Transpiles Python to JavaScript for mock execution.
 * 
 * NOTE: This is a frontend-only mock using JS eval.
 * Only supports basic Python constructs. Complex Python
 * (list comprehensions, generators, etc.) may not work.
 */
export function usePythonRunner() {
  const [results, setResults] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState('')

  const runCode = useCallback((code, testCases, functionName) => {
    setIsRunning(true)
    setResults([])
    setOutput('')

    setTimeout(() => {
      try {
        // Transpile Python to JavaScript
        const jsCode = pythonToJs(code)

        const testResults = testCases.map((tc, idx) => {
          try {
            const inputStr = tc.input
            const expectedStr = tc.expected

            // Build execution code
            const execCode = jsCode + '\n' + `var __inputs = ${inputStr};\nvar __result = ${functionName}.apply(null, __inputs);\nreturn __result;`

            // Try transpiled code first, fall back to raw code
            let actual
            try {
              actual = new Function(execCode)()
            } catch (e) {
              // If transpiled failed, try with raw user code
              const rawExec = code + '\n' + `var __inputs = ${inputStr};\nvar __result = ${functionName}.apply(null, __inputs);\nreturn __result;`
              actual = new Function(rawExec)()
            }

            const passed = compareResults(actual, expectedStr)
            const actualClean = actual !== undefined && actual !== null
              ? JSON.stringify(actual).replace(/\s+/g, ' ').trim()
              : String(actual)

            return {
              testNumber: idx + 1,
              input: inputStr,
              expected: expectedStr,
              actual: actualClean,
              passed,
              error: null,
            }
          } catch (err) {
            return {
              testNumber: idx + 1,
              input: tc.input,
              expected: tc.expected,
              actual: null,
              passed: false,
              error: err.message,
            }
          }
        })

        setResults(testResults)

        const passedCount = testResults.filter(r => r.passed).length
        const totalCount = testResults.length
        setOutput(`Execution complete: ${passedCount}/${totalCount} test cases passed.`)
      } catch (err) {
        setOutput(`Error: ${err.message}`)
        setResults([{
          testNumber: 1,
          input: '',
          expected: '',
          actual: null,
          passed: false,
          error: `Compilation Error: ${err.message}`,
        }])
      } finally {
        setIsRunning(false)
      }
    }, 800)
  }, [])

  const clearResults = useCallback(() => {
    setResults([])
    setOutput('')
  }, [])

  return { results, isRunning, output, runCode, clearResults }
}

/**
 * Compare actual result with expected string
 */
function compareResults(actual, expectedStr) {
  if (actual === undefined || actual === null) return false

  const actualStr = JSON.stringify(actual)
  
  try {
    const expectedParsed = JSON.parse(expectedStr)
    if (JSON.stringify(expectedParsed) === actualStr) return true
  } catch {
    // Not valid JSON
  }

  const normalize = (s) => s.toString().replace(/[\s\n]+/g, ' ').trim()
  if (normalize(actualStr) === normalize(expectedStr)) return true
  
  const actualNums = actualStr.match(/-?\d+\.?\d*/g)
  const expectedNums = expectedStr.match(/-?\d+\.?\d*/g)
  
  if (actualNums && expectedNums && actualNums.length === expectedNums.length) {
    return actualNums.every((n, i) => Math.abs(parseFloat(n) - parseFloat(expectedNums[i])) < 0.01)
  }

  return false
}
