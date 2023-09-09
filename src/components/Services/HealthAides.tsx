import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../assets/img/Home-Health-Aides.jpg";
import { PiDotOutlineBold } from "react-icons/pi";

const HealthAides = () => {
  return (
    <div className="custom-container  gap-5 lg:gap-14 flex flex-col-reverse md:flex-row justify-between  mt-14 mb-24 items-stretch">
      <div className="w-full lg:w-[55%]">
        <Image className="w-full h-full" src={img} alt="" />
      </div>
      <div className="w-full lg:w-[45%] ">
        <h2 className="text-5xl font-bold">Home Health Aides</h2>
        <p className=" text-gray-500 mt-10 flex flex-col items-start mb-3">
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
        </p>
        <ul className="mb-5 flex flex-col ">
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Bathing & Grooming</p>
          </li>
          <li className="flex items-center space-x-2">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Light Housekeeping & Laundry</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Meal Preparation & Feeding</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Bathing & Grooming</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Mobility & Toileting</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Medication Reminders</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>End of Life/Palliative Care</p>
          </li>
          <li className="flex space-x-2 items-center">
            <button className="text-primary text-2xl">
              <PiDotOutlineBold></PiDotOutlineBold>
            </button>
            <p>Home Exercise Program</p>
          </li>
        </ul>
        <div className=" mt-10">
          <Link
            className="px-8 py-3 text-sm text-primary border border-primary font-bold "
            href="/"
          >
            Discover Amazing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthAides;
