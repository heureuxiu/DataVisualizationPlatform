import React from "react";
import Header2 from "./Header2"; 

const Login = () => {
  return (
    <>
      {/* Add Header */}
      <Header2 />
      <div className="flex justify-center items-center min-h-screen bg-background1">
        <div className="w-full max-w-sm p-6 bg-background2 shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold text-element1">Login</h2>
          <form className="mt-4">
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
            <button className="bg-secondary text-background2 px-4 py-2 rounded-md hover:text-[#FFFFFF] hover:bg-[#A17561] transition-all">
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4 text-element1">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[#A17561] underline hover:text-[#71BBB2] transition-all"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
