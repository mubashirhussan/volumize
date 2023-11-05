/* eslint-disable react/jsx-key */
import React from "react";
import IMAGES from "@/app/images";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Home from "../home/page";
import Doctor from "@/components/Doctor";
import Navbar from "@/components/Navbar";

const Process = () => {
  const processData = [
    {
      img: IMAGES.PROCESS1,
      title: "Brief Medical Questionnaire",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS2,
      title: "Complimentary, Private Shipping",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS1,
      title: "Daily Application ,How it Use",
      description: "Go to know more ",
    },
    {
      img: IMAGES.PROCESS2,
      title: "Brief Medical Questionnaire",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS1,
      title: "Complimentary, Private Shipping",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS2,
      title: "Daily Application ,How it Use",
      description: "Go to know more ",
    },
    {
      img: IMAGES.PROCESS1,
      title: "Brief Medical Questionnaire",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS2,
      title: "Complimentary, Private Shipping",
      description: "Go to know more",
    },
    {
      img: IMAGES.PROCESS1,
      title: "Daily Application ,How it Use",
      description: "Go to know more ",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="primary-container my-12">
        <div className="text-[42px]  text-[#003782] font-semibold text-center mb-8">
          Our Products
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {processData?.map((item) => (
            <div className="py-4 items-center">
              <div className="flex justify-center">
                <Image className="" src={item.img} alt="process" />
              </div>
              <h5 className=" text-[22px] font-mono font-semibold text-[#184488] my-8">
                {item.title}
              </h5>
              <Link href="/pages/read/readMore">
                <button>
                  <div className="flex items-center ">
                    <p className="text-[#000000]  font-light text-[16px]  ">
                      {item.description}
                    </p>

                    <FaLongArrowAltRight className="text-[#184488] text-[20px] mx-6 text-center" />
                  </div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
