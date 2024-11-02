import React, { useState } from "react";
import Layout from "../components/Layout";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email content
    const { fullName, email, subject, message } = formData;
    const mailtoLink = `mailto:hemanth799@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Optionally, reset the form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-[40px] md:text-[80px] font-semibold mt-[67px] md:mt-[115px]">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-6 items-center">
        <div>
          <p className="text-[15px] md:text-[30px] md:leading-[36px] font-light mt-[20px] md:mt-[40px]">Clover Credit is here for you whenever you need assistance. Whether you have questions about your current line of credit account, or you'd like more info about your line of credit options before applying, or you're just curious about what we offer, we're happy to help!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='mt-[20px] md:mt-[40px]'>
              <input style={{fontFamily: 'Aldrich'}}
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] bg-[#AEB0B0] text-white leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px] placeholder:text-white"
                placeholder="Your full name"
                required
              />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
              <input style={{fontFamily: 'Aldrich'}}
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] bg-[#AEB0B0] text-white leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px] placeholder:text-white"
                placeholder="Your email"
                required
              />
              <p className='text-[15px] ml-3 text-gray-400 mt-1'>We'll never share your email with anyone else.</p>
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
              <input style={{fontFamily: 'Aldrich'}}
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded-[10px] w-full p-[15px] h-[46px] text-white leading-tight focus:outline-none focus:shadow-outline text-[20px] bg-[#AEB0B0] placeholder:text-[20px] placeholder:text-white"
                placeholder="Subject"
                required
              />
            </div>
            <div className='mt-[20px] md:mt-[40px]'>
              <textarea style={{fontFamily: 'Aldrich'}}
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded-[10px] w-full p-[15px] bg-[#AEB0B0] text-white leading-tight focus:outline-none focus:shadow-outline text-[20px] placeholder:text-[20px] h-[200px] placeholder:text-white"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className='text-center'>
              <button type="submit"
                className="w-full md:w-1/2 md:mt-10 md:mx-auto bg-[#00D35B] text-white py-2 px-2 text-[20px] rounded-[10px]">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-10 pl-4 text-center">
          <div>
            <h3 className="font-semibold text-[40px] mb-[5px]">Support Email</h3>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>support@clovercredit.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-[40px] mb-[5px]">Phone</h3>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>833-276-2274</p>
          </div>
          <div>
            <h3 className="font-semibold text-[40px] mb-[5px]">Operating Hours</h3>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>Monday – Friday</p>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>8 AM - 8 PM EST</p>
          </div>
          <div>
            <h3 className="font-semibold text-[40px] mb-[5px]">Location</h3>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>Address Line 1</p>
            <p className='text-[15px] md:text-[30px] md:leading-[36px] font-light'>Address Line 2</p>
          </div>
        </div>
        </div>
        <p className="mb-[55px] md:mb-[115px] "></p>
      </div>
    </Layout>
  );
};

export default ContactForm;
