import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function Signagreement() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

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
            <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-[128px]">
                <div className='container mx-auto bg-gray-200 md:rounded-[50px]' style={{ boxShadow: '0px 4px 124.9px 0px rgba(0, 0, 0, 0.25)' }}>
                    <div className='md:relative md:z-10'>
                        <header className="topBgDesign relative px-[15px] xl:px-[36px] 2xl:px-[50px] xl:bg-contain">
                            <nav className="container mx-auto flex items-center justify-between bg-white shadow-lg mt-[50px] xl:mt-[40px] 2xl:mt-[50px] rounded-[15px] md:rounded-[20px] p-1 pr-3 z-10 relative top-[30px] h-auto xl:h-[75px] 2xl:h-[100px]" aria-label="Global">

                                {/* Left Side: Logo and Navigation Links */}
                                <div className="flex lg:flex-1">
                                <Link to="/" className="-m-1.5 p-1.5 pr-[45px]">
                                    <div className="headLogo w-[10%] rounded-[13px] p-2">
                                    <StaticImage
                                        className="logo md:ml-2 md:h-[50px] md:w-[62px]"
                                        src="../images/black-icon.png"
                                        alt="Clover Credit"
                                    />
                                    {/* <StaticImage
                                        className="logo block md:hidden md:h-[50px] md:w-[62px]"
                                        src="../images/icon.png"
                                        alt="Clover Credit"
                                    /> */}
                                    </div>
                                </Link>
                                <div className="hidden xl:flex xl:gap-x-[40px] 2xl:gap-x-[55px] items-center">
                                    <Link to="/" className="xl:text-[17px] 2xl:text-[23px] font-normal leading-6 text-black">Home</Link>
                                    <Link to="/about" className="xl:text-[17px] 2xl:text-[23px] font-normal leading-6 text-black">About</Link>
                                    <Link to="/faqs" className="xl:text-[17px] 2xl:text-[23px] font-normal leading-6 text-black">FAQs</Link>
                                    <Link to="/states" className="xl:text-[17px] 2xl:text-[23px] font-normal leading-6 text-black">States</Link>
                                    <button onClick={openModal} className="cursor-pointer xl:text-[17px] 2xl:text-[23px] font-normal leading-6">Support</button>
                                    <Link to="/contact" className="xl:text-[17px] 2xl:text-[23px] font-normal leading-6 text-black">Contact</Link>
                                </div>
                                </div>

                                {/* Right Side: Icons */}
                                <div className="hidden xl:flex items-center gap-x-[15px]">
                                <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
                                <div className="relative">
                                    <input type="text" className="rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full" placeholder="Search..." />
                                    <FontAwesomeIcon icon={faSearch} className="h-5 w-7 text-gray-700 absolute left-2 top-3" />
                                </div>
                                <div className="p-1 rounded-full border mr-[8px]">
                                    <FontAwesomeIcon icon={faUser} className="h-5 w-7 text-gray-700" />
                                </div>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="flex xl:hidden">
                                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMobileMenu}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                                </div>
                            </nav>

                            {/* Mobile Menu */}
                            {isMobileMenuOpen && (
                                <div className="xl:hidden" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 z-10"></div>
                                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                    <Link to="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Clover Credit</span>
                                        <div className="headLogo w-[10%] rounded-[13px] p-2 bg-[#00D35B] md:bg-white">
                                        <StaticImage
                                            className="logo hidden md:block md:ml-2 md:h-[50px] md:w-[62px]"
                                            src="../images/black-icon.png"
                                            alt="Clover Credit"
                                        />
                                        <StaticImage
                                            className="logo block md:hidden md:h-[50px] md:w-[62px]"
                                            src="../images/icon.png"
                                            alt="Clover Credit"
                                        />
                                        </div>
                                    </Link>
                                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMobileMenu}>
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                    <div className="-my-6">
                                        <div className="space-y-2 text-center">
                                        <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Home</Link>
                                        <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">About</Link>
                                        <Link to="/faqs" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">FAQs</Link>
                                        <Link to="/states" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">States</Link>
                                        <button onClick={openModal} className="w-[100%] block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Support</button>
                                        <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Contact</Link>
                                        </div>
                                        <div className="flex flex-col items-center">
                                        {/* <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" /> */}
                                        <div className="relative">
                                            <input type="text" className="rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full" placeholder="Search..." />
                                            <FontAwesomeIcon icon={faSearch} className="h-5 w-7 text-gray-700 absolute left-2 top-3" />
                                        </div>
                                        {/* <div className="p-1 rounded-full border">
                                            <FontAwesomeIcon icon={faUser} className="h-5 w-7 text-gray-700" />
                                        </div> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )}

                            {/* Modal */}
                            {isModalOpen && (
                                <Modal closeModal={closeModal} />
                            )}
                        </header>
                    </div>
                    <div className="mx-auto relative md:mt-[-120px] xl:md:mt-[-120px] 2xl:md:mt-[-80px] z-0">
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 relative">
                            <div className="lg:col-span-7 md:col-span-7 sm:col-span-4">
                                <div className='bg-gray-200 rounded-[50px] mx-[10%] md:mx-auto xl:pl-[35px] 2xl:pl-[50px] pr-2 md:pt-[90px] pb-2 leftDocSec'>
                                    <div className='progressBack mb-3 w-[100%]'>
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
                                    <div className='scrollbar-custom overflow-y-scroll xl:h-[110vh] 2xl:h-[90vh]'>
                                        <div className='bg-white rounded-2xl shadow-xl p-5 md:mr-10 mb-[150px] md:mb-0'>
                                            <p className='commonParagraph mb-14'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='commonParagraph mb-14'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='commonParagraph mb-14'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='commonParagraph mb-14'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                            <p className='commonParagraph mb-14'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p className='commonParagraph mb-14'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='commonParagraph mb-14'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='commonParagraph mb-14'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='commonParagraph mb-14'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                            <p className='commonParagraph mb-14'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                            <p className='commonParagraph mb-14'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='commonParagraph mb-14'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='commonParagraph mb-14'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='commonParagraph mb-14'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                            <p className='commonParagraph mb-14'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p className='commonParagraph pb-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p><p className='commonParagraph mb-14'> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p className='commonParagraph mb-14'> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p><p className='commonParagraph mb-14'> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                            <p className='commonParagraph mb-14'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`lg:col-span-5 md:col-span-5 sm:col-span-2 bg-white px-[10%] md:px-0 rounded-tl-[20px] rounded-tr-[20px] md:rounded-none absolute md:relative ${isExpanded ? 'bottom-[0px]' : 'bottom-[-530px] md:bottom-0'} w-[100%]`} style={{boxShadow: '0px 4px 124.9px 0px rgba(0, 0, 0, 0.25)',}}>
                                <div className='md:px-[45px]'>
                                    <div className='bg-[#D9D9D9] cursor-pointer p-[2px] md:hidden relative top-10 w-1/2 rounded-xl mx-auto toggleBar' onClick={handleToggle}></div>
                                    <div className='flex justify-between items-center flex-wrap md:mt-[90px] mb-[20px] md:mb-[40px] pt-20 md:pt-0'>
                                        <p className='text-[30px] md:text-[37px] xl:text-[30px] 2xl:text-[40px] font-semibold inline'>Line of Credit Amount</p>
                                        <button className="bg-[#00D35B] font-medium text-white p-[5px] md:p-[12px] rounded-[15px] md:rounded-[23px]" type="button">$300.00</button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                                            <input
                                                type="text"
                                                placeholder="Coupon Code"
                                                name="couponCode"
                                                value={formData.couponCode}
                                                onChange={handleInputChange}
                                                className="rounded-[12px] bg-[#AEB0B0] px-[25px] py-[10px] md:py-[20px] mb-[10px] md:mb-[20px] font-medium text-[20px] placeholder:text-[20px] placeholder:text-white"
                                            />
                                            <button className="w-full bg-[#00D35B] md:text-[28px] text-white py-[10px] md:py[20px] mb-[15px] md:mb-[25px] rounded-[15px]" type="button">Apply Coupon</button>
                                            <p className='text-[30px] xl:text-[22.5px] 2xl:text-[30px] mb-[10px] md:mb-[15px]'>Please sign your line of credit agreement</p>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="rounded-[12px] mb-[10px] md:mb-[15px]  bg-[#AEB0B0] font-medium text-[20px] placeholder:text-[20px] placeholder:text-white px-[25px] py-[10px] md:py-[20px]"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="rounded-[12px] mb-[10px] md:mb-[15px]   bg-[#AEB0B0] font-medium text-[20px] placeholder:text-[20px] placeholder:text-white px-[25px] py-[10px] md:py-[20px]"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Last 4 digits of SSN"
                                                name="ssn"
                                                value={formData.ssn}
                                                onChange={handleInputChange}
                                                className="rounded-[12px] mb-[10px] md:mb-[25px] bg-[#AEB0B0] font-medium text-[20px] placeholder:text-[20px] placeholder:text-white px-[25px] py-[10px] md:py-[20px]"
                                            />
                                            <p className='md:text-[20px] mb-[10px] md:mb-[15px]'>How much would you like now?</p>
                                            <div className="flex items-center mb-[20px] md:mb-[40px] relative">
                                                <input
                                                    type="text"
                                                    name="amount"
                                                    value={formData.amount}
                                                    onChange={handleInputChange}
                                                    className="form-input flex-1 rounded-[12px] bg-[#AEB0B0] font-medium text-[20px] placeholder:text-[20px] placeholder:text-white  pl-[25px] py-[10px] md:py-[20px] pr-[100px]"
                                                    placeholder="Amount"
                                                />
                                                <span className="absolute right-[2px] bg-white text-black top-[2px] md:top-[2.5px] rounded-tr-[12px] rounded-br-[12px]  md:font-medium px-[23px] py-[6px] md:py-[16px] text-[20px] border border-gray-400">of $500</span>
                                            </div>
                                            <button className="w-full bg-[#00D35B] text-white py-[10px] md:py[20px] md:text-[28px] mb-[50px] md:mb-[50px]  rounded-[15px]" type="submit">Sign Agreement</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signagreement