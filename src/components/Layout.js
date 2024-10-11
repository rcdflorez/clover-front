import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/global.css';

export default function Layout({ children }) {

    return (
        <div className="container mx-auto layout flex flex-col bg-white shadow-2xl overflow-hidden opacity-100 md:opacity-95 my-0 md:my-[86px] rounded-0 md:rounded-[60px]">
            <Navbar />
            <div className="content flex-growm mx-[0px] md:mx-[115px]">
                {children}
            </div>
            <Footer />
        </div>
    )
}