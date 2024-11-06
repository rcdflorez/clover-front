import React from 'react';
import Layout from '../components/Layout';

const About = () => {

  return (
    <Layout>
        <section className="container mx-auto px-8 md:px-0">
            <div className="mt-[67px] xl:mt-[0px] 2xl:mt-[115px]">
            <h1 className="text-[40px] xl:text-[60px] 2xl:text-[80px] font-semibold">About Us</h1>
            <span className="block text-[#00D35B] text-[20px] md:text-[40px]  font-medium mt-[20px] md:mt-[40px]">Who We Are:</span>
            <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">Clover Credit is an entity of the Wakpamni Lake Community Coporation (WLCC). We are fully automated financial lending company that provides customers with an incredibly easyonline loan application process. We offer excellent customer service and simple interest rates with no hidden fees and pride ourselves in approving customers when others don’t.</p>
            </div>

            <div className="">
            <span className="block mt-[20px] md:mt-[40px] text-[#00D35B] text-[20px] md:text-[40px] font-medium">About Wakpamni Lake Community Corporation (WLCC) Services</span>
                <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">Clover Credit is an entity of the Wakpamni Lake Community Coporation (WLCC), a tribal corporation wholly owned by the Wakpmamni Lake Community. The Wakpamni Lake Community is a local government under the Oglala Sioux Tribe. WLCC is incorporated under and governed by the laws of the Oglala Sioux Tribe...</p>
                <p className="text-[15px] md:text-[30px] font-light leading-[18px] md:leading-[36px] mt-[20px] md:mt-[40px]">View our Clover Credit Consumer Loan License here:</p>
                <button className="hover:shadow-lg text-white bg-[#00D35B] p-[9px] lg:py-1 w-full md:w-[600px] text-[19px] md:text-[29px] rounded-[15px] mt-[40px] md:mt-[110px] h-[46px] md:h-[66px] mx-auto">View License</button>
                <p className="mb-[55px] md:mb-[115px] "></p>
            </div>
        </section>
    </Layout>
  );
};

export default About;
