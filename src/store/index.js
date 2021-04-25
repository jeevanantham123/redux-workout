import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from "./User/slice";
import todo from "./Todo/slice";
const reducer = combineReducers({
  user,
  todo,
});

const store = configureStore({
  reducer,
});

export default store;
