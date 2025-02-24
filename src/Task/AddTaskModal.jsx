import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddTaskModal = ({ closeAddTaskModal, onSave, taskToUpdate }) => {

  const [task, setTask] = useState( taskToUpdate || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null))

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    let value = e.target.value;

    if(name === 'tags'){
        value = value.split(",");
    }

    setTask({ 
        ...task,
        [name]: value
    })


  }

  return (
    <>
      <div className="bg-black bg-opacity-90 h-full w-full z-10 absolute top-0 left-0"></div>
      <div className="absolute z-10 top-1/14 left-1/3 w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">{isAdd ? 'Add Task' : 'Edit Task'}</h2>
          <IoMdClose
            onClick={closeAddTaskModal}
            className="hover:cursor-pointer"
          />
        </div>
        {/* <form className="space-y-4"> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter task title"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              rows="3"
              placeholder="Enter task description"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={task.tags}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter tags (comma separated)"
            />
          </div>

          <button onClick={() => onSave(task, isAdd)} className="mt-5 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            {isAdd ? 'Add Task' : 'Update Task'}
          </button>
        {/* </form> */}
      </div>
    </>
  );
};

export default AddTaskModal;
