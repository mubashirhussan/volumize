import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Complementry = () => {
  return (
    <>
      <div className="flex justify-center -mb-[2.7rem] ">
        <Link href="/pages/hairLoseTreatment">
          <div className="bg-[#446DE2] py-3 px-2 w-[470px] rounded-[8px] flex justify-end items-center text-center">
            <div className=" justify-center flex-col mr-[4.5rem]">
              <h4 className="text-[#FFFFFF]  font-normal text-[26px]">
                Get the Right Treatment
              </h4>
              <p className="text-[#FFFFFF] text-base font-light ">
                From hair doctors with experience
              </p>
            </div>

            <div className="flex justify-end">
              <RiArrowDropRightLine fontSize={28} className="text-white" />
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-[#F4F1EE] py-14 flex justify-center">
        <div className="py-6 text-center max-w-[60%] ">
          <h2 className="text-[42px] text-[#003782]  font-semibold">
            Complimentary Hair Loss Assessment
          </h2>
          <p className="text-[16px] text-[#000000] my-4 font-light">
            Fill out our brief survey, answer some queries regarding your hair
            thinning and health background, and get a treatment suggestion from
            a pharmacist.
          </p>
          <Link href="/pages/hairLoseTreatment">
            <button
              type="button"
              class="text-[#FFFFFF] bg-blue-700 hover:bg-blue-one focus:ring-4 focus:ring-blue-300 font-medium rounded-[8px] text-sm px-20 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
              Get it now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Complementry;
