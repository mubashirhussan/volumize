import React from "react";
import IMAGES from "@/app/images";
import Image from "next/image";

const Product = () => {
  return (
    <div className="grid lg:grid-cols-2 primary-container gap-5 my-12">
      <div className="bg-[#F4F1EE] py-5 px-5 rounded-md">
        <Image src={IMAGES.PRODUCT1} alt="product" width={610} />
        <h1 className="text-center text-[#003782]  font-medium text-[22px]">
          Hair Loss Spray
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-[#565656]  font-light text-[16px] w-[60%]">
            For external use twice a day, this treatment will help you grow new
            hair follicles within few days and 6 months for best results{" "}
          </p>
        </div>

        <h3 className="text-[#003782]  font-medium text-center text-[16px] my-8 underline cursor-pointer">
          View Treatments
        </h3>
      </div>
      <div className="bg-[#F4F1EE] py-5 px-5 rounded-md">
        <Image src={IMAGES.PRODUCT2} alt="product" />
        <h1 className="text-center text-[#003782]  font-medium text-[22px] mt-20">
          Hair Loss Tablets
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-[#565656]  font-light text-[16px] w-[60%]">
            For intake of important supplements, this treatment will help you
            internally increase of required supplements for new hair
          </p>
        </div>

        <h3 className="text-[#003782]  font-medium text-center text-[16px] my-8 underline cursor-pointer">
          View Treatments
        </h3>
      </div>
    </div>
  );
};

export default Product;
