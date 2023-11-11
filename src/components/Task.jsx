import { useContext } from 'react'
import { MdDoneOutline } from 'react-icons/md'
import { TaskContext } from '../context/TaskContext'

function Task({ id, task, datetime }) {
    
    const { removeTask } = useContext(TaskContext)

    return (
        <div className="w-[100%] min-h-[3rem] border-2 border-solid rounded-md flex ">
            <p className='min-w-[95%] max-w-[95%] h-[100%] p-2 text-white flex flex-wrap overflow-ellipsis items-center  font-bold'>{`${task} | ${datetime}`}</p>
            <button onClick={() => removeTask(id)} className='text-white max-w-[5%] min-w-[5%] min-h-[100%] bg-green-400 flex-grow flex items-center justify-center border-l-2 border-white rounded-tr-md rounded-br-md'><MdDoneOutline size={20} /></button>
        </div>
    )
}

export default Task