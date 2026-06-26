/**
 * Concepts barrel — automatic file-based registry.
 *
 * Every .jsx file in this directory that exports a default topic config
 * object with { slug, title, order, content } is automatically discovered
 * and added to the concepts list and lookup map.
 *
 * To add a new concept page:
 *   1. Create a new .jsx file here (e.g., LinearRegression.jsx)
 *   2. Export a default object: { slug, title, order, content }
 *   3. Done — it appears in the sidebar and route automatically.
 */

// eager: true so the modules are available synchronously
const conceptFiles = import.meta.glob('./*.jsx', { eager: true })

/**
 * Sorted array of all concept topic configs.
 * Each entry: { slug, title, order, content }
 */
export const concepts = Object.values(conceptFiles)
  .map((mod) => mod.default)
  .filter(Boolean)
  .sort((a, b) => a.order - b.order)

/**
 * Quick lookup map: slug → topic config.
 */
export const conceptsMap = Object.fromEntries(
  concepts.map((topic) => [topic.slug, topic])
)

/**
 * Total count — used by ProgressContext for the sidebar progress bar.
 */
export const totalConcepts = concepts.length