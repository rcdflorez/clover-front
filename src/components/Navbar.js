import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="topBgDesign relative px-[15px] xl:px-[36px] 2xl:px-[50px] xl:bg-contain">
      <nav className="container mx-auto flex items-center justify-between bg-white shadow-lg mt-[50px] xl:mt-[40px] 2xl:mt-[50px] rounded-[15px] md:rounded-[20px] p-1 pr-3 z-10 relative h-auto xl:h-[75px] 2xl:h-[100px]" aria-label="Global">

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
  );
}
