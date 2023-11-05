// import { useRouter } from "next/router";
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // const router =useRouter()
  //   const goToNext = ()=>{
  // router.push("/Faqs")
  //   }
  return (
    <div>
      <nav className="flex justify-between py-5  items-center primary-container">
        <Link href="/">
          <div>
            <label className="text-[#003782] font-normal text-[42px] font-serif cursor-pointer">
              VOLUMIZE
            </label>
          </div>
        </Link>
        <div className=" gap-8 lg:gap-3 xl:gap-8  hidden lg:flex items-center">
          <ul className="flex items-center  ">
            <Link href="/pages/hairLoseTreatment">
              <li className="text-[#545454]  font-normal text-[16px] px-8">
                Hair Loss Treatment
              </li>
            </Link>
            <Link href="/pages/faqs">
              <li className="text-[#545454]  font-normal text-[16px]">FAQs</li>
            </Link>
            <Link href="/">
              <li className="text-[#545454]  font-normal text-[16px] px-8">
                About
              </li>
            </Link>

            <Link href="/pages/read">
              <li className="text-[#545454]  font-normal text-[16px] px-8">
                Read
              </li>
            </Link>
            <Link href="/pages/signup">
              <li className="text-[#545454]  font-normal text-[16px] px-8">
                Signup
              </li>
            </Link>

            <Link href="/pages/login">
              <li className="text-[#545454]  font-normal text-[16px] px-8">
                Login
              </li>
            </Link>
            <Link href="/pages/questionnaire">
              <button className="bg-[#446DE2] text-[#FFFFFF]  font-normal rounded-md px-4 py-2 mx-2">
                Get Started
              </button>
            </Link>
          </ul>
        </div>
        {toggle ? (
          <div className="lg:hidden block">
            <AiOutlineClose size={30} onClick={() => setToggle(!toggle)} />
          </div>
        ) : (
          <div className="lg:hidden block">
            <FiMenu size={30} onClick={() => setToggle(!toggle)} />
          </div>
        )}
        {/* responsive menu */}
        <div
          className={`duration-300 lg:hidden z-20 w-[50%] flex top-[0px] py-6 bottom-0  flex-col  fixed bg-[#2B388F] text-white ${
            toggle ? "left-[0]" : "left-[-200%]"
          }`}
        >
          <Link href="/pages/hairLoseTreatment">
            <li className=" font-normal text-[16px] px-8 py-4">
              Hair Loss Treatment
            </li>
          </Link>
          <Link href="/pages/faqs">
            <li className=" font-normal text-[16px] px-8 py-4">FAQs</li>
          </Link>
          <Link href="/">
            <li className=" font-normal text-[16px] px-8 py-4">About</li>
          </Link>
          <Link href="/pages/questionnaire">
            <div className="px-8 py-4">
              <button className="bg-[#446DE2] text-[#FFFFFF]  font-normal rounded-md px-5 py-2">
                Get Started
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
