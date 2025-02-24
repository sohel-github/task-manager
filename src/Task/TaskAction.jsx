import React from 'react'

const TaskAction = ({onAddTask, onDeleteAllTask}) => {
  return (
    <div className="container mx-auto flex justify-between items-center py-5">
        <div className="">
            <h1 className="text-white text-3xl">Your Task</h1>
        </div>
        <div className="">
            <button onClick={onAddTask} className="bg-sky-500 hover:bg-sky-700 hover:cursor-pointer px-7 py-3 mr-2 rounded-full text-bold text-white">Add Task</button>
            <button onClick={onDeleteAllTask} className="bg-red-500 hover:bg-red-700 hover:cursor-pointer px-7 py-3 mr-2 rounded-full text-bold text-white">Delete all Task</button>
        </div>
    </div>
  )
}

export default TaskAction