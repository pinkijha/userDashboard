import React from 'react'

const Sidebar = () => {
  return (
    <div className=''>
      <div className='flex flex-col shadow-md 
       bg-green-50 md:w-52 md:h-screen md:px-10 md:py-4'>
          <div className='hover:bg-green-100 hover:scale-110 duration-200 p-3 rounded-lg cursor-pointer'>Dashboard</div>
          <div className='hover:bg-green-100 hover:scale-110  scale-105 duration-200 p-3 rounded-lg  cursor-pointer'>Task</div>
          <div className='hover:bg-green-100 hover:scale-110  scale-105 duration-200 p-3 rounded-lg  cursor-pointer'>Profile</div>
      </div>
    </div>
  )
}

export default Sidebar
