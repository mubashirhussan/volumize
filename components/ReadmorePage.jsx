import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import IMAGES from "@/app/images";

const ReadmorePage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-7 px-7"></div>
      <div className="grid grid-cols-12 px-5 py-5">
        <div className="col-span-5 py-5">
          <Image src={IMAGES.PROCESS1} />
        </div>
        <div className="col-span-7">
          <h3 className="text-[22px] text-[#005C9E] font-sans font-bold py-4">
            What are the solutions?
          </h3>
          <p className=" text-[18px] text-[#7E7E7E] font-sans font-normal">
            For many, hair loss feels inevitable. A lot of men decide to embrace
            the change, either by overlooking the transformation or confidently
            rocking a bald look. However, some find this change hard to accept,
            grappling with the unfamiliar and unwanted shift in their
            appearance.
          </p>
          <p className="py-5 text-[18px] text-[#7E7E7E] font-sans font-normal">
            Hair loss, be it a sudden occurrence due to medical issues like
            alopecia or the slow onset of male pattern baldness, can be
            unsettling. In a society where thinning hair is deemed atypical,
            particularly among the young, how can one confidently face this
            challenge?
          </p>

          <p className=" text-[18px] text-[#7E7E7E] font-sans font-normal">
            Maintaining a positive mindset can be instrumental in coping with
            hair loss. However, the power of positivity has its limits. The
            tangible impacts of hair thinning can often make you feel isolated
            in your struggles, leading you to question the legitimacy of your
            emotions and general well-being.
          </p>

          <h3 className="text-[22px] text-[#005C9E] font-sans font-bold py-4">
            Is it advisable to address hair loss immediately?
          </h3>
          <p className=" text-[18px] text-[#7E7E7E] font-sans font-normal">
            In short, absolutely. The longer you let hair loss continue, the
            tougher it becomes to rejuvenate and restore growth. There's an
            abundance of solutions nowadays, from DHT blocking shampoos to
            natural home-based remedies and other innovative approaches. That
            said, some treatments have proven more effective than others,
            especially for those dealing with Male Pattern Baldness (MPB).
          </p>
          <p className="py-4 text-[18px] text-[#7E7E7E] font-sans font-normal">
            Finasteride stands out as a prominent treatment for MPB. It can be
            consumed as a pill or applied directly to the scalp, known as
            Topical Finasteride. The primary function of Finasteride is to halt
            the transformation of Testosterone into DHT. Another vital solution
            is Minoxidil. This topical remedy helps nourish the hair follicles,
            amplifying hair thickness and enlarging their size.
          </p>
          <h3 className="text-[22px] text-[#005C9E] font-sans font-bold py-4">
            The Volumize Solution
          </h3>
          <p className=" text-[18px] text-[#7E7E7E] font-sans font-normal">
            We've merged the strengths of Finasteride and Minoxidil to craft the
            optimal hair loss solution. Our spray and capsule is effortlessly
            applied without leaving your hair looking oily or drenched, an issue
            commonly associated with some other products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadmorePage;
