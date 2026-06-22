import { Sun, Moon, RotateCcw } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../context/ProgressContext'
import { useState } from 'react'

export default function TopBar() {
  const { theme, toggleTheme } = useTheme()
  const { resetProgress } = useProgress()
  const [showReset, setShowReset] = useState(false)

  const handleReset = () => {
    resetProgress()
    setShowReset(false)
  }

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Master your Data Analyst & Data Scientist interviews
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Reset Progress */}
        <div className="relative">
          <button
            onClick={() => setShowReset(!showReset)}
            className="
              p-2 rounded-lg text-gray-500 dark:text-gray-400
              hover:bg-gray-100 dark:hover:bg-slate-700
              transition-colors duration-200
            "
            title="Reset Progress"
          >
            <RotateCcw className="w-4.5 h-4.5" />
          </button>

          {showReset && (
            <div className="absolute right-0 top-12 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 p-4 z-50 animate-fade-in">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Reset all progress? This cannot be undone.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="flex-1 px-3 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowReset(false)}
                  className="flex-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            p-2 rounded-lg text-gray-500 dark:text-gray-400
            hover:bg-gray-100 dark:hover:bg-slate-700
            transition-colors duration-200
          "
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-4.5 h-4.5" />
          ) : (
            <Moon className="w-4.5 h-4.5" />
          )}
        </button>
      </div>
    </header>
  )
}