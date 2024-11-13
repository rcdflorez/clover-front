import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="container mx-auto px-8 md:px-0">
        <div className="mt-[67px] xl:mt-[0px] 2xl:mt-[115px]">
          <h1 className="text-[40px] xl:text-[62px] 2xl:text-[76px] font-semibold">
            About Us
          </h1>
          <span className="greenParagraph block text-[#00D35B] text-[20px] md:text-[40px]  font-medium mt-[20px] md:mt-[40px]">
            Who We Are:
          </span>
          <p className="commonParagraph text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">
            Pomo Gold JEM doing business as Clover Credit. Clover Credit is a
            Native American owned business operating within the interior
            boundaries of the Pine Ridge Reservation of the Oglala Sioux Tribe,
            a sovereign nation located in the United States.
          </p>
        </div>

        <div className="">
          <p className="commonParagraph text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">
            View our Clover Credit Consumer Loan License here:
          </p>
          <button className="hover:shadow-lg text-white bg-[#00D35B] p-[9px] lg:py-1 w-full md:w-[600px] text-[19px] md:text-[29px] rounded-[15px] mt-[40px] md:mt-[110px] h-[46px] md:h-[66px] mx-auto">
            <a
              target="_blank"
              href="/Pomo_Gold_dba_Clover_Credit_Lender_License_2024.pdf"
            >
              View License
            </a>
          </button>
          <p className="mb-[55px] md:mb-[115px] "></p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
