import Image from "next/image";
import img from "../../assets/img/Group 1 (2).png";

const FlexibleCare = () => {
  return (
    <div className="custom-container ">
      {/* .... tab section........ */}
      <h2 className="font-bold text-5xl text-center mb-12 mt-4">
        Our <span className="text-primary">Caring </span>For You
      </h2>
      <div className="flex justify-center items-center space-x-6 mb-12">
        <button className="font-semibold rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white ">
          Personal Care
        </button>
        <button className="font-semibold rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white ">
          Flexible Care
        </button>
        <button className="font-semibold rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white ">
          Instance Care
        </button>
        <button className="font-semibold rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white ">
          Inclusive Care
        </button>
      </div>
      <div className="gap-10 flex flex-col-reverse md:flex-row justify-between items-center mt-20 pb-8 lg:pb-24">
        <div className="w-full lg:w-[50%] flex flex-col items-start ">
          <h2 className="text-6xl font-bold">Inclusive Care</h2>
          <p className=" text-gray-500 mt-8 flex flex-col items-start">
            Our customized care plans and support programs are created by
            healthcare professionals and are designed to meet individual needs.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlexibleCare;
