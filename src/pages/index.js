import React from "react";
import Layout from "../components/Layout";
import * as cardStyles from "../styles/card.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import RangeInput from "../components/Range";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <div className="homebg md:mb-[190px]">
          <div className="container mx-auto mt-0 md:mt-[210px]">
            <div className="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-2">
              <section className="loanApply col-span-6 lg:col-span-6 xl:col-span-6">
                <div className="container mx-auto pb-4 px-4">
                  <div className="logoSec mb-1 md:hidden">
                    <StaticImage
                      className="logo mb-4 mx-[30px] md:mx-auto"
                      src="../images/logo.png"
                      alt="Clover Credit"
                    />
                  </div>
                  <h3 className="text-[40px] md:text-[96px] font-black-italic md:mb-[55px] text-left leading-[43.6px] md:leading-[104.64px] mx-[30px] md:mx-auto">
                    Apply now for a loan up to
                    <span className="text-[#00D35B]">
                      <br /> $2000
                    </span>
                  </h3>
                  <RangeInput min={300} max={2000} step={50} />
                  <div className="">
                    <button className="hover:shadow-lg text-white bg-[#00D35B] p-[9px] lg:py-1 w-full text-[19px] md:text-[29px] rounded-[15px] md:mt-[110px] h-[46px] md:h-[66px]">
                      Apply
                    </button>
                  </div>
                </div>
              </section>

              <section className="hidden md:block col-span-6 lg:col-span-6 xl:col-span-6">
                <div className="flex gap-4 m-0">
                  <StaticImage
                    className="heroLogoImg"
                    src="../images/clover.png"
                  />
                </div>
              </section>
            </div>
          </div>
          <section className="hidden md:block container mx-[15px] md:mx-auto my-5 p-2 md:mt-[180px] mb-[35px]">
            <h3 className="text-[40px] md:text-[96px] font-semibold md:mb-[55px] text-left leading-[43.6px] md:leading-[104.64px] mx-[30px] md:mx-auto">
              Building relationships through financial trust
            </h3>
            <p className="text-[15px] md:text-[30px] font-light pb-4 md:pb-8 leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">
              Clover Credit is a smart, simple, fast way to borrow money when
              you need it most. We offer short-term installment loans with no
              hidden fees. Our super easy online loan process offers you the
              funds you need now.
            </p>
          </section>
          <section className="mx-auto p-2">
            <article className="hidden md:block md:mx-auto">
              <h3 className="text-[40px] md:text-[96px] font-semibold md:mb-[55px] text-left leading-[43.6px] md:leading-[104.64px] mx-[30px] md:mx-auto">
                Do it yourself safely and securely
              </h3>
              <p className="text-[15px] md:text-[30px] font-light pb-4 md:pb-8 leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">
                Forget the paperwork. No need to talk to anyone.
              </p>
              <p className="text-[15px] md:text-[30px] font-light pb-2 leading-[18px] md:leading-[36px]">
                Use our fully automated, completely secure online portal to
                apply for a loan in minutes.
              </p>
            </article>
            <div className={`${cardStyles.card} font-Aldrich `}>
              <div className="pt-4 gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-start">
                  <div className="col-span-1 lg:col-span-1">
                    <div className="main">
                      <FontAwesomeIcon icon={faQuestion} />
                      <h3 className="font-narrow-bold text-[40px]">
                        Common Questions
                      </h3>
                      <p className="font-regular text-[20px] mb-[50px] md:mb-[20px]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <Link to="/" className="font-normal text-[20px]">
                        Learn More
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-3">
                    <span className="ml-0 md:ml-[110px] font-light">
                      <strong className="font-medium">How to benefit:</strong>{" "}
                      We’ve made it even easier for you to enjoy the benefits of
                      our loyalty program. Once you accumulate 1500 loyalty
                      points, our system will automatically apply a $25 discount
                      to your next payment. No need to worry about redemption or
                      extra steps - your reward will be seamlessly and
                      automatically applied, making your next payment even more
                      affordable.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-start">
                  <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="main">
                      <FontAwesomeIcon icon={faMedal} />
                      <h3 className="font-semibold text-[40px]">
                        Rewards and Perks
                      </h3>
                      <p className="font-medium  text-[20px] mb-[50px] md:mb-[20px]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <Link to="/" className="font-normal text-[20px]">
                        View Benefits
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-3">
                    <span className="ml-0 md:ml-[110px] font-light">
                      <strong className="font-medium">
                        Earn Loyalty Points:
                      </strong>{" "}
                      Every dollar you pay towards your loan with Clover Credit
                      earns you 1 loyalty point. As you make regular payments,
                      your points will start to accumulate, bringing you closer
                      to exciting rewards. <br />
                      <br />
                      <strong>Unlock Discounts:</strong> Once you reach 1500
                      loyalty points, you’ll unlock a fantastic perk - a $25
                      discount on your next payment! It’s our way of saying
                      thank you for choosing Clover Credit and being a part of
                      our loyal customer community.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[115px] items-start">
                  <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="main">
                      <FontAwesomeIcon icon={faUser} />
                      <h3 className="font-semibold text-[40px]">
                        Self Service
                      </h3>
                      <p className="font-medium text-[20px] mb-[50px] md:mb-[20px]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <Link to="/" className="font-normal text-[20px]">
                        Customer Portal
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-3">
                    <span className="ml-0 md:ml-[110px] font-light">
                      <strong className="font-medium">
                        Seamless Redemption:
                      </strong>{" "}
                      We’ve made it even easier for you to enjoy the benefits of
                      our loyalty program. Once you accumulate 1500 loyalty
                      points, our system will automatically apply a $25 discount
                      to your next payment. No need to worry about redemption or
                      extra steps - your reward will be seamlessly and
                      automatically applied, making your next payment even more
                      affordable.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export const Head = () => <title>Clover Credit</title>;
