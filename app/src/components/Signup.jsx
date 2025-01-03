import React from "react";
import Header2 from "./Header2";
const Signup = () => {
  return (
    <>
    <Header2 />
    <div className="flex justify-center items-center min-h-screen bg-background1">
      <div className="w-full max-w-sm p-6 bg-background2 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold text-element1">
          Sign Up
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-element1 text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-element2"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-element1 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-element2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-element1 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-element2"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-element1 text-sm font-medium mb-1"
              htmlFor="confirm-password"
            >
              Retype Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-element2"
              placeholder="Retype your password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-element1 text-sm">
              I accept the terms and conditions
            </label>
          </div>
          <button className="bg-secondary text-background2 px-4 py-2 rounded-md hover:text-[#FFFFFF] hover:bg-[#A17561] transition-all">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-element1">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#A17561] underline hover:text-[#71BBB2] transition-all"
          >
            Login
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
