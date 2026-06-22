import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { pythonQuestions } from '../../data/pythonQuestions'
import { useProgress } from '../../context/ProgressContext'
import { usePythonRunner } from '../../hooks/usePythonRunner'
import QuestionNavigator from './QuestionNavigator'
import ProblemPanel from './ProblemPanel'
import CodePanel from './CodePanel'

export default function PythonChallengePage() {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const { pythonSolved, markPythonSolved } = useProgress()
  const { results, isRunning, output, runCode, clearResults } = usePythonRunner()

  const [activeCategory, setActiveCategory] = useState(null)
  const [codeMap, setCodeMap] = useState({})

  // Filter questions by category
  const filteredQuestions = useMemo(() => {
    if (!activeCategory) return pythonQuestions
    return pythonQuestions.filter(q => q.category === activeCategory)
  }, [activeCategory])

  // Find current index from URL
  const currentIndex = useMemo(() => {
    if (questionId) {
      const idx = filteredQuestions.findIndex(q => q.id === parseInt(questionId))
      if (idx >= 0) return idx
    }
    return 0
  }, [questionId, filteredQuestions])

  const currentQuestion = filteredQuestions[currentIndex]

  // Get or set code for current question
  const currentCode = currentQuestion
    ? (codeMap[currentQuestion.id] || currentQuestion.starterCode)
    : ''

  const handleCodeChange = (newCode) => {
    if (currentQuestion) {
      setCodeMap(prev => ({ ...prev, [currentQuestion.id]: newCode }))
    }
  }

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < filteredQuestions.length) {
      const q = filteredQuestions[newIndex]
      navigate(`/python/${q.id}`)
      clearResults()
    }
  }

  const handleRun = () => {
    if (currentQuestion) {
      runCode(currentCode, currentQuestion.testCases, currentQuestion.functionName)
    }
  }

  const handleSubmit = () => {
    if (currentQuestion) {
      runCode(currentCode, currentQuestion.testCases, currentQuestion.functionName)
      // Check if all pass and mark as solved
      setTimeout(() => {
        // We'll check in a separate effect
      }, 1000)
    }
  }

  // Auto-mark as solved when all test cases pass
  useEffect(() => {
    if (results.length > 0 && !isRunning) {
      const allPassed = results.every(r => r.passed)
      if (allPassed && currentQuestion) {
        markPythonSolved(currentQuestion.id)
      }
    }
  }, [results, isRunning, currentQuestion, markPythonSolved])

  // Sync URL on category change
  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const first = filteredQuestions[0]
      if (!questionId || !filteredQuestions.find(q => q.id === parseInt(questionId))) {
        navigate(`/python/${first.id}`, { replace: true })
      }
    }
  }, [activeCategory])

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No questions found.</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Question Navigator */}
      <QuestionNavigator
        questions={filteredQuestions}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
        solvedIds={pythonSolved}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Split View */}
      <div className="flex-1 flex min-h-0">
        {/* Left: Problem Statement */}
        <div className="w-1/2 border-r border-gray-200 dark:border-slate-700 overflow-hidden">
          <ProblemPanel
            question={currentQuestion}
            isSolved={pythonSolved.has(currentQuestion.id)}
          />
        </div>

        {/* Right: Code Editor + Console */}
        <div className="w-1/2 overflow-hidden">
          <CodePanel
            question={currentQuestion}
            code={currentCode}
            onCodeChange={handleCodeChange}
            onRun={handleRun}
            onSubmit={handleSubmit}
            results={results}
            isRunning={isRunning}
            output={output}
          />
        </div>
      </div>
    </div>
  )
}