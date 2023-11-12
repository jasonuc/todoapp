import { useContext } from 'react'
import { MdDoneOutline } from 'react-icons/md'
import { TaskContext } from '../context/TaskContext'

function Task({ id, task, datetime }) {
    
    const { removeTask } = useContext(TaskContext)

    return (
        <div className="w-[100%] min-h-[3rem] border-2 border-solid rounded-md flex ">
            <p className=' w-[90%] md:w-[95%] min-h-full p-2 text-white flex flex-wrap overflow-ellipsis items-center font-bold border-r-2 md:border-none rounded-tr-md rounded-br-md'>{`${task} | ${datetime}`}</p>
            <button onClick={() => removeTask(id)} className='text-white w-[10%] md:w-[5%] min-h-[100%] bg-green-400 flex-grow flex items-center md:border-l-2 md:rounded-tl-md md:rounded-bl-md justify-center rounded-tr-md rounded-br-md'><MdDoneOutline size={20} /></button>
        </div>
    )
}

export default Task