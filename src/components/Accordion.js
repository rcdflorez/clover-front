import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mt-[10px] md:mt-[20px] ">
      <button
        className="w-full text-left px-4 py-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="px-4 py-2 text-gray-700"
        ></div>
      )}
    </div>
  );
};

export default Accordion;
