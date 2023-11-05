import Image from "next/image";
import IMAGES from "@/app/images";
import React from "react";

const Revitalise = () => {
  return (
    <div className="bg-[#000000] py-20">
      <div className="primary-container ">
        <h1 className="text-center text-white font-medium mb-16 text-[42px] ">
          Revitalise and treat your hair
        </h1>
        <div className=" bg-[#1D1D1D] mb-6">
          <div className=" grid  sm:grid-flow-col items-center xl:gap-24 lg:gap-10  h-[222px] primary-container ">
            <div className=" flex items-center justify-center mr-2 text-center ">
              <h1 className="text-[100px] text-[#FFFFFF] font-bold">
                1-2<span className="text-[#B6B6B6] text-[30px]">Months</span>
              </h1>
            </div>
            <div className="flex justify-center sm:border-none border-b border-gray-400">
              <Image
                src={IMAGES.BORDERVECTOR}
                alt="vector"
                className="sm:flex hidden"
              />
            </div>
            <div className="flex justify-center">
              <Image src={IMAGES.LAYER1} className="" alt="layer" />
            </div>
            <div className="flex justify-center text-center">
              <p className="text-[#FFFFFF] text-[18px] ">
                You might not notice any hair difference in the initial 1-2
                months. But during this period, some thin hairs might fall out
                to pave the way for denser, more robust growth.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#1D1D1D] mb-6">
          <div className=" grid  sm:grid-flow-col items-center xl:gap-24 lg:gap-10  h-[222px] primary-container ">
            <div className=" flex items-center justify-center mr-2 text-center ">
              <h1 className="text-[100px] text-[#FFFFFF] font-bold">
                3-6<span className="text-[#B6B6B6] text-[30px]">Months</span>
              </h1>
            </div>
            <div className="flex justify-center sm:border-none border-b border-gray-400">
              <Image
                src={IMAGES.BORDERVECTOR}
                alt="vector"
                className="sm:flex hidden"
              />
            </div>
            <div className="flex justify-center">
              <Image src={IMAGES.LAYER1} className="" alt="layer" />
            </div>
            <div className="flex justify-center text-center">
              <p className="text-[#FFFFFF] text-[18px] ">
                By now, it should be evident that your hair loss has either
                decelerated, halted, or even begun to improve. We advise
                capturing photos to monitor your progress
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#1D1D1D] mb-6">
          <div className=" grid  sm:grid-flow-col items-center xl:gap-24 lg:gap-10  h-[222px] primary-container ">
            <div className=" flex items-center justify-center mr-8 text-center ">
              <h1 className="text-[100px] text-[#FFFFFF] font-bold">
                &gt;6<span className="text-[#B6B6B6] text-[30px]">Months</span>
              </h1>
            </div>
            <div className="flex justify-center sm:border-none border-b border-gray-400">
              <Image
                src={IMAGES.BORDERVECTOR}
                alt="vector"
                className="sm:flex hidden"
              />
            </div>
            <div className="flex justify-center">
              <Image src={IMAGES.LAYER1} className="" alt="layer" />
            </div>
            <div className="flex justify-center text-center">
              <p className="text-[#FFFFFF] text-[18px] ">
                Your hair loss should have significantly reduced by now, and
                you'll probably observe hair regrowth. We suggest capturing
                additional photos to chronicle the progress
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#FFFFFF]  font-light text-[16px]  text-center py-4">
            You need to test again your condition if you do not get good results
            in <br /> mentioned time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revitalise;
