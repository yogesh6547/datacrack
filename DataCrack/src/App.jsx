import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import PyodidePythonPage from './components/python/PyodidePythonPage'
import SQLChallengePage from './components/sql/SQLChallengePage'
import MLConceptsPage from './components/ml/MLConceptsPage'
import ConceptsLayout from './components/ml/ConceptsLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/Concepts" replace />} />
        <Route path="python" element={<PyodidePythonPage />} />
        <Route path="python/:questionId" element={<PyodidePythonPage />} />
        <Route path="sql" element={<SQLChallengePage />} />
        <Route path="sql/:questionId" element={<SQLChallengePage />} />
        <Route path="ml" element={<MLConceptsPage />} />
        <Route path="ml/:topicSlug" element={<MLConceptsPage />} />
        <Route path="Concepts" element={<ConceptsLayout />} />
        <Route path="Concepts/:topicSlug" element={<ConceptsLayout />} />
      </Route>
    </Routes>
  )
}

export default App