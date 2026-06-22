import { CheckCircle, XCircle, Loader2, Terminal } from 'lucide-react'

export default function ConsoleOutput({ results, output, isRunning }) {
  return (
    <div className="border-t border-gray-200 dark:border-slate-600 bg-gray-900 dark:bg-slate-900 max-h-[250px] overflow-y-auto scrollbar-thin shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
        <Terminal className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs font-medium text-gray-400">Console Output</span>
      </div>

      {/* Loading State */}
      {isRunning && (
        <div className="flex items-center gap-2 px-4 py-3">
          <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
          <span className="text-sm text-gray-400">Running test cases...</span>
        </div>
      )}

      {/* Summary */}
      {!isRunning && output && (
        <div className="px-4 py-2 text-sm text-gray-400 font-mono">
          {output}
        </div>
      )}

      {/* Results */}
      {!isRunning && results.length > 0 && (
        <div className="px-4 pb-3 space-y-1">
          {results.map((result) => (
            <div
              key={result.testNumber}
              className={`
                flex items-start gap-2 px-3 py-2 rounded text-sm font-mono
                ${result.passed
                  ? 'bg-emerald-950/20 text-emerald-400'
                  : 'bg-red-950/20 text-red-400'
                }
              `}
            >
              {result.passed ? (
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium">
                  Test {result.testNumber}: {result.passed ? 'Passed' : 'Failed'}
                </div>
                {!result.passed && (
                  <div className="mt-1 space-y-1 text-xs">
                    {result.error ? (
                      <div className="text-red-400">{result.error}</div>
                    ) : (
                      <>
                        <div className="text-gray-500">Input: {result.input}</div>
                        <div className="text-gray-500">Expected: {result.expected}</div>
                        <div className="text-red-400">Got: {result.actual}</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isRunning && results.length === 0 && (
        <div className="px-4 py-6 text-center text-gray-500 text-sm">
          Click "Run Code" to test your solution against the test cases.
        </div>
      )}
    </div>
  )
}