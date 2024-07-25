import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
            <div className="container mx-auto z-10 relative pt-6 px-6">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2">
                    <div className="footerLogo w-[20%] my-2">
                        <StaticImage src="../images/logo.png" alt="Clover Credit"  />
                    </div>
                    <div className="md:text-right sm:text-left">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 m-1"><FontAwesomeIcon icon={faHome} /></Link>
                        <Link to="/login" className="text-sm font-medium leading-6 text-gray-900 m-1">Login</Link>
                        <Link to="/apply" className="text-sm font-medium leading-6 text-gray-900 m-1">Apply</Link>
                        <Link to="/faqs" className="text-sm font-medium leading-6 text-gray-900 m-1">FAQs</Link>
                        <Link to="/terms" className="text-sm font-medium leading-6 text-gray-900 m-1">Terms</Link>
                        <button onClick={openModal} className="rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 font-medium">Support</button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-2 gap-2 mt-2 border-t-2 border-gray-600 border-b-2 text-center mb-2">
                    <div><strong>Contact:</strong> 833-276-2274</div>
                    <div><strong>Email: </strong> support@clovercredit.com</div>
                </div>
                <p className="py-1 text-[9px] font-sans text-justify">All installment loans are underwritten by WLCC Lending JEM doing business as Clover Credit. Clover Credit is a Native American owned business operating within the interior boundaries of the Pine Ridge Reservation of the Oglala Sioux Tribe, a sovereign nation located in the United States.</p>

                <p className="py-1 text-[9px] font-sans text-justify">WLCC Lending JEM is an entity of the Wakpamni Lake Community Corporation (WLCC), a tribal corporation wholly owned by the Wakpamni Lake Community. The Wakpamni Lake Community is a local municipal subsidiary government under the Oglala Sioux Tribe. WLCC is incorporated under and governed by the laws of the Oglala Sioux Tribe, a federally recognized Indian Tribe, and the regulations of the Wakpamni Lake Community. WLCC operates independently of the Oglala Sioux Tribe. Correspondence should be directed to WLCC. As a tribal government, the Wakpamni Lake Community Corporation is a sovereign corporation and follows all applicable tribal and federal laws. State laws, regulations, and interest rates are not applicable to WLCC Lending JEM DBA Clover Credit or WLCC.</p>

                <p className="py-1 text-[9px] font-sans text-justify">Typically, Clover Credit reviews your information in real-time to determine whether your information meets our lending criteria. You acknowledge that by completing and submitting the website application that you are applying for a loan. We verify applicant information through national databases including, but not limited to, Clarity and Factor Trust and we may pull your credit to determine your eligibility and ability to repay.</p>

                <p className="py-1 text-[9px] font-sans text-justify">Clover Credit does not lend to residents of IL, NY, PA, GA, NC, NJ, VA, MA, MD, AL, CT, AR, WV, NH, SD, AK, VT, Guam, Puerto Rico, and the US Virgin Islands. Availability of installment loans are subject to change at any time at the sole discretion of Clover Credit.</p>

                <p className="py-1 text-[9px] font-sans text-justify">IMPORTANT INFORMATION ABOUT PROCEDURES FOR APPLYING FOR A LOAN – To help fight the funding of terrorism and money laundering activities, and to comply with Tribal law and the spirit of federal law requiring all financial institutions to obtain, verify and record information that identifies each person who applies for a loan, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask for your driver’s license number or other identifying documents.</p>

                <p className="py-1 text-[9px] font-sans text-justify">*Certain events or changes to your information may impact your eligibility to receive a loan. If you no longer meet the pre-selection criteria, we may offer you a loan in a different amount or on different terms. If you reside in a state in which we do not provide services, you will be ineligible for a loan.</p>

                <p className="py-1 text-[9px] font-sans text-justify">To obtain a loan, you must have a valid checking account, e-mail address, verifiable identity, and verifiable minimum income. Please Note: Installment loans should be used for short-term financial needs only, not as a long-term financial solution. Customers with credit difficulties should seek credit counseling. Clover Credit will only allow a customer to have one loan at a time.</p>
                
            </div>
            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </footer>
    )
}