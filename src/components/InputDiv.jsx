import { useContext, useRef, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import { getDateTime } from "../utilities/GetDateAndTime"
import { makeId } from '../utilities/GenerateId'
import { AiOutlinePlus } from 'react-icons/ai'

function InputDiv() {

  const [ task, setTask ] = useState(null)
  const { setTasks } = useContext(TaskContext)
  const taskInputRef = useRef()

  const handleChange = ({ target }) => {
    setTask({
      id: makeId(),
      task: target.value,
      datetime: getDateTime()
    })
  }

  const AddTask = () => {
    if (taskInputRef.current.value) {
      setTasks(prev => ([
        task,
        ...prev
      ]))
      taskInputRef.current.value = ""
      setTask(null)
    } else {
      console.warn("Type in a task before pressing the add button.")
    }
  }

  return (
    <div className=' w-[90%] text-third flex items-center justify-center h-16 gap-x-3 md:gap-x-5:'>
        <h2 className=' text-lg md:text-2xl font-bold'>Task: </h2>
        <input onKeyDown={(event) => {event.key === 'Enter' && AddTask()} } ref={taskInputRef} onChange={handleChange} type="text" className=' h-[70%] rounded-md border-solid border-secondary border-2 w-[20rem] max-w-[55rem] flex-grow bg-secondary px-4 placeholder:text-navtext text-third font-bold placeholder:text-base text-xl' placeholder='Enter Task here...' />
        <button onClick={AddTask} className='bg-secondary text-primary min-w-[3.2rem] h-[80%] font-bold shadow-md hover:shadow-lg hover:shadow-secondary flex justify-center items-center rounded-full'><AiOutlinePlus size={30} /></button>
    </div>
  )
}

export default InputDiv