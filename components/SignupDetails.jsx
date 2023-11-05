import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignupDetails = () => {
  return (
    <div className="grid grid-cols-12 primary-container my-12 gap-8">
      <div className="col-span-4  py-5">
        <Image src={IMAGES.SIGNUPIMG} alt="signup" />
      </div>
      <div className="col-span-8  py-5">
        <div className="">
          <h3 className="text-[#003782] font-sans font-medium text-[36px]">
            Welcome to Volumize
          </h3>
          <p className="text-[#000000] font-sans font-light text-[14px] py-3">
            You’re only 5 minutes away from making hair loss a thing of the
            past. Enter your details below to get started.
          </p>
          <p className="text-[#000000] font-sans font-light text-[14px]">
            This entire form should be filled out by the person that is
            intending to use the treatment, as it collects sensitive medical
            data and assesses the suitability for treatment.
          </p>
        </div>
        <div>
          <h2 className="font-sans font-normal text-[26px] py-5">Signup</h2>
          <div className="py-5">
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="text"
              placeholder="First Name"
            ></input>
          </div>

          <div>
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="text"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="py-5">
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="date"
              placeholder="Date Of Birth"
            ></input>
          </div>

          <div className="">
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px]"
              id="inline-full-name"
              type="email"
              placeholder="Email"
            ></input>
          </div>

          <div className="py-5">
            <input
              class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-[#EADCCF]
            placeholder:font-sans placeholder:font-normal placeholder:text-[12px] "
              id="inline-full-name"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className=" ">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="font-sans font-light text-[#000000] text-[14px] ">
              I agree to the Terms and Conditions and Privacy Policy and agree
              to be prescribed an unlicensed medicine.
            </span>
          </div>

          <div className=" flex justify-center py-7">
            <Link href="/pages/shipping">
              <button
                class="shadow bg-[#446DE2] hover:bg-blue-400 focus:shadow-outline focus:outline-none text-[#FFFFFF] font-sans font-normal text-center  py-2 px-10 rounded"
                type="button"
              >
                Continue
              </button>
            </Link>
          </div>

          <div>
            <p className="font-sans font-light text-[#000000] text-[12px] text-center">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDetails;
