import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react"
import { TaskContextProvider } from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)