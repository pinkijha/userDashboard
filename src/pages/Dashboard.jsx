// src/pages/Dashboard.js
import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import TaskCard from "../Components/TaskCard";
import TaskArea from "../Components/TaskArea";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header userName="Pinki" />
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
