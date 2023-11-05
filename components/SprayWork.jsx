import Image from "next/image";
import React from "react";
import IMAGES from "@/app/images";

const SprayWork = () => {
  return (
    <div className="primary-container my-20">
      <h1 className="text-[#003782]  font-medium text-center text-[42px] leading-tight ">
        How topical finasteride <br /> & minoxidil spray works
      </h1>
      <div className="grid grid-cols-3 py-6 px-10 gap-2">
        <div className=" bg-white ">
          <div className="flex justify-center">
            <Image className=" py-10 " src={IMAGES.GROUP1} alt="img" />
          </div>
          <div className="">
            <h5 className=" text-[#003782] text-[22px] font-medium text-center">
              DHT Blocker
            </h5>

            <p className="text-[#565656] text-base font-light text-center">
              Finasteride works by blocking an enzyme that converts testosterone
              into DHT, a hormone that can weaken hair follicles.
            </p>
          </div>
        </div>
        <div className=" bg-white ">
          <div className="flex justify-center">
            <Image className=" py-10 " src={IMAGES.GROUP2} alt="" />
          </div>
          <div className="">
            <h5 className=" text-[#003782] text-[22px] font-medium text-center">
              Regrows hair
            </h5>

            <p className="text-[#565656] text-base font-light text-center">
              Finasteride has been clinically proven to help regrow hair in 3-6
              months.
            </p>
          </div>
        </div>
        <div className=" bg-white ">
          <div className="flex justify-center">
            <Image className=" py-10 " src={IMAGES.GROUP1} alt="" />
          </div>
          <div className="">
            <h5 className=" text-[#003782] text-[22px] font-medium text-center">
              Better together
            </h5>

            <p className="text-[#565656] text-base font-light text-center">
              Finasteride is clinically proven to give even better results when
              paired with minoxidil, which helps to kick start regrowth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprayWork;
