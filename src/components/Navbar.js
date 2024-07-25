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
      <div className="absolute w-[100%] z-0">
        <div style={{ position: 'relative', minHeight: '19.5vh', background: 'linear-gradient(to bottom, #cde666, #27cb64)' }}>
          <div className="custom-shape-divider-bottom-1720730232">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
      </div>
      <nav className="container mx-auto flex items-center justify-between bg-white shadow-lg mt-2 rounded-lg p-1 pr-3 z-10 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5">
            <div className="headLogo w-[8%] bg-green-600 rounded-lg p-2">
              <StaticImage className="logo" src="../images/icon.png" alt="Clover Credit" />
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
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Login</Link>
          <Link to="/apply" className="text-sm font-semibold leading-6 text-gray-900">Apply</Link>
          <Link to="/faqs" className="text-sm font-semibold leading-6 text-gray-900">FAQs</Link>
          <Link to="/terms" className="text-sm font-semibold leading-6 text-gray-900">Terms</Link>
          <button onClick={openModal} className="cursor-pointer text-sm font-semibold leading-6 text-gray-900">Support</button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <div className="w-[15%] bg-green-600 rounded-lg p-2">
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
                  <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</Link>
                  <Link to="/apply" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Apply</Link>
                  <Link to="/faqs" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQs</Link>
                  <Link to="/terms" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Terms</Link>
                  <button onClick={openModal} className="w-[100%] block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Support</button>
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
