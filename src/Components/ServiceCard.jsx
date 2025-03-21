import React from "react";

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div className="bg-white/80 shadow-lg rounded-lg p-5 text-2xl font-semibold">
        Service 1
      </div>
      <div className="bg-white/80 shadow-lg rounded-lg p-5 text-2xl font-semibold">
        Service 2
      </div>
      <div className="bg-white/80 shadow-lg rounded-lg p-5 text-2xl font-semibold">
        Service 3
      </div>
    </div>
  );
};

export default ServiceCards;
