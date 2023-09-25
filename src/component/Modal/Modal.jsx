import React from "react";
import "./index.css"
const Modal = ({ open,onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e)=>{
        e.stopPropagation()
      }} className="modalContainer">
        <img
          src="https://i.postimg.cc/BvKrxH57/istockphoto-1470130937-170667a.webp"
          alt="image"
        />
        <div className="modalRight">
          <p onClick={onClose}  className="closeBtn">X</p>
          <div className="content">
            <p>Do u want a plant</p>
            <h1>$10 Credit</h1>
            <p>For your garden</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
                <span className="bold">Yes </span> i love plant
            </button>
            <button className="btnOutline">
                <span className="bold">No </span> Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
