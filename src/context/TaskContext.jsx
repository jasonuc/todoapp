import { createContext, useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';

export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          const snapshot = await db.collection('tasks').where('userId', '==', auth.currentUser.uid).get();
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTasks(data);
        } else {
          const localTasks = localStorage.getItem('tasks');
          if (localTasks) {
            setTasks(JSON.parse(localTasks));
          }
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  useEffect(() => {
    const updateData = async () => {
      try {
        if (isAuthenticated) {
          // Use batched writes to update tasks in Firestore
          const batch = db.batch();
          tasks.forEach((task) => {
            const taskRef = db.collection('tasks').doc(task.id);
            batch.set(taskRef, task);
          });
          await batch.commit();
        } else {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      } catch (error) {
        console.error('Error updating tasks:', error);
      }
    };

    updateData();
  }, [isAuthenticated, tasks]);

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const values = {
    tasks,
    setTasks,
    removeTask,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}
