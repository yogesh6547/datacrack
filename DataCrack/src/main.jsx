import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { ProgressProvider } from './context/ProgressContext'
import 'katex/dist/katex.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/datacrack">
      <ThemeProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)