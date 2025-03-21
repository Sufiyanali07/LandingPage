import React from "react";

const PricingTable = () => {
  return (
    <div className="p-6">
      <h2 className=" font-serif text-5xl font-bold text-center text-white">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-4 border rounded-lg shadow-md bg-white/80">
          <h3 className="text-xl font-semibold">Basic Plan</h3>
          <p className="text-gray-600">$10/month</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white/80">
          <h3 className="text-xl font-semibold">Pro Plan</h3>
          <p className="text-gray-600">$20/month</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white/80">
          <h3 className="text-xl font-semibold">Enterprise Plan</h3>
          <p className="text-gray-600">$50/month</p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
