import { useContext, useState, useEffect } from 'react'
import Task from './Task'
import NoTasks from './NoTasks'
import { AuthContext } from '../context/AuthContext'
import { getTasks } from '../firebase/firestore'

function TaskSection() {
  const { uid } = useContext(AuthContext)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let unsubscribeTasks = null;

    if (uid) {
      unsubscribeTasks = getTasks(uid, (fetchedTasks) => {
        setTasks(fetchedTasks);
      });
    }

    return () => {
      if (unsubscribeTasks) {
        unsubscribeTasks();
      }
    };
  }, [uid])

  return (
    <div className="mt-4 w-[90%] md:w-3/4 flex flex-col items-center gap-y-4 ">
      {tasks.length > 0 ? tasks.map(({ id, task, datetime }) => (<Task key={id} id={id} task={task} datetime={datetime} />)) : <NoTasks />}
    </div>
  )
}

export default TaskSection;