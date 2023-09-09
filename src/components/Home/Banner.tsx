import Image from "next/image";
import styles from "../../styles/home.module.css";
import img from "../../assets/img/Group 2.png";
import Link from "next/link";

const Banner = () => {
  return (
   <div className="gradient">
     <div className="py-24 custom-container flex flex-col-reverse lg:flex-row justify-between items-center px-0">
      <div className="">
        <h2 className="text-5xl">Caring For Your Family</h2>
        <h2 className="text-6xl font-extrabold text-primary">
          Like they &rsquo;re our own
        </h2>
        <p className=" lg:max-w-md text-grray-500 py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed!
        </p>
        <div className="flex items-center space-x-6 mt-6">
          <Link
            href="/contact"
            className="font-medium rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white "
          >
            Request Care
          </Link>
          <button className="px-8 py-3 bg-pink-100">Our give us a call</button>
          <button className="text-purple-700 border-b font-bold border-purple-500">
            929-393-0686
          </button>
        </div>
        <p className="text-gray-500 lg:max-w-lg mt-10 mb-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          obcaecati aliquam tempore libero illo placeat hic doloremque ad
          architecto cupiditate.
        </p>
        <button className="text-sm font-medium text-primary">
          See Service...
        </button>
      </div>
      <div className="flex justify-end ">
        <Image width="600" height="700" src={img} alt="" />
      </div>
    </div>
   </div>
  );
};

export default Banner;
