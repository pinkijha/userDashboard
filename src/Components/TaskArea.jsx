import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { completeTask } from "../utils/reduxSlice";

const TaskArea = () => {
  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: "TASK", // Matches the "type" in useDrag
    drop: (item) => {
      dispatch(completeTask(item.id)); // Update task status on drop
    },
  }));

  return (
    <div
      ref={drop}
      className="md:w-full h-20 md:h-40 border-dashed border-2 border-gray-400 flex items-center justify-center"
    >
      Drag tasks here to mark as Completed
    </div>
  );
};

export default TaskArea;
