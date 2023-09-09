import { data } from "./data";
import img from "../../assets/img/1.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbBuildingHospital } from "react-icons/tb";

const BannerBottomCard = () => {
  return (
    <div className="custom-container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-20">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white border shadow rounded-sm text-center px-6 py-10"
          >
            {/* <Image className="mx-auto" src={img} alt="" /> */}
            <button className="text-3xl text-purple-700">
              <TbBuildingHospital></TbBuildingHospital>
            </button>
            <h2 className="text-2xl font-bold py-5">{item.title}</h2>
            <p className=" mb-8 text-gray-500">{item.description}</p>
            <Link
              href="/"
              className="flex items-center space-x-3 justify-center"
            >
              <button className="font-bold">{item.btn}</button>
              <button className="text-xl text-purple-700">
                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BannerBottomCard;
