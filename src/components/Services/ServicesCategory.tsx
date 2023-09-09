import React from "react";
import { data } from "./category";
import { FaBath } from "react-icons/fa";

const ServicesCategory = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl text-center font-bold mt-24 mb-20">
        Types of support our caregivers provide
      </h2>
      <div className="grid custom-container grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex items-center space-x-5">
              <button className="text-4xl text-primary">
                <FaBath></FaBath>
              </button>
              <p className="font-semibold text-gray-600">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCategory;
