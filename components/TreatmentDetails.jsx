import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const TreatmentDetails = () => {
  return (
    <div className="grid grid-cols-12 primary-container my-12">
      <div className="col-span-4 py-5">
        <Image src={IMAGES.TREATMENT_IMG} alt="treatment" />
      </div>
      <div className="col-span-8  py-5 ">
        <div className="grid grid-cols-12">
          <div className="col-span-9 px-5">
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="text"
              placeholder="Enter Promo Code"
            ></input>
            <hr />
          </div>
          <div className="col-span-3">
            <button
              class="shadow bg-[#446DE2] hover:bg-blue-400 focus:shadow-outline focus:outline-none text-[#FFFFFF] font-sans font-normal text-center  py-2 px-10 rounded"
              type="button"
            >
              Apply
            </button>
          </div>
        </div>

        <hr className="my-12 mx-16 text-center  " />

        <div className="grid grid-cols-12 px-5 ml-14 py-5">
          <div className="col-span-9 px-5">
            <p className="text-[#404040] font-sans font-light text-[20px]">
              Monthly Subscription
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[#404040] font-sans font-light text-[20px]">
              £40.00
            </p>
          </div>
        </div>

        <hr className="my-4 mx-16 text-center  " />

        <div className="grid grid-cols-12 px-5 py-5 ml-14">
          <div className="col-span-9 px-5">
            <p className="text-[#404040] font-sans font-light text-[16px]">
              Consultation
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[#404040] font-sans font-light text-[16px]">
              Free
            </p>
          </div>
        </div>

        <hr className="my-4 mx-16 text-center  " />

        <div className="grid grid-cols-12 px-5 py-5 ml-14">
          <div className="col-span-9 px-5">
            <p className="text-[#404040] font-sans font-light text-[16px]">
              Delivery
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[#404040] font-sans font-light text-[16px] ">
              Free
            </p>
          </div>
        </div>

        <hr className="my-4 mx-16 text-center  " />

        <div className="grid grid-cols-12 px-5 ml-14 py-5">
          <div className="col-span-9 px-5">
            <p className="text-[#404040] font-sans font-light text-[20px]">
              First Month
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[#404040] font-sans font-light text-[20px]">
              £20.00
            </p>
          </div>
        </div>

        <hr className="my-4 mx-16 text-center  " />

        <div className="flex justify-center py-5">
          <Link href="/pages/signup">
            <button
              class="shadow bg-[#446DE2] hover:bg-blue-400 focus:shadow-outline focus:outline-none text-[#FFFFFF] font-sans font-normal text-center  py-2 px-10 rounded "
              type="button"
            >
              Continue
            </button>
          </Link>
        </div>

        <div className="py-5 px-14 ml-5">
          <div className="flex  items-center">
            <BsCheckCircle className=" mr-5" />
            <p className="text-[#404040] font-sans font-light text-[14px]">
              Free discreet delivery - fits through your letterbox
            </p>
          </div>
          <div className="flex  items-center py-3">
            <BsCheckCircle className=" mr-5 text-[#404040]" />
            <p className="text-[#404040] font-sans font-light text-[14px]">
              No long-term contract
            </p>
          </div>
          <div className="flex  items-center">
            <BsCheckCircle className=" mr-5" />
            <p className="text-[#404040] font-sans font-light text-[14px]">
              Cancel anytime
            </p>
          </div>
          <div className="flex  items-center py-3">
            <BsCheckCircle className=" mr-5" />
            <p className="text-[#404040] font-sans font-light text-[14px]">
              Free online consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;
