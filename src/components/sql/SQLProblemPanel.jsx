import { CheckCircle, Database } from 'lucide-react'
import SchemaDiagram from './SchemaDiagram'

export default function SQLProblemPanel({ question, isSolved }) {
  if (!question) return null

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
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            question.difficulty === 'Easy' ? 'difficulty-easy' :
            question.difficulty === 'Medium' ? 'difficulty-medium' :
            'difficulty-hard'
          }`}>
            {question.difficulty}
          </span>
        </div>
        {isSolved && (
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 shrink-0">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Solved</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {question.description}
      </div>

      {/* Schema Diagram */}
      {question.schema && (
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <Database className="w-4 h-4 text-blue-500" />
            Schema: {question.schema.name}
          </h3>
          <SchemaDiagram schema={question.schema} />
        </div>
      )}

      {/* Sample Data */}
      {question.sampleData && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Sample Data
          </h3>
          <pre className="bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-lg p-4 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
            {question.sampleData}
          </pre>
        </div>
      )}
    </div>
  )
}