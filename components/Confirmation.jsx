import React from "react";
import Image from "next/image";
import IMAGES from "@/app/images";
const Confirmation = () => {
  return (
    <div>
      <div className="grid grid-cols-5 primary-container mb-10 mt-16">
        <div className="px-10 ">
          <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-5">
            <Image src={IMAGES.TREATMENT} height={70} width={40} />
          </div>
          <p className="text-center font-sans font-light text-[#404040]">
            Treatment
          </p>
        </div>

        <div className="px-10 ">
          <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-5">
            <Image src={IMAGES.SIGNUP} height={70} width={40} />
          </div>
          <p className="text-center font-sans font-light text-[#404040]">
            Signup
          </p>
        </div>

        <div className="px-10 ">
          <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-6">
            <Image src={IMAGES.SHIPPING} height={70} width={40} />
          </div>
          <p className="text-center font-sans font-light text-[#404040]">
            Shipping
          </p>
        </div>

        <div className="px-10 ">
          <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-8">
            <Image src={IMAGES.CHECKOUT} height={70} width={40} />
          </div>
          <p className="text-center font-sans font-light text-[#404040]">
            Checkout
          </p>
        </div>
        <div className="px-10 ">
          <div className="flex items-center justify-center  border-2 border-[#63636379] bg-[#F9F9F9] rounded-lg py-6">
            <Image src={IMAGES.CONFIRMATION} height={70} width={40} />
          </div>
          <p className="text-center font-sans font-light text-[#404040]">
            Confirmation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
