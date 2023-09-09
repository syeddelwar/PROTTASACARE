import { centerdata } from "./data";
import img from "../../assets/img/shutterstock_1219249606-1024x683.jpg";
import Image from "next/image";

const CenterCare = () => {
  return (
    <>
      <div className="bg-purple-600 py-24">
        <h2 className="text-5xl text-white font-bold text-center mb-20">
          A Centers Health Care Company
        </h2>

        <div className="grid custom-container mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centerdata.map((item, index) => {
            return (
              <div key={index} className="text-center">
                <h2 className="text-white text-2xl font-bold ">{item.title}</h2>
                <p className="text-gray-200 mt-4">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Image className="w-full h-[40vh] object-cover" src={img} alt="" />
    </>
  );
};

export default CenterCare;
