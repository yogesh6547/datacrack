import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden">
      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - desktop: fixed, mobile: drawer */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onMobileClose={() => setMobileSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col transition-all duration-300 min-w-0"
        style={{ marginLeft: 0 }}
      >
        <TopBar onMenuClick={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}