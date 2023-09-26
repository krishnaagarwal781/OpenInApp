"use client";
import React, { useState } from "react";
import { PiWhatsappLogo } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import {RxCross1} from 'react-icons/rx'

const Modal2 = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showContactInput, setShowContactInput] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [showValues, setShowValues] = useState(false);

  const areRequiredFieldsFilled = () => {
    return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
  };

  const handleNextClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      setShowContactInput(true);
    } else {
      if (areRequiredFieldsFilled()) {
        setShowValues(true);
      } else {
        alert("Please fill in all required fields (Name, Email, Phone).");
      }
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
      {showValues ? (
        <div className="w-[25rem] bg-slate-300 rounded-[10px] pt-[16px]">
          <div className="flex justify-between pl-[24px] pr-[24px]">
            <h1 className="text-[30px]">{name}</h1>
          </div>
          <div className="pl-5 pr-5">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-[50%] bg-green-100 flex justify-center items-center">
                <PiWhatsappLogo color="green" size="25px" />
              </div>
              <span>{phone}</span>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-[50%] bg-purple-200 flex justify-center items-center">
                <CiMail color="purple" size="25px" />
              </div>
              <span>{email}</span>
            </div>
            {instagram && (
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 rounded-[50%] bg-red-200 flex justify-center items-center">
                    <AiOutlineInstagram color="red" size="25px" />
                  </div>
                </a>
                <span>
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    {instagram}
                  </a>
                </span>
              </div>
            )}
            {youtube && (
              <div className="flex items-center">
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 rounded-[50%] bg-red-300 flex justify-center items-center">
                    <AiOutlineYoutube color="red" size="25px" />
                  </div>
                </a>
                <span>
                  <a href={youtube} target="_blank" rel="noopener noreferrer">
                    {youtube}
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-[29rem] bg-white rounded-[10px] pt-[16px]">
          <div className="flex justify-between px-6 font-bold py-2">
            Add New Profile
            <button className="text-[#999CA0]" onClick={onClose}>
              <RxCross1 size={24}/>
            </button>
          </div>

          <p className="w-[100%] h-[1px] bg-gray-100 my-2"></p>

          <div className="flex justify-between">
            <div className="flex flex-col items-center ml-5 font-semibold py-4">
              Basic{" "}
              <p
                className="w-48 mt-2 rounded-full"
                style={{ backgroundColor: basicColor, height: "4px" }}
              ></p>
            </div>
            <div className="flex flex-col items-center mr-5 font-semibold py-4">
              Contact{" "}
              <p
                className="w-48 mt-2 rounded-full"
                style={{ backgroundColor: contactColor, height: "4px" }}
              ></p>
            </div>
          </div>
          <div className="pl-5 pr-5">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="font-sans text-gray-900 font-semibold mb-2 ">Enter Name*</label>
                  <input
                    className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                    type="text"
                    placeholder="Eg. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-sans text-gray-900 font-semibold mb-2 ">Enter Email*</label>
                  <input
                    className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                    type="text"
                    placeholder="Eg. John@xyz.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-sans text-gray-900 font-semibold mb-2 ">Enter Phone*</label>
                  <input
                    className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB]"
                    type="text"
                    placeholder="Eg. 9123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            )}

            {showContactInput && (
              <div className="flex flex-col space-y-2">
                <label className="font-sans font-semibold text-gray-900">Instagram Link <span className="text-gray-400">(Optional)</span> </label>
                <input
                  className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB] mb-2"
                  type="text"
                  placeholder="Eg. ..instagram.com/username"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="font-sans font-semibold text-gray-900">YouTube Link <span className="text-gray-400">(Optional)</span></label>
                <input
                  className="pl-3 pr-3 pt-2 pb-2 font-sans rounded-[5px] border-2 border-solid border-[#EBEBEB] mb-2"
                  type="text"
                  placeholder="Eg. ..youtube.com/username"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                />
              </div>
            )}
          </div>
          <p className="w-[100%] h-[1px] bg-gray-100 my-4"></p>
          <div className="flex justify-end m-4">
            {currentStep === 1 ? (
              <button
                className={`bg-[#3E84F8] text-white rounded-md px-4 py-2 ${
                  !areRequiredFieldsFilled() && "cursor-not-allowed opacity-50"
                }`}
                onClick={handleNextClick}
                disabled={!areRequiredFieldsFilled()}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-[#D9D9D9] text-black rounded-md px-4 py-2 mr-3"
                onClick={handleBackClick}
              >
                Back
              </button>
            )}
            {currentStep === 2 && (
              <button
                className="bg-[#3E84F8] text-white rounded-md px-4 py-2"
                onClick={handleNextClick}
              >
                Done
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal2;
