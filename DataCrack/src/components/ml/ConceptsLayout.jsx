import { useMemo, useEffect, Suspense, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { concepts } from '../../pages/Concepts'
import { useProgress } from '../../context/ProgressContext'
import RoadmapSidebar from './RoadmapSidebar'
import ArticleView from './ArticleView'
import diagrams from './concepts/diagrams'

/**
 * Layout component for the /Concepts/ route.
 *
 * Uses the same RoadmapSidebar + ArticleView pattern as MLConceptsPage,
 * but sources its topic list from the auto-discovered Concepts registry.
 *
 * Route: /Concepts/:topicSlug
 */
export default function ConceptsLayout() {
  const { topicSlug } = useParams()
  const navigate = useNavigate()
  const { conceptCompleted, markConceptCompleted } = useProgress()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const currentTopic = useMemo(() => {
    if (topicSlug) {
      return concepts.find((t) => t.slug === topicSlug)
    }
    return concepts[0] || null
  }, [topicSlug])

  // Redirect to first topic if no slug provided
  useEffect(() => {
    if (concepts.length > 0 && !topicSlug) {
      navigate(`/Concepts/${concepts[0].slug}`, { replace: true })
    }
  }, [])

  // Close mobile sidebar when navigating
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [topicSlug])

  if (!currentTopic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No concept topics found. Add .jsx files to src/pages/Concepts/.</p>
      </div>
    )
  }

  return (
    <div className="h-full flex min-h-0 relative">
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Roadmap Sidebar - desktop: static, mobile: drawer */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          w-[280px] bg-white dark:bg-slate-800
        `}
      >
        <RoadmapSidebar
          topics={concepts}
          currentSlug={currentTopic.slug}
          completedSlugs={conceptCompleted}
          routePrefix="/Concepts"
          onMobileClose={() => setMobileSidebarOpen(false)}
        />
      </div>

      {/* Article Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {/* Inline diagram (if registered for this topic) */}
        {diagrams[currentTopic.slug] && (
          <div className="max-w-4xl mx-auto px-4 lg:px-10 pt-4 lg:pt-10">
            <Suspense fallback={null}>
              {(() => {
                const Diagram = diagrams[currentTopic.slug]
                return <Diagram />
              })()}
            </Suspense>
          </div>
        )}

        <ArticleView
          topic={currentTopic}
          isCompleted={conceptCompleted.has(currentTopic.slug)}
          onMarkComplete={() => markConceptCompleted(currentTopic.slug)}
          allTopics={concepts}
          currentTopicIndex={concepts.findIndex((t) => t.slug === currentTopic.slug)}
          onNavigate={(slug) => navigate(`/Concepts/${slug}`)}
          onMenuClick={() => setMobileSidebarOpen(true)}
        />
      </div>
    </div>
  )
}