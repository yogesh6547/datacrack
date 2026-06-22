/**
 * Diagram registry — maps topic slugs to React components
 * that render visual diagrams within the article page.
 *
 * To add a diagram for a new topic:
 *   1. Create a component in this directory
 *   2. Import it here and add to the `diagrams` map
 */
import { lazy } from 'react'

// Lazy-load diagram components for code splitting
const DecisionTreeDiagram = lazy(() => import('./DecisionTreeDiagram'))

/**
 * slug → diagram component mapping.
 * Each component receives no props and renders inside the article flow.
 */
const diagrams = {
  'decision-trees': DecisionTreeDiagram,
}

export default diagrams