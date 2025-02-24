import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {

  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'My Title',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    tags: ['small', 'medium', 'big'],
    priority: 'High',
    isFavorite: true
  }

  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if(isAdd){
      setTasks([...tasks, newTask]);
    }else{
      setTasks(
        tasks.map((task) => {
          if(task.id === newTask.id){
            return newTask;
          }
          return task;
        })
      )
    }
    
    setShowAddModal(false);
  }

  const handleEditTask = (task) => {
    setTaskToUpdate(task)
    setShowAddModal(true)
  }

  const handleDeleteTask = (taskId) => {
    const taskListAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskListAfterDelete);
  }

  const handleToggleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id !== taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }

  const handleSearch = (searchText) => {
    const filtered = tasks.filter((task) => task.title.toLowerCase().includes(searchText.toLowerCase()));

    setTasks([...filtered]);
  }

  const handleDeleteAllTask = () => {
    setTasks([]);
  }

  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <section className="bg-black  px-10">
        {showAddModal && <AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} closeAddTaskModal={handleCloseModal} />}
        <SearchTask onSearch={handleSearch} />
        <TaskAction onDeleteAllTask={handleDeleteAllTask} onAddTask={()=> setShowAddModal(true)} />

        {tasks.length > 0 ? (
            <TaskList tasks={tasks} toggleFev={handleToggleFavorite} onEditAddModal={handleEditTask} onDeleteTask={handleDeleteTask} />
        ) : (
          <h1 className="text-white">No Task Found</h1>
        )}

        
    </section>
  );
};

export default TaskBoard;
