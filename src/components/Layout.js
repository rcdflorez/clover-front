import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/global.css';

export default function Layout({ children }) {

    return (
        <div className="layout flex flex-col min-h-screen bg-white shadow-2xl overflow-hidden m-0 md:m-10 md:rounded-3xl opacity-100 md:opacity-95">
            <Navbar />
            <div className="content flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}