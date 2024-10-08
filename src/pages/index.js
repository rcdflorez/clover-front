import React from "react"
import Layout from "../components/Layout"
import * as cardStyles from '../styles/card.module.css'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import RangeInput from "../components/Range";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return <React.Fragment>
    <Layout>
      <div className="homebg">
        <div className="container mx-auto mt-0 md:mt-[210px]">
          <div className="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-2">
            <section className="loanApply col-span-6 lg:col-span-6 xl:col-span-6">
              <div className="container mx-auto pb-4 px-4">
                <div className="logoSec mb-1 md:hidden">
                  <StaticImage className="logo mb-4 mx-[15px] md:mx-auto" src="../images/logo.png" alt="Clover Credit" />
                </div>
                <h3 className="text-[40px] md:text-[96px] font-[500] mb-[55px] text-left leading-[43.6px] md:leading-[104.64px] mx-[15px] md:mx-auto">
                  Apply now for a loan up to<span className="text-[#00D35B]"> $2000</span>
                </h3>
                <RangeInput min={300} max={2000} step={50} />
              </div>
            </section>
            <section className="hidden md:block col-span-6 lg:col-span-6 xl:col-span-6">
              <div className="flex gap-4 m-0">
                <StaticImage className="heroLogoImg" src="../images/clover.png" />
              </div>
            </section>
          </div>
        </div>
        <section className="container mx-[15px] md:mx-auto my-5 p-2 md:mt-[180px] mb-[35px]">
          <h3 className="text-3xl font-semibold">Building relationships through financial trust</h3>
          <p className="font-medium">Clover Credit is a smart, simple, fast way to borrow money when you need it most. We offer short-term installment loans with no hidden fees. Our super easy online loan process offers you the funds you need now.</p>
        </section>
        <section className="mx-auto p-2">
          <article className=" mx-[15px] md:mx-auto">
            <h3 className="text-3xl font-semibold">Do it yourself safely and securely</h3>
            <p className="font-medium">Forget the paperwork. No need to talk to anyone.<br />Use our fully automated, completely secure online portal to apply for a loan in minutes.</p>
          </article>
          <div className={`${cardStyles.card} font-Aldrich `}>
            <div className="pt-4 gap-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-center">
                <div className="col-span-1 lg:col-span-1">
                  <div className="main">
                    <FontAwesomeIcon icon={faQuestion} />
                    <h3 className="font-semibold text-[40px]">Common Questions</h3>
                    <p className="font-medium text-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/" className="font-normal text-[20px]">LEARN MORE</Link>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <span><strong>How to benefit:</strong> We’ve made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - your reward will be seamlessly and automatically applied, making your next payment even more affordable.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-center">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                  <div className="main">
                    <FontAwesomeIcon icon={faMedal} />
                    <h3 className="font-semibold text-[40px]">Rewards and Perks</h3>
                    <p className="font-medium text-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/" className="font-normal text-[20px]">VIEW BENEFITS</Link>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <span>
                    <strong>Earn Loyalty Points:</strong> Every dollar you pay towards your loan with Clover Credit earns you 1 loyalty point. As you make regular payments, your points will start to accumulate, bringing you closer to exciting rewards. <br /><br /><br />
                    <strong>Unlock Discounts:</strong> Once you reach 1500 loyalty points, you’ll unlock a fantastic perk - a $25 discount on your next payment! It’s our way of saying thank you for choosing Clover Credit and being a part of our loyal customer community.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-center">
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                  <div className="main">
                    <FontAwesomeIcon icon={faUser} />
                    <h3 className="font-semibold text-[40px]">Self Service</h3>
                    <p className="font-medium text-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/" className="font-normal text-[20px]">CUSTOMER PORTAL</Link>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <span>
                    <strong>Seamless Redemption:</strong> We’ve made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - your reward will be seamlessly and automatically applied, making your next payment even more affordable.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </React.Fragment>
}

export const Head = () => <title>Clover Credit</title>
