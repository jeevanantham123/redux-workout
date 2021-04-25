import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Field, Form, Formik } from "formik";
// import { login, logout } from "../store/User/slice";
import { addTodo, deleteTodo, updateTodo } from "../store/Todo/saga";

function ReduxToolKitSample() {
  const [value, setvalue] = useState("");
  const [index, setindex] = useState(null);
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  const { todos } = useSelector((state) => state.todo);
  // console.log(user, todos);
  // if (user) {
  //   return (
  //     <div className="flex flex-col text-black">
  //       Hi, {user.username}!
  //       <button
  //         className="flex self-center justify-center bg-red-500 mt-10 text-xl py-2 shadow-xl w-40  rounded-lg font-semibold focus:outline-none text-white"
  //         onClick={() => dispatch(logout())}
  //       >
  //         Logout
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="font-medium text-black mb-6 text-3xl">
        Todo's using Toolkit!
      </div>
      {/* <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col text-left justify-between h-52 w-full md:w-96">
            <label className="text-black text-lg">UserName</label>
            <Field
              type="text"
              name="username"
              className="border border-black rounded-md text-black text-lg p-2"
            />
            <label className="text-black text-lg mt-4">Password</label>
            <Field
              type="password"
              name="password"
              className="border border-black rounded-md text-black text-lg p-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex self-center justify-center bg-green-500 mt-10 text-xl py-2 shadow-xl w-40  rounded-lg font-semibold focus:outline-none text-white"
            >
              Login
            </button>
          </Form>
        )}
      </Formik> */}
      <div className="flex mt-20 flex-row">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          className="w-60 md:w-100 border rounded-md text-black text-xl px-2 mr-1"
          required
        />
        <div className="flex items-center">
          <button
            className={
              index !== null && index >= 0
                ? "w-20 self-center text-black rounded-lg bg-yellow-200 text-lg py-1 focus:outline-none"
                : "w-20 md:w-28 self-center rounded-lg bg-blue-800 text-lg py-1 focus:outline-none"
            }
            onClick={(e) => {
              e.preventDefault();
              if (value.length > 0 && value.trim() !== "") {
                index !== null && index >= 0
                  ? dispatch(updateTodo(value, index))
                  : dispatch(addTodo(value));
              }
              setvalue("");
              setindex(null);
            }}
          >
            {index !== null && index >= 0 ? "Update" : "Add"}
          </button>
          {index !== null && index >= 0 && (
            <button
              onClick={() => {
                setindex(null);
                setvalue("");
              }}
              className="focus:outline-none border-2 ml-1 border-black rounded-full w-7 flex items-center justify-center h-7 bg-red-500 text-white font-semibold text-base"
            >
              &#10005;
            </button>
          )}
        </div>
      </div>
      <div className="w-full px-4 md:px-0 mt-10">
        {todos?.length ? (
          <ul>
            {todos.map((todo, index) => {
              return (
                <li
                  className="flex justify-between py-2 border-b-2 border-black items-center"
                  key={index}
                >
                  <div
                    className="py-1 text-black text-xl cursor-pointer items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setvalue(todos[index]);
                      setindex(index);
                    }}
                  >
                    {todo}
                  </div>
                  <button
                    className="w-20 md:w-28 self-center rounded-lg bg-red-800 text-lg py-1 focus:outline-none"
                    onClick={(e) => {
                      e.preventDefault();
                      // console.log("val", value);
                      dispatch(deleteTodo(index));
                      setindex(null);
                      setvalue("");
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default ReduxToolKitSample;
