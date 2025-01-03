import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <header className="bg-[#A17561] text-[#FFFFFF] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DataViz Pro</h1>
        <nav>
          <Link
            to="/"
            className="mr-4 text-[#FFFFFF] hover:text-[#E3D7D1] transition-all"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
