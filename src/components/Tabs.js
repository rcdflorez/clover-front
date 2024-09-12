import React, { useState } from "react";

export function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);

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
  };

  const tabs = [
    {
      title: "Personal Info",
      content: (
        <form className="text-xs" onSubmit={(e) => handleSubmit(e, 1)}>
          <div className="p-4 overflow-y-scroll h-[250px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="text"
                placeholder="First Name"
                
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Last Name"
                
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Cell Phone"
                
                name="cellPhone"
                value={personalInfo.cellPhone}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Home Phone"
                
                name="homePhone"
                value={personalInfo.homePhone}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pt-4 gap-2">
              <div className="flex justify-between items-baseline gap-2 rounded-3xl bg-gray-300 p-3 ">
                <input type="checkbox" className="relative top-0.5"/>
                <label>
                  I would like to opt-in and receive text messages related to my
                  account and application status and agree to the Terms of
                  Service and Privacy Policy. Message frequency varies. Msg &
                  data rates may apply. Reply STOP, HELP for help.
                </label>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="text"
                placeholder="Address Line 1"
                
                name="address1"
                value={personalInfo.address1}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Address Line 2"
                
                name="address2"
                value={personalInfo.address2}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="ZIP CODE"
                
                name="zipCode"
                value={personalInfo.zipCode}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="City"
                
                name="city"
                value={personalInfo.city}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="state"
                value={personalInfo.state}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2"
              >
                <option value="" disabled>State</option>
                {states.map((state, index) => 
                  <option key={index}>{state}</option>
                )}
              </select>
            </div>
            <span className="pt-3 block">Time & Address</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="number"
                placeholder="Years"
                
                name="years"
                value={personalInfo.years}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Months"
                
                name="months"
                value={personalInfo.months}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="rentOwn"
                value={personalInfo.rentOwn}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              >
                <option value="">Rent / Own</option>
                <option value="Rent">Rent</option>
                <option value="Own">Own</option>
              </select>
              <select
                name="maritalStatus"
                value={personalInfo.maritalStatus}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              >
                <option value="">Marital Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
              <input
                type="number"
                placeholder="Driving License Number (9 Digits)"
                
                name="drivingLicenseNumber"
                value={personalInfo.drivingLicenseNumber}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="dlState"
                value={personalInfo.dlState}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              >
                <option value="" disabled>DL State</option>
                {dlstate.map((state, index) => 
                  <option key={index} value={state}>{state}</option>
                )}
              </select>
              <select
                name="activeMilitary"
                value={personalInfo.activeMilitary}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              >
                <option value="">Active Military</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="email"
                placeholder="E-mail Address"
                
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Social Security Number (000-00-0000)"
                
                name="ssn"
                value={personalInfo.ssn}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="date"
                placeholder="DOB (mm/dd/yyyy)"
                
                name="dob"
                value={personalInfo.dob}
                onChange={handlePersonalInfoChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pt-4 gap-2">
              <div className="flex justify-between items-baseline gap-2 rounded-3xl bg-gray-300 p-3 ">
                <input type="checkbox" className="relative top-0.5" />
                <label>
                  I would like to opt-in and receive text messages related to my
                  account and application status and agree to the Terms of
                  Service and Privacy Policy. Message frequency varies. Msg &
                  data rates may apply. Reply STOP, HELP for help.
                </label>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 text-center rounded-b-2xl">
            <button
              className="m-2 w-[150px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-full"
            >
              {`Continue >`}
            </button>
          </div>
        </form>
      ),
    },
    {
      title: "Financial Details",
      content: (
        <form className="text-xs" onSubmit={(e) => handleSubmit(e, 2)}>
          <div className="p-4 overflow-y-scroll h-[250px]">
            <span className="pt-3 block">Bank Account Details</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="number"
                placeholder="Account Number"
                
                name="accountNumber"
                value={financialDetails.accountNumber}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Routing Number"
                
                name="routingNumber"
                value={financialDetails.routingNumber}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Bank Name"
                
                name="bankName"
                value={financialDetails.bankName}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="accountType"
                value={financialDetails.accountType}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2"
              >
                <option value="">Account Type</option>
                <option value="checking">Checking</option>
                <option value="saving">Saving</option>
              </select>
            </div>
            <span className="pt-3 block">How long has it been open?</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="number"
                placeholder="Years"
                
                name="yearsOpen"
                value={financialDetails.yearsOpen}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Months"
                
                name="monthsOpen"
                value={financialDetails.monthsOpen}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pt-4 gap-2">
              <textarea
                rows="3"
                className="rounded-2xl bg-gray-300 p-3"
                placeholder="I would like to opt-in and receive text messages related to my account and application status and agree to the Terms of Service and Privacy Policy. Message frequency varies. Msg & data rates may apply. Reply STOP, HELP for help."
              ></textarea>
            </div>
            <span className="pt-3 block">Income Details</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="number"
                placeholder="Monthly Income"
                
                name="monthlyIncome"
                value={financialDetails.monthlyIncome}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="incomeSource"
                value={financialDetails.incomeSource}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2"
              >
                <option value="" disabled>Income Source</option>
                <option value="employed">Employed</option>
                <option value="self">Self-Employed</option>
              </select>
              <input
                type="text"
                placeholder="ECOA Disclosure"
                value="ECOA Disclosure"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2 "
                readOnly
              />
              <select
                name="payFrequency"
                value={financialDetails.payFrequency}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2"
              >
                <option value="" disabled>Pay Frequency</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="twice-a-month">Twice a Month</option>
              </select>
              <select
                name="directDeposit"
                value={financialDetails.directDeposit}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2"
              >
                <option value="" disabled>Direct Deposit</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="date"
                placeholder="Next Pay Date"
                
                name="nextPayDate"
                value={financialDetails.nextPayDate}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
            <span className="pt-3 block">Employer Information</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="text"
                placeholder="Employer"
                
                name="employer"
                value={financialDetails.employer}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Cell Phone"
                
                name="employerCellPhone"
                value={financialDetails.employerCellPhone}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Address Line"
                
                name="employerAddress"
                value={financialDetails.employerAddress}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Address Line 2"
                
                name="employerAddress2"
                value={financialDetails.employerAddress2}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="number"
                placeholder="Zip Code"
                
                name="employerZipCode"
                value={financialDetails.employerZipCode}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="City"
                
                name="employerCity"
                value={financialDetails.employerCity}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <select
                name="employerState"
                value={financialDetails.employerState}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              >
                <option value="" disabled>State</option>
                {dlstate.map((state, index) => 
                  <option key={index} value={state}>{state}</option>
                )}
              </select>
              <input
                type="text"
                placeholder="Your Job Title"
                name="jobTitle"
                value={financialDetails.jobTitle}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
            <span className="pt-3 block">Time at Job</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="text"
                placeholder="Years"
                name="jobYears"
                value={financialDetails.jobYears}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
              <input
                type="text"
                placeholder="Months"
                name="jobMonths"
                value={financialDetails.jobMonths}
                onChange={handleFinancialDetailsChange}
                className="rounded-3xl bg-gray-300 p-2 "
              />
            </div>
          </div>
          <div className="bg-gray-200 text-center rounded-b-2xl">
            <button
              className="m-2 w-[150px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-full"
            >
              {`Continue >`}
            </button>
          </div>
        </form>
      ),
    },
    {
      title: "Agreements",
      content: (
        <form className="text-xs" onSubmit={(e) => handleSubmit(e, 3)}>
          <div className="p-4 overflow-y-scroll h-[250px]">
            <span className="pt-3 block">Please review the following the disclosures. At the bottom of the page, check 'Yes' to agree and submit your application.</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2">
              <input
                type="text"
                placeholder="Privacy Policy"
                value="Privacy Policy"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2 "
                readOnly
              />
              <input
                type="text"
                placeholder="Terms of Use"
                value="Terms of Use"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2 "
                readOnly
              />
              <input
                type="text"
                placeholder="Electronic Disclosure"
                value="Electronic Disclosure"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2 "
                readOnly
              />
              <input
                type="text"
                placeholder="Credit Pull Authorization"
                value="Credit Pull Authorization"
                className="text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2 "
                readOnly
              />
            </div>
            <span className="pt-3 block">Agree & Submit</span>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2">
              <div className="flex justify-between items-baseline gap-2 rounded-3xl bg-gray-300 p-3 ">
                <input type="checkbox"  className="relative top-0.5"/>
                <label>
                  I would like to opt-in and receive text messages related to my
                  account and application status and agree to the Terms of
                  Service and Privacy Policy. Message frequency varies. Msg &
                  data rates may apply. Reply STOP, HELP for help.
                </label>
              </div>
              <div className="flex justify-between items-baseline gap-2 rounded-3xl bg-gray-300 p-3 ">
                <input type="checkbox"  className="relative top-0.5"/>
                <label>
                  I would like to opt-in and receive text messages related to my
                  account and application status and agree to the Terms of
                  Service and Privacy Policy. Message frequency varies. Msg &
                  data rates may apply. Reply STOP, HELP for help.
                </label>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 text-center rounded-b-2xl">
            <button
              className="m-2 w-[150px] px-2 py-1 text-sm bg-[#00D35B] text-white rounded-full"
            >
              {`Continue >`}
            </button>
          </div>
        </form>
      ),
    },
  ];

  const progressBarWidth = `${((currentTab + 1) / tabs.length) * 100}%`;

  return (
    <div className="w-full mx-auto rounded-b-2xl bg-none shadow-2xl">
      <div className="flex justify-center bg-gray-200 py-2 rounded-t-2xl">
        <h1 className="text-lg font-bold text-gray-500">{tabs[currentTab]?.title}</h1>
      </div>
      <div className="w-full bg-gray-200 h-1">
        <div
          className="bg-green-600 h-full transition-width duration-500"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="bg-white text-gray-700 rounded-b-2xl">
        {tabs[currentTab]?.content}
      </div>
    </div>
  );
}
