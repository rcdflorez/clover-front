import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContactForm = () => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
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
    // Optionally, you can add form submission logic here (e.g., send data to a server)
  };
  return (
    <Layout>
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="mb-4">Clover Credit is here for you whenever you need assistance. Whether you have questions about your current line of credit account, or you'd like more info about your line of credit options before applying, or you're just curious about what we offer, we're happy to help!</p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="rounded-3xl bg-gray-300 p-2 w-full"
                            placeholder="Your full name"
                        />
                        </div>
                        <div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-3xl bg-gray-300 p-2 w-full"
                            placeholder="Your email"
                            />
                            <p className='text-xs ml-3 text-gray-400 mt-1'>We'll never share your email with anyone else.</p>
                        </div>
                        <div>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="rounded-3xl bg-gray-300 p-2 w-full"
                            placeholder="Subject"
                        />
                        </div>
                        <div>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="rounded-3xl bg-gray-300 p-2 w-full"
                            placeholder="Your message"
                        ></textarea>
                        </div>
                        <div className=' text-center'>
                        <button  type="submit"
                            className="hover:shadow-lg text-white rounded-md bg-[#00D35B] py-2 px-4 lg:py-1 w-full md:w-[25%] lg:w-[75%]">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="space-y-10 pl-4">
                    <div>
                        <h3 className="text-[22px] font-bold mb-[5px] text-left">Support Email</h3>
                        <p>support@clovercredit.com</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold mb-[5px] text-left">Phone</h3>
                        <p>833-276-2274</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold mb-[5px] text-left">Operating Hours</h3>
                        <p>Monday - Friday</p>
                        <p>8 AM - 8 PM EST</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-bold mb-[5px] text-left">Location</h3>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default ContactForm;
