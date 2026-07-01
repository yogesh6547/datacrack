/**
 * Pyodide-powered Python Coding Page - Mobile-First Two-Tab UI
 *
 * Tab 1: Problem Statement (markdown-style question description)
 * Tab 2: Code Editor with Run/Submit buttons and Output Console
 *
 * Uses real Python execution via Pyodide (WebAssembly).
 */

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { pythonQuestions } from '../../data/pythonQuestions'
import { useProgress } from '../../context/ProgressContext'
import { runPythonCode, runPythonTests, initPyodide } from '../../hooks/usePyodideRunner'
import QuestionNavigator from './QuestionNavigator'
import { Play, Send, Loader2, RotateCcw, AlertTriangle, CheckCircle, XCircle, Terminal, BookOpen } from 'lucide-react'

function highlightPython(code) {
  if (!code) return ''
  // Build HTML entities using char codes to prevent formatter from breaking them
  var _amp = String.fromCharCode(97, 109, 112, 59)
  var _lt = String.fromCharCode(108, 116, 59)
  var _gt = String.fromCharCode(103, 116, 59)
  var a = String.fromCharCode(38) + _amp
  var l = String.fromCharCode(38) + _lt
  var g = String.fromCharCode(38) + _gt
  var html = code.replace(/&/g, a).replace(/</g, l).replace(/>/g, g)
  var colors = { kw:'#c792ea', fn:'#82aaff', str:'#c3e88d', num:'#f78c6c', com:'#546e7a', dec:'#89ddff' }
  var kw = '\\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\\b'
  var bn = '\\b(print|len|range|int|float|str|list|dict|set|tuple|bool|type|map|filter|zip|enumerate|sorted|reversed|min|max|sum|abs|any|all|isinstance|hasattr|getattr|setattr|delattr|open|input|repr|eval|exec)\\b'
  var pats = [
    { r: /(#.*)$/gm, c: colors.com },
    { r: /('''[\s\S]*?'''|"""[\s\S]*?"""|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g, c: colors.str },
    { r: /\b(\d+\.?\d*)\b/g, c: colors.num },
    { r: new RegExp(kw, 'g'), c: colors.kw },
    { r: new RegExp(bn, 'g'), c: colors.fn },
    { r: /(@\w+)/g, c: colors.dec },
  ]
  for (var i = 0; i < pats.length; i++) {
    html = html.replace(pats[i].r, function(m) {
      return '<span style="color:' + pats[i].c + '">' + m + '</span>'
    })
  }
  return html
}

export default function PyodidePythonPage() {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const { pythonSolved, markPythonSolved } = useProgress()

  const [activeCategory, setActiveCategory] = useState(null)
  const [codeMap, setCodeMap] = useState({})
  const [activeTab, setActiveTab] = useState('problem')
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [output, setOutput] = useState('')
  const [results, setResults] = useState([])
  const [pyodideLoading, setPyodideLoading] = useState(false)
  const [pyodideLoaded, setPyodideLoaded] = useState(false)
  const [pyodideError, setPyodideError] = useState(null)
  const [showConsole, setShowConsole] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const editorRef = useRef(null)

  const filteredQuestions = useMemo(() => {
    if (!activeCategory) return pythonQuestions
    return pythonQuestions.filter(q => q.category === activeCategory)
  }, [activeCategory])

  const currentIndex = useMemo(() => {
    if (questionId) {
      const idx = filteredQuestions.findIndex(q => q.id === parseInt(questionId))
      if (idx >= 0) return idx
    }
    return 0
  }, [questionId, filteredQuestions])

  const currentQuestion = filteredQuestions[currentIndex]

  const currentCode = currentQuestion
    ? (codeMap[currentQuestion.id] || currentQuestion.starterCode)
    : ''

  const handleCodeChange = useCallback((newCode) => {
    if (currentQuestion) {
      setCodeMap(prev => ({ ...prev, [currentQuestion.id]: newCode }))
    }
  }, [currentQuestion])

  const handleNavigate = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < filteredQuestions.length) {
      const q = filteredQuestions[newIndex]
      navigate(`/python/${q.id}`)
      setOutput('')
      setResults([])
      setActiveTab('problem')
    }
  }, [filteredQuestions, navigate])

  useEffect(() => {
    let mounted = true
    let progressInterval
    const loadPyodide = async () => {
      setPyodideLoading(true)
      setPyodideError(null)
      progressInterval = setInterval(() => {
        if (mounted) setLoadingProgress(prev => Math.min(prev + 5, 90))
      }, 500)
      try {
        await initPyodide()
        await runPythonCode('print("ok")')
        if (mounted) { setPyodideLoaded(true); setLoadingProgress(100) }
      } catch (err) {
        if (mounted) setPyodideError(err.message || 'Failed to load')
      } finally {
        if (mounted) { setPyodideLoading(false); clearInterval(progressInterval) }
      }
    }
    loadPyodide()
    return () => { mounted = false; clearInterval(progressInterval) }
  }, [])

  const handleRun = useCallback(async () => {
    if (!currentQuestion || isRunning || isSubmitting) return
    setIsRunning(true); setOutput(''); setResults([]); setShowConsole(true); setActiveTab('code')
    try {
      const result = await runPythonCode(currentCode)
      if (result.timedOut) setOutput(result.stderr || 'Timeout Error: Execution exceeded 4 seconds.')
      else if (result.error) setOutput(result.stderr || result.error)
      else setOutput(result.stdout || 'Code executed successfully.')
    } catch (err) { setOutput(`Error: ${err.message || String(err)}`) }
    finally { setIsRunning(false) }
  }, [currentQuestion, currentCode, isRunning, isSubmitting])

  const handleSubmit = useCallback(async () => {
    if (!currentQuestion || isRunning || isSubmitting) return
    setIsSubmitting(true); setOutput(''); setResults([]); setShowConsole(true); setActiveTab('code')
    try {
      const testResult = await runPythonTests(currentCode, currentQuestion.testCases, currentQuestion.functionName)
      setResults(testResult.results || [])
      const passedCount = (testResult.results || []).filter(r => r.passed).length
      const totalCount = (testResult.results || []).length
      if (testResult.error) setOutput(testResult.stderr || testResult.error)
      else if (passedCount === totalCount) { setOutput(`All ${totalCount} test cases passed!`); markPythonSolved(currentQuestion.id) }
      else {
        const failed = (testResult.results || []).filter(r => !r.passed).map(r => `  Test #${r.testNumber}: Expected ${r.expected}, Got ${r.actual || r.error}`).join('\n')
        setOutput(`${passedCount}/${totalCount} test cases passed.\n\nFailed:\n${failed}`)
      }
      if (testResult.stdout) setOutput(prev => prev + '\n--- stdout ---\n' + testResult.stdout)
    } catch (err) { setOutput(`Error: ${err.message || String(err)}`) }
    finally { setIsSubmitting(false) }
  }, [currentQuestion, currentCode, isRunning, isSubmitting, markPythonSolved])

  const handleReset = useCallback(() => {
    if (currentQuestion) { handleCodeChange(currentQuestion.starterCode); setOutput(''); setResults([]) }
  }, [currentQuestion, handleCodeChange])

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const first = filteredQuestions[0]
      if (!questionId || !filteredQuestions.find(q => q.id === parseInt(questionId))) {
        navigate(`/python/${first.id}`, { replace: true })
      }
    }
  }, [activeCategory])

  if (!currentQuestion) {
    return <div className="flex items-center justify-center h-full"><p className="text-gray-500">No questions found.</p></div>
  }

  const passedTests = results.filter(r => r.passed).length
  const totalTests = results.length

  const highlightedCode = useMemo(() => highlightPython(currentCode), [currentCode])

  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-slate-900">
      <QuestionNavigator questions={filteredQuestions} currentIndex={currentIndex} onNavigate={handleNavigate}
        solvedIds={pythonSolved} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {pyodideLoading && (
        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading Python engine... {loadingProgress}%</span>
          </div>
          <div className="mt-1 h-1.5 bg-blue-200 dark:bg-blue-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${loadingProgress}%` }} />
          </div>
        </div>
      )}

      {pyodideError && (
        <div className="px-4 py-2 bg-red-50 dark:bg-red-950/30 border-b border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
            <AlertTriangle className="w-4 h-4" />
            <span>Python engine failed to load: {pyodideError}</span>
          </div>
        </div>
      )}

      <div className="flex border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0">
        <button onClick={() => setActiveTab('problem')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'problem' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
          <BookOpen className="w-4 h-4" /> Problem Statement
        </button>
        <button onClick={() => setActiveTab('code')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'code' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
          <Terminal className="w-4 h-4" /> Code Editor
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {activeTab === 'problem' ? (
          <div className="h-full overflow-y-auto p-4 lg:p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{currentQuestion.title}</h2>
                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${currentQuestion.difficulty === 'Easy' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : currentQuestion.difficulty === 'Medium' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'}`}>
                  {currentQuestion.difficulty}
                </span>
              </div>
              {pythonSolved.has(currentQuestion.id) && <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />}
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
              {currentQuestion.description.split('\n').map((line, i) => (
                <p key={i} className="text-sm text-gray-600 dark:text-gray-400 mb-2">{line}</p>
              ))}
            </div>
            {currentQuestion.examples && currentQuestion.examples.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Examples</h3>
                {currentQuestion.examples.map((ex, i) => (
                  <div key={i} className="mb-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example {i + 1}:</div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                      <div><span className="text-gray-500">Input:</span> {ex.input}</div>
                      <div><span className="text-gray-500">Output:</span> {ex.output}</div>
                      {ex.explanation && <div className="mt-1 text-xs text-gray-400 dark:text-gray-500">{ex.explanation}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {currentQuestion.constraints && currentQuestion.constraints.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Constraints</h3>
                <ul className="space-y-1">
                  {currentQuestion.constraints.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-emerald-500 mt-1">&bull;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Function Signature</h3>
              <div className="p-3 rounded-lg bg-gray-900 text-gray-200 font-mono text-sm overflow-x-auto">
                {currentQuestion.starterCode.split('\n').slice(0, 3).join('\n')}
              </div>
            </div>
            <button onClick={() => setActiveTab('code')} className="w-full py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">
              Switch to Code Editor
            </button>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{currentQuestion.title}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">Python 3</span>
              </div>
              <button onClick={handleReset} disabled={isRunning || isSubmitting}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors shrink-0">
                <RotateCcw className="w-3.5 h-3.5" /> Reset Code
              </button>
            </div>

            <div className="flex-1 min-h-0 relative">
              <pre className="absolute inset-0 p-4 font-mono text-sm leading-relaxed pointer-events-none overflow-hidden"
                style={{ lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} aria-hidden="true">
                {highlightedCode.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-gray-500 select-none w-8 text-right mr-3 text-xs shrink-0">{i + 1}</span>
                    <span className="text-gray-200" dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
                  </div>
                ))}
              </pre>
              <textarea ref={editorRef} value={currentCode} onChange={(e) => handleCodeChange(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm leading-relaxed bg-transparent text-transparent caret-gray-200 border-0 resize-none focus:outline-none focus:ring-0 relative z-10"
                spellCheck={false} style={{ tabSize: 4, lineHeight: 1.6 }} />
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0">
              <button onClick={() => setShowConsole(!showConsole)}
                className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <Terminal className="w-4 h-4" /> Console {results.length > 0 && `(${passedTests}/${totalTests})`}
              </button>
              <div className="flex items-center gap-2">
                <button onClick={handleRun} disabled={isRunning || isSubmitting || !pyodideLoaded}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px]">
                  {isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />} Run Code
                </button>
                <button onClick={handleSubmit} disabled={isRunning || isSubmitting || !pyodideLoaded}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px]">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Submit
                </button>
              </div>
            </div>

            {showConsole && (
              <div className="shrink-0 border-t border-gray-200 dark:border-slate-600">
                <div className="max-h-48 overflow-y-auto bg-gray-900 p-4 font-mono text-xs leading-relaxed">
                  {isRunning || isSubmitting ? (
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> <span>Running...</span>
                    </div>
                  ) : output ? (
                    output.split('\n').map((line, i) => {
                      const isError = line.startsWith('Error') || line.startsWith('Timeout')
                      const isSuccess = line.includes('passed')
                      const isFailure = line.startsWith('Failed') || line.startsWith('0/') || line.startsWith('1/') || line.startsWith('2/')
                      return <div key={i} className={`${isError ? 'text-red-400' : ''} ${isSuccess ? 'text-emerald-400' : ''} ${isFailure ? 'text-amber-400' : ''} ${!isError && !isSuccess && !isFailure ? 'text-gray-300' : ''}`}>
                        {line || '\u00A0'}
                      </div>
                    })
                  ) : results.length > 0 ? (
                    results.map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {r.passed ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />}
                        <div>
                          <span className="text-gray-400">Test #{r.testNumber}:</span>{' '}
                          <span className={r.passed ? 'text-emerald-400' : 'text-red-400'}>{r.passed ? 'Passed' : 'Failed'}</span>
                          {!r.passed && r.error && <div className="text-red-400 text-xs mt-0.5">{r.error}</div>}
                          {!r.passed && !r.error && <div className="text-gray-400 text-xs mt-0.5">Expected: {r.expected}, Got: {r.actual}</div>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">Click "Run Code" to execute or "Submit" to test against test cases.</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}