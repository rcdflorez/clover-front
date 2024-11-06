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
        <div className="homebg xl:mb-[100px] 2xl:mb-[190px]">
          <div className="container mx-auto mt-0 xl:mt-[105px] 2xl:mt-[210px]">
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
                  <h3 className="text-[40px] xl:text-[72px] 2xl:text-[96px] font-black-italic xl:mb-[20px] 2xl:mb-[55px] text-left leading-[43.6px] md:leading-[70px] 2xl:leading-[104.64px] mx-[30px] md:mx-auto">
                    Apply now for a loan up to
                    <span className="text-[#00D35B]">
                      <br /> $2000
                    </span>
                  </h3>
                  <RangeInput min={300} max={2000} step={50} />
                  <div className="">
                    <button className="hover:shadow-lg text-white bg-[#00D35B] p-[9px] lg:py-1 w-full text-[19px] md:text-[29px] rounded-[15px] md:mt-[110px] h-[46px] xl:h-[56px] 2xl:h-[66px]">
                      Apply
                    </button>
                  </div>
                </div>
              </section>

              <section className="hidden md:hidden lg:block col-span-6 lg:col-span-6 xl:col-span-6">
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
            <h3 className="text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold md:mb-[55px] text-left leading-[43.6px] md:leading-[70px] 2xl:leading-[104.64px] mx-[30px] md:mx-auto">
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
              <h3 className="text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold md:mb-[55px] text-left leading-[43.6px] md:leading-[70px] 2xl:leading-[104.64px] mx-[30px] md:mx-auto">
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
           <div className="flex justify-evenly items-center">
              <div className="pt-4 gap-2">
                <div className="grid grid-cols-1 lg:grid-cols-[4fr_4fr_4fr] mb-4 md:mb-[35px] gap-5 mt-8 md:mt-28 items-start">
                  <div className="col-span-1 flex justify-center">
                    <div className="bg-white bg-opacity-95 rounded-lg p-6 cardShadow w-[90%] sm:w-[75%] md:w-[65%] lg:w-full aspect-square flex flex-col justify-between">
                      <div>
                        <FontAwesomeIcon icon={faQuestion} className="text-[#00d35b] bg-[#aff0c8] p-3 rounded" />
                        <h3 className="text-black text-[30px] md:text-[37px] my-2">Common Questions</h3>
                        <p className="text-[#00d35b] mb-[20px] text-[20px] font-medium">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                      </div>
                      <Link to="/" className="bg-black text-white text-[16px] block rounded-lg text-center h-[42px] flex items-center justify-center mt-auto">
                        Learn More
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 hidden lg:block lg:pl-[20px]">
                    <span className="font-light text-[30px]">
                      <strong className="font-medium">How to benefit:</strong> We’ve made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - your reward will be seamlessly and automatically applied, making your next payment even more affordable.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[4fr_4fr_4fr] mb-4 md:mb-[35px] gap-5 mt-12 md:mt-28 items-start">
                  <div className="col-span-1 flex justify-center">
                    <div className="bg-white bg-opacity-95 rounded-lg p-6 cardShadow w-[90%] sm:w-[75%] md:w-[65%] lg:w-full aspect-square flex flex-col justify-between">
                      <div>
                        <FontAwesomeIcon icon={faMedal} className="text-[#00d35b] bg-[#aff0c8] p-3 rounded" />
                        <h3 className="text-black  text-[30px] md:text-[37px] my-2">Rewards and Perks</h3>
                        <p className="text-[#00d35b] mb-[20px] text-[20px] font-medium">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                      </div>
                      <Link to="/" className="bg-black text-white text-[16px] block rounded-lg text-center h-[42px] flex items-center justify-center mt-auto">
                        View Benefits
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 hidden lg:block lg:pl-[20px]">
                    <span className="font-light text-[30px]">
                      <strong className="font-medium">Earn Loyalty Points:</strong> Every dollar you pay towards your loan with Clover Credit earns you 1 loyalty point. As you make regular payments, your points will start to accumulate, bringing you closer to exciting rewards. <br />
                      <br />
                      <strong>Unlock Discounts:</strong> Once you reach 1500 loyalty points, you’ll unlock a fantastic perk - a $25 discount on your next payment! It’s our way of saying thank you for choosing Clover Credit and being a part of our loyal customer community.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[4fr_4fr_4fr] mb-4 md:mb-[35px] gap-5 mt-12 md:mt-28 items-start">
                  <div className="col-span-1 flex justify-center">
                    <div className="bg-white bg-opacity-95 rounded-lg p-6 cardShadow w-[90%] sm:w-[75%] md:w-[65%] lg:w-full aspect-square flex flex-col justify-between">
                      <div>
                        <FontAwesomeIcon icon={faUser} className="text-[#00d35b] bg-[#aff0c8] p-3 rounded" />
                        <h3 className="text-black  text-[30px] md:text-[37px] my-2">Self Service</h3>
                        <p className="text-[#00d35b] mb-[20px] text-[20px] font-medium">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                      </div>
                      <Link to="/" className="bg-black text-white text-[16px] block rounded-lg text-center h-[42px] flex items-center justify-center mt-auto">
                        Customer Portal
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 hidden lg:block lg:pl-[20px]">
                    <span className="font-light text-[30px]">
                      <strong className="font-medium">Seamless Redemption:</strong> We’ve made it even easier for you to enjoy the benefits of our loyalty program. Once you accumulate 1500 loyalty points, our system will automatically apply a $25 discount to your next payment. No need to worry about redemption or extra steps - your reward will be seamlessly and automatically applied, making your next payment even more affordable.
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
