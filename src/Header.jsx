import React from 'react'

const Header = () => {
  return (
    <nav className='bg-gray-400 px-10'>
        <div className='container mx-auto flex justify-between items-center py-5'>
          <div className='logo'>
            <h3 className='text-white font-bold text-3xl'>Task Manager</h3>
          </div>
          <div className='right'>
            <p className='text-white hover:cursor-pointer hover:text-white-500'>Menu</p>
          </div>
        </div>
    </nav>
  )
}

export default Header