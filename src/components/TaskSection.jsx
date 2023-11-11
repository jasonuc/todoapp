import { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContext'


function TaskSection() {

    const { tasks } = useContext(TaskContext)

  return (
    <div className="mt-4 w-[90%] md:w-3/4 flex flex-col items-center gap-y-4 ">
        {tasks.map(({ id, text, dateTime }) => (<Task key={id} text={text} dateTime={dateTime} id={id} />))}
    </div>
  )
}

export default TaskSection