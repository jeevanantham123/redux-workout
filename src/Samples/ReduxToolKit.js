import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { login, logout } from "../store/User/slice";

function ReduxToolKitSample() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  if (user) {
    return (
      <div className="flex flex-col text-black">
        Hi, {user.username}!
        <button
          className="flex self-center justify-center bg-red-500 mt-10 text-xl py-2 shadow-xl w-40  rounded-lg font-semibold focus:outline-none text-white"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-lg font-medium text-black mb-6">
        Welcome to Toolkit!
      </div>
      <Formik
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
      </Formik>
    </div>
  );
}

export default ReduxToolKitSample;
