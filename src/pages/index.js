import React from "react"
import Layout from "../components/Layout"
import * as cardStyles from '../styles/card.module.css'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import RangeInput from "../components/Range";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return <div>
    <Layout>
      <section className="loanApply">
        <div className="container mx-auto pt-8 pb-4 px-4">
          <div className="logoSec w-[15%] mb-1">
              <StaticImage className="logo" src="../images/logo.png" alt="Clover Credit"  />
          </div>
          <h3 className="text-2xl font-bold mb-8 text-left">Apply now for a loan upto <span className="text-[#0bcd5e]">$2000</span></h3>
          <RangeInput min={300} max={2000} step={100} />
        </div>
      </section>
      <section>
        <div className={`${cardStyles.card} font-Aldrich container mx-auto p-2`}>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-4 gap-2">
            <div className="main">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <h3>Common Questions</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <Link to="/">Learn More</Link>
            </div>

            <div className="main">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <h3>Rewards and Perks</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <Link to="/">View Benefits</Link>
            </div>
            
            <div className="main">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <h3>Common Questions</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <Link to="/">Customer Portal</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
}

export const Head = () => <title>Clover Credit</title>
