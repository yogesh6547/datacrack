import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

const STORAGE_KEY = 'datacrack-progress'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      return {
        pythonSolved: new Set(data.pythonSolved || []),
        sqlSolved: new Set(data.sqlSolved || []),
        mlCompleted: new Set(data.mlCompleted || []),
        conceptCompleted: new Set(data.conceptCompleted || []),
      }
    }
  } catch (e) {
    console.error('Failed to load progress:', e)
  }
  return {
    pythonSolved: new Set(),
    sqlSolved: new Set(),
    mlCompleted: new Set(),
    conceptCompleted: new Set(),
  }
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      pythonSolved: Array.from(progress.pythonSolved),
      sqlSolved: Array.from(progress.sqlSolved),
      mlCompleted: Array.from(progress.mlCompleted),
      conceptCompleted: Array.from(progress.conceptCompleted),
    }))
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const markPythonSolved = (id) => {
    setProgress(prev => {
      const next = { ...prev, pythonSolved: new Set(prev.pythonSolved) }
      next.pythonSolved.add(id)
      return next
    })
  }

  const markPythonUnsolved = (id) => {
    setProgress(prev => {
      const next = { ...prev, pythonSolved: new Set(prev.pythonSolved) }
      next.pythonSolved.delete(id)
      return next
    })
  }

  const markSQLSolved = (id) => {
    setProgress(prev => {
      const next = { ...prev, sqlSolved: new Set(prev.sqlSolved) }
      next.sqlSolved.add(id)
      return next
    })
  }

  const markSQLUnsolved = (id) => {
    setProgress(prev => {
      const next = { ...prev, sqlSolved: new Set(prev.sqlSolved) }
      next.sqlSolved.delete(id)
      return next
    })
  }

  const markMLCompleted = (slug) => {
    setProgress(prev => {
      const next = { ...prev, mlCompleted: new Set(prev.mlCompleted) }
      next.mlCompleted.add(slug)
      return next
    })
  }

  const markMLUncompleted = (slug) => {
    setProgress(prev => {
      const next = { ...prev, mlCompleted: new Set(prev.mlCompleted) }
      next.mlCompleted.delete(slug)
      return next
    })
  }

  const markConceptCompleted = (slug) => {
    setProgress(prev => {
      const next = { ...prev, conceptCompleted: new Set(prev.conceptCompleted) }
      next.conceptCompleted.add(slug)
      return next
    })
  }

  const markConceptUncompleted = (slug) => {
    setProgress(prev => {
      const next = { ...prev, conceptCompleted: new Set(prev.conceptCompleted) }
      next.conceptCompleted.delete(slug)
      return next
    })
  }

  const resetProgress = () => {
    setProgress({
      pythonSolved: new Set(),
      sqlSolved: new Set(),
      mlCompleted: new Set(),
      conceptCompleted: new Set(),
    })
  }

  return (
    <ProgressContext.Provider value={{
      ...progress,
      totalPython: 50,
      totalSQL: 30,
      totalML: 12,
      totalConcepts: 0, // dynamically set by ConceptsLayout if needed
      markPythonSolved,
      markPythonUnsolved,
      markSQLSolved,
      markSQLUnsolved,
      markMLCompleted,
      markMLUncompleted,
      markConceptCompleted,
      markConceptUncompleted,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}