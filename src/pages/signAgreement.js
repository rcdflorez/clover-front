import React, { useState } from 'react';
import Layout from '../components/Layout';

function Signagreement() {

    const [formData, setFormData] = useState({
        couponCode: '',
        firstName: '',
        lastName: '',
        ssn: '',
        amount: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(JSON.stringify(formData, null, 2)); // Log form data as JSON
    };

    return (
        <React.Fragment>
            <Layout>
                <div className="mx-auto">
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 pt-4 gap-4">
                        <div className="lg:col-span-7 md:col-span-7 sm:col-span-4">
                            <div className='bg-gray-200 pl-10 pr-2 pt-5 pb-2 leftDocSec'>
                                <div className='progressBack mb-3 w-[90%]'>
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <span className="text-xs font-semibold inline-block py-1 px-2 rounded bg-white text-black">
                                                Back
                                            </span>
                                            {/* <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200">
                                                70%
                                            </span> */}
                                        </div>
                                        <div className="flex-1">
                                            <div className="relative flex items-center justify-between">
                                                <div className="w-full bg-white rounded-full h-1">
                                                    <div className="absolute top-0 left-0 h-1 bg-[#00d35b] rounded-full" style={{width: '25%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='scrollbar-custom overflow-y-scroll'>
                                    <div className='bg-white rounded-2xl shadow-xl p-5 mr-10'>
                                        <p className='pb-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='pb-3'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='pb-3'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='pb-3'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                        <p className='pb-3'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p className='pb-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='pb-3'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='pb-3'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='pb-3'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                        <p className='pb-3'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 md:col-span-5 sm:col-span-2">
                            <div className='px-5 py-2 md:mr-5'>
                                <div className='flex justify-between flex-wrap'>
                                    <h1 className='text-2xl inline mr-5 font-bold'>Line of Credit Amount</h1>
                                    <button className="bg-[#00D35B] text-white py-1 px-5 rounded-lg" type="button">$300</button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pt-4 gap-2">
                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                            name="couponCode"
                                            value={formData.couponCode}
                                            onChange={handleInputChange}
                                            className="rounded-lg bg-gray-300 p-2"
                                        />
                                        <button className="w-full bg-[#00D35B] text-white py-1 px-5 rounded-lg" type="button">Apply Coupon</button>
                                        <p className='text-sm mt-2'>Please sign your line of credit agreement</p>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="rounded-lg bg-gray-300 p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="rounded-lg bg-gray-300 p-2"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Last 4 digits of SSN"
                                            name="ssn"
                                            value={formData.ssn}
                                            onChange={handleInputChange}
                                            className="rounded-lg bg-gray-300 p-2"
                                        />
                                        <p className='text-sm mt-2'>How much would you like now?</p>
                                        <div className="flex items-center mb-2 relative">
                                            <input
                                                type="text"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                className="form-input flex-1 rounded-lg bg-gray-300 p-2 pr-[100px]"
                                                placeholder="Amount"
                                            />
                                            <span className="absolute right-1 bg-white text-black px-3 py-1 rounded-md">of $500</span>
                                        </div>
                                        <button className="w-full bg-[#00D35B] text-white py-1 px-5 rounded-lg mt-4" type="submit">Sign Agreement</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Signagreement