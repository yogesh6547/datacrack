import { NavLink, useLocation } from 'react-router-dom'
import { Code2, Database, Brain, Lightbulb, ChevronLeft, ChevronRight, Zap, X } from 'lucide-react'
import { useProgress } from '../../context/ProgressContext'
import { totalConcepts } from '../../pages/Concepts'
import { useState } from 'react'

const navItems = [
  {
    path: '/Concepts',
    label: 'Concepts',
    icon: Lightbulb,
    totalKey: 'totalConcepts',
    solvedKey: 'conceptCompleted',
    dynamicTotal: totalConcepts,
  },
  {
    path: '/ml',
    label: 'ML Concepts',
    icon: Brain,
    totalKey: 'totalML',
    solvedKey: 'mlCompleted',
  },
  {
    path: '/python',
    label: 'Python Coding',
    icon: Code2,
    totalKey: 'totalPython',
    solvedKey: 'pythonSolved',
  },
  {
    path: '/sql',
    label: 'SQL Practice',
    icon: Database,
    totalKey: 'totalSQL',
    solvedKey: 'sqlSolved',
  },
]

export default function Sidebar({ collapsed, onToggleCollapse, onMobileClose }) {
  const progress = useProgress()
  const location = useLocation()

  const handleNavClick = () => {
    if (onMobileClose) onMobileClose()
  }

  return (
    <aside
      className={`
        ${collapsed ? 'w-[72px]' : 'w-[260px] lg:w-[200px]'}
        h-screen bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700
        flex flex-col transition-all duration-300 ease-in-out relative
        lg:static
      `}
    >
      {/* Logo & Close Button */}
      <div className="flex items-center gap-3 px-4 lg:px-5 h-16 border-b border-gray-200 dark:border-slate-700 shrink-0">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white flex-1 truncate">
            DataCrack
          </span>
        )}
        {/* Mobile close button */}
        <button
          onClick={onMobileClose}
          className="lg:hidden p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname.startsWith(item.path)
          const solved = progress[item.solvedKey]?.size || 0
          const total = item.dynamicTotal ?? progress[item.totalKey]
          const percent = total > 0 ? Math.round((solved / total) * 100) : 0

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                min-h-[44px]
                ${isActive
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{item.label}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                      {solved}/{total}
                    </span>
                  </div>
                </div>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Collapse toggle - desktop only */}
      <button
        onClick={onToggleCollapse}
        className="
          hidden lg:flex absolute -right-3 top-20 w-6 h-6 rounded-full
          bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500
          items-center justify-center
          transition-colors duration-200
          shadow-sm
        "
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Footer */}
      {!collapsed && (
        <div className="hidden lg:block px-5 py-4 border-t border-gray-200 dark:border-slate-700 shrink-0">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Interview Prep Platform
          </p>
        </div>
      )}
    </aside>
  )
}