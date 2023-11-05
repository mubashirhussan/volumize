import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const CheckoutDetails = () => {
  return (
    <div className="my-10 primary-container">
      <div className="">
        <h3 className="text-[#003782] font-sans font-medium text-[32px] ">
          Payment detail
        </h3>
        <p className="text-[#000000] font-sans font-light text-[14px] py-3">
          Shipping is free for all locations in United Kingdom
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 my-6">
        <div className="col-span-6">
          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Credit Card Number*
            </label>
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="text"
              placeholder="1234 5678 9012 3456"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Expiry Date*
            </label>
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="date"
              placeholder="Address Line 2 (Optional)"
            ></input>
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              CVC Number*
            </label>
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="text"
              placeholder="cvc"
            ></input>
          </div>
        </div>
        <div className=" col-span-6 self-center">
          <div className="mb-4 ">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="font-sans font-light text-[#000000] text-[14px] ">
              My billing address is same as my delivery address
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <Link href="/pages/shipping">
          <div className="flex items-center">
            <BiArrowBack className="mr-2" /> back
          </div>
        </Link>
        <Link href="/pages/confirmation">
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

export default CheckoutDetails;
