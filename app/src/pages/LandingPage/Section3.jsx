import React, { useState } from 'react';

const Section3 = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  return (
    <section className="py-20 bg-[#E3D7D1]">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#A17561]">Choose Your Plan</h3>
        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center mt-6">
          <button
            className={`px-4 py-2 font-medium text-sm rounded-l ${
              billingCycle === 'Monthly' ? 'bg-[#71BBB2] text-white' : 'bg-white text-[#A17561]'
            }`}
            onClick={() => setBillingCycle('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm rounded-r ${
              billingCycle === 'Yearly' ? 'bg-[#71BBB2] text-white' : 'bg-white text-[#A17561]'
            }`}
            onClick={() => setBillingCycle('Yearly')}
          >
            Yearly <span className="text-xs">(Save 20%)</span>
          </button>
        </div>
        <p className="mt-2 text-sm text-[#A17561]">Best Plans For Office Management</p>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-around mt-10 space-y-8 md:space-y-0 md:space-x-6">
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg border border-[#A17561]">
            <h4 className="text-lg font-bold text-[#71BBB2]">Basic</h4>
            <p className="text-4xl font-bold text-[#A17561] mt-2">£7</p>
            <p className="text-sm text-[#A17561]">User/Month</p>
            <ul className="mt-4 text-left text-[#A17561] space-y-2">
              <li>✔ 5 Dashboards</li>
              <li>✔ 1,000 Data Points</li>
              <li>✔ Basic Visualizations</li>
              <li>✔ Email Support</li>
            </ul>
            <button className="mt-6 bg-[#71BBB2] text-white px-6 py-2 rounded hover:bg-[#A17561] transition-all">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="w-full md:w-1/3 bg-[#71BBB2] text-white p-6 shadow-lg rounded-lg border border-[#A17561]">
            <h4 className="text-lg font-bold">Pro</h4>
            <p className="text-4xl font-bold mt-2">£29.99</p>
            <p className="text-sm">User/Month</p>
            <ul className="mt-4 text-left space-y-2">
              <li>✔ Unlimited Dashboards</li>
              <li>✔ 100,000 Data Points</li>
              <li>✔ Advanced Visualizations</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="mt-6 bg-white text-[#71BBB2] px-6 py-2 rounded hover:bg-[#A17561] hover:text-white transition-all">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg border border-[#A17561]">
            <h4 className="text-lg font-bold text-[#71BBB2]">Enterprise</h4>
            <p className="text-4xl font-bold text-[#A17561] mt-2">Custom</p>
            <p className="text-sm text-[#A17561]">User/Month</p>
            <ul className="mt-4 text-left text-[#A17561] space-y-2">
              <li>✔ Unlimited Everything</li>
              <li>✔ Dedicated Account Manager</li>
              <li>✔ Custom Integrations</li>
              <li>✔ On-premise Deployment Option</li>
            </ul>
            <button className="mt-6 bg-[#71BBB2] text-white px-6 py-2 rounded hover:bg-[#A17561] transition-all">
              Choose Plan
            </button>
          </div>
        </div>

        <button className="mt-10 text-[#71BBB2] text-sm underline">
          Show Detailed Plan Comparison
        </button>
      </div>
    </section>
  );
};

export default Section3;
