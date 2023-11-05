import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#003782]">
      <div className="primary-container">
        <div className="grid grid-cols-12 gap-6  pt-14">
          <div className="col-span-6">
            <h3 className=" font-normal text-[32px] text-[#FFFFFF] mb-8">
              VOLUMIZE
            </h3>
            <p className="text-[#FFFFFF]  font-light text-[16px]">
              © 2023 Volumize
            </p>
            <p className=" font-light text-[16px] text-[#FFFFFF] mb-8 ">
              Volumize is a Hair treatment products producers with <br />{" "}
              advance formula in cure Alopeica, Our products are <br />{" "}
              clinically tested and registered with Ministry of Health
            </p>
            <div>
              <h3 className=" font-light py-2 text-[#FFFFFF] text-[16px]">
                Get updates
              </h3>
              <input
                type="text"
                className="px-14 py-3 rounded-lg placeholder-[#C1C1C1] placeholder:text-[12px] placeholder: placeholder:font-light border-[#C1C1C1]"
                placeholder="Your Email Address for News"
              />
            </div>
          </div>
          <div className="col-span-3 py-12">
            <div className="">
              <p className=" font-normal text-[16px] text-[#FFFFFF] ">
                VOLUMIZE
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                Info
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">Dutox</p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                Read
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">FAQs</p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                Let's begin!
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">Refer</p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                My account
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">
                Terms of Sale
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                Privacy Policy
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">
                Terms and Conditions
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-2">
                Medicine info and Pharmacy
              </p>
            </div>
          </div>
          <div className="col-span-3 py-10">
            <div>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-3">
                Get in touch
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">
                Contact Us
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-3">
                Email info@volumize.co.uk
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF]">
                Facebook
              </p>
              <p className=" font-normal text-[16px] text-[#FFFFFF] py-3">
                Instagram
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-4 ">
          <span className="text-[#FFFFFF]  font-light text-[16px]">
            Copyright © 2023 VOLUMIZE All rights reserved.
          </span>
          <span className="text-[#FFFFFF] cursor-pointer font-light text-[16px] ml-5 underline">
            Privacy Policy
          </span>
          <span className="text-[#FFFFFF] cursor-pointer font-light text-[16px] ml-3 underline">
            Terms of Use
          </span>
          <span className="text-[#FFFFFF] cursor-pointer font-light text-[16px] ml-3 underline">
            Sales and Refunds
          </span>
          <span className="text-[#FFFFFF] cursor-pointer font-light text-[16px] ml-3 underline">
            Legal
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
