import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access theme state
  const dispatch = useDispatch();
  return (
    <div className=''>
      <div className={`${isDarkMode ? 'md:flex flex-col hidden shadow-md md:w-52 md:h-screen md:px-10 md:py-4 bg-gray-500 text-white' : 'hidden md:flex flex-col shadow-md bg-green-50 md:w-52 md:h-screen md:px-10 md:py-4'}`}>
          <div className='hover:bg-green-100 hover:scale-110 duration-200 p-3 rounded-lg cursor-pointer'>Dashboard</div>
          <div className='hover:bg-green-100 hover:scale-110  scale-105 duration-200 p-3 rounded-lg  cursor-pointer'>Task</div>
          <div className='hover:bg-green-100 hover:scale-110  scale-105 duration-200 p-3 rounded-lg  cursor-pointer'>Profile</div>
      </div>
    </div>
  )
}

export default Sidebar
