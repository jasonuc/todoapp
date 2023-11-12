import { createContext, useEffect, useState } from 'react'
import { db } from '../firebase/firebase'

export const TaskContext = createContext(null)

export function TaskContextProvider({ children }) {
  
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const removeTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const values = {
    tasks,
    setTasks,
    removeTask
  }

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  )
}