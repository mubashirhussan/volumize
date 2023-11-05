import IMAGES from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const HairLossTreatment = () => {
  return (
    <>
      <div className="primary-container">
        <div className="grid grid-cols-12 gap-4 my-6">
          <div className="col-span-6">
            <Image src={IMAGES.HAIRLOSSTREATMENT} alt="product" />
          </div>
          <div className="col-span-6">
            <h3 className="text-[#003782]  font-medium text-[42px] py-5">
              Treatment for Hair Loss
            </h3>
            <p className=" font-light text-[#565656] text-[16px]">
              Our clinician approved treatment spray or tablet blends the top
              hair loss reversal treatments available, namely Dutasteride and
              Minoxidil. It works by diminishing DHT, a primary factor in male
              hair loss, while also revitalizing blood circulation to hair
              follicles, promoting regrowth.
            </p>
            <p className=" font-light text-[#565656] text-[14px] py-4">
              This spray is apt for typical male hair loss patterns: thinning
              strands, receding hairlines, and bald patches at the crown.
            </p>
            <hr className="my-2 mx-5" />
            <div className="flex justify-between px-5 py-5">
              <div>
                <h3 className="text-[#404040]  font-medium text-[14px]">
                  Efficacy:
                </h3>
              </div>
              <div>
                <p className=" font-light text-[#565656] text-[12px]">
                  9 out of 10 men
                </p>
              </div>
            </div>

            <div className="flex justify-between px-5">
              <div>
                <h3 className="text-[#404040]  font-medium text-[14px]">
                  Quarterly Shipment:
                </h3>
              </div>
              <div>
                <p className=" font-light text-[#565656] text-[12px]">
                  One bottle of spray or tablets
                </p>
              </div>
            </div>

            <div className="flex justify-between px-5 py-5">
              <div>
                <h3 className="text-[#404040]  font-medium text-[14px]">
                  Application:
                </h3>
              </div>
              <div>
                <p className=" font-light text-[#565656] text-[12px]">
                  Use six sprays, once a day or <br /> take one capsule once a
                  day
                </p>
              </div>
            </div>

            <hr className="my-2 mx-5" />
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-[#003782] text-[42px]   font-medium text-center my-6">
            Treatment information
          </h3>
          <div className="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-xl font-light text-[#003782]">
                  Overview
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                The Dutox Spray or Tablet is a daily-use solution that merges
                the two leading treatments for male hair loss: Minoxidil and
                Dutasteride.
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                While most products offer separate sprays and tablets, we've
                integrated both into one topical spray or capsule, ensuring
                enhanced, safer, and more direct benefits.
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                This is a prescription-only product, so you won't see it on
                store shelves. It's exclusively accessible via the Volumize
                website, where a licensed clinician will review and validate
                your treatment regimen. For optimal outcomes and safety, stick
                to treatments prescribed and endorsed by a doctor.
              </p>
            </details>
          </div>

          <div className="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-xl font-light text-[#003782]">
                  Application
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                Our Treatment Spray is applied through 6 sprays, twice daily.
                This provides the scalp the correct amount of solution designed
                for optimal hair regrowth: the liquid can then be massaged into
                the scalp. The Treatment Spray is odourless and non-greasy,
                meaning it won’t affect your look.
              </p>
            </details>
          </div>

          <div className="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-xl font-light text-[#003782]">
                  Who is it for?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                Our Treatment Spray is suitable for men experiencing hair loss
                only (over the age of 18): unfortunately the active ingredients
                are not suitable for women.
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                During the online consultation (required to be prescribed our
                treatment plan), we will check that the treatment is suitable
                for you, and that your hair loss is natural rather than
                situational (due to stress, anxiety, etc).
              </p>
            </details>
          </div>

          <div className="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-xl font-light text-[#003782]">
                  Active Components & medicine dosage
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                The Treatment Spray is a 50ml bottle dosed over the space of a
                month: sprayed 6 times, twice daily. The active ingredients are
                Minoxidil (7%) and Finasteride (0.14%).
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                This dose of Finasteride is based on water volume - not mg as
                other companies display. Our comparison daily dose in milligrams
                is 2.00mg. The Treatment Spray’s other ingredients are Glycerol,
                Ethanol, Lactic Acid (E270), and water.
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                The NHS says finasteride and minoxidil are the main treatments
                for male pattern baldness.
              </p>
            </details>
          </div>

          <div className="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-xl font-light text-[#003782]">
                  Does it have any side effects?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                Like all medicines, there is a risk of side effects: the most
                common as a result of using the Treatment Spray are irritation
                and itching. However, most men will not experience any side
                effects as a result of using the Treatment Spray.
              </p>
              <p class="text-[#404040] mt-3 group-open:animate-fadeIn text-base font-light">
                Throughout your treatment plan, a Pharmacist is always on hand
                to advise.
              </p>
            </details>
          </div>

          <div className="flex justify-center py-5">
            <div className="bg-[#446DE2] py-3 px-2 w-[350px] rounded-[8px] flex justify-end items-center">
              <div className=" justify-center flex-col mr-6">
                <h4 className="text-[#FFFFFF]  font-normal text-[16px]">
                  Get the Right Treatment
                </h4>
                <p className="text-[#FFFFFF]  font-light ">
                  From hair doctors with experience
                </p>
              </div>

              <div className="flex justify-end">
                <RiArrowDropRightLine fontSize={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-[#003782] text-[42px] my-5  font-medium text-center">
          Getting Started is Simple!
        </h3>
        <div className="bg-[#F3F1EE]">
          <div className="grid grid-cols-12 gap-14 primary-container">
            <div className="col-span-6 py-6">
              <h3 className="text-[#003782]  font-normal text-[24px] py-3 px-5">
                Treatment Regimen
              </h3>
              <p className=" font-light text-[#565656] text-[16px] px-5">
                A once-a-day spray or capsule that boosts hair regrowth and
                combats hair loss.
              </p>

              <hr className="my-2 mx-5" />
              <div className="flex justify-between px-5 py-5">
                <div>
                  <h3 className="text-[#404040]  font-medium text-[16px]">
                    Efficacy:
                  </h3>
                </div>
                <div>
                  <p className=" font-light text-[#565656] text-[16px]">
                    9 out of 10 men
                  </p>
                </div>
              </div>

              <div className="flex justify-between px-5">
                <div>
                  <h3 className="text-[#404040]  font-medium text-[16px]">
                    Quarterly Shipment:
                  </h3>
                </div>
                <div>
                  <p className=" font-light text-[#565656] text-[16px]">
                    One bottle of spray or tablets
                  </p>
                </div>
              </div>

              <div className="flex justify-between px-5 py-5">
                <div>
                  <h3 className="text-[#404040]  font-medium text-[16px]">
                    Application:
                  </h3>
                </div>
                <div>
                  <p className=" font-light text-[#565656] text-[16px]">
                    Use six sprays, once a day or <br /> take one capsule once a
                    day
                  </p>
                </div>
              </div>
              <div className="my-8">
                <hr className="my-2 mx-5" />
                <p className=" font-light text-[#565656] text-[12px] text-center">
                  First month for £30, £60 monthly / Subscription cancellation
                  is hassle-free.
                </p>
              </div>
              <div className="my-5 flex justify-center">
                <Link href="/pages/questionnaire">
                  <button
                    type="button"
                    class="text-[#FFFFFF] bg-blue-700 hover:bg-blue-one focus:ring-4 focus:ring-blue-300 font-medium rounded-[8px] text-sm px-20 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  >
                    Let’s begin!
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-span-6">
              <Image src={IMAGES.HAIRLOSSIMG} className="" alt="product" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HairLossTreatment;
