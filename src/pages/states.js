import * as React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faArrowDown, faCoins, faDollar, faWallet } from "@fortawesome/free-solid-svg-icons"
import Usamap from "../components/UsaMap"

export default function Terms() {

  const [states, setStates] = React.useState([
    "-Select State-","Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ])

  return <div>
    <Layout>
      <section className="container mx-auto px-8 md:px-0">
        <div className="mt-[67px] xl:mt-[0px] 2xl:mt-[115px]">
          <h1 className="text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold">Where we lend</h1>
          <span className="mt-[35px] md:mt-[40px] block my-2 text-[#00D35B] text-[20px] md:text-[40px] font-medium leading-[24px] md:leading-[48px]">Clover Credit is currently available in the following states:</span>
          <p className="text-[15px] md:text-[30px] font-light pb-4 md:pb-8 leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">We are always looking at expanding so please check back often to see our most up-to-date list.</p>
        </div>

        <div className="mt-[35px] md:mt-[115px] grid lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 text-center pt-4">
          <form className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 gap-8">
            <div className="bg-[#D9D9D9] px-[25px] w-full md:w-1/2 rounded-[18px] relative">
              <select
                style={{ fontFamily: 'Aldrich' }}
                className="w-full bg-[#D9D9D9] text-white font-[400] text-[20px] md:text-[40px] text-center p-[15px] md:p-[25px] appearance-none"
              >
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
              <span className="absolute right-10 top-[28px] md:top-[55px] transform -translate-y-1/2 pointer-events-none text-[35px] text-white">
                <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow (custom) */}
              </span>
            </div>
            <button type="submit" className="w-full md:w-1/2 bg-[#D9D9D9] text-white rounded-[18px] font-[400] text-[20px] md:text-[40px] text-center p-[13px] md:p-[25px]">Apply</button>
          </form>

          <div className="usaMap">
            {/* <Usamap /> */}
          </div>
        </div>

        <div className="">
          <h1 className="mt-[55px] md:mt-[115px] text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold">What does a loan cost?</h1>
          <span className="mt-[35px] md:mt-[40px] block my-2 text-[#00D35B] text-[20px] md:text-[40px] font-medium leading-[24px] md:leading-[48px]">We offer a range of short-term installment loans to fit your financial needs.</span>
          <div className='flex items-center justify-between my-[20px] md:my-[115px]'>
              <span className="text-center sm:w-auto sm:flex-1 stateIcon customFaqCard">
                <FontAwesomeIcon icon={faDollar} className=" mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="mt-4 text-[15px] md:text-[45px] font-medium leading-[18px] md:leading-[54px]">Loans up to <br />$2000</h6>
              </span>
              
              <span className="text-center sm:w-auto sm:flex-1 customFaqCard">
                <FontAwesomeIcon icon={faCoins} className="mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="mt-4 text-[15px] md:text-[45px] font-medium leading-[18px] md:leading-[54px]">Competitive<br /> interest rates</h6>
              </span>
              
              <span className="text-center sm:w-auto sm:flex-1 customFaqCard">
                <FontAwesomeIcon icon={faWallet} className="mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="mt-4 text-[15px] md:text-[45px] font-medium leading-[18px] md:leading-[54px]">No hidden<br /> fees</h6>
              </span>
          </div>

          <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">Simply pick the loan package that's right for you, use our super-simple online application process and get a decision in minutes.</p>
          <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">* Returned payments, late payments, and non-payments may result in additional fees, charges, or collection activities pursuant to the terms of your loan agreement and as allowable under Tribal and applicable federal law.</p>
        </div>

        <div className="">
          <h1 className="text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold leading-[43px] md:leading-[87px] mt-[55px] md:mt-[115px]">What to consider before applying for a Clover Credit loan?</h1>
          <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">A short-term installment loan is a great way to get extra cash when an unexpected event or emergency pops up, before you apply, consider these questions to make sure a short-term loan is right for you.</p>

          <span className="font-medium text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] block my-2 text-[#00D35B] mt-[25px] md:mt-[115px]">Is borrowing money really necessary?	</span>
          <p className="font-light text-[15px] md:text-[30px] leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">Be realistic about your current financial standing. Weigh all of your options. If you are approved for a Clover Credit loan, you can have your money directly deposited into your bank account.</p>
          
          <span className="font-medium text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] block mt-[25px] md:mt-[115px] text-[#00D35B]">Can I afford to pay back in full?</span>
          <p className="font-light text-[15px] md:text-[30px] leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">With Clover Credit, you can pay back your loan in weekly, bi-weekly, monthly, or semi-monthly installments. If you need to change your due date, just call us at <span className="text-[#00D35B] text-lg font-bold"> 833-276-2274</span> and we'll work with you to make it happen.</p>
          
          <span className="font-medium text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] block mt-[25px] md:mt-[115px] text-[#00D35B]">Can I afford extra charges, interest, and fees if I miss a payment?</span>
          <p className="font-light text-[15px] md:text-[30px] leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">To avoid missing a payment, you can schedule automatic electronic payments from your checking account. You can set up this option in your Clover Credit account, or give us a call and we'll do it for you.</p>
          
          <span className="font-medium text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] block mt-[25px] md:mt-[115px] text-[#00D35B]">Have some questions?</span>
          <p className="font-light text-[15px] md:text-[30px] leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">If you still have questions, contact a Clover Credit team member at <span className="text-[#00D35B] font-medium ">833-276-2274 </span> or <span className="text-[#00D35B] font-medium">support@clovercredit.com</span> 8AM EST - 9PM EST (Every Day) for any other questions you have. </p>
        </div>

        <div className="">
          <h1 className="font-semibold text-[40px] xl:text-[62px] 2xl:text-[76px] leading-[43px] md:leading-[87px] mt-[55px] md:mt-[115px]">Ready to Apply? </h1>
          <span className="font-medium text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] block mt-[20px] md:mt-[40px] text-[#00D35B]">The application process is quick. Just answer a few questions in our easy application process.</span>
          <button className="hover:shadow-lg text-white bg-[#00D35B] p-[9px] lg:py-1 w-full md:w-[600px] text-[19px] md:text-[29px] rounded-[15px] mt-[40px] md:mt-[110px] h-[46px] md:h-[66px] mx-auto block">Apply</button>
          <p className="mb-[55px] md:mb-[115px] "></p>
        </div>
      </section>
    </Layout>
  </div>
}
