import React from "react";

const Feedback = () => {
  return (
    <div className="bg-[#F3F1EE]">
      <div className="grid lg:grid-cols-12 gap-20 primary-container py-20">
        <div className="col-span-6">
          <h2 className="text-[#003782] font-sans font-medium text-[42px]">
            Have questions or feedback?
          </h2>
          <p className="text-[#565656] font-light text-base">
            Send us an email, and a dedicated member of the team will reach out
            to address your concerns.
          </p>
        </div>
        <div className="col-span-6 bg-[#E9E1DA] rounded-md">
          <div className="pt-12 pb-10 px-10">
            <form>
              <div class="mb-4">
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name "
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="Email Address"
                />
              </div>

              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"
                placeholder="Leave a comment..."
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-14 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Send Messag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
