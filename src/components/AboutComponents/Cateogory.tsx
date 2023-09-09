import { data } from "./data";
import img from "../../assets/img/Cusomized-Care.png";
import Image from "next/image";

const Cateogory = () => {
  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold mt-24">
        Cares That Caters to Every Needs
      </h2>
      <div className="custom-container mt-16 grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center shadow border mx-auto px-5 py-8 bg-white shadow"
            >
              <Image className="w-20 mx-auto mb-6" src={img} alt="" />
              <p className="text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cateogory;
