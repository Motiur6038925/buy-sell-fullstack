"use client";

import { useState } from "react";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className=" flex items-center  ">
      <div className=" flex items-center justify-between">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
