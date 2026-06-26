export default function ResultsGrid({ results }) {
  if (!results || results.length === 0) return null

  const columns = Object.keys(results[0])

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-slate-600">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr
              key={i}
              className={`
                border-b border-gray-100 dark:border-slate-700
                ${i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50 dark:bg-slate-800/50'}
              `}
            >
              {columns.map((col) => (
                <td
                  key={col}
                  className="px-4 py-2 font-mono text-gray-700 dark:text-gray-300 text-xs"
                >
                  {row[col] === null ? (
                    <span className="text-gray-400 dark:text-gray-500 italic">NULL</span>
                  ) : (
                    String(row[col])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}