import './App.css'

import taskImage from '/images/task.jpg'

function App() {
  console.log(taskImage);
  return (
    <>
      <nav className='bg-gray-400'>
        <div className='md:container md:mx-auto flex justify-between items-center py-5'>
          <div className='logo'>
            <h3 className='text-white font-bold text-3xl'>Task Manager</h3>
          </div>
          <div className='right'>
            <p className='text-white hover:cursor-pointer hover:text-white-500'>Menu</p>
          </div>
        </div>
      </nav>

      <section className='bg-black'>
        <div className='md:container md:mx-auto flex justify-between items-center py-20'>
          <div className='logo'>
            <h3 className='text-white font-bold text-8xl'>Tasker</h3>
            <p className='text-white w-150 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum facilisis tempor. Nunc eget gravida augue. Sed nisi dolor, varius eu sem vel, rhoncus egestas tortor.</p>
          </div>
          <div className='right'>
            <img src={taskImage} alt='Task Image' className='h-80 rounded-2xl' />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
