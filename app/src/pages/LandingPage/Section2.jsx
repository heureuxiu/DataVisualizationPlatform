import React from 'react';
import { FaChartBar, FaCogs, FaUsers } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="text-center py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Why Choose DataViz Pro?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Easy to Use */}
        <div className="flex flex-col items-center">
          <FaChartBar className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-gray-600 text-sm">Intuitive interface for quick data visualization</p>
        </div>

        {/* Powerful Analytics */}
        <div className="flex flex-col items-center">
          <FaCogs className="text-green-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Powerful Analytics</h3>
          <p className="text-gray-600 text-sm">Advanced tools for deep data analysis</p>
        </div>

        {/* Real-time Collaboration */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-purple-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
          <p className="text-gray-600 text-sm">Work together with your team in real-time</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
