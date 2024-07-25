import React from "react"
import Layout from "../components/Layout"
import RangeInput from "../components/Range"
import { Tabs } from "../components/Tabs";

export default function Apply() {
  
  return <div>
    <Layout>
      <section className="loanApply">
        <div className="container mx-auto py-8 px-4">
          <h3 className="text-xl font-bold mb-8 text-left">How much do you need?</h3>
          <RangeInput min={300} max={2000} step={100} />
        </div>
      </section>
      <section className="container mx-auto py-8 px-4">
        <Tabs />
      </section>
    </Layout>
  </div>
}
