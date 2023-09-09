import Link from "next/link";
import React from "react";
import img from "../../assets/img/4.jpg";
import Image from "next/image";

const ManagingWorks = () => {
  return (
    <div className="custom-container gap-10 flex flex-col-reverse md:flex-row justify-between items-center mt-14 pb-24">
      <div className="w-full lg:w-[50%] flex flex-col items-start ">
        <h2 className="text-5xl font-bold">
          Managing the <span className="text-primary">paperwork</span>{" "}
        </h2>
        <p className=" max-w-md text-gray-500 mt-10 flex flex-col items-start mb-12">
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
        </p>
        <Link
          className="px-8 py-3 border border-primary text-primary font-bold "
          href="/"
        >
          Qualify
        </Link>
      </div>
      <div className="w-full lg:w-[50%]">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};

export default ManagingWorks;
