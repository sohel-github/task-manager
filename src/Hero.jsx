import React from 'react'
import taskImage from '/images/task.jpg'

const Hero = () => {
  return (
    <section className='bg-black  px-10'>
        <div className='container mx-auto flex justify-between items-center py-20'>
          <div className='logo'>
            <h3 className='text-white font-bold text-8xl'>Tasker</h3>
            <p className='text-white w-150 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum facilisis tempor. Nunc eget gravida augue. Sed nisi dolor, varius eu sem vel, rhoncus egestas tortor.</p>
          </div>
          <div className='right'>
            <img src={taskImage} alt='Task Image' className='h-80 rounded-2xl' />
          </div>
        </div>
    </section>
  )
}

export default Hero