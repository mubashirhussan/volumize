"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import ConfirmationModal from "./ConfirmationModal";
import ThankuModal from "./ThankuModal";

export default function Questionnaire() {
  const [question, setQuestion] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  console.log("question", question);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleCloseConfirm = () => {
    setConfirm(false);
  };
  return (
    <div className="flex justify-center h-[100vh]">
      <div className=" bg-[#F3F1EE] w-[60%] ">
        <div className="my-8 flex justify-center">
          <Link href="/">
            <label className="text-[#003782]  text-[42px] font-normal cursor-pointer">
              VOLUMIZE
            </label>
          </Link>
        </div>
        <div className="my-12 flex justify-center">
          <div className=" w-[50%]">
            <div className="flex justify-between">
              <span>{question} 0f 7</span>
              <span className="flex items-center self-center">
                <span className="mr-2">
                  {" "}
                  <MdArrowBackIosNew size={14} />{" "}
                </span>
                <button
                  className=""
                  onClick={() =>
                    setQuestion(question > 1 ? question - 1 : question)
                  }
                >
                  back
                </button>
              </span>
            </div>

            <progress
              className="progress  custom-progress-value"
              value={question}
              max="7"
            ></progress>

            {question === 1 && (
              <div className="my-8 text-center">
                <div className="my-14">
                  <span className="font-medium text-2xl ">
                    Could any of the following be contributing to your hair
                    loss?
                  </span>
                </div>

                <div className="flex justify-center space-x-2 my-6 ">
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    manual.co
                  </span>
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    Unthin
                  </span>{" "}
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    herbal
                  </span>{" "}
                </div>
                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1] cursor-pointer"
                    onClick={() => setQuestion(2)}
                  >
                    <input
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex">
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 2 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Is your hair falling out in clumps?
                  </span>
                </div>

                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1]  cursor-pointer"
                    onClick={() => setQuestion(3)}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 3 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Are you experincing any of the following?
                  </span>
                </div>
                <div className="flex justify-center space-x-2 my-6 ">
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    manual.co
                  </span>
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    Unthin
                  </span>{" "}
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    herbal
                  </span>{" "}
                </div>
                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1]  cursor-pointer"
                    onClick={() => setQuestion(4)}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 4 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Could any of the following be contributing to your hair
                    loss?
                  </span>
                </div>
                <div className="flex justify-center space-x-2 my-6 ">
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    manual.co
                  </span>
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    Unthin
                  </span>{" "}
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    herbal
                  </span>{" "}
                </div>
                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1] cursor-pointer"
                    onClick={() => setQuestion(5)}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 5 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Are you allergic to Finasteride or Minoxidil?
                  </span>
                </div>

                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1]  cursor-pointer"
                    onClick={() => setQuestion(6)}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 6 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Are you taking any of the following medications?
                  </span>
                </div>
                <div className="flex justify-center space-x-2 my-6 ">
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    manual.co
                  </span>
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    Unthin
                  </span>{" "}
                  <span className="flex items-center">
                    <LuDot className="mr-2" />
                    herbal
                  </span>{" "}
                </div>
                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1]  cursor-pointer"
                    onClick={() => setQuestion(7)}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
            {question === 7 && (
              <div className="my-8 text-center">
                <div className="my-12">
                  <span className="font-medium text-2xl ">
                    Do you understand and agree with the following?
                  </span>
                </div>

                <div className="my-8">
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded hover:text-white hover:bg-[#c4c4c1] cursor-pointer"
                    onClick={() => {
                      setConfirm(true);
                    }}
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      className="ml-3 py-3 w-full cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-white flex"
                    >
                      Yes
                    </label>
                  </div>
                  <div
                    className="flex items-center mb-4 bg-white  px-3 rounded  cursor-pointer hover:bg-[#c4c4c1]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-2"
                      className="ml-3 text-sm flex cursor-pointer py-3 w-full font-medium text-gray-900 dark:text-gray-300 hover:text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal show={isModalOpen} onClose={handleClose} />
      <ThankuModal show={isConfirm} onClose={handleCloseConfirm} />
    </div>
  );
}
