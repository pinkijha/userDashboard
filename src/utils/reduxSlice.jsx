// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: "Complete Assignment", description: "Frontend task", status: "In Progress" },
    { id: 2, title: "Review Code", description: "Check PRs", status: "In Progress" },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.status = task.status === "In Progress" ? "Completed" : "In Progress";
      }
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.status = "Completed";
    },
  },
});

export const { toggleTaskStatus, completeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
