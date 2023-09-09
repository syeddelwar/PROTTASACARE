import Image from "next/image";
import img from "../../assets/img/personal-home-care.jpg";
import img2 from "../../assets/img/Skilled-Home-Care - Copy.jpg";

const WhatWeDo = () => {
  return (
    <div className="custom-container mt-10 mb-20">
      <h2 className="font-bold text-pink-600">WHAT WE DO</h2>
      <h2 className="font-bold text-5xl mt-5 mb-12">
       Prottasa Home care Services
      </h2>
      <div className="grid gid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded relative">
          <Image className="rounded-lg" width="0" height="0" src={img} alt="" />
          <div className="w-full h-full rounded-lg bg-gradient-to-t from-black/60 to-transparent inset-0 absolute flex items-end justify-center">
            <h2 className="text-white font-bold text-sm pb-6">
              Private Duty Nursing Care
            </h2>
          </div>
        </div>

        <div className="rounded relative">
          <Image
            className="rounded-lg w-full h-full"
            width="0"
            height="0"
            src={img2}
            alt=""
          />
          <div className="w-full h-full rounded-lg bg-gradient-to-t from-black/60 to-transparent inset-0 absolute flex items-end justify-center">
            <h2 className="text-white font-bold text-sm pb-6">
              Private Duty Nursing Care
            </h2>
          </div>
        </div>
        <div className="rounded relative">
          <Image className="rounded-lg" width="0" height="0" src={img} alt="" />
          <div className="w-full h-full rounded-lg bg-gradient-to-t from-black/60 to-transparent inset-0 absolute flex items-end justify-center">
            <h2 className="text-white font-bold text-sm pb-6">
              Private Duty Nursing Care
            </h2>
          </div>
        </div>
        <div className="rounded relative">
          <Image
            className="rounded-lg w-full h-full"
            width="0"
            height="0"
            src={img2}
            alt=""
          />
          <div className="w-full h-full rounded-lg bg-gradient-to-t from-black/60 to-transparent inset-0 absolute flex items-end justify-center">
            <h2 className="text-white font-bold text-sm pb-6">
              Private Duty Nursing Care
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
