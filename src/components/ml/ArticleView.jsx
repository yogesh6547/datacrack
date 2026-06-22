import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, Circle, BookOpen, Lightbulb, AlertTriangle, Info, Zap } from 'lucide-react'
import katex from 'katex'

export default function ArticleView({
  topic,
  isCompleted,
  onMarkComplete,
  allTopics,
  currentTopicIndex,
  onNavigate,
}) {
  const contentRef = useRef(null)
  const prevTopic = currentTopicIndex > 0 ? allTopics[currentTopicIndex - 1] : null
  const nextTopic = currentTopicIndex < allTopics.length - 1 ? allTopics[currentTopicIndex + 1] : null

  useEffect(() => {
    if (contentRef.current) {
      const processContent = () => {
        const walker = document.createTreeWalker(
          contentRef.current,
          NodeFilter.SHOW_TEXT,
          null,
          false
        )

        const textNodes = []
        let node
        while (node = walker.nextNode()) {
          textNodes.push(node)
        }

        textNodes.forEach(textNode => {
          const text = textNode.textContent
          if (text.includes('$$')) {
            const parts = text.split(/(\$\$[\s\S]*?\$\$)/)
            if (parts.length > 1) {
              const fragment = document.createDocumentFragment()
              parts.forEach(part => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                  const formula = part.slice(2, -2).trim()
                  const span = document.createElement('span')
                  span.className = 'katex-display-wrapper'
                  try {
                    katex.render(formula, span, {
                      throwOnError: false,
                      displayMode: true,
                    })
                  } catch (e) {
                    span.textContent = formula
                  }
                  fragment.appendChild(span)
                } else {
                  fragment.appendChild(document.createTextNode(part))
                }
              })
              textNode.parentNode.replaceChild(fragment, textNode)
            }
          }
        })
      }

      processContent()
    }

    contentRef.current?.scrollTo(0, 0)
  }, [topic.slug])

  const renderContent = (content) => {
    if (!content) return ''

    // Pre-process: render $$ formulas as KaTeX HTML before splitting
    let processed = content.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
      try {
        return katex.renderToString(formula.trim(), { throwOnError: false, displayMode: true })
      } catch (e) {
        return `<code>${formula}</code>`
      }
    })

    // Split into sections by ## headers
    const sections = processed.split(/(?=^## )/gm).filter(s => s.trim())

    return sections.map(section => {
      const lines = section.split('\n')
      let html = ''
      let inTable = false
      let tableRows = []
      let tableHeaders = []
      let inCodeBlock = false
      let codeBlockLang = ''
      let codeBlockLines = []

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const trimmed = line.trim()

        // Fenced code block detection
        if (trimmed.startsWith('```')) {
          if (!inCodeBlock) {
            // Opening fence — extract language tag
            inCodeBlock = true
            codeBlockLang = trimmed.slice(3).trim()
            codeBlockLines = []
          } else {
            // Closing fence — render the collected code block
            html += renderCodeBlock(codeBlockLang, codeBlockLines.join('\n'))
            inCodeBlock = false
            codeBlockLang = ''
            codeBlockLines = []
          }
          continue
        }

        // If we're inside a code block, collect lines (skip empty-line flushing)
        if (inCodeBlock) {
          codeBlockLines.push(line)
          continue
        }

        if (trimmed === '') {
          if (inTable && tableRows.length > 0) {
            html += renderTable(tableHeaders, tableRows)
            tableRows = []
            tableHeaders = []
            inTable = false
          }
          continue
        }

        // Table detection
        if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
          if (trimmed.includes('---')) {
            continue // Skip separator row
          }
          const allCells = trimmed.split('|')
          // Remove first and last empty elements from leading/trailing pipes
          const cells = allCells.slice(1, -1).map(c => c.trim())
          if (!inTable) {
            tableHeaders = cells
            inTable = true
          } else {
            tableRows.push(cells)
          }
          continue
        } else if (inTable) {
          html += renderTable(tableHeaders, tableRows)
          tableRows = []
          tableHeaders = []
          inTable = false
        }

        // Headers
        if (trimmed.startsWith('## ')) {
          const text = trimmed.slice(3)
          html += `<div class="ml-section-header"><span class="ml-section-icon">${getSectionIcon(text)}</span><h2>${formatInline(text)}</h2></div>`
          continue
        }
        if (trimmed.startsWith('### ')) {
          html += `<h3 class="ml-subsection-header">${formatInline(trimmed.slice(4))}</h3>`
          continue
        }

        // Horizontal rule
        if (trimmed === '---') {
          html += '<hr class="ml-divider" />'
          continue
        }

        // Callout blocks (lines starting with >)
        if (trimmed.startsWith('> ')) {
          const calloutContent = trimmed.slice(2)
          const calloutType = getCalloutType(calloutContent)
          html += `<div class="ml-callout ml-callout-${calloutType}">
            <div class="ml-callout-icon">${getCalloutIcon(calloutType)}</div>
            <div class="ml-callout-content">${formatInline(calloutContent)}</div>
          </div>`
          continue
        }

        // List items
        if (trimmed.startsWith('- ')) {
          html += `<div class="ml-list-item">
            <span class="ml-bullet">•</span>
            <span>${formatInline(trimmed.slice(2))}</span>
          </div>`
          continue
        }

        // Numbered list items
        const numMatch = trimmed.match(/^(\d+)\.\s+(.+)/)
        if (numMatch) {
          html += `<div class="ml-numbered-item">
            <span class="ml-number">${numMatch[1]}</span>
            <span>${formatInline(numMatch[2])}</span>
          </div>`
          continue
        }

        // Regular paragraph
        html += `<p class="ml-paragraph">${formatInline(trimmed)}</p>`
      }

      // Flush remaining table
      if (inTable && tableRows.length > 0) {
        html += renderTable(tableHeaders, tableRows)
      }

      return html
    }).join('')
  }

  return (
    <div className="max-w-4xl mx-auto px-10 py-10">
      {/* Topic Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <span className="text-xs font-mono text-purple-500 dark:text-purple-400 mb-2 block tracking-wider uppercase">
            Topic {currentTopicIndex + 1} of {allTopics.length}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-500" />
            {topic.title}
          </h1>
        </div>
        <button
          onClick={onMarkComplete}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm
            ${isCompleted
              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800'
              : 'bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600'
            }
          `}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Completed
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" />
              Mark as Read
            </>
          )}
        </button>
      </div>

      {/* Article Content */}
      <div
        ref={contentRef}
        className="ml-content"
        dangerouslySetInnerHTML={{ __html: renderContent(topic.content) }}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-slate-600">
        {prevTopic ? (
          <button
            onClick={() => onNavigate(prevTopic.slug)}
            className="flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border border-gray-200 dark:border-slate-600"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left">
              <div className="text-xs text-gray-400 dark:text-gray-500">Previous</div>
              <div>{prevTopic.title}</div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <button
            onClick={() => onNavigate(nextTopic.slug)}
            className="flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors border border-purple-200 dark:border-purple-800"
          >
            <div className="text-right">
              <div className="text-xs text-purple-400 dark:text-purple-500">Next</div>
              <div>{nextTopic.title}</div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

// Helper functions

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="ml-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="ml-inline-code">$1</code>')
    .replace(/\$(.+?)\$/g, (_, formula) => {
      try {
        return katex.renderToString(formula, { throwOnError: false, displayMode: false })
      } catch (e) {
        return `<span class="ml-formula-inline">${formula}</span>`
      }
    })
}

function getSectionIcon(text) {
  const lower = text.toLowerCase()
  if (lower.includes('example') || lower.includes('when to')) return '💡'
  if (lower.includes('advantage') || lower.includes('disadvantage')) return '⚖️'
  if (lower.includes('interview') || lower.includes('tip')) return '🎯'
  if (lower.includes('algorithm') || lower.includes('how')) return '⚙️'
  if (lower.includes('metric') || lower.includes('evaluation') || lower.includes('score')) return '📊'
  if (lower.includes('cost') || lower.includes('loss') || lower.includes('error')) return '📉'
  if (lower.includes('curve') || lower.includes('roc') || lower.includes('pr ')) return '📈'
  if (lower.includes('confusion') || lower.includes('matrix')) return '🔢'
  if (lower.includes('precision') || lower.includes('recall') || lower.includes('f1')) return '🎯'
  if (lower.includes('regularization')) return '🔧'
  if (lower.includes('split') || lower.includes('pruning')) return '🌳'
  if (lower.includes('boost') || lower.includes('ensemble') || lower.includes('random forest')) return '🌲'
  if (lower.includes('distance') || lower.includes('cluster')) return '📍'
  if (lower.includes('pca') || lower.includes('dimension')) return '📐'
  if (lower.includes('cross-validation') || lower.includes('tuning')) return '🔄'
  if (lower.includes('feature') || lower.includes('scaling')) return '🛠️'
  if (lower.includes('summary') || lower.includes('which')) return '📋'
  if (lower.includes('threshold')) return '🎚️'
  if (lower.includes('log-loss') || lower.includes('logloss')) return '📝'
  if (lower.includes('kappa') || lower.includes('mcc')) return '✅'
  return '📌'
}

function getCalloutType(content) {
  if (content.includes('💡') || content.toLowerCase().includes('tip') || content.toLowerCase().includes('interview')) return 'tip'
  if (content.includes('⚠️') || content.toLowerCase().includes('common mistake') || content.toLowerCase().includes('pitfall') || content.toLowerCase().includes('never')) return 'warning'
  if (content.includes('🎯') || content.toLowerCase().includes('gold')) return 'gold'
  return 'info'
}

function getCalloutIcon(type) {
  switch (type) {
    case 'tip': return '💡'
    case 'warning': return '⚠️'
    case 'gold': return '🎯'
    default: return 'ℹ️'
  }
}

function renderTable(headers, rows) {
  if (!headers.length || !rows.length) return ''

  // Ensure all rows have the same number of columns as headers
  const colCount = headers.length
  const normalizedRows = rows.map(row => {
    const padded = [...row]
    while (padded.length < colCount) padded.push('')
    return padded.slice(0, colCount)
  })

  return `
    <div class="ml-table-wrapper">
      <table class="ml-table">
        <colgroup>
          ${headers.map(() => '<col />').join('')}
        </colgroup>
        <thead>
          <tr>
            ${headers.map(h => `<th>${formatInline(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${normalizedRows.map(row => `
            <tr>
              ${row.map(cell => `<td>${formatInline(cell)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderCodeBlock(lang, code) {
  const escaped = code
    .replace(/\x26/g, '\x26amp;')
    .replace(/\x3c/g, '\x26lt;')
    .replace(/\x3e/g, '\x26gt;')

  const highlighted = lang === 'python' || lang === 'py'
    ? highlightPython(escaped)
    : escaped

  const langLabel = lang || 'code'

  return `
    <div class="ml-code-block-wrapper">
      <div class="ml-code-block-header">
        <div class="ml-code-block-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="ml-code-block-lang">${langLabel}</span>
      </div>
      <pre class="ml-code-block"><code>${highlighted}</code></pre>
    </div>
  `
}

function highlightPython(code) {
  // Protect HTML tags from being corrupted by subsequent regex passes.
  // We use null-byte-delimited placeholders that won't match any regex.
  const TAG_OPEN = '\x00<'
  const TAG_CLOSE = '\x00>'
  const SPAN_OPEN = '\x00SPO\x00'
  const SPAN_CLOSE = '\x00SPC\x00'

  // 1. Extract ALL existing HTML tags as placeholders
  let result = code.replace(/<span class="([^"]+)">/g, (_, cls) => `${SPAN_OPEN}${cls}${TAG_CLOSE}`)
  result = result.replace(/<\/span>/g, SPAN_CLOSE)

  // 2. Comments: # ... (but not inside strings)
  result = result.replace(/(#.*)$/gm, `${SPAN_OPEN}py-cm${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 3. Triple-quoted strings (""" or ''')
  result = result.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, `${SPAN_OPEN}py-str${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 4. Strings: "...", '...', f"...", r"..."
  result = result.replace(/((?:f|r|b|fr|rf|br|rb)?"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, `${SPAN_OPEN}py-str${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 5. Decorators: @something
  result = result.replace(/(@[\w.]+)/g, `${SPAN_OPEN}py-dec${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 6. Keywords
  const keywords = ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'import', 'from', 'as', 'with', 'try', 'except', 'finally', 'raise', 'pass', 'break', 'continue', 'and', 'or', 'not', 'is', 'None', 'True', 'False', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'del', 'print']
  const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g')
  result = result.replace(kwRegex, `${SPAN_OPEN}py-kw${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 7. Built-in functions (only when followed by parentheses)
  const builtins = ['range', 'len', 'int', 'float', 'str', 'list', 'dict', 'set', 'tuple', 'type', 'isinstance', 'sorted', 'enumerate', 'zip', 'map', 'filter', 'min', 'max', 'sum', 'abs', 'round', 'open', 'input', 'super', 'property']
  const biRegex = new RegExp(`\\b(${builtins.join('|')})\\b(?=\\()`, 'g')
  result = result.replace(biRegex, `${SPAN_OPEN}py-bi${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 8. Function definitions: def name(
  result = result.replace(/\b(def\s+)(\w+)/g, `$1${SPAN_OPEN}py-fn${TAG_CLOSE}$2${SPAN_CLOSE}`)

  // 9. Function calls: name( — only if preceded by non-word char
  result = result.replace(/(?<![.\w\x00])(\w+)(?=\()/g, (match) => {
    if (keywords.includes(match) || builtins.includes(match)) return match
    return `${SPAN_OPEN}py-fn${TAG_CLOSE}${match}${SPAN_CLOSE}`
  })

  // 10. Numbers
  result = result.replace(/\b(\d+\.?\d*)\b/g, `${SPAN_OPEN}py-num${TAG_CLOSE}$1${SPAN_CLOSE}`)

  // 11. Restore all placeholders back to real HTML
  result = result.replace(/\x00SPO\x00([^\x00]+?)\x00>/g, '<span class="$1">')
  result = result.replace(/\x00SPC\x00/g, '</span>')

  return result
}
