import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language] = useState([
    "English",
    "Spanish",
    "Chinese",
    "Tagalog",
    "Vietnamese",
    "French",
    "Korean",
    "German",
    "Arabic",
    "Russian",
    "Italian",
    "Portuguese",
    "Hindi",
    "Polish",
    "Japanese",
    "Persian",
    "Greek",
    "Urdu",
    "Gujarati",
    "Hebrew",
    "Armenian",
    "Hmong",
    "Punjabi",
    "Telugu",
    "Bengali",
    "Tamil",
    "Navajo",
    "Khmer",
    "Thai",
    "Serbo-Croatian",
    "Haitian Creole",
    "Yiddish",
    "Lao",
    "Swahili",
    "Somali",
    "Czech",
    "Dutch",
    "Turkish",
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const languageHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

    return (
        <footer className="bottomBgDesign text-black-300 mt-5 md:mt-16">
          <div className="container mx-auto z-10 relative pt-6 px-6">
              <div className="grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 pt-4">
                  <div className="lg:col-span-5 md:col-span-5 sm:col-span-1 footerLogo my-2">
                      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                          <StaticImage src="../images/logo.png" alt="Clover Credit" />
                      </div>
                      <div className="text-left flex md:block items-center justify-between">
                          <Link to="/" className="text-[16px] font-normal leading-6 text-black m-1"><FontAwesomeIcon icon={faHome} /></Link>
                          {/* <Link to="/login" className="text-sm font-medium leading-6 text-gray-900 m-1">Login</Link> */}
                          {/* <Link to="/apply" className="text-sm font-medium leading-6 text-gray-900 m-1">Apply</Link> */}
                          <Link to="/faqs" className="text-[16px] font-normal leading-6 text-black m-1">FAQs</Link>
                          <Link to="/states" className="text-[16px] font-normal leading-6 text-black m-1">States</Link>
                          <button onClick={openModal} className="rounded-lg px-3 py-2 text-[16px] leading-6 text-black font-normal">Support</button>
                          <Link to="/contact" className="text-[16px] font-normal leading-6 text-black m-1">Contact Us</Link>
                      </div>
                      <div className="font-normal text-black">
                          <p className="py-1 text-[10px] font-sans text-justify">All installment loans are underwritten by Pomo Gold JEM doing business as Clover Credit. Clover Credit is a Native American owned business operating within the interior boundaries of the Pine Ridge Reservation of the Oglala Sioux Tribe, a sovereign nation located in the United States.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">Pomo Gold JEM is an entity of the Elem Indian Colony of Pomo Indians (ELEM), a tribal corporation wholly owned by the Elem Indian Colony of Pomo Indians. The Elem Indian Colony of Pomo Indians is a local municipal subsidiary government under the Oglala Sioux Tribe. ELEM is incorporated under and governed by the laws of the Oglala Sioux Tribe, a federally recognized Indian Tribe, and the regulations of the Elem Indian Colony of Pomo Indians. ELEM operates independently of the Oglala Sioux Tribe. Correspondence should be directed to ELEM. As a tribal government, the Elem Indian Colony of Pomo Indians is a sovereign corporation and follows all applicable tribal and federal laws. State laws, regulations, and interest rates are not applicable to Pomo Gold JEM DBA Clover Credit or ELEM.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">Typically, Clover Credit reviews your information in real-time to determine whether your information meets our lending criteria. You acknowledge that by completing and submitting the website application that you are applying for a loan. We verify applicant information through national databases including, but not limited to, Clarity and Factor Trust and we may pull your credit to determine your eligibility and ability to repay.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">Clover Credit does not lend to residents of IL, NY, PA, GA, NC, NJ, VA, MA, MD, AL, CT, AR, WV, NH, SD, AK, VT, Guam, Puerto Rico, and the US Virgin Islands. Availability of installment loans are subject to change at any time at the sole discretion of Clover Credit.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">IMPORTANT INFORMATION ABOUT PROCEDURES FOR APPLYING FOR A LOAN – To help fight the funding of terrorism and money laundering activities, and to comply with Tribal law and the spirit of federal law requiring all financial institutions to obtain, verify and record information that identifies each person who applies for a loan, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask for your driver’s license number or other identifying documents.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">*Certain events or changes to your information may impact your eligibility to receive a loan. If you no longer meet the pre-selection criteria, we may offer you a loan in a different amount or on different terms. If you reside in a state in which we do not provide services, you will be ineligible for a loan.</p>

                          <p className="py-1 text-[10px] font-sans text-justify">To obtain a loan, you must have a valid checking account, e-mail address, verifiable identity, and verifiable minimum income. Please Note: Installment loans should be used for short-term financial needs only, not as a long-term financial solution. Customers with credit difficulties should seek credit counseling. Clover Credit will only allow a customer to have one loan at a time.</p>
                      </div>
                  </div>
                  <div className="lg:col-span-2 md:col-span-2 text-center mt-0 md:mt-20 ">
                      <div className="mb-5">
                          <strong className="text-[16px]">Contact Phone Number:</strong> <br /><span className="text-[20px]">833-276-2274</span>
                      </div>
                      <div className="mb-5">
                          <strong className="text-[16px]">Email: </strong><br /><span className="text-[20px]">support@clovercredit.com</span>
                      </div>
                      {/* <div className="">
                          <strong className="text-[18px]">Language: </strong><br />
                          <select onChange={(e) =>languageHandler(e)} className="mb-5 w-full md:w-1/2 bg-gray-400 text-white rounded-sm p-1 mx-1 text-center">
                              {language.map((lang, index) => (
                                  <option key={index} value={lang}>{lang}</option>
                              ))}
                          </select>
                      </div> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-4 border-t border-gray-800 p-2">
          <div className="text-center md:text-right text-md">
            <a target="_blank" href="/privacy_policy.pdf">
              Privacy Policy
            </a>
          </div>
          <div className="text-center hidden md:inline-block">|</div>
          <div className="text-center md:text-left text-md">
            <a target="_blank" href="/Terms_of_Use.pdf">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </footer>
  );
}
