import * as React from "react"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import * as accordions from '../styles/accordion.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"

export default function Faqs() {
  return <div>
    <Layout>
      <section className="container mx-auto p-3">
        <div className="pt-4 mt-8">
          <h1 className="text-lg font-bold text-[24px]">How it Works</h1>
          <span className="block my-2 text-lime-600 text-md">What is an online installment loan?</span>
          <p className="text-[14px] pb-2">An installment loan is a specific amount of money you borrow and then pay back, split up into equal payments within a certain timeframe.</p>
          <p className="text-[14px]">With Clover Credit our super simple online process gets you a decission in just minutes.</p>
        </div>

        <div className="pt-4 pb-4">
          <h1 className="text-lg font-bold text-[24px]">FAQs</h1>
          <span className="block my-2 text-lime-600 text-md">What is an online installment loan?</span>
          <p className="text-[14px] pb-2">An installment loan is a specific amount of money you borrow and then pay back, split up into equal payments within a certain timeframe.</p>
          <p className="text-[14px]">With Clover Credit our super simple online process gets you a decission in just minutes.</p>
        </div>

        <div className={`${accordions.accordion} grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2`}>
          <div>  
            <Accordion className="accordion" title="How much can I borrow?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Accordion title="Can I apply for multiple loans?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Accordion title="What do I need to begin my application?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </div>
          <div>
            <Accordion title="How do I sign my loan agreement?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Accordion title="Are Clover Credit loans secure?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Accordion title="What kind of bank account is required to apply for a loan?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </div>
        </div>

        <div className="pt-4">
          <h1 className="text-lg font-bold text-[24px]">Rewards & Perks</h1>
          <p className="text-[14px] pb-2">Over Clover Credit Loyality Points Program is a great way for you to get money deposited directly into your bank acount.</p>
          <span className="block my-2 text-lime-600 text-md">Here's How it works:</span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-4 gap-2">
          <div>
            <div className="flex gap-5 customFaqCard">
              <div>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </div>
              <div>
                <p className=" text-[12px]"><span className="font-bold">Earn Loyality Points:</span>Every dollar you pay towards your loan with Coover Credit earns you 1 loyalty point. As you make regular payments, your points will start to accumulate, bringing you closer to exciting rewards.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 customFaqCard">
              <div>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </div>
              <div>
                <p className=" text-[12px]"><span className="font-bold">Unlock Discounts:</span>Once you reach 1500 loyalty points, you'll unlock a fantastic perk - a $25 discount on your next payment. It's our way of saying thank you for choosing Clover Credit and begin a part of our loyal customer community.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 customFaqCard">
              <div>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </div>
              <div>
                <p className=" text-[12px]"><span className="font-bold">Seamless Redemption:</span>We've made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - you reward will be seamless and automatically applied, making your next payment even more affordable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
  
}
