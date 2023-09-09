import Image from "next/image";
import img from "../../assets/img/GettyImages-489582797-1--57e4027a3df78c690f366fac.jpg";
import Link from "next/link";

const AmazingCare = () => {
  return (
    <div className="custom-container gap-10 flex flex-col-reverse md:flex-row justify-between items-center mt-14 pb-28">
      <div className="w-full lg:w-[50%] flex flex-col items-start ">
        <h2 className="text-4xl font-bold max-w-md">
          What you need, when you need it and how
        </h2>
        <p className=" max-w-md text-gray-500 mt-10 flex flex-col items-start mb-12">
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
        </p>
        <Link
          className="px-8 py-3 bg-purple-800 text-white font-bold "
          href="/"
        >
          Get Prottasa  Care
        </Link>
      </div>
      <div className="w-full lg:w-[50%]">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};

export default AmazingCare;
