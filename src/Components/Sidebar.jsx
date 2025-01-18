import React from 'react'

const Sidebar = () => {
  return (
    <div className=''>
      <div className='flex flex-col space-y-3 shadow-md
       bg-green-50 md:w-52 md:h-screen md:px-10 md:py-4'>
          <div className=' cursor-pointer'>Dashboard</div>
          <div className=' cursor-pointer'>Task</div>
          <div className=' cursor-pointer'>Profile</div>
      </div>
    </div>
  )
}

export default Sidebar
