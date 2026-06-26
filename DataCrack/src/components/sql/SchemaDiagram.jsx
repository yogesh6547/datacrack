export default function SchemaDiagram({ schema }) {
  if (!schema) return null

  return (
    <div className="border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden">
      {/* Table header */}
      <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-2 border-b border-gray-200 dark:border-slate-600">
        <span className="text-sm font-bold text-blue-700 dark:text-blue-400">
          📋 {schema.name}
        </span>
      </div>

      {/* Columns */}
      <div className="bg-white dark:bg-slate-800">
        {schema.columns.map((col, i) => (
          <div
            key={i}
            className={`
              flex items-center justify-between px-4 py-2 text-sm
              ${i < schema.columns.length - 1 ? 'border-b border-gray-100 dark:border-slate-700' : ''}
            `}
          >
            <div className="flex items-center gap-2">
              {col.key === 'PK' && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-mono font-bold">
                  PK
                </span>
              )}
              {col.key === 'FK' && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-mono font-bold">
                  FK
                </span>
              )}
              <span className="font-mono text-gray-800 dark:text-gray-200 font-medium">
                {col.name}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
              {col.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}