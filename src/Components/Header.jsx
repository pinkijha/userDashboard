// src/Components/Header.js
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ userName, onToggleTheme }) => {  

  
    const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access theme state
    const dispatch = useDispatch();
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const date = now.toLocaleDateString();
  const time = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  const greeting = hour < 12 ? "Good Morning🌄" : hour < 18 ? "Good Afternoon☀️" : "Good Evening🌅";

  return (

    <div className="flex justify-between items-center p-4 bg-green-50 shadow-md">
      <p className="text-green-500 text-lg">
        {greeting} {userName} - {date}, {time}
      </p>
      <button
        onClick={onToggleTheme}
        className="bg-black text-white md:px-4 md:py-2 p-1 rounded hover:bg-gray-700"
      >
       {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Header;
