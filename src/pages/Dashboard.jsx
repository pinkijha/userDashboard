// src/pages/Dashboard.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../utils/reduxSlice";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import TaskCard from "../Components/TaskCard";
import TaskArea from "../Components/TaskArea";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access theme state
  const dispatch = useDispatch();

  return (
    <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} flex min-h-screen`}>
      <Sidebar  />
      <div className="flex-1 p-4">
        {/* Pass theme toggle handler to Header */}
        <Header userName="Pinki" onToggleTheme={() => dispatch(toggleTheme())} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <TaskArea />
      </div>
    </div>
  );
};

export default Dashboard;
