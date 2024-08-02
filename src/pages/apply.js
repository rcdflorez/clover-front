import React from "react"
import Layout from "../components/Layout"
import RangeInput from "../components/Range"
import { Tabs } from "../components/Tabs";

export default function Apply() {
  
  return <div>
    <Layout>
      <section className="loanApply">
        <div className="container mx-auto py-8 px-4">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-4 gap-2">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-left">How much do you need?</h3>
              <RangeInput min={300} max={2000} step={50} />
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 px-4">
        <Tabs />
      </section>
    </Layout>
  </div>
}
