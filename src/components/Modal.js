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
      <div className="bg-white rounded-lg shadow-xl max-w-lg mx-auto p-6 bg-opacity-90 relative">
        <span onClick={closeModal} className="absolute right-4 top-4 cursor-pointer bg-gray-800 rounded-[50px] text-xs text-white px-[3px]">
          <FontAwesomeIcon icon={faClose} />
        </span>
        <h2 className="text-lg font-bold mb-4">Contact Management</h2>
        <p className="mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <span className="mb-1 block text-[14px]">Message</span>
          <div className="mb-1">
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-1 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <textarea
              className="shadow-md border border-gray-300 rounded-md w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-400"
              id="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full bg-green-600 text-white py-1 px-2 rounded-lg" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
