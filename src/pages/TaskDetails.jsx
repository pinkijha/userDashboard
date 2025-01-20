// src/pages/TaskDetails.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === parseInt(id))
  );

  return (
    <div className="md:p-4 p-2">
      {task ? (
        <>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </>
      ) : (
        <p>Task not found!</p>
      )}
    </div>
  );
};

export default TaskDetails;
