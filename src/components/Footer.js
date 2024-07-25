import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <footer className="text-black-300 pt-4 mt-10">
            <div className="absolute w-[100%] z-0">
                <div className="footerBg">
                    <div className="custom-shape-divider-top-1720730029">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container mx-auto z-10 relative pt-6">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2">
                    <div className="footerLogo w-[20%]">
                        <StaticImage src="../images/logo.png" alt="Clover Credit"  />
                    </div>
                    <div className="text-right">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 m-2"><FontAwesomeIcon icon={faHome} /></Link>
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 m-2">Login</Link>
                        <Link to="/apply" className="text-sm font-semibold leading-6 text-gray-900 m-2">Apply</Link>
                        <Link to="/faqs" className="text-sm font-semibold leading-6 text-gray-900 m-2">FAQs</Link>
                        <Link to="/terms" className="text-sm font-semibold leading-6 text-gray-900 m-2">Terms</Link>
                        <button onClick={openModal} className="rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Support</button>
                    </div>
                </div>
                <p className="py-1 text-[9px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </footer>
    )
}