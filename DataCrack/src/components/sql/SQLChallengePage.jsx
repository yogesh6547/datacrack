import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { sqlQuestions } from '../../data/sqlQuestions'
import { useProgress } from '../../context/ProgressContext'
import SQLProblemPanel from './SQLProblemPanel'
import SQLEditorPanel from './SQLEditorPanel'

export default function SQLChallengePage() {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const { sqlSolved, markSQLSolved } = useProgress()

  const [codeMap, setCodeMap] = useState({})
  const [results, setResults] = useState([])
  const [isRunning, setIsRunning] = useState(false)

  const currentIndex = useMemo(() => {
    if (questionId) {
      const idx = sqlQuestions.findIndex(q => q.id === parseInt(questionId))
      if (idx >= 0) return idx
    }
    return 0
  }, [questionId])

  const currentQuestion = sqlQuestions[currentIndex]

  const currentCode = currentQuestion
    ? (codeMap[currentQuestion.id] || currentQuestion.starterCode)
    : ''

  const handleCodeChange = (newCode) => {
    if (currentQuestion) {
      setCodeMap(prev => ({ ...prev, [currentQuestion.id]: newCode }))
    }
  }

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < sqlQuestions.length) {
      const q = sqlQuestions[newIndex]
      navigate(`/sql/${q.id}`)
      setResults([])
    }
  }

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      if (currentQuestion) {
        // Mock SQL execution - show expected results
        setResults(currentQuestion.expectedOutput)
        markSQLSolved(currentQuestion.id)
      }
      setIsRunning(false)
    }, 600)
  }

  const handleSubmit = () => {
    handleRun()
  }

  useEffect(() => {
    if (sqlQuestions.length > 0) {
      if (!questionId || !sqlQuestions.find(q => q.id === parseInt(questionId))) {
        navigate(`/sql/${sqlQuestions[0].id}`, { replace: true })
      }
    }
  }, [])

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No questions found.</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Navigator - responsive */}
      <div className="flex items-center justify-between px-3 lg:px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0 gap-2">
        <div className="flex items-center gap-2 lg:gap-3 min-w-0">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${
            currentQuestion.difficulty === 'Easy' ? 'difficulty-easy' :
            currentQuestion.difficulty === 'Medium' ? 'difficulty-medium' :
            'difficulty-hard'
          }`}>
            {currentQuestion.difficulty}
          </span>
          <span className="text-xs lg:text-sm font-medium text-gray-900 dark:text-white truncate">
            #{currentQuestion.id} — {currentQuestion.title}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-2 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors"
          >
            ← Prev
          </button>
          <span className="text-xs lg:text-sm font-mono text-gray-500 dark:text-gray-400">
            {currentIndex + 1}/{sqlQuestions.length}
          </span>
          <button
            onClick={() => handleNavigate(currentIndex + 1)}
            disabled={currentIndex === sqlQuestions.length - 1}
            className="px-2 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Split View - stack vertically on mobile */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        <div className="w-full lg:w-1/2 lg:border-r border-gray-200 dark:border-slate-700 overflow-hidden">
          <SQLProblemPanel question={currentQuestion} isSolved={sqlSolved.has(currentQuestion.id)} />
        </div>
        <div className="w-full lg:w-1/2 overflow-hidden border-t lg:border-t-0 border-gray-200 dark:border-slate-700">
          <SQLEditorPanel
            question={currentQuestion}
            code={currentCode}
            onCodeChange={handleCodeChange}
            onRun={handleRun}
            onSubmit={handleSubmit}
            results={results}
            isRunning={isRunning}
          />
        </div>
      </div>
    </div>
  )
}