import React from "react";
import Image from "next/image";
import heroImg from "../public/img1.png";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="bg-[#F4F1EE] ">
        <div className="grid lg:grid-cols-12   primary-container items-center ">
          <div className=" col-span-8 order-2 lg:order-1">
            <h1 className="text-[#003782]  text-[48px] font-black ">
              Revitalize your hair
            </h1>
            <p className="text-[#555555] text-[28px]  font-medium my-4 leading-8">
              We collaborate with men to minimize hair<br></br> thinning and
              promote regrowth.
            </p>
            <div className="mt-24 ">
              <Link href="/pages/questionnaire">
                <button
                  type="button"
                  class="text-white  text-xl bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-light rounded-[8px]  px-16 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get Started
                </button>
              </Link>
              <Link href="/pages/hairLoseTreatment">
                <button
                  type="button"
                  class="px-16 py-3  text-xl font-light text-[#446DE2] focus:outline-none bg-[#F4F1EE] rounded-[8px] border border-[#446DE2] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-5"
                >
                  Buy Product
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-12 col-span-4 order-1 lg:order-2">
            <Image src={heroImg} className="" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
