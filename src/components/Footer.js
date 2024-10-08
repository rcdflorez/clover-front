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
    <footer
      className="text-black-300 mt-16 pb-5"
      style={{
        background: "linear-gradient(rgb(205, 230, 102), rgb(39, 203, 100))",
      }}
    >
      <div className="relative w-[100%] z-0">
        <div className="custom-shape-divider-top-1720730029">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container mx-auto z-10 relative pt-6 px-6">
        <div className="grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 pt-4">
          <div className="lg:col-span-5 md:col-span-5 sm:col-span-1 footerLogo my-2">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <StaticImage src="../images/logo.png" alt="Clover Credit" />
            </div>
            <div className="text-left">
              <Link
                to="/"
                className="text-sm font-semibold leading-6 text-gray-900 m-1"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
              {/* <Link to="/login" className="text-sm font-medium leading-6 text-gray-900 m-1">Login</Link> */}
              {/* <Link to="/apply" className="text-sm font-medium leading-6 text-gray-900 m-1">Apply</Link> */}
              <Link
                to="/faqs"
                className="text-sm font-medium leading-6 text-gray-900 m-1"
              >
                FAQs
              </Link>
              <Link
                to="/states"
                className="text-sm font-medium leading-6 text-gray-900 m-1"
              >
                States
              </Link>
              <button
                onClick={openModal}
                className="rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 font-medium"
              >
                Support
              </button>
              <Link
                to="/contact"
                className="text-sm font-medium leading-6 text-gray-900 m-1"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <p className="py-1 text-[9px] font-sans text-justify">
                All installment loans are underwritten by Elem Indian Colony of
                Pomo Indians (ELEM) doing business as Clover Credit. Clover
                Credit is a Native American owned business operating within the
                interior boundaries of the Southeastern Lake County of the Pomo
                Nations.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                Elem Indian Colony of Pomo Indians (ELEM), a tribal corporation
                wholly owned by the Elem Indian Colony of Pomo Indians. The Elem
                Indian Colony of Pomo Indians is a local municipal subsidiary
                government under the Pomo Tribe. ELEM is incorporated under and
                governed by the laws of the Pomo Tribe, a federally recognized
                Indian Tribe, and the regulations of the Elem Indian Colony of
                Pomo Indians. ELEM operates independently of the Pomo Tribe.
                Correspondence should be directed to ELEM. As a tribal
                government, the Elem Indian Colony of Pomo Indians is a
                sovereign corporation and follows all applicable tribal and
                federal laws. Clover Credit operates under tribal law, doing
                business as Elem, is not subject to certain state regulations.
                However, consumers should review their state’s laws regarding
                tribal lending for full understanding.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                Typically, Clover Credit reviews your information in real-time
                to determine whether your information meets our lending
                criteria. You acknowledge that by completing and submitting the
                website application that you are applying for a loan. We verify
                applicant information through national databases including, but
                not limited to, Clarity and Factor Trust and we may pull your
                credit to determine your eligibility and ability to repay.
                Please note that pulling your credit may impact your credit
                score.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                Clover Credit does not lend to residents of IL, NY, PA, GA, NC,
                NJ, VA, MA, MD, AL, CT, AR, WV, NH, SD, AK, VT, Guam, Puerto
                Rico, and the US Virgin Islands. Availability of installment
                loans are subject to change at any time at the sole discretion
                of Clover Credit.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                IMPORTANT INFORMATION ABOUT PROCEDURES FOR APPLYING FOR A LOAN –
                To help fight the funding of terrorism and money laundering
                activities, and to comply with Tribal law and the spirit of
                federal law requiring all financial institutions to obtain,
                verify and record information that identifies each person who
                applies for a loan, we will ask for your name, address, date of
                birth, and other information that will allow us to identify you.
                We may also ask for your driver’s license number or other
                identifying documents.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                *Certain events or changes to your information may impact your
                eligibility to receive a loan. If you no longer meet the
                pre-selection criteria, we may offer you a loan in a different
                amount or on different terms. If you reside in a state in which
                we do not provide services, you will be ineligible for a loan.
              </p>

              <p className="py-1 text-[9px] font-sans text-justify">
                To obtain a loan, you must have a valid checking account, e-mail
                address, verifiable identity, and verifiable minimum income.
                Please Note: Installment loans should be used for short-term
                financial needs only, not as a long-term financial solution.
                Customers with credit difficulties should seek credit
                counseling. Clover Credit will only allow a customer to have one
                loan at a time.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 text-center mt-0 md:mt-20 ">
            <div className="mb-5">
              <strong className="text-[16px]">Contact Phone Number:</strong>{" "}
              <br />
              <span className="text-[20px]">833-276-2274</span>
            </div>
            <div className="mb-5">
              <strong className="text-[16px]">Email: </strong>
              <br />
              <span className="text-[20px]">support@clovercredit.com</span>
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
