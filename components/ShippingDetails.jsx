import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const ShippingDetails = () => {
  return (
    <div className="my-12 primary-container">
      <div className="grid grid-cols-12  gap-6">
        <div className="col-span-4 py-8">
          <Image src={IMAGES.SHIPPINGIMG} alt="ship" />
        </div>
        <div className="col-span-8 py-8">
          <div className="">
            <h3 className="text-[#003782] font-sans font-medium text-[32px] ">
              Where should we send you package?
            </h3>
            <p className="text-[#000000] font-sans font-light text-[14px] py-3">
              Shipping is free for all locations in United Kingdom
            </p>
          </div>
          <div>
            <h2 className="font-sans font-normal text-[26px] py-5">
              Delivery Address
            </h2>
            <div className="py-5">
              <input
                class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
                id="inline-full-name"
                type="text"
                placeholder="Address line 1"
              ></input>
            </div>

            <div>
              <input
                class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
                id="inline-full-name"
                type="text"
                placeholder="Address Line 2 (Optional)"
              ></input>
            </div>
            <div className="py-5">
              <input
                class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
                id="inline-full-name"
                type="text"
                placeholder="Town/City"
              ></input>
            </div>

            <div className="">
              <input
                class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
                id="inline-full-name"
                type="text"
                placeholder="Post Code"
              ></input>
            </div>

            <div className="py-5">
              <input
                class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px] "
                id="inline-full-name"
                type="text"
                placeholder="Phone Number (for delivery updates)"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <Link href="/pages/signup">
          <div className="flex items-center">
            <BiArrowBack className="mr-2" /> back
          </div>
        </Link>
        <Link href="/pages/checkout">
          <button
            className="shadow bg-[#003782] hover:bg-[#0046a5] focus:shadow-outline focus:outline-none text-[#FFFFFF] font-sans font-normal text-center  py-2 px-10 rounded "
            type="button"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShippingDetails;
