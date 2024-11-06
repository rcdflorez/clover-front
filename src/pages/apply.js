import React from "react"
import Layout from "../components/Layout"
import RangeInput from "../components/Range"
import { Tabs } from "../components/Tabs";

export default function Apply() {
  
  return <div>
    <Layout>
      <section className="loanApply">
        <div className="container mx-auto px-8 md:px-0">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
            <div>
              <h1 className="text-[40px] md:text-[80px] font-semibold mt-[67px] md:mb-[30px]">How much do you need?</h1>
              <RangeInput min={300} max={2000} step={50} />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-8 md:px-0 md:mt-[110px]">
        <Tabs />
      </section>
    </Layout>
  </div>
}
