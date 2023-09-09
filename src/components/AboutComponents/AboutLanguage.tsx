import Image from "next/image";
import React from "react";
import img from "../../assets/img/avoiding-caregiver-burnout.jpg";

const AboutLanguage = () => {
  return (
    <div className="custom-container gap-10 mt-10 flex flex-col md:flex-row justify-between items-center mt-14 pb-8 lg:pb-24">
      <div className="w-full lg:w-[50%]">
        <Image src={img} alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-start lg:items-center">
        <div className="  ">
          <h2 className="text-4xl font-bold">
            Caregivers that speak your language
          </h2>
          <p className=" lg:max-w-lg text-gray-500 mt-8 mb-5 ">
            Our customized care plans and support programs are created by
            healthcare professionals and are designed to meet individual needs.
            Our customized care plans.
          </p>
          <div className="grid grid-cols-2 gap-y-3">
            <p>English</p>
            <p>Spanish</p>
            <p>Chinese</p>
            <p>English</p>
            <p>Spanish</p>
            <p>Chinese</p>
            <p>English</p>
            <p>Spanish</p>
            <p>Chinese</p>
            <p>Spanish</p>
            <p>Chinese</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanguage;
