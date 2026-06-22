/**
 * SVG diagram illustrating how a Decision Tree splits data
 * into regions using recursive binary splitting.
 */
export default function DecisionTreeDiagram() {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
        Visual: How a Decision Tree Splits Data
      </h3>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 440"
          className="w-full max-w-[760px] mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dt-node" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="dt-leaf-yes" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="dt-leaf-no" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.08" />
            </linearGradient>
            <marker id="dt-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>

          {/* ── ROOT NODE ── */}
          <rect x="270" y="12" width="220" height="56" rx="14" fill="url(#dt-node)" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="380" y="36" textAnchor="middle" className="fill-gray-900 dark:fill-white" fontSize="14" fontWeight="700">
            Age &le; 30?
          </text>
          <text x="380" y="55" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">
            Root — all data
          </text>

          {/* Branches from root */}
          <line x1="320" y1="68" x2="195" y2="120" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <line x1="440" y1="68" x2="565" y2="120" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <text x="242" y="90" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="11" fontWeight="700">Yes</text>
          <text x="515" y="90" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="11" fontWeight="700">No</text>

          {/* ── LEVEL 1 LEFT: Income > 50k ── */}
          <rect x="80" y="123" width="220" height="56" rx="14" fill="url(#dt-node)" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="190" y="147" textAnchor="middle" className="fill-gray-900 dark:fill-white" fontSize="13" fontWeight="700">
            {'Income > 50k?'}
          </text>
          <text x="190" y="166" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">
            Internal node
          </text>

          {/* ── LEVEL 1 RIGHT: Student? ── */}
          <rect x="450" y="123" width="220" height="56" rx="14" fill="url(#dt-node)" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="560" y="147" textAnchor="middle" className="fill-gray-900 dark:fill-white" fontSize="13" fontWeight="700">
            Student?
          </text>
          <text x="560" y="166" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">
            Internal node
          </text>

          {/* Branches from level-1 left */}
          <line x1="140" y1="179" x2="80" y2="236" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <line x1="240" y1="179" x2="300" y2="236" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <text x="95" y="210" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="10" fontWeight="700">Yes</text>
          <text x="282" y="210" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="10" fontWeight="700">No</text>

          {/* Branches from level-1 right */}
          <line x1="510" y1="179" x2="455" y2="236" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <line x1="610" y1="179" x2="670" y2="236" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <text x="468" y="210" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="10" fontWeight="700">Yes</text>
          <text x="660" y="210" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="10" fontWeight="700">No</text>

          {/* ── LEVEL 2 LEAVES ── */}
          {/* Leaf: Buy=Yes */}
          <rect x="15" y="239" width="130" height="50" rx="12" fill="url(#dt-leaf-yes)" stroke="#10b981" strokeWidth="1.5" />
          <text x="80" y="261" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="13" fontWeight="700">Buy = Yes</text>
          <text x="80" y="278" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="18">{'\u2705'}</text>

          {/* Leaf: Buy=No */}
          <rect x="235" y="239" width="130" height="50" rx="12" fill="url(#dt-leaf-no)" stroke="#ef4444" strokeWidth="1.5" />
          <text x="300" y="261" textAnchor="middle" className="fill-red-600 dark:fill-red-300" fontSize="13" fontWeight="700">Buy = No</text>
          <text x="300" y="278" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="18">{'\u274C'}</text>

          {/* Leaf: Buy=No (student yes) */}
          <rect x="390" y="239" width="130" height="50" rx="12" fill="url(#dt-leaf-no)" stroke="#ef4444" strokeWidth="1.5" />
          <text x="455" y="261" textAnchor="middle" className="fill-red-600 dark:fill-red-300" fontSize="13" fontWeight="700">Buy = No</text>
          <text x="455" y="278" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="18">{'\u274C'}</text>

          {/* Node: Age <= 40 (needs deeper split) */}
          <rect x="600" y="239" width="140" height="50" rx="12" fill="url(#dt-node)" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="670" y="261" textAnchor="middle" className="fill-gray-900 dark:fill-white" fontSize="13" fontWeight="700">Age &le; 40?</text>
          <text x="670" y="278" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">split further</text>

          {/* Branches from level-2 right */}
          <line x1="640" y1="289" x2="595" y2="335" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <line x1="700" y1="289" x2="730" y2="335" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <text x="608" y="318" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="9" fontWeight="700">Yes</text>
          <text x="725" y="318" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="9" fontWeight="700">No</text>

          {/* Level 3 leaves */}
          <rect x="535" y="338" width="120" height="44" rx="10" fill="url(#dt-leaf-yes)" stroke="#10b981" strokeWidth="1.5" />
          <text x="595" y="365" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="12" fontWeight="700">Buy = Yes {'\u2705'}</text>

          <rect x="670" y="338" width="90" height="44" rx="10" fill="url(#dt-leaf-no)" stroke="#ef4444" strokeWidth="1.5" />
          <text x="715" y="365" textAnchor="middle" className="fill-red-600 dark:fill-red-300" fontSize="12" fontWeight="700">No {'\u274C'}</text>

          {/* ── LEGEND ── */}
          <rect x="15" y="400" width="730" height="32" rx="8" fill="transparent" />

          <rect x="25" y="406" width="14" height="14" rx="4" fill="url(#dt-node)" stroke="#8b5cf6" strokeWidth="1" />
          <text x="48" y="418" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Decision Node (tests a feature)</text>

          <rect x="230" y="406" width="14" height="14" rx="4" fill="url(#dt-leaf-yes)" stroke="#10b981" strokeWidth="1" />
          <text x="253" y="418" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Leaf (positive class)</text>

          <rect x="380" y="406" width="14" height="14" rx="4" fill="url(#dt-leaf-no)" stroke="#ef4444" strokeWidth="1" />
          <text x="403" y="418" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Leaf (negative class)</text>

          <line x1="530" y1="413" x2="560" y2="413" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#dt-arrow)" />
          <text x="573" y="418" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Split branch (Yes/No)</text>
        </svg>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center italic">
        Example: Predicting whether a customer will buy a product based on Age, Income, and Student status.
        Each internal node tests a feature, branches represent outcomes, and leaves hold the final class prediction.
      </p>
    </div>
  )
}