import Link from "next/link";
import React from "react";

const AllienceHomeCare = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="custom-container flex flex-col lg:flex-row items-center justify-between ">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-5xl font-bold text-primary lg:max-w-md mb-8">
            Why Prottasa Home Care
          </h2>
          <p className="text-gray-600 font-medium lg:max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            excepturi! Sequi recusandae repellendus voluptatibus obcaecati
            libero animi dicta nulla dolor tenetur, tempore, incidunt rerum
            dolorum, quidem excepturi error quam omnis? Quasi odit labore
            blanditiis velit expedita ratione voluptates doloribus magni
            architecto corrupti aut, placeat minus aspernatur quos cum atque
            magnam.
          </p>
        </div>
        <div className=" w-full lg:w-[50%]">
          <p className="text-gray-600 font-medium ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            excepturi! Sequi recusandae repellendus voluptatibus obcaecati
            libero animi dicta nulla dolor tenetur, tempore, incidunt rerum
            dolorum, quidem excepturi error quam omnis? Quasi odit labore
            blanditiis velit expedita ratione voluptates doloribus magni
            architecto corrupti aut, placeat minus aspernatur quos cum atque
            magnam.Sequi recusandae repellendus voluptatibus obcaecati libero
            animi dicta nulla dolor tenetur, tempore, incidunt rerum dolorum,
            quidem excepturi error quam omnis? Quasi odit labore blanditiis
            velit expedita ratione voluptates doloribus magni architecto
            corrupti aut, placeat minus aspernatur quos cum atque magnam.
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <Link
              href="/contact"
              className="font-medium rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white "
            >
              Request Care
            </Link>
            <button className="px-8 py-3 bg-pink-100">
              Our give us a call
            </button>
            <button className="text-purple-700 border-b font-bold border-purple-500">
              929-393-0686
            </button>
          </div>
        </div>
      </div>

      <div className="custom-container mt-20 bg-white shadow   rounded-lg py-12 border-t-4 border-primary">
        <div className="flex items-center justify-between px-10">
          <div className="">
            <h2 className="text-pink-600 uppercase font-bold mb-6">
              Join Our Team
            </h2>
            <h2 className=" uppercase text-3xl font-bold mb-6">
              Calling grates ABA BBR YUU{" "}
            </h2>
            <p className="text-gray-500 max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              nobis sunt, hic molestiae placeat qui!
            </p>
          </div>
          <div className="">
            <Link
              href="/contact"
              className="font-medium rounded-sm bg-pink-700 text-[16px] px-8 py-3 text-white hover:text-white "
            >
              See Cares
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllienceHomeCare;
