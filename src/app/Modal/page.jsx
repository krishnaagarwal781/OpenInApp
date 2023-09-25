"use client"
import React, { useState } from "react";

const Modal1 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showContactInput, setShowContactInput] = useState(false); // State variable to control Instagram input visibility

  const handleNextClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      setShowContactInput(true);
    } else {
      // Handle the "Done" button click here (e.g., save data, close modal, etc.)
      // You can add your logic for the "Done" button here
    }
  };

  const handleBackClick = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setShowContactInput(false);
    }
  };

  const basicColor = currentStep === 1 ? "#3F84F8" : "#D9D9D9";
  const contactColor = currentStep === 1 ? "#D9D9D9" : "#3F84F8";

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[25rem] bg-slate-300 rounded-[10px] pt-[16px]">
        <div className="flex justify-between pl-[24px] pr-[24px]">
          Add New Profile
          <button className="text-[#999CA0]">X</button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center ml-5">
            Basic <p className="w-[170px]" style={{ backgroundColor: basicColor, height: '1px' }}></p>
          </div>
          <div className="flex flex-col items-center mr-5">
            Contact <p className="w-[170px]" style={{ backgroundColor: contactColor, height: '1px' }}></p>
          </div>
        </div>
        <div className="pl-5 pr-5">
          {currentStep === 1 && ( // Only render these fields on step 1
            <>
              <div className="flex flex-col">
                <label className="font-sans">Enter Name*</label>
                <input
                  className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                  type="text"
                  placeholder="Eg. John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-sans">Enter Email*</label>
                <input
                  className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                  type="text"
                  placeholder="Eg. John@xyz.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-sans">Enter Phone*</label>
                <input
                  className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                  type="text"
                  placeholder="Eg. 9123456789"
                />
              </div>
            </>
          )}

          {/* Conditionally render Instagram input based on showContactInput state */}
          {showContactInput && (
            <div className="flex flex-col">
              <label className="font-sans">Instagram Link(Optional) </label>
              <input
                className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                type="text"
                placeholder="Eg. ..instagram.com/username"
              />
              <label className="font-sans">YouTube Link(Optional)</label>
              <input
                className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                type="text"
                placeholder="Eg. ..youtube.com/username"
              />
            </div>
          )}
        </div>
        <p className="w-[100%] h-[1px] bg-black mt-4"></p>
        <div className="flex justify-end">
          {currentStep === 1 ? (
            <button
              className="bg-[#3E84F8] text-white rounded-md p-2"
              onClick={handleNextClick}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-[#D9D9D9] text-black rounded-md p-2"
              onClick={handleBackClick}
            >
              Back
            </button>
          )}
          {currentStep === 2 && (
            <button
              className="bg-[#3E84F8] text-white rounded-md p-2"
              onClick={handleNextClick}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
