"use client";

import React, { ReactNode } from "react";
import { FiPlus } from "react-icons/fi";

interface CollapsibleProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
  answer?: string;
  children?: ReactNode;
  iconStyle?: string;
  iconPosition?: string;
  classNames?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  question,
  isOpen,
  onClick,
  answer,
  children,
  iconStyle,
  iconPosition,
  classNames,
}) => {
  return (
    <div className={`border-b py-5 ${classNames || ""}`}>
      <div
        onClick={onClick}
        className="flex items-center cursor-pointer justify-between p-5 rounded-lg bg-white transition-colors duration-200"
      >
        <h2
          className={`text-lg font-semibold ${
            isOpen ? "text-blue-600" : "text-darkBlue hover:text-blue-600"
          }`}
        >
          {question}
        </h2>
        <span
          className={`border-2 border-current rounded-full p-1 transition-transform duration-200 ${
            isOpen
              ? "rotate-45 text-blue-600 border-blue-600"
              : "text-darkBlue border-darkBlue hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          <FiPlus className="w-6 h-6" />
        </span>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ease-in-out ${
          isOpen ? "max-h-screen p-5 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        {children || answer}
      </div>
    </div>
  );
};

export default Collapsible;
