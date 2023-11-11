import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import { getDateTime } from "../utilities/GetDateAndTime"
import { makeId } from '../utilities/GenerateId'
import { AiOutlinePlus } from 'react-icons/ai'

function InputDiv() {

  const [ task, setTask ] = useState("")
  const { setTasks } = useContext(TaskContext)

  const handleChange = ({ target }) => {
    setTask({
      id: makeId(),
      text: target.value,
      dateTime: getDateTime()
    })
  }

  const AddTask = () => {
    setTasks(prev => ([
      task,
      ...prev
    ]))
  }

  return (
    <div className='border-b-2 border-solid w-[90%] flex items-center justify-center h-16 gap-x-3 md:gap-x-5'>
        <h2 className=' text-lg md:text-2xl font-bold text-white'>Task: </h2>
        <input onChange={handleChange} type="text" className=' h-[70%] rounded-md border-solid border-white border-2 w-[20rem] max-w-[55rem] flex-grow bg-plighter px-4 placeholder:text-navtext text-white font-bold placeholder:text-base text-xl ' placeholder='Enter Task here...' />
        <button onClick={AddTask} className='bg-secondary text-primary w-28 md:w-24 h-[60%] rounded-md font-bold shadow-md hover:shadow-lg hover:shadow-secondary flex justify-center items-center'><AiOutlinePlus size={30} /></button>
    </div>
  )
}

export default InputDiv