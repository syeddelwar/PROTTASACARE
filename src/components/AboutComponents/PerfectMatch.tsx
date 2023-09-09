import Image from "next/image";
import img from "../../assets/img/4-display3.jpg";
import Link from "next/link";

const PerfectMatch = () => {
  return (
    <div className="custom-container gap-10 mt-28 flex flex-col md:flex-row justify-between items-center mt-14 pb-8 lg:pb-24">
      <div className="w-full lg:w-[50%]">
        <Image src={img} alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-start lg:items-center">
        <div className="  ">
          <h2 className="text-4xl font-bold">A perfect match</h2>
          <p className=" lg:max-w-lg text-gray-500 mt-8  ">
            Our customized care plans and support programs are created by
            healthcare professionals and are designed to meet individual needs.
            Our customized care plans and support programs are created by
            healthcare professionals and are designed to meet individual needs.
            support programs are created by healthcare professionals and are
            designed to meet individual needs.
          </p>
          <div className="mt-12">
            <Link
              href="/"
              className=" border border-primary text-primary font-bold px-8 py-3"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;
