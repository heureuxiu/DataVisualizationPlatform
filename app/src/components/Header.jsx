import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#A17561] text-[#FFFFFF] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DataViz Pro</h1>
        <nav>
          <Link
            to="/login"
            className="mr-4 text-[#FFFFFF] hover:text-[#E3D7D1] transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#71BBB2] text-white px-4 py-2 rounded hover:bg-[#65ADA5] transition-all"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
