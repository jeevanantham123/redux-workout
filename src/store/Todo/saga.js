import { getTodos, updateTodos, deleteTodos, addTodos } from "./slice";

export const addTodo = (todo) => async (dispatch) => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    // console.log("$", todo);
    dispatch(addTodos(todo));
  } catch (e) {
    return console.error(e.message);
  }
};

export const getTodo = () => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(getTodos());
  } catch (e) {
    return console.error(e.message);
  }
};

export const deleteTodo = (index) => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(deleteTodos(index));
  } catch (e) {
    return console.error(e.message);
  }
};

export const updateTodo = (value, index) => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(updateTodos({ value, index }));
  } catch (e) {
    return console.error(e.message);
  }
};
