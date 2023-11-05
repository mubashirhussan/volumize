import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import IMAGES from "@/app/images";
import Link from "next/link";
const Treatment = () => {
  return (
    <div className="grid grid-cols-5 primary-container mb-10 mt-16">
      <div className="px-10">
        <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-5">
          <Link href="/pages/treatment">
            <Image
              src={IMAGES.TREATMENT}
              height={70}
              width={40}
              alt="product"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <p className="text-center font-sans font-light text-[#404040]">
          Treatment
        </p>
      </div>
      <div className="px-10 ">
        <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-11"></div>
      </div>
      <div className="px-10 ">
        <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-11"></div>
      </div>
      <div className="px-10 ">
        <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-11"></div>
      </div>
      <div className="px-10 ">
        <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-11"></div>
      </div>
    </div>
  );
};

export default Treatment;
