import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);
  const [inputType, setInputType] = useState('text')

  const [states, setStates] = React.useState([
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ])

  const [dlstate, setDlstates] = React.useState([
    "AL", "AK", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
    "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA",
    "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "NE", "NH",
    "NJ", "NM", "NV", "NY", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WI", "WV", "WY"
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    cellPhone: "",
    homePhone: "",
    address1: "",
    address2: "",
    zipCode: "",
    city: "",
    state: "",
    years: "",
    months: "",
    rentOwn: "",
    maritalStatus: "",
    drivingLicenseNumber: "",
    dlState: "",
    activeMilitary: "",
    email: "",
    ssn: "",
    dob: ""
  });

  const [financialDetails, setFinancialDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    bankName: "",
    accountType: "",
    yearsOpen: "",
    monthsOpen: "",
    monthlyIncome: "",
    incomeSource: "",
    ecoaDisclosure: "ECOA Disclosure",
    payFrequency: "",
    directDeposit: "",
    nextPayDate: "",
    employer: "",
    employerCellPhone: "",
    employerAddress: "",
    employerAddress2: "",
    employerZipCode: "",
    employerCity: "",
    employerState: "",
    jobTitle: "",
    jobYears: "",
    jobMonths: ""
  });

  const [agreementDetails, setAgreementDetails] = useState({
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    electronicDisclosure: "Electronic Disclosure",
    creditPullAuthorization: "Credit Pull Authorization",
  });

  const handlePersonalInfoChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPersonalInfo((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinancialDetailsChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFinancialDetails((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAgreementDetailsChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAgreementDetails((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e, tabIndex) => {
    e.preventDefault();
    
    if (tabIndex === 1) {
      console.log("Personal Info:", personalInfo);
      setCurrentTab(tabIndex);
    } else if (tabIndex === 2) {
      console.log("Financial Details:", financialDetails);
      setCurrentTab(tabIndex);
    } else if (tabIndex === 3) {
      console.log("Agreement Details:", agreementDetails);
      setCurrentTab(tabIndex);
      window.location.href = "/login"; // Redirect to login page
    }

    setCurrentTab(tabIndex);
  };

  const handleBack = () => {
    setCurrentTab((prev) => Math.max(prev - 1, 0)); // Go to the previous tab
  };

  const tabs = [
    {
      title: "Review Your Loan Application",
      content: (
        <form className="text-[12px]" onSubmit={(e) => handleSubmit(e, 1)}>
          <div className="">
            <div className="grid md:grid-cols-[1fr_2fr_4fr_4fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-5">
              <input
                type="text"
                placeholder="First Name"
                
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] md:w-[190px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Last Name"
                
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] md:w-[225px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Cell Phone"
                
                name="cellPhone"
                value={personalInfo.cellPhone}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Home Phone"
                
                name="homePhone"
                value={personalInfo.homePhone}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
              <div className="grid md:grid-cols-[4fr_4fr_4fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-0">
                <div className="flex justify-between items-baseline gap-2 rounded-[22px] bg-gray-300 px-[15px] py-[13px]">
                  <label className="flex items-start">
                    <input type="checkbox" className="hidden" />
                    <span className="checkmark rounded-full"></span>
                    <span className="ml-2">
                      I would like to opt-in and receive text messages related to my
                      account and application status and agree to the Terms of
                      Service and Privacy Policy. Message frequency varies. Msg &
                      data rates may apply. Reply STOP, HELP for help.
                    </span>
                  </label>
                </div>
              </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mb-[25px] gap-2">
              <input
                type="text"
                placeholder="Address Line 1"
                
                name="address1"
                value={personalInfo.address1}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <span className="mb-[10px] block">Time & Address</span>
            <div className="grid md:grid-cols-[4fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-5">
              <input
                type="text"
                placeholder="Address Line 2"
                
                name="address2"
                value={personalInfo.address2}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] md:w-[445px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="ZIP CODE"
                
                name="zipCode"
                value={personalInfo.zipCode}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="City"
                
                name="city"
                value={personalInfo.city}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <select
                name="state"
                value={personalInfo.state}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none"
              >
                <option value="" disabled>State</option>
                {states.map((state, index) => 
                  <option key={index}>{state}</option>
                )}
              </select>
              <span className="relative right-12 top-[30px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
              </span>
            </div>
            <div className="grid md:grid-cols-[2fr_2fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Years"
                
                name="years"
                value={personalInfo.years}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Months"
                
                name="months"
                value={personalInfo.months}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] md:w-[225px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <div className="relative">
                <select
                  name="rentOwn"
                  value={personalInfo.rentOwn}
                  onChange={handlePersonalInfoChange}
                  className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="">Rent / Own</option>
                  <option value="Rent">Rent</option>
                  <option value="Own">Own</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <select
                name="maritalStatus"
                value={personalInfo.maritalStatus}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none"
              >
                <option value="">Marital Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
              <span className="relative right-12 top-[30px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
              </span>
            </div>
            <div className="grid md:grid-cols-[4fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Driving License Number (9 Digits)"
                
                name="drivingLicenseNumber"
                value={personalInfo.drivingLicenseNumber}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] md:w-[445px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <div className="relative">
                <select
                  name="dlState"
                  value={personalInfo.dlState}
                  onChange={handlePersonalInfoChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="" disabled>DL State</option>
                  {dlstate.map((state, index) => 
                    <option key={index} value={state}>{state}</option>
                  )}
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <div className="relative">
                <select
                  name="activeMilitary"
                  value={personalInfo.activeMilitary}
                  onChange={handlePersonalInfoChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="">Active Military</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <input
                type="email"
                placeholder="E-mail Address"
                
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="grid md:grid-cols-[4fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-4 md:mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Social Security Number (000-00-0000)"
                
                name="ssn"
                value={personalInfo.ssn}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] md:w-[445px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type={inputType}
                placeholder="DOB (mm/dd/yyyy)"
                
                name="dob"
                value={personalInfo.dob}
                onChange={handlePersonalInfoChange}
                onBlur={() => setInputType('text')}
                onFocus={() => setInputType('date')}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="ZIP CODE"
                
                name="zipCode"
                value={personalInfo.zipCode}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold hidden"
              />
              <input
                type="text"
                placeholder="City"
                
                name="city"
                value={personalInfo.city}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold hidden"
              />
              <select
                name="state"
                value={personalInfo.state}
                onChange={handlePersonalInfoChange}
                className="rounded-[50px] bg-gray-300  px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold hidden"
              >
                <option value="" disabled>State</option>
                {states.map((state, index) => 
                  <option key={index}>{state}</option>
                )}
              </select>
            </div>
            <div className="grid md:grid-cols-[4fr_4fr_4fr] sm:grid-cols-1 mb-2 md:mb-[35px] gap-0">
              <div className="flex justify-between items-baseline gap-2 rounded-[22px] bg-gray-300 px-[15px] py-[13px]">
                <label className="flex items-start md:w-[415px]">
                  <input type="checkbox" className="hidden" />
                  <span className="checkmark rounded-full"></span>
                  <span className="ml-2">
                    By checking this box I agree that I have read the privacy policy and consent to Explore Credit, LLC using the information provided to contact me about this inquiry. Standard messaging and data rates may apply, message frequency may vary.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-[95px]">
            <button
               onClick={(e) => { e.preventDefault(); handleBack(); }}
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#DFDFDF] text-black rounded-[5px]"
            >
              {`Back`}
            </button>
            <button
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-[5px]"
            >
              {`Save & Continue >`}
            </button>
          </div>
        </form>
      ),
    },
    {
      title: "Review Your Loan Application",
      content: (
        <form className="text-[12px]" onSubmit={(e) => handleSubmit(e, 2)}>
          <div className="">
            <span className="mb-[10px] block">Bank Account Details</span>
            <div className="grid md:grid-cols-[2fr_2fr_4fr_2fr_2fr] sm:grid-cols-1 mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Account Number"
                
                name="accountNumber"
                value={financialDetails.accountNumber}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Routing Number"
                
                name="routingNumber"
                value={financialDetails.routingNumber}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Bank Name"
                
                name="bankName"
                value={financialDetails.bankName}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <div className="relative">
                <select
                  name="accountType"
                  value={financialDetails.accountType}
                  onChange={handleFinancialDetailsChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="">Account Type</option>
                  <option value="checking">Checking</option>
                  <option value="saving">Saving</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
            </div>
            <span className="mb-[10px] block">How long has it been open?</span>
            <div className="grid md:grid-cols-[2fr_2fr_4fr_4fr] sm:grid-cols-1 mb-2 md:mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Years"
                
                name="yearsOpen"
                value={financialDetails.yearsOpen}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Months"
                
                name="monthsOpen"
                value={financialDetails.monthsOpen}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="grid md:grid-cols-[4fr_4fr_4fr] sm:grid-cols-1 mb-2 md:mb-[35px] gap-0">
              <div className="flex justify-between items-baseline gap-2 rounded-[22px] bg-gray-300 px-[15px] py-[13px]">
                <label className="flex items-start">
                  <input type="checkbox" className="hidden" />
                  <span className="checkmark rounded-full"></span>
                  <span className="ml-2">
                    I would like to opt-in and receive text messages related to my
                    account and application status and agree to the Terms of
                    Service and Privacy Policy. Message frequency varies. Msg &
                    data rates may apply. Reply STOP, HELP for help.
                  </span>
                </label>
              </div>
            </div>

            <span className="mb-[10px] block">Income Details</span>
            <div className="grid md:grid-cols-[2fr_2fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-2 md:mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Monthly Income"
                
                name="monthlyIncome"
                value={financialDetails.monthlyIncome}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <div className="relative">
                <select
                  name="incomeSource"
                  value={financialDetails.incomeSource}
                  onChange={handleFinancialDetailsChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="" disabled>Income Source</option>
                  <option value="employed">Employed</option>
                  <option value="self">Self-Employed</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <div className="relative">
                <select
                  name="payFrequency"
                  value={financialDetails.payFrequency}
                  onChange={handleFinancialDetailsChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="" disabled>Pay Frequency</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="twice-a-month">Twice a Month</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <div className="relative">
                <select
                  name="directDeposit"
                  value={financialDetails.directDeposit}
                  onChange={handleFinancialDetailsChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="" disabled>Direct Deposit</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
              <input
                type={inputType}
                placeholder="Next Pay Date"
                
                name="nextPayDate"
                value={financialDetails.nextPayDate}
                onChange={handleFinancialDetailsChange}
                onBlur={() => setInputType('text')}
                onFocus={() => setInputType('date')}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="grid md:grid-cols-[4fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-[35px] gap-2">
              <input
                type="text"
                placeholder="ECOA Disclosure"
                value="ECOA Disclosure"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-[50px] px-[15px] py-[13px] "
                readOnly
                />
            </div>
            <span className="mb-[10px] block">Employer Information</span>
            <div className="grid md:grid-cols-[2fr_2fr_4fr_4fr_] sm:grid-cols-1 mb-2 md:mb-[35px] gap-5">
              <input
                type="text"
                placeholder="Employer"
                
                name="employer"
                value={financialDetails.employer}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="number"
                placeholder="Cell Phone"
                
                name="employerCellPhone"
                value={financialDetails.employerCellPhone}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Address Line"
                
                name="employerAddress"
                value={financialDetails.employerAddress}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                
                name="employerAddress2"
                value={financialDetails.employerAddress2}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="grid md:grid-cols-[2fr_2fr_2fr_6fr] sm:grid-cols-1 mb-[35px] gap-5">
              <input
                type="number"
                placeholder="Zip Code"
                
                name="employerZipCode"
                value={financialDetails.employerZipCode}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="City"
                
                name="employerCity"
                value={financialDetails.employerCity}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <div className="relative">
                <select
                  name="employerState"
                  value={financialDetails.employerState}
                  onChange={handleFinancialDetailsChange}
                  className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold appearance-none w-full"
                >
                  <option value="" disabled>State</option>
                  {dlstate.map((state, index) => 
                    <option key={index} value={state}>{state}</option>
                  )}
                </select>
                <span className="absolute right-5 top-[20px] transform -translate-y-1/2 pointer-events-none text-[16px] text-black">
                  <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
                </span>
              </div>
            </div>
            <span className="mb-[10px] block">Time at Job</span>
            <div className="grid md:grid-cols-[2fr_2fr_2fr_6fr] sm:grid-cols-1 mb-[35px] gap-5">
              <input
                type="text"
                placeholder="Years"
                name="jobYears"
                value={financialDetails.jobYears}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Months"
                name="jobMonths"
                value={financialDetails.jobMonths}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
              <input
                type="text"
                placeholder="Your Job Title"
                name="jobTitle"
                value={financialDetails.jobTitle}
                onChange={handleFinancialDetailsChange}
                className="rounded-[50px] bg-gray-300 px-[15px] py-[13px] placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-[95px]">
            <button
               onClick={(e) => { e.preventDefault(); handleBack(); }}
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#DFDFDF] text-text-black rounded-[5px]"
            >
              {`Back`}
            </button>
            <button
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-[5px]"
            >
              {`Save & Continue >`}
            </button>
          </div>
        </form>
      ),
    },
    {
      title: "Review Your Loan Application",
      content: (
        <form className="text-[12px]" onSubmit={(e) => handleSubmit(e, 3)}>
          <div className="">
            <span className="mb-[10px] block">Please review the following the disclosures. At the bottom of the page, check 'Yes' to agree and submit your application.</span>
            <div className="grid md:grid-cols-[2fr_2fr_2fr_2fr_2fr] sm:grid-cols-1 mb-[35px] gap-5">
              <input
                type="text"
                placeholder="Privacy Policy"
                value="Privacy Policy"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-[50px] px-[15px] py-[13px] "
                readOnly
              />
              <input
                type="text"
                placeholder="Terms of Use"
                value="Terms of Use"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-[50px]  px-[15px] py-[13px] "
                readOnly
              />
              <input
                type="text"
                placeholder="Electronic Disclosure"
                value="Electronic Disclosure"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-[50px]  px-[15px] py-[13px]"
                readOnly
              />
              <input
                type="text"
                placeholder="Credit Pull Authorization"
                value="Credit Pull Authorization"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-[50px]  px-[15px] py-[13px] "
                readOnly
              />
            </div>
            <span className="mb-[10px] block">Agree & Submit</span>
            
            <div className="grid md:grid-cols-[4fr_4fr_4fr] sm:grid-cols-1 mb-2 md:mb-[35px] gap-0">
              <div className="flex justify-between items-baseline gap-2 rounded-[22px] bg-gray-300 px-[15px] py-[13px]">
                <label className="flex items-start">
                  <input type="checkbox" className="hidden" />
                  <span className="checkmark rounded-full"></span>
                  <span className="ml-2">
                    I would like to opt-in and receive text messages related to my
                    account and application status and agree to the Terms of
                    Service and Privacy Policy. Message frequency varies. Msg &
                    data rates may apply. Reply STOP, HELP for help.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-[95px]">
            <button
               onClick={(e) => { e.preventDefault(); handleBack(); }}
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#DFDFDF] text-black rounded-[5px]"
            >
              {`Back`}
            </button>
            <button
              className="m-2 w-[166px] h-[37px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-[5px]"
            >
              {`Save & Continue >`}
            </button>
          </div>
        </form>
      ),
    },
  ];

  const progressBarWidth = currentTab === 3 ? '100%' : `${((currentTab + 1) / tabs.length) * 70}%`;

  return (
    <div className="w-full mx-auto rounded-b-2xl">
      <div className="mb-[25px]">
        <h1 className="text-[24px] font-semibold">{tabs[currentTab]?.title}</h1>
      </div>
      <div className="w-[99%] bg-[#D1D1D1] h-[10px]">
        <div
          className="bg-[#00D35B] rounded-xl h-[10px] transition-width duration-500"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="flex justify-between tabbar w-[73%] mx-0 relative top-[-16px] left-[350px]">
        {tabs.map((tab, index) => (
          <div key={index} className="flex items-center relative">
            <div className={`progressbar rounded-full ${currentTab >= index + 1 ? 'hello bg-[#00D35B] w-[35px] h-[35px] absolute top-[-8px] left-[0px]' : 'bg-[#D1D1D1] w-[22px] h-[22px] border-2 border-white'} flex items-center justify-center transition-all duration-300`}>
              {currentTab > index ? <FontAwesomeIcon icon={faCheck} className="text-white text-[16px]" /> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[30px]">
        {tabs[currentTab]?.content}
      </div>
    </div>

  );
}
