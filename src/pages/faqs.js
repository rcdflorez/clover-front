import * as React from "react";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion";
import * as accordions from "../styles/accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faStar, faUnlock } from "@fortawesome/free-solid-svg-icons";
import "../styles/global.css";

export default function Faqs() {
  return (
    <div>
      <Layout>
        <section className="container mx-auto py-3 px-8">
          <div className="pt-4 mt-8">
            <h1 className="text-3xl font-bold">How it Works</h1>
            <span className="block my-2 text-[#00D35B] text-lg font-bold">
              What is an online installment loan?
            </span>
            <p className="text-[16px] pb-2">
              An installment loan is a specific amount of money you borrow and
              then pay back, split up into equal payments within a certain
              timeframe.
            </p>
            <p className="text-[16px]">
              With Clover Credit our super simple online process gets you a
              decision in just minutes.
            </p>
          </div>

          <div className="pt-4 pb-4">
            <h1 className="text-3xl font-bold">FAQs</h1>
            <span className="block my-2 text-[#00D35B] text-lg font-bold">
              What is an online installment loan?
            </span>
            <p className="text-[16px] pb-2">
              An installment loan is a specific amount of money you borrow and
              then pay back, split up into equal payments within a certain
              timeframe.
            </p>
            <p className="text-[16px]">
              With Clover Credit our super simple online process gets you a
              decision in just minutes.
            </p>
          </div>

          <div
            className={`${accordions.accordion} grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2`}
          >
            <div>
              <Accordion
                className="accordion"
                title="1. How much can I borrow?"
                content="Clover Credit provides installment loans for your financial needs. We offer a transparent and secure way to quickly apply and get a decision for much-needed short-term loans through our online application portal."
              />
              <Accordion
                title="2. Can I apply for multiple loans?"
                content="Clover Credit only allows one installment loan per household at this time."
              />
              <Accordion
                title="3. What do I need to begin my application?"
                content="To apply for a short term installment loan with Clover Credit, you will need your social security number, permanent address, driver’s license, current employment information, and a bank account."
              />
              <Accordion
                title="4. How do I sign my loan agreement?"
                content="Using our online portal, simply log in to your Clover Credit account, review the loan agreement, and then provide your first and last name along with the last four digits of your social security number."
              />
              <Accordion
                title="5. Are Clover Credit loans secure?"
                content="Your Clover Credit online loan process is conducted on our own secure servers. We utilize industry-standard security protocols to ensure your information is completely confidential. For more information, please refer to our Clover Credit Privacy Policy."
              />
              <Accordion
                title="6.	What kind of bank account is required to apply for a loan?"
                content="You will need to have a checking account that accepts ACH transfers. Unfortunately, prepaid debit cards and savings accounts cannot be used."
              />
            </div>
            <div>
              <Accordion
                title="7.	What is Clover Credit’s Privacy Policy?"
                content='You can view Clover Credit’s   <a target="_blank" href="/privacy_policy.pdf">
              Privacy Policy here.
            </a>'
              />
              <Accordion
                title="8.	Will Clover Credit penalize me for paying off my loan early?"
                content="We will never penalize you for paying off your loan early. That means we’ll never charge you a fee for making extra payments on your Clover Credit loan. EVER."
              />
              <Accordion
                title="9.	Is it cheaper to pay off my loan early?"
                content="Yes, it’s cheaper to pay off your loan early because you’ll save money on the amount of interest you pay. The faster you pay off your loan, the more money you’ll save on your loan payments."
              />
              <Accordion
                title="10.	Can I pay off my loan in one lump sum or do I have to make a series of extra payments?"
                content="You can make extra payments or pay it off in one lump sum. It’s totally up to you!"
              />
              <Accordion
                title="11.	What are other benefits of paying off my loan early?"
                content="There are clear benefits of paying off your loan early. First, you save money as you pay less interest, and second, you’ll be one step closer to getting out of debt."
              />
            </div>
          </div>

          <div className="pt-4">
            <h1 className="text-3xl font-bold mb-2">Rewards & Perks</h1>
            <p className="text-[16px] pb-2">
              Over Clover Credit Loyalty Points Program is a great way for you
              to get money deposited directly into your bank account.
            </p>
            <span className="block my-2 text-[#00D35B] text-lg font-bold">
              Here's How it works:
            </span>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-4 gap-2">
            <div>
              <div className="flex gap-5 customFaqCard">
                <div className="main">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <p className=" text-[16px]">
                    <span className="font-bold">Earn Loyalty Points: </span>
                    Every dollar you pay towards your loan with Clover Credit
                    earns you 1 loyalty point. As you make regular payments,
                    your points will start to accumulate, bringing you closer to
                    exciting rewards.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 customFaqCard">
                <div>
                  <FontAwesomeIcon icon={faUnlock} />
                </div>
                <div>
                  <p className=" text-[16px]">
                    <span className="font-bold">Unlock Discounts:</span>Once you
                    reach 1500 loyalty points, you'll unlock a fantastic perk -
                    a $25 discount on your next payment. It's our way of saying
                    thank you for choosing Clover Credit and begin a part of our
                    loyal customer community.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5 customFaqCard">
                <div>
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <div>
                  <p className=" text-[16px]">
                    <span className="font-bold">Seamless Redemption:</span>We've
                    made it even easier for you to enjoy the benefits of our
                    loyalty program. Once you accumulate 1500 loyalty points,
                    our system will automatically apply a $25 discount to your
                    next payment. No need to worry about redemption or extra
                    steps - you reward will be seamless and automatically
                    applied, making your next payment even more affordable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
