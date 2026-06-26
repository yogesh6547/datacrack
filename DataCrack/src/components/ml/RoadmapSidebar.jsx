import { useNavigate } from 'react-router-dom'
import { CheckCircle, Circle, BookOpen, X } from 'lucide-react'

export default function RoadmapSidebar({ topics, currentSlug, completedSlugs, routePrefix = '/ml', onMobileClose }) {
  const navigate = useNavigate()

  const handleClick = (slug) => {
    navigate(`${routePrefix}/${slug}`)
    if (onMobileClose) onMobileClose()
  }

  const completedCount = topics.filter(t => completedSlugs.has(t.slug)).length

  return (
    <div className="h-full flex flex-col border-r border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="px-4 lg:px-5 py-4 border-b border-gray-200 dark:border-slate-700 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-5 h-5 text-purple-500 shrink-0" />
            <h2 className="text-sm font-bold text-gray-900 dark:text-white truncate">
              ML Learning Roadmap
            </h2>
          </div>
          {/* Mobile close */}
          {onMobileClose && (
            <button
              onClick={onMobileClose}
              className="lg:hidden p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
              aria-label="Close roadmap"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / topics.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {completedCount}/{topics.length}
          </span>
        </div>
      </div>

      {/* Topic List */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-2 px-3">
        {topics.map((topic, index) => {
          const isCurrent = topic.slug === currentSlug
          const isCompleted = completedSlugs.has(topic.slug)

          return (
            <button
              key={topic.slug}
              onClick={() => handleClick(topic.slug)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 mb-0.5
                min-h-[44px]
                ${isCurrent
                  ? 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                }
              `}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {/* Step indicator */}
              <div className={`
                w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold
                ${isCompleted
                  ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400'
                  : isCurrent
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'
                }
              `}>
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>

              <span className="text-sm font-medium truncate">
                {topic.title}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}