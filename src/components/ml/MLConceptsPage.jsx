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

  if (!currentTopic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No topics found.</p>
      </div>
    )
  }

  return (
    <div className="h-full flex min-h-0">
      {/* Roadmap Sidebar */}
      <div className="w-[280px] border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0">
        <RoadmapSidebar
          topics={mlTopics}
          currentSlug={currentTopic.slug}
          completedSlugs={mlCompleted}
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
        />
      </div>
    </div>
  )
}