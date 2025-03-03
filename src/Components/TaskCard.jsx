// src/components/TaskCard.js
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { toggleTaskStatus } from "../utils/reduxSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  // React DnD's useDrag hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK", // Must match the "accept" type in useDrop
    item: { id: task.id }, // Data passed to the drop target
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Tracks drag state
    }),
  }));

  return (
    <div
      ref={drag} // Attach the drag ref to make this element draggable
      className={` md:p-4 p-3 md:w-full w-28 md:m-0 mx-12 my-4 border rounded shadow hover:shadow-lg ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="">
      <h2 className="font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button
        onClick={() => dispatch(toggleTaskStatus(task.id))}
        className="p-2 md:mt-2 mt-2 bg-blue-500 text-white md:px-4 md:py-2 rounded"
      >
        Status
      </button>
      </div>
    </div>
  );
};

export default TaskCard;
