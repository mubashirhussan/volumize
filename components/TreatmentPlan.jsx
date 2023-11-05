import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const TreatmentPlan = () => {
  return (
    <div className="primary-container my-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-[#F3F1EE] ">
          <Image src={IMAGES.PRODUCT1} alt="product" />
        </div>
        <div className="col-span-8 bg-[#F3F1EE] px-16 py-10 ">
          <div className="">
            <h3 className="text-[#404040] font-sans font-light text-[24px] mb-6">
              Treatment Plan (Spray)
            </h3>
            <p className="text-[#404040] font-sans font-light text-[16px] mb-16">
              Daily spray that helps re-energise and regrow your hair. Your
              order is confirmed after the medical questionnaire.
            </p>
            <p className=" text-[#404040] font-sans font-light text-[22px]">
              £40.00 / 4 weeks
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <Link href="/">
          <div className="flex items-center">
            <BiArrowBack className="mr-2" /> back
          </div>
        </Link>
        <Link href="/pages/signup">
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

export default TreatmentPlan;
