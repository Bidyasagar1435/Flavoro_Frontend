import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  return (
    <div>
      <div className="w-full h-full flex justify-center items-center min-h-[100vh]">
        <div className="w-[500px] h-[500px] bg-white p-5 shadow-lg">
          <h1 className="text-3xl font-semibold text-green-400 text-center">
            Login
          </h1>
          <span className="text-gray-500 ml-36 mt-5">
            Please Enter Your Detail
          </span>
          <form>
            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Email
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="email"
                type="email"
              />
            </div>
            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Password
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="password"
                type="password"
              />
            </div>
            <div className="mt-2 flex justify-between items-center pl-7 pr-8">
              <label className="text-gray-500 cursor-pointer">
                <input type="checkbox" />
                Remember Me
              </label>
              <span className="text-blue-700 cursor-pointer hover:text-underline-offset:1 forgot">
                Forgot Password
              </span>
            </div>
            <button className="px-12 py-2 bg-green-500 text-white rounded-lg mt-5 ml-36 mb-3">
              Submit
            </button>
            <p className="text-gray-500 text-sm ml-40 mt-5">
              New Here?
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-500 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
