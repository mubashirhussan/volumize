/* eslint-disable react/jsx-key */
import React from "react";
import card1 from "../public/qm 1.png";
import IMAGES from "@/app/images";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";

const Process = () => {
  const processData = [
    {
      img: IMAGES.PROCESS2,
      title: "Brief Medical Questionnaire",
      description:
        " By answering a few medical questions, our clinicians will check that our treatment is suitable for you: the first step in your journey to reversing hair loss.",
    },
    {
      img: IMAGES.PROCESS1,
      title: "Complimentary, Private Shipping",
      description:
        "Packages from us come in unbranded, subtle wrapping. Plus, they're designed to fit right into your mailbox, eliminating the need for you to be present upon arrival!",
    },
    {
      img: IMAGES.PROCESS2,
      title: "Daily Application",
      description:
        "Just adhere to the guidelines for your specified treatment. We'll dispatch a box to you every 3 months to make sure you stay on track with your suggested regimen",
    },
  ];
  return (
    <div>
      <div className="primary-container relative py-20">
        <div className="text-[42px]  text-[#003782] font-semibold text-center">
          Our Process
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {processData?.map((item) => (
            <div className="py-4 items-center">
              <div className="flex justify-center">
                <Image className="" src={item.img} alt="process" />
              </div>
              <h5 className="text-[#003782] text-[22px]  font-medium text-center my-8">
                {item.title}
              </h5>

              <p className="text-[#000000]  font-light text-[16px] text-center ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
