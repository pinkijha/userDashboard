import React from 'react';
import { TiThMenu } from "react-icons/ti";

const Header = ({ userName }) => {
    const hour = new Date().getHours();
    const greeting =
    hour < 12 ? "Good Morning🌄" : hour < 18 ? "Good Afternoon☀️" : "Good Evening🌅";
  return (
    <div className=''>
      <div className='flex space-x-2 items-center shadow-md md:p-4 bg-green-50 '>
     
        
        <div className='flex space-x-3'>
             <p className='text-green-500 md:text-xl '>{greeting} {userName}</p>
        </div>
        
      <div>
        <button> Dark Theme</button>
      </div>
      </div>
      
    </div>
  ) 
}

export default Header
