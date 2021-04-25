import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

const slice = createSlice({
  name: "todo",
  initialState: {
    todos: initialState,
  },
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
    updateTodos: (state, action) => {
      const { index, value } = action.payload;
      state.todos[index] = value;
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    deleteTodos: (state, action) => {
      const tempState = state.todos.filter((todo, index) => {
        return index !== action.payload;
      });
      state.todos = tempState;
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export const { getTodos, updateTodos, deleteTodos, addTodos } = slice.actions;

export default slice.reducer;
