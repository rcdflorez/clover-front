import * as React from "react";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion";
import * as accordions from "../styles/accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faStar, faUnlock } from "@fortawesome/free-solid-svg-icons";
import "../styles/global.css";

export default function Faqs() {
  return <div>
    <Layout>
      <section className="container mx-auto px-8 md:px-0">
        <div className="mt-[67px] md:mt-[115px]">
          <h1 className="text-[40px] md:text-[80px] font-semibold">How it Works</h1>
          <span className="block text-[#00D35B] text-[20px] md:text-[40px]  font-medium mt-[20px] md:mt-[40px]">What is an online installment loan?</span>
          <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">An installment loan is a specific amount of money you borrow and then pay back, split up into equal payments within a certain timeframe. With Clover Credit our super simple online process gets you a decision in just minutes.</p>
        </div>

        <div className="">
          <h1 className=" mt-[55px] md:mt-[115px] text-[40px] md:text-[80px] font-semibold">FAQs</h1>
          <span className="block mt-[20px] md:mt-[40px] text-[#00D35B] text-[20px] md:text-[40px]  font-medium">What is an online installment loan?</span>
          <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">An installment loan is a specific amount of money you borrow and then pay back, split up into equal payments within a certain timeframe. With Clover Credit our super simple online process gets you a decision in just minutes.</p>
        </div>

        <div className={`${accordions.accordion} mt-[20px] md:mt-[40px]  text-[15px] md:text-[30px] font-light `}>
          <div>  
            <Accordion className="accordion" title="How much can I borrow?" content="Clover Credit provides installment loans for your financial needs. We offer a transparent and secure way to quickly apply and get a decision for much-needed short-term loans through our online application portal." />
            <Accordion title="Can I apply for multiple loans?" content="Clover Credit only allows one installment loan per household at this time." />
            <Accordion title="What do I need to begin my application?" content="To apply for a short term installment loan with Clover Credit, you will need your social security number, permanent address, driver’s license, current employment information, and a bank account." />
            <Accordion title="How do I sign my loan agreement?" content="Using our online portal, simply log in to your Clover Credit account, review the loan agreement, and then provide your first and last name along with the last four digits of your social security number." />
            <Accordion title="Are Clover Credit loans secure?" content="Your Clover Credit online loan process is conducted on our own secure servers. We utilize industry-standard security protocols to ensure your information is completely confidential. For more information, please refer to our Clover Credit Privacy Policy." />
            <Accordion title="What kind of bank account is required to apply for a loan?" content="You will need to have a checking account that accepts ACH transfers. Unfortunately, prepaid debit cards and savings accounts cannot be used." />
            <Accordion title="What is Clover Credit’s Privacy Policy?" content="You can view Clover Credit’s <a>Privacy Policy here</a>." />
            <Accordion title="Will Clover Credit penalize me for paying off my loan early?" content="We will never penalize you for paying off your loan early. That means we’ll never charge you a fee for making extra payments on your Clover Credit loan. EVER." />
            <Accordion title="Is it cheaper to pay off my loan early?" content="Yes, it’s cheaper to pay off your loan early because you’ll save money on the amount of interest you pay. The faster you pay off your loan, the more money you’ll save on your loan payments." />
            <Accordion title="Can I pay off my loan in one lump sum or do I have to make a series of extra payments?" content="You can make extra payments or pay it off in one lump sum. It’s totally up to you!" />
            <Accordion title="What are other benefits of paying off my loan early?" content="There are clear benefits of paying off your loan early. First, you save money as you pay less interest, and second, you’ll be one step closer to getting out of debt." />
          </div>

        <div className="mt-[55px] md:mt-[115px]">
          <h1 className="text-[40px] md:text-[80px] font-semibold">Rewards & Perks</h1>
          <p className="mt-[20px] md:mt-[40px] text-[15px] md:text-[30px] font-light pb-2">Over Clover Credit Loyalty Points Program is a great way for you to get money deposited directly into your bank account.</p>
        </div>
        
        <span className="block mt-[20px] md:mt-[115px] text-[#00D35B] text-[20px] md:text-[40px] font-medium ">Here's How it works:</span>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-[20px] md:mt-[40px] gap-2">
          <div className="md:ml-[55px]">
            <div className="flex items-start md:items-start customFaqCard">
              <div className="pt-2">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                <p className=" text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mb-2 md:mb-16 ml-[15px] md:ml-[60px]"><span className="font-medium">Earn Loyalty Points: </span>Every dollar you pay towards your loan with Clover Credit earns you 1 loyalty point. As you make regular payments, your points will start to accumulate, bringing you closer to exciting rewards.</p>
              </div>
            </div>
          </div>
          <div className="md:ml-[55px]">
            <div className="flex items-start md:items-start customFaqCard">
              <div className="pt-2">
                <FontAwesomeIcon icon={faUnlock} />
              </div>
              <div>
                <p className=" text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mb-2 md:mb-16 ml-[15px] md:ml-[60px]"><span className="font-medium">Unlock Discounts:</span> Once you reach 1500 loyalty points, you'll unlock a fantastic perk - a $25 discount on your next payment. It's our way of saying thank you for choosing Clover Credit and begin a part of our loyal customer community.</p>
              </div>
            </div>
          </div>
          <div className="md:ml-[55px]">
            <div className="flex items-start md:items-start customFaqCard">
              <div className="pt-2">
                <FontAwesomeIcon icon={faRefresh} />
              </div>
              <div>
                <p className=" text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] ml-[15px] md:ml-[60px]"><span className="font-medium">Seamless Redemption:</span> We've made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - you reward will be seamless and automatically applied, making your next payment even more affordable.</p>
              </div>
            </div>
          </div>
            <p className="mb-[55px] md:mb-[115px] "></p>
        </div>
      </section>
    </Layout>
  </div>
  
}
