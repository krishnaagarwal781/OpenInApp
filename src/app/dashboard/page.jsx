"use client"
import React, { useState } from "react";
import "./index.css";
import Modal from "@/component/Modal/Modal";
const dashboard = () => {
  const[openModal,setOpenModal]=useState(false)
  return (
    <div className="w-[250px] h-[250px] bg-blue-200 flex justify-center items-center text-[40px]">
      <div className="w-10 h-10 border rounded-full flex justify-center items-center">
      <button className="modalBtn" onClick={()=> setOpenModal(true)}>+</button>
      <Modal open = {openModal} onClose={()=>setOpenModal(false)}/>
      </div>
    </div>
  );
};

export default dashboard;
