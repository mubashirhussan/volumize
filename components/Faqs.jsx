import React from "react";

const Faqs = () => {
  return (
    <div className="grid grid-cols-12 gap-5 primary-container py-20">
      <div class=" col-span-4">
        <h3 className="font-medium text-[#003782] text-[42px]">FAQs</h3>
        <p className=" font-light py-5 text-[#565656] text-[16px]">
          Hair loss, also known as alopecia, is a common condition that affects
          many people worldwide. It can occur for various reasons and can impact
          both men and women. Hair loss can be temporary or permanent and can
          have significant emotional and psychological effects on individuals.
        </p>
      </div>

      <div class="col-span-8">
        <div class="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className=" text-[#404040] text-xl font-light">
                How can I get a prescription?
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
              Simply press ‘Get Started’ and then you will be taken through a
              Medical Questionnaire which assesses your suitability for
              treatment.
            </p>
          </details>
        </div>

        <div class="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-[#404040] text-xl font-light">
                Is the treatment reliable?
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
              Absolutely. Our treatments are scientifically backed. We are a
              doctor led service all of whom are registered with the GMC. Our
              partner pharmacy is accredited by the GPhC. The brief consultation
              questionnaire helps determine if our treatment spray or tablet is
              right for you by reviewing allergies and other potential
              contraindications. Additionally, Volumize subscribers can reach
              out to our dedicated pharmacist with any questions or concerns
              throughout the treatment course.
            </p>
          </details>
        </div>

        <div class="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-[#404040] text-xl font-light">
                Do I need to use capsules or the spray to reverse hair loss?
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
              No, there are now a range of treatments on the market that do not
              require pills.
            </p>
          </details>
        </div>

        <div class="my-4 bg-[#F3F1EE] px-5 py-5 rounded-md">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-[#404040] text-xl font-light">
                Is an in-person consultation required?
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
              No, through a simple online Medical Questionnaire, we can assess
              your suitability for treatments and recommend a product to you.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
