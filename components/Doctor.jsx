import IMAGES from "@/app/images";
import Image from "next/image";
import React from "react";

const Doctor = () => {
  return (
    <div className="grid grid-cols-12 items-center bg-[#F3F1EE]  ">
      <div className="xl:col-span-8 lg:col-span-12 md:col-span-12  sm:col-span-12 xs:col-span-12 lg:order-2 xl:order-1 md:order-2 sm:order-2 xs:order-2 items-center primary-container  ">
        <div className="flex justify-center xl:mt-24">
          <div className="w-[85%] ">
            <h2 className="text-[#003782]  font-medium   text-[42px] ">
              Advise you were waiting for
            </h2>
            <p className="text-[#565656]  font-normal text-[24px] mb-16">
              Dehydration is the main cause of Hair loss in men, if we care our
              hair properly and hydrate these, hair loss chances will reduce
              significantly. One its started, you need special treatment like
              Volumize to recover the problem.
            </p>
            <p className=" font-normal text-[#000000] text-[24px] leading-5 py-3">
              Dr. Alexander Peter
            </p>
            <p className=" font-light text-[20px]">Clinical hair loss expert</p>
          </div>
        </div>
      </div>
      <div className="xl:col-span-4 lg:col-span-12  md:col-span-12  sm:col-span-12 xs:col-span-12  lg:order-1 xl:order-2 md:order-1 sm:order-1 xs:order-1 flex justify-center mt-16">
        <Image src={IMAGES.DOCTOR} alt="doctor" />
      </div>
    </div>
  );
};

export default Doctor;
