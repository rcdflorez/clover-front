import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/global.css';

export default function Layout({ children }) {

    return (
        <div>
            <div className="layout flex flex-col min-h-screen">
                <Navbar />
                <div className="content flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}