import { AiFillStar } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SlideSection = () => {
  return (
    <div className="bg-purple-600 py-16">
      <div className="custom-container flex items-center justify-between">
        <div className="">
          <h2 className="text-white text-5xl mb-7 font-bold">Give Care </h2>
          <p className="max-w-md text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            adipisci?
          </p>
        </div>
        <div className="flex space-x-14 items-center">
          <div className="">
            <button className="text-2xl text-white">
              <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
            </button>
          </div>
          <div className="bg-purple-100 rounded-md  py-9 max-w-sm">
            <p className="text-gray-500 font-semibold px-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              ex hic quasi ad laboriosam nostrum quam totam cumque, soluta
              molestias.
            </p>
            <div className="h-[2px] w-full bg-primary mb-6 mt-10"></div>
            <p className="text-italic text-sm px-6">Jone Doe</p>
            <div className="flex items-center space-x-3 px-6 mt-3 mb-3">
              <button className="text-pink-600">
                <AiFillStar></AiFillStar>
              </button>
              <button className="text-pink-600">
                <AiFillStar></AiFillStar>
              </button>
              <button className="text-pink-600">
                <AiFillStar></AiFillStar>
              </button>
              <button className="text-pink-600">
                <AiFillStar></AiFillStar>
              </button>
            </div>
          </div>
          <div className="">
            <button className="text-2xl text-white">
              <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSection;
