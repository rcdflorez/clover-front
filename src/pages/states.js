import * as React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faDollar, faWallet } from "@fortawesome/free-solid-svg-icons"
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
      <section className="container mx-auto py-3 px-8">
        <div className="pt-4 mt-8">
          <h1 className="text-3xl font-bold">Where we lend</h1>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">Clover Credit is currently available in the following states:</span>
          <p className="text-[16px] pb-2">We are always looking at expanding so please check back often to see our most up-to-date list.</p>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 text-center pt-4">
          <form className="flex flex-col md:flex-row justify-between items-center mx-10 my-10">
            <select className="w-full md:w-1/2 bg-gray-400 text-white rounded-sm p-1 mx-1 text-center">
              {states.map((state, index) => 
                <option key={index}>{state}</option>
              )}
            </select>
            <button type="submit" className="w-full md:w-1/2 bg-gray-400 text-sm text-white rounded-sm p-1 mx-1 mt-2 md:mt-0">Apply</button>
          </form>
          <div className="usaMap">
            {/* <Usamap /> */}
          </div>
        </div>


        <div className="pt-4 mt-4">
          <h1 className="text-3xl font-bold">What does a loan cost?</h1>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">We offer a range of short-term installment loans to fit your financial needs.</span>
          <div className='flex pb-3 pt-3 my-4'>
              <span className="text-center sm:w-auto sm:flex-1">
                <FontAwesomeIcon icon={faDollar} className="mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="text-[16px] font-bold">Loans up to $2000</h6>
              </span>
              
              <span className="text-center sm:w-auto sm:flex-1">
                <FontAwesomeIcon icon={faCoins} className="mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="text-[16px] font-bold">Competitive interest rates</h6>
              </span>
              
              <span className="text-center sm:w-auto sm:flex-1">
                <FontAwesomeIcon icon={faWallet} className="mx-auto block md:inline  bg-green-200 p-4 text-green-500 rounded-md" />
                <h6 className="text-[16px] font-bold">No hidden fees</h6>
              </span>
          </div>

          <p className="text-[16px] pb-2">Simply pick the loan package that's right for you, use our super-simple online application process and get a decision in minutes.</p>
          <p className="text-[16px] pb-2">* Returned payments, late payments, and non-payments may result in additional fees, charges, or collection activities pursuant to the terms of your loan agreement and as allowable under Tribal and applicable federal law.</p>
        </div>

        <div className="pt-4">
          <h1 className="text-3xl font-bold">What to consider before applying for a Clover Credit loan?</h1>
          <p className="text-[16px] pb-2">A short-term installment loan is a great way to get extra cash when an unexpected event or emergency pops
up, before you apply, consider these questions to make sure a short-term loan is right for you.</p>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">Is borrowing money really necessary?</span>
          <p className="text-[16px] pb-2">Be realistic about your current financial standing.
Weigh all of your options. If you are approved  for a
Clover Credit loan, you can have your money directly
deposited into your bank account.</p>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">Can I afford to pay back in full?</span>
          <p className="text-[16px] pb-2">With Clover Credit, you can pay back your loan 
in weekly, bi-weekly, monthly, or semi-monthly installments. 
If you need to change your due date, just call us at <span className="text-[#00D35B] text-lg font-bold"> 833-276-2274</span> and we'll work with you to make it happen.</p>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">Can I afford extra charges, interest, and fees if I miss a payment?</span>
          <p className="text-[16px] pb-2">To avoid missing a payment, you can schedule
automatic electronic payments from your checking
account. You can set up this option in your
Clover Credit account, or give us a call and we'll do it
for you.</p>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">Have some questions?</span>
          <p className="text-[16px] pb-2">If you still have questions, contact a Clover Credit team member at <span className="text-[#00D35B] text-lg font-bold
          ">833-276-2274</span> or <span className="text-[#00D35B] text-lg font-bold">support@clovercredit.com</span> 8AM EST - 9PM EST (Every Day) for any other questions you have. </p>
        </div>
        <div className="pt-4">
          <h1 className="text-3xl font-bold">Ready to Apply?</h1>
          <span className="block my-2 text-[#00D35B] text-lg font-bold">The application process is quick. Just answer a few questions in our easy application process.</span>
          <button className="w-full md:w-1/6 text-md bg-[#00D35B] hover:shadow-lg text-white py-2 px rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  mb-4">
              Apply
          </button>
        </div>
      </section>
    </Layout>
  </div>
}
