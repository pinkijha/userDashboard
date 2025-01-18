import React from 'react';
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <div>
      <div className='flex space-x-2 items-center shadow-md md:p-4 bg-green-50 '>
      <div className='text-green-800 md:text-2xl cursor-pointer'><TiThMenu /></div>
        <div>
        <h1 className='text-green-700 md:text-xl md:space-x-1 cursor-pointer' >
            <span className='text-green-900 md:text-xl md:font-bold'>U</span>ser 
        <span className='text-green-900 md:text-xl md:font-bold'>D</span>ashboard</h1>
        </div>
        
        <div className='flex'>
        <p className='text-lg md:font-semibold md:ml-16'>Welcome
             <span className='text-green-900 md:ml-1 md:text-lg md:font-bold'>Pinki Jha</span></p>
        </div>
      </div>
    </div>
  ) 
}

export default Header
