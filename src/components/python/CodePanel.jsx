import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Send, Loader2, RotateCcw, ChevronDown } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import ConsoleOutput from './ConsoleOutput'

export default function CodePanel({
  question,
  code,
  onCodeChange,
  onRun,
  onSubmit,
  results,
  isRunning,
  output,
}) {
  const { theme } = useTheme()
  const [showConsole, setShowConsole] = useState(true)

  if (!question) return null

  const passedTests = results.filter(r => r.passed).length
  const totalTests = results.length

  return (
    <div className="h-full flex flex-col">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Solution
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Python 3
          </span>
        </div>
        <button
          onClick={() => onCodeChange(question.starterCode)}
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language="python"
          theme={theme === 'dark' ? 'vs-dark' : 'vs'}
          value={code}
          onChange={(value) => onCodeChange(value || '')}
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            tabSize: 4,
            insertSpaces: true,
            wordWrap: 'on',
            automaticLayout: true,
            suggest: {
              showKeywords: true,
              showSnippets: true,
            },
            quickSuggestions: false,
            parameterHints: { enabled: false },
          }}
          loading={
            <div className="flex items-center justify-center h-full bg-gray-900">
              <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
            </div>
          }
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 shrink-0">
        <button
          onClick={() => setShowConsole(!showConsole)}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${showConsole ? '' : '-rotate-90'}`} />
          Console {results.length > 0 && `(${passedTests}/${totalTests})`}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onRun}
            disabled={isRunning}
            className="
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300
              hover:bg-gray-300 dark:hover:bg-slate-500
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
            "
          >
            {isRunning ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            Run Code
          </button>

          <button
            onClick={onSubmit}
            disabled={isRunning}
            className="
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-emerald-600 text-white
              hover:bg-emerald-700
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
            "
          >
            <Send className="w-4 h-4" />
            Submit
          </button>
        </div>
      </div>

      {/* Console Output */}
      {showConsole && (
        <ConsoleOutput results={results} output={output} isRunning={isRunning} />
      )}
    </div>
  )
}