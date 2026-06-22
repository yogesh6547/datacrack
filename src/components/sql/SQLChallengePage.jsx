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
      {/* Navigator */}
      <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shrink-0">
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            currentQuestion.difficulty === 'Easy' ? 'difficulty-easy' :
            currentQuestion.difficulty === 'Medium' ? 'difficulty-medium' :
            'difficulty-hard'
          }`}>
            {currentQuestion.difficulty}
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            #{currentQuestion.id} — {currentQuestion.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors"
          >
            ← Prev
          </button>
          <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
            {currentIndex + 1}/{sqlQuestions.length}
          </span>
          <button
            onClick={() => handleNavigate(currentIndex + 1)}
            disabled={currentIndex === sqlQuestions.length - 1}
            className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 disabled:opacity-30 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Split View */}
      <div className="flex-1 flex min-h-0">
        <div className="w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden">
          <SQLProblemPanel question={currentQuestion} isSolved={sqlSolved.has(currentQuestion.id)} />
        </div>
        <div className="w-1/2 overflow-hidden">
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