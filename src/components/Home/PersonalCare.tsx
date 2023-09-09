import Image from "next/image";
import img from "../../assets/img/Rectangle 7 (1).png";

const PersonalCare = () => {
  return (
    <div className="custom-container flex flex-col md:flex-row justify-between items-center mt-14 pb-8 lg:pb-24">
      <div className="w-full lg:w-[50%]  ">
        <h2 className="text-6xl font-bold">Personal Care</h2>
        <div className="w-[30%] mt-4 h-[6px] bg-primary"></div>
        <p className="  text-gray-500 mt-7 ">
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          professionals and are designed to meet individual needs. Our
          customized care plans and support programs are created by healthcare
          professionals and are designed to.
        </p>
        <p className="  text-gray-500 mt-8 ">
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          Our customized care plans and support programs are created by
          healthcare professionals and are designed to meet individual needs.
          professionals and are designed to meet individual needs. Our
          customized care plans and support programs are created by healthcare
          professionals and are designed to.
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex lg:justify-end ">
        <Image
          width={500}
          height={500}
          className="rounded-full border-2 border-primary"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default PersonalCare;
