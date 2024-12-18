import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/global.css';

export default function Layout({ children }) {

    return (
        <div className="mainSection container mx-auto layout flex flex-col bg-white overflow-hidden opacity-100 md:opacity-95 my-0 md:my-[86px] rounded-0 md:rounded-[80px]" style={{
            boxShadow: '0px 4px 124.9px 0px rgba(0, 0, 0, 0.25)' }}>
            <Navbar />
            <div className="content flex-growm mx-[0px] md:mx-[115px]">
                {children}
            </div>
            <Footer />
        </div>
    )
}