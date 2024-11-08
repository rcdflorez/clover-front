import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/global.css';

export default function Layout({ children }) {

    return (
        <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-[128px]">
            <div className="mainSection container mx-auto layout flex flex-col bg-white overflow-hidden opacity-100 md:opacity-95 my-0 md:my-[76px] rounded-0 sm:rounded-sm md:rounded-[50px] lg:rounded-[50px] xl:rounded-[80px] 2xl:rounded-[60px]" style={{ boxShadow: '0px 4px 124.9px 0px rgba(0, 0, 0, 0.25)' }}>
                <Navbar />
                <div className="content flex-grow mx-0 md:mx-[115px]">
                    {children}
                </div>
                <Footer />
            </div>
        </div>

    )
}