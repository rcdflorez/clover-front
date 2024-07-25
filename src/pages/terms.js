import * as React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import * as cardStyles from "../styles/card.module.css";

export default function Terms() {
  return (
    <div>
      <Layout>
        <section className="container mx-auto p-3">
          <div className="pt-4 mt-8">
            <h1 className="text-lg font-bold text-[24px]">Where we lend</h1>
            <span className="block my-2 text-green-500 text-md">
              Clover Credit is currently available in the following states:
            </span>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 text-center pt-4">
            <form className="flex justify-between items-center mx-10 my-10">
              <select className="w-1/2 bg-gray-400 text-white rounded-sm p-1 mx-1 text-center">
                <option>State Select</option>
              </select>
              <button
                type="submit"
                className="w-1/2 bg-gray-400 text-sm text-white rounded-sm p-1 mx-1"
              >
                Apply
              </button>
            </form>
            <div className="usaMap"></div>
          </div>

          <div className="pt-4 mt-4">
            <h1 className="text-lg font-bold text-[24px]">
              What does a loan cost?
            </h1>
            <span className="block my-2 text-green-500 text-md">
              We offer a range of short-term installment loans to fit your
              financial needs.
            </span>
            <div className={`flex flex-wrap ${cardStyles.card} pb-3 pt-3`}>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 m-5 sm:grid-cols-1 gap-5">
                <span className="text-center">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="mx-auto block"
                  />
                  <h6 className="text-[14px] font-bold">Loans upto $200</h6>
                </span>

                <span className="text-center">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="mx-auto block"
                  />
                  <h6 className="text-[14px] font-bold">
                    Competitive interest rates
                  </h6>
                </span>

                <span className="text-center">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="mx-auto block"
                  />
                  <h6 className="text-[14px] font-bold">No hidden fees</h6>
                </span>
              </div>
            </div>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>

          <div className="pt-4">
            <h1 className="text-lg font-bold text-[24px]">
              What to consider before applying for a Clover Credit loan?
            </h1>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <span className="block my-2 text-green-500 text-md">
              Is borrowing money really necessary?
            </span>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <span className="block my-2 text-green-500 text-md">
              Can I afford to pay back in full?
            </span>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <span className="block my-2 text-green-500 text-md">
              Can I afford extra charges, interest, and fees if I miss a
              payment?
            </span>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <span className="block my-2 text-green-500 text-md">
              Have some questions?
            </span>
            <p className="text-[14px] pb-2">
              Lorem Ipsum is If you stillhave questions, contact a Clover Credit
              team member at{" "}
              <span
                className="text-green-500 text-[12px]
          "
              >
                844-355-LOAN
              </span>{" "}
              or{" "}
              <span className="text-green-500 text-[12px]">
                support@explorecredit.com
              </span>{" "}
              8AM EST - 9PM EST (Every Day) for any other questions you have.{" "}
            </p>
          </div>
          <div className="pt-4">
            <h1 className="text-lg font-bold text-[24px]">Ready to Apply?</h1>
            <span className="block my-2 text-green-500 text-md">
              The application process is quick. Just answer a few questions in
              our easy application process.
            </span>
            <button className="w-1/6 text-xs bg-green-600 hover:shadow-lg text-white py-1 px rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  mb-4">
              Apply
            </button>
          </div>
        </section>
      </Layout>
    </div>
  );
}
