import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(preventDefault);

    const validationError = {};
    if (!formData.name.trim()) {
      validationError.name = "name is required";
    }

    if (!formData.email.trim()) {
      validationError.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationError.password = "password is required";
    } else if (formData.password.length < 6) {
      validationError.password = "password should be at least 6 character";
    }

    if (formData.confirmPassword !== formData.password) {
      validationError.confirmPassword = "password not matched";
    }

    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-full flex justify-center items-center min-h-[100vh]">
          <div className="w-[500px] h-[620px] p-5 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl text-green-500 text-center">Sign Up</h1>
            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Name
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="name"
                type="text"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-600 ml-7">{errors.name}</span>
              )}
            </div>

            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Email
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="email"
                type="email"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-600 ml-7">{errors.email}</span>
              )}
            </div>

            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Password
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="password"
                type="password"
                onChange={handleChange}
              />
              {errors.password && (
                <span className="text-red-600 ml-7">{errors.password}</span>
              )}
            </div>

            <div className="mt-2">
              <label className=" font-semibold text-gray-500 ml-7 mt-5">
                Confirm Password
              </label>
              <input
                className="h-[50px] w-[400px] ml-7 mt-2 p-2 border"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="text-red-600 ml-7">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <button className="px-8 py-3 mt-4 ml-7 text-white bg-green-500 rounded-lg">
              Register new account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
