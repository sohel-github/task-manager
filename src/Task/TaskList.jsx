import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const TaskList = ({tasks, onEditAddModal, onDeleteTask, toggleFev}) => {
  return (
    <div className="container mx-auto flex justify-between items-center py-5">
        <table className="table-auto text-white w-full">
            <thead className="text-left px-3">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>
                            <div className='flex items-center'>
                                <div className='mr-2'>
                                    <button onClick={()=> toggleFev(task.id)}>
                                        {task.isFavorite ? <IoMdStar className='text-amber-300' /> : <IoMdStarOutline />}
                                    </button>
                                </div> 
                                <div>{task.title}</div>
                            </div>
                        </td>
                        <td>{task.description}</td>
                        <td>
                            {task.tags.map((tag) => (<span key={tag} className='bg-amber-800 text-white mr-2 py-1 px-3 rounded-full'>{tag}</span>))}
                        </td>
                        <td>{task.priority}</td>
                        <td>
                            <a href="#" onClick={()=> onEditAddModal(task)} className="text-blue-600 mr-3">Edit</a>
                            <a href="#" onClick={()=> onDeleteTask(task.id)} className="text-red-600">delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TaskList