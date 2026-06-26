import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mlTopics } from '../../data/mlConcepts'
import { useProgress } from '../../context/ProgressContext'
import RoadmapSidebar from './RoadmapSidebar'
import ArticleView from './ArticleView'

export default function MLConceptsPage() {
  const { topicSlug } = useParams()
  const navigate = useNavigate()
  const { mlCompleted, markMLCompleted } = useProgress()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const currentTopic = useMemo(() => {
    if (topicSlug) {
      return mlTopics.find(t => t.slug === topicSlug)
    }
    return mlTopics[0]
  }, [topicSlug])

  useEffect(() => {
    if (mlTopics.length > 0 && !topicSlug) {
      navigate(`/ml/${mlTopics[0].slug}`, { replace: true })
    }
  }, [])

  // Close mobile sidebar when navigating
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [topicSlug])

  if (!currentTopic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No topics found.</p>
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
          topics={mlTopics}
          currentSlug={currentTopic.slug}
          completedSlugs={mlCompleted}
          onMobileClose={() => setMobileSidebarOpen(false)}
        />
      </div>

      {/* Article Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <ArticleView
          topic={currentTopic}
          isCompleted={mlCompleted.has(currentTopic.slug)}
          onMarkComplete={() => markMLCompleted(currentTopic.slug)}
          allTopics={mlTopics}
          currentTopicIndex={mlTopics.findIndex(t => t.slug === currentTopic.slug)}
          onNavigate={(slug) => navigate(`/ml/${slug}`)}
          onMenuClick={() => setMobileSidebarOpen(true)}
        />
      </div>
    </div>
  )
}