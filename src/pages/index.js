import React from "react"
import Layout from "../components/Layout"
import * as cardStyles from '../styles/card.module.css'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import RangeInput from "../components/Range";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return <div>
    <Layout>
      <div className="px-7 homebg">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2">
            <section className="loanApply">
              <div className="container mx-auto pb-4 px-4">
                <div className="logoSec mb-1">
                    <StaticImage className="logo" src="../images/logo.png" alt="Clover Credit"  />
                </div>
                <h3 className="text-[32px] font-bold mb-[25px] text-left">Apply now for a loan upto <span className="text-[#00D35B]">$2000</span></h3>
                <RangeInput min={300} max={2000} step={50} />
              </div>
            </section>
            <section>
              <div>Slider Image</div>
            </section>
          </div>
        </div>
        <section className="container mx-auto my-5 p-2  mb-[35px]">
          <h3 className="text-3xl font-bold">Building relationships through financial trust</h3>
          <p>Clover Credit is a smart, simple, fast way to borrow money when you need it most. We offer short-term installment loans with no hidden fees. Our super easy online loan process offers you the funds you need now.</p>
        </section>
        <section className="container mx-auto p-2">
          <article className="sm:mx-0 md:mx-[10%] sm:text-left md:text-center my-5 p-2">
            <h3 className="text-3xl font-bold">Do it yourself safely and securely</h3>
            <p>Forget the paperwork. No need to talk to anyone. <br />Use our fully automated, completely secure online portal to apply for a loan in minutes.</p>
          </article>
          <div className={`${cardStyles.card} font-Aldrich `}>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-4 gap-2">
              <div className="main">
                <FontAwesomeIcon icon={faQuestion} />
                <h3>Common Questions</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Link to="/">Learn More</Link>
              </div>

              <div className="main">
                <FontAwesomeIcon icon={faMedal} />
                <h3>Rewards and Perks</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Link to="/">View Benefits</Link>
              </div>
              
              <div className="main">
                <FontAwesomeIcon icon={faUser} />
                <h3>Self Service</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <Link to="/">Customer Portal</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </div>
}

export const Head = () => <title>Clover Credit</title>
