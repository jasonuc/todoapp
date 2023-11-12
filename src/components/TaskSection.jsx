import { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContext'
import NoTasks from './NoTasks'


function TaskSection() {

    const { tasks } = useContext(TaskContext)

  return (
    <div className="mt-4 w-[90%] md:w-3/4 flex flex-col items-center gap-y-4 ">
        {tasks.length > 0 ? tasks.map(({ id, task, datetime }) => (<Task key={id} id={id} task={task} datetime={datetime} />)) : <NoTasks />}
    </div>
  )
}

export default TaskSection