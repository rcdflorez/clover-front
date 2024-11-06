import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Modal({ closeModal }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90 p-2">
      <div className="bg-white rounded-[15px] shadow-xl max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] mx-auto p-[15px] sm:p-[20px] md:p-[25px] bg-opacity-90 relative h-auto sm:max-h-[80vh] md:max-h-[70vh] lg:max-h-[80vh] xl:max-h-auto">
        <span onClick={closeModal} className="absolute right-4 top-4 h-[20px] w-[20px] cursor-pointer bg-gray-800 rounded-[50px] text-xs text-white px-[3px]">
          <FontAwesomeIcon icon={faClose} className="text-[20px]" />
        </span>
        <h2 className="font-semibold text-[32px] sm:text-[36px] md:text-[40px] mt-[30px] md:mt-[50px] lg:mt-[10px] xl:mt-[50px]">
          Contact Management
        </h2>
        <p className="font-light text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] mt-[25px] md:mt-[40px] lg:mt-[10px] xl:mt-[40px]">
          We are here to help. Feel free to reach out to a manager. Customer service is our first priority. Fill out this quick form and we will contact you as quickly as possible.
        </p>
        <form onSubmit={handleSubmit} className="lg:overflow-y-scroll xl:overflow-auto lg:h-[40vh] xl:h-[45vh] 2xl:h-auto">
          <div className="mt-[25px] sm:mt-[30px] md:mt-[40px] lg:mt-[20px]">
            <input
              style={{ fontFamily: 'Aldrich' }}
              className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px]"
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="mt-[20px] md:mt-[15px]">
            <input
              style={{ fontFamily: 'Aldrich' }}
              className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px]"
              id="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <span className="mt-[25px] sm:mt-[30px] md:mt-[40px] block text-[20px] text-[#A0A0A0]" style={{ fontFamily: 'Aldrich' }}>
            Message
          </span>
          <div className="mt-[20px] md:mt-[10px]">
            <input
              style={{ fontFamily: 'Aldrich' }}
              className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px]"
              id="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mt-[20px] md:mt-[15px]">
            <textarea
              style={{ fontFamily: 'Aldrich' }}
              className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[167px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px]"
              id="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full md:w-1/2 mt-[25px] md:mt-[20px] mb-0 md:mb-[25px] md:mx-auto bg-[#00D35B] text-white py-2 px-2 text-[20px] rounded-[10px]" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}
