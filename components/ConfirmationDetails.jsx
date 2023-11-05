import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const ConfirmationDetails = () => {
  return (
    <div className="primary-container my-12">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Image src={IMAGES.COMFIRMATIONIMG} alt="confirmation" />
        </div>
        <div className="col-span-8">
          <div className="px-16">
            <h3 className="text-[#003782]  font-medium text-[42px] ">
              We are all set
            </h3>
            <p className="text-[#000000]  font-light text-[14px] py-3">
              Shipping is free for all locations in United Kingdom
            </p>
            <h3 className="text-[#404040]  font-normal text-[26px] py-5 ">
              Order Details
            </h3>
          </div>
          <hr className="my-8 mx-16 text-center  " />
          <div className="grid grid-cols-12 px-5 ml-14 py-5">
            <div className="col-span-9 px-5">
              <p className="text-[#404040]  font-light text-[20px]">
                Monthly Subscription
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[#404040]  font-light text-[20px]">£40.00</p>
            </div>
          </div>

          <hr className="my-4 mx-16 text-center  " />

          <div className="grid grid-cols-12 px-5 py-5 ml-14">
            <div className="col-span-9 px-5">
              <p className="text-[#404040]  font-light text-[16px]">
                Consultation
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[#404040]  font-light text-[16px]">Free</p>
            </div>
          </div>

          <hr className="my-4 mx-16 text-center  " />

          <div className="grid grid-cols-12 px-5 py-5 ml-14">
            <div className="col-span-9 px-5">
              <p className="text-[#404040]  font-light text-[16px]">Delivery</p>
            </div>
            <div className="col-span-3">
              <p className="text-[#404040]  font-light text-[16px] ">Free</p>
            </div>
          </div>

          <hr className="my-4 mx-16 text-center  " />

          <div className="grid grid-cols-12 px-5 ml-14 py-5">
            <div className="col-span-9 px-5">
              <p className="text-[#404040]  font-light text-[20px]">
                First Month
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[#404040]  font-light text-[20px]">£20.00</p>
            </div>
          </div>

          <hr className="my-4 mx-16 text-center  " />

          <div className="col-span-8  py-5 ">
            <div className="px-16">
              <h3 className="text-[#404040] px-5  font-normal text-[26px] py-7 ">
                Billing Address
              </h3>
            </div>

            <div className="grid grid-cols-12 px-5 ml-14 py-5">
              <div className="col-span-9 px-5">
                <p className="text-[#404040]  font-light text-[14px]">
                  John Doe
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-[#404040]  font-light text-[14px]">
                  <BsCheckCircle className="" />
                </p>
              </div>
            </div>

            <hr className="my-4 mx-16 text-center  " />

            <div className="grid grid-cols-12 px-5 py-5 ml-14">
              <div className="col-span-9 px-5">
                <p className="text-[#404040]  font-light text-[14px]">
                  14 Redcar Rd, Bicester OX26 1BS, UK
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-[#404040]  font-light text-[14px]">
                  <BsCheckCircle className="" />
                </p>
              </div>
            </div>

            <hr className="my-4 mx-16 text-center  " />

            <div className="grid grid-cols-12 px-5 py-5 ml-14">
              <div className="col-span-9 px-5">
                <p className="text-[#404040]  font-light text-[14px]">
                  +44 3457 763 8575
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-[#404040]  font-light text-[14px] ">
                  <BsCheckCircle className=" " />
                </p>
              </div>
            </div>

            <hr className="my-4 mx-16  text-center  " />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <Link href="/pages/checkout">
          <div className="flex items-center">
            <BiArrowBack className="mr-2" /> back
          </div>
        </Link>
        <Link href="/">
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

export default ConfirmationDetails;
