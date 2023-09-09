import React from "react";

const PatientForm = () => {
  return (
    <div className="mt-12">
      <form action="">
        <div className="flex items-center space-x-10 mb-10">
          <input
            className="w-full outline-none border-b border-primary px-5 py-3 placeholder-gray-500 "
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full outline-none border-b border-primary px-5 py-3 placeholder-gray-500 "
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="w-full outline-none border-b border-primary px-5 py-3 placeholder-gray-500 "
          type="text"
          placeholder="Phone"
        />
        <div className="mt-16">
          <input
            className="w-full outline-none border-b border-primary px-5 py-3 placeholder-gray-500 "
            type="text"
            placeholder="Type Your Message"
          />
        </div>
        <div className="mt-16 mb-20">
          <button className="text-white font-bold px-10 py-3 rounded-sm bg-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
