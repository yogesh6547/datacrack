import { CheckCircle, Circle, Info, Lightbulb } from 'lucide-react'

export default function ProblemPanel({ question, isSolved }) {
  if (!question) return null

  const difficultyClass = {
    Easy: 'difficulty-easy',
    Medium: 'difficulty-medium',
    Hard: 'difficulty-hard',
  }[question.difficulty] || 'difficulty-easy'

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              #{question.id}
            </span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {question.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyClass}`}>
              {question.difficulty}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
              {question.category}
            </span>
          </div>
        </div>
        {isSolved && (
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Solved</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm">
          {question.description}
        </div>
      </div>

      {/* Constraints */}
      {question.constraints && question.constraints.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-2">
            <Info className="w-4 h-4 text-blue-500" />
            Constraints
          </h3>
          <ul className="space-y-1">
            {question.constraints.map((c, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-slate-700/50 px-3 py-1 rounded">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Examples */}
      {question.examples && question.examples.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Examples
          </h3>
          <div className="space-y-4">
            {question.examples.map((ex, i) => (
              <div key={i} className="border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden">
                <div className="bg-gray-50 dark:bg-slate-700/50 px-4 py-2 border-b border-gray-200 dark:border-slate-600">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Example {i + 1}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">
                      Input:
                    </span>
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                      {ex.input}
                    </code>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">
                      Output:
                    </span>
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                      {ex.output}
                    </code>
                  </div>
                  {ex.explanation && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">
                        Explanation:
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {ex.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hint */}
      <div className="callout-tip rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
              Interview Tip
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
              {getHint(question)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function getHint(question) {
  const hints = {
    list: 'Think about time and space complexity. Can you solve this in O(n) using a hash map or two-pointer technique?',
    dict: 'Dictionaries/hash maps provide O(1) lookups. Consider how you can use this to reduce complexity.',
    pandas: 'Pandas provides vectorized operations that are much faster than iterating row by row.',
    ml: 'Break the problem down mathematically first. Write out the formula, then translate it to code step by step.',
  }
  return hints[question.category] || hints.list
}