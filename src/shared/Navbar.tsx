import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import logo from "../assets/img/2.jpg";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSetTop, setIsSetTop] = useState(false);

  const changeNavbarBg = () => {
    if (window.scrollY >= 1000) {
      setIsSetTop(true);
    } else {
      setIsSetTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  useEffect(() => {
    // console.log("isSetTop:", isSetTop);
  }, [isSetTop]);

  return (
    <div className="relative">
      <div className="bg-white">
        <div
          className={` ${
            isSetTop
              ? "bg-white border-b shadow z-20 fixed left-0 right-0 duration-500"
              : "border-b"
          }`}
        >
          <nav
            className={`z-10 py-5 flex justify-between items-center custom-container `}
          >
            <Link href="/" className="flex flex-col justify-center">
              {/* <Image width={50}  src={img2} alt="" />
           <Image width={180}  src={img1} alt="" /> */}
              <h2 className=" text-xl font-bold">Prottasa</h2>
              <p className="text-sm font-bold text-purple-800">Home care</p>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden  lg:flex  lg:items-center lg:space-x-9">
                <Link
                  href="/"
                  className={` text-[17px] ${
                    router.pathname === "/"
                      ? "text-purple-950 font-semibold border-b border-purple-800"
                      : "text-gray-800"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className={` text-[17px] ${
                    router.pathname === "/About"
                      ? "text-purple-950 font-semibold border-b border-purple-800"
                      : "text-gray-800"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/service"
                  className={` text-[17px] ${
                    router.pathname === "/service"
                      ? "text-purple-950 font-semibold border-b border-purple-800"
                      : "text-gray-800"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={` text-[17px] ${
                    router.pathname === "/eligibility"
                      ? "text-purple-950 font-semibold border-b border-purple-800"
                      : "text-gray-800"
                  }`}
                >
                  Contact
                </Link>
              </div>

              <div className="hidden lg:flex space-x-7 items-center">
                <div className="h-10 w-[2px] bg-purple-600 text-primary ml-5"></div>
                <button className="text-purple-700 border-b font-bold border-purple-500">
                  929-393-0686
                </button>
                <button
                  onClick={() => setShowSidebar(true)}
                  className="font-medium rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white "
                >
                  Request Care
                </button>
                <Link
                  href="/contact"
                  className="font-medium bg-pink-600 rounded-sm text-[16px] px-8 py-3 text-white hover:text-white "
                >
                  Cares
                </Link>
              </div>
            </div>

            <div className="lg:hidden ">
              <div className="">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="drawer-button flex items-end text-black text-3xl text-black-600 p-3"
                >
                  <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* // for mobile */}

        {isMenuOpen && (
          <div className=" navbar-menu relative z-50 xl:hidden">
            <div className=" fixed inset-0  "></div>
            <nav className="fixed top-0 bg-purple-200 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6  border-r overflow-y-auto shadow">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex flex-col justify-center">
                  <h2 className=" text-xl font-bold">Prottasa</h2>
                  <p className="text-sm font-bold text-purple-800">Home care</p>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="navbar-close"
                >
                  <svg
                    className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                {/* ..........menu item ........ */}

                <div className="text-center flex flex-col justify-center mx-auto space-y-6">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <Link
                        href="/"
                        className={` text-[17px] ${
                          router.pathname === "/"
                            ? "text-purple-950 font-semibold border-b border-purple-800"
                            : "text-gray-800"
                        }`}
                      >
                        Home
                      </Link>
                      <Link
                        href="/About"
                        className={` text-[17px] ${
                          router.pathname === "/About"
                            ? "text-purple-950 font-semibold border-b border-purple-800"
                            : "text-gray-800"
                        }`}
                      >
                        About
                      </Link>
                      <Link
                        href="/service"
                        className={` text-[17px] ${
                          router.pathname === "/service"
                            ? "text-purple-950 font-semibold border-b border-purple-800"
                            : "text-gray-800"
                        }`}
                      >
                        Services
                      </Link>
                      <Link
                        href="/eligibility"
                        className={` text-[17px] ${
                          router.pathname === "/eligibility"
                            ? "text-purple-950 font-semibold border-b border-purple-800"
                            : "text-gray-800"
                        }`}
                      >
                        Contact
                      </Link>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-4">
                      <button className="text-purple-700 border-b font-bold border-purple-500">
                        929-393-0686
                      </button>

                      {/* .......drawer......... */}
                      {/* <button
                        htmlFor="my-drawer"
                        className="font-medium rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white "
                      >
                        Request Care
                      </button> */}

                      <div className="drawer">
                        <input
                          id="my-drawer"
                          type="checkbox"
                          className="drawer-toggle"
                        />
                        <div className="drawer-content">
                          {/* Page content here */}
                          <label
                            htmlFor="my-drawer"
                            className=" drawer-button font-medium rounded-sm bg-purple-700 text-[16px] px-8 py-3 text-white hover:text-white"
                          >
                            Request Care
                          </label>
                        </div>
                        <div className="drawer-side">
                          <label
                            htmlFor="my-drawer"
                            className="drawer-overlay"
                          ></label>
                          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li>
                              <a>Sidebar Item 1</a>
                            </li>
                            <li>
                              <a>Sidebar Item 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="font-medium bg-pink-600 rounded-sm text-[16px] px-8 py-3 text-white hover:text-white "
                      >
                        Cares
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto"></div>
            </nav>
          </div>
        )}
      </div>

      {showSidebar && (
        <div className="absolute top-0 right-0 bg-white py-14 px-10 shadow-lg border fixed">
          <div className="flex justify-end">
            <div className=" px-3 py-1 cursor-pointer border border-primary inline-block">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-2xl text-primary"
              >
                x
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-5 mt-5">Request Care</h2>
          <div className="form">
            <div className="flex space-x-8 items-center">
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="First Name"
                type="text"
              />
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="mt-5">
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="Zip Code"
                type="text"
              />
            </div>
            <div className="mt-5">
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="Select Service"
                type="text"
              />
            </div>
            <div className="mt-5">
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-5">
              <input
                className="border w-full border-primary outline-none px-5 py-3 rounded-md placeholder-gray-500"
                placeholder="Phone"
                type="text"
              />
            </div>
            <div className="mt-5">
              <input
                className="border w-full border-primary outline-none px-5 pt-16 pb-3 rounded-md placeholder-gray-500"
                placeholder="Additional Information"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 my-6">
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
          <hr />
          <p className="text-gray-500 text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            accusantium quia non rerum qui nihil?
          </p>
          <div className="mt-5  bg-white shadow  rounded-lg py-8 border-t-4 border-primary">
            <div className="flex items-center justify-between px-10">
              <div className="">
                <h2 className="text-pink-600 uppercase font-bold mb-6">
                  Join Our Team
                </h2>
                <h2 className=" uppercase text-xl max-w-xs font-bold mb-6">
                  Calling grates ABA BBR YUU{" "}
                </h2>
                <p className="text-gray-500 max-w-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus nobis sunt,
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
      )}
    </div>
  );
};

export default Navbar;
