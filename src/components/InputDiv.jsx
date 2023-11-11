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
    setTasks(prev => ([
      task,
      ...prev
    ]))
    taskInputRef.current.value = ""
  }

  return (
    <div className=' w-[90%] flex items-center justify-center h-16 gap-x-3 md:gap-x-5:'>
        <h2 className=' text-lg md:text-2xl font-bold'>Task: </h2>
        <input ref={taskInputRef} onChange={handleChange} type="text" className=' h-[70%] rounded-md border-solid border-white border-2 w-[20rem] max-w-[55rem] flex-grow bg-plighter px-4 placeholder:text-navtext text-white font-bold placeholder:text-base text-xl' placeholder='Enter Task here...' />
        <button onClick={AddTask} className='bg-secondary text-primary min-w-[3.2rem] h-[80%] font-bold shadow-md hover:shadow-lg hover:shadow-secondary flex justify-center items-center rounded-full'><AiOutlinePlus size={30} /></button>
    </div>
  )
}

export default InputDiv