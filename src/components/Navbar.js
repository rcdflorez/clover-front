import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Modal from "./Modal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="topBgDesign relative">
      <nav className="container mx-auto flex items-center justify-normal bg-white shadow-lg mt-[30px] rounded-[10px] md:rounded-[20px] p-1 pr-3 z-10 relative w-[90%] lg:w-[95%] h-auto md:h-[100px]" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <div className="headLogo w-[10%] rounded-lg p-2 bg-[#00D35B] md:bg-white">
              <StaticImage
                className="logo hidden md:block md:h-[50px] md:w-[62px]"
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
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16">
          <Link to="/" className="text-[23px] font-normal leading-6 text-black hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2 transition-all duration-200">Home</Link>
          {/* <Link to="/login" className="text-sm font-normal leading-6 text-gray-900 hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2">Login</Link> */}
          {/* <Link to="/apply" className="text-sm font-normal leading-6 text-gray-900 hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2">Apply</Link> */}
          <Link to="/faqs" className="text-[23px] font-normal leading-6 text-black hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2 transition-all duration-200">FAQs</Link>
          <Link to="/states" className="text-[23px] font-normal leading-6 text-black hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2 transition-all duration-200">States</Link>
          <button onClick={openModal} className="cursor-pointer text-[23px] font-normal leading-6 hover:bg-[#00d35b] text-black hover:rounded-3xl p-4 px-2 transition-all duration-200">Support</button>
          <Link to="/contact" className="text-[23px] font-normal leading-6 text-black hover:bg-[#00d35b] hover:rounded-3xl p-4 px-2 transition-all duration-200">Contact Us</Link>
        </div>

      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Clover Credit</span>
                <div className="w-[15%] bg-[#00d35b] rounded-lg p-2">
                  <StaticImage className="logo" src="../images/icon.png" alt="Clover Credit" />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-center">
                  <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Home</Link>
                  {/* <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</Link> */}
                  {/* <Link to="/apply" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Apply</Link> */}
                  <Link to="/faqs" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">FAQs</Link>
                  <Link to="/states" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">states</Link>
                  <button onClick={openModal} className="w-[100%] block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Support</button>
                  <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-[23px] font-semibold leading-7 text-black hover:bg-gray-50">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Modal closeModal={closeModal} />
      )}
    </header>
  );
}
