import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Send, Loader2, RotateCcw, Table } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import ResultsGrid from './ResultsGrid'

export default function SQLEditorPanel({
  question,
  code,
  onCodeChange,
  onRun,
  onSubmit,
  results,
  isRunning,
}) {
  const { theme } = useTheme()
  const [showResults, setShowResults] = useState(true)

  if (!question) return null

  return (
    <div className="h-full flex flex-col">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            SQL Editor
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            MySQL
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
          language="sql"
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
            tabSize: 2,
            insertSpaces: true,
            wordWrap: 'on',
            automaticLayout: true,
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
          onClick={() => setShowResults(!showResults)}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <Table className="w-4 h-4" />
          Results {results.length > 0 && `(${results.length} rows)`}
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
            Run Query
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

      {/* Results Table */}
      {showResults && (
        <div className="border-t border-gray-200 dark:border-slate-600 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0">
          {isRunning && (
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-slate-800">
              <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
              <span className="text-sm text-gray-500">Executing query...</span>
            </div>
          )}
          {!isRunning && results.length > 0 && (
            <div className="bg-white dark:bg-slate-800">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  ✓ Query executed successfully — {results.length} row(s) returned
                </span>
              </div>
              <ResultsGrid results={results} />
            </div>
          )}
          {!isRunning && results.length === 0 && (
            <div className="px-4 py-6 text-center text-gray-500 text-sm bg-gray-50 dark:bg-slate-800/50">
              Click "Run Query" to execute your SQL and see results.
            </div>
          )}
        </div>
      )}
    </div>
  )
}