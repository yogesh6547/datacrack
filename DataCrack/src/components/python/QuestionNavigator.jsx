import { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, Filter } from 'lucide-react'
import { categories } from '../../data/pythonQuestions'

export default function QuestionNavigator({
  questions,
  currentIndex,
  onNavigate,
  solvedIds,
  activeCategory,
  onCategoryChange,
}) {
  const [showDropdown, setShowDropdown] = useState(false)

  const current = questions[currentIndex]
  if (!current) return null

  return (
    <div className="flex items-center justify-between px-3 lg:px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0 gap-2">
      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`
              flex items-center gap-2 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium whitespace-nowrap
              border border-gray-200 dark:border-slate-600
              ${activeCategory
                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                : 'bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
              }
              transition-colors duration-200
            `}
          >
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {activeCategory
                ? categories.find(c => c.id === activeCategory)?.label || 'All'
                : 'All Topics'
              }
            </span>
          </button>

          {showDropdown && (
            <div className="absolute left-0 top-full mt-1 w-44 lg:w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 py-1 z-50 animate-fade-in max-h-[60vh] overflow-y-auto">
              <button
                onClick={() => { onCategoryChange(null); setShowDropdown(false) }}
                className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors whitespace-nowrap
                  ${!activeCategory
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }
                `}
              >
                All Topics ({50})
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { onCategoryChange(cat.id); setShowDropdown(false) }}
                  className={`
                    w-full text-left px-4 py-2.5 text-sm transition-colors whitespace-nowrap
                    ${activeCategory === cat.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous question"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-xs lg:text-sm font-mono text-gray-600 dark:text-gray-400 min-w-[60px] lg:min-w-[100px] text-center">
          {currentIndex + 1} / {questions.length}
        </span>

        <button
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={currentIndex === questions.length - 1}
          className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next question"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Dots (visible range) - hidden on mobile, visible sm+ */}
      <div className="hidden sm:flex items-center gap-1">
        {questions.slice(
          Math.max(0, currentIndex - 5),
          Math.min(questions.length, currentIndex + 6)
        ).map((q, i) => {
          const actualIndex = Math.max(0, currentIndex - 5) + i
          const isCurrent = actualIndex === currentIndex
          const isSolved = solvedIds.has(q.id)

          return (
            <button
              key={q.id}
              onClick={() => onNavigate(actualIndex)}
              className={`
                w-5 h-5 lg:w-6 lg:h-6 rounded-full text-[10px] lg:text-xs font-medium flex items-center justify-center transition-all duration-200
                ${isCurrent
                  ? 'bg-emerald-600 text-white scale-110'
                  : isSolved
                    ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600'
                }
              `}
              title={q.title}
            >
              {isSolved ? (
                <CheckCircle className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
              ) : (
                actualIndex + 1
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}