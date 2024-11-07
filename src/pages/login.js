import React, { useState } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password
        };
        console.log(formData);
    };

    return (
        <Layout>
            <div className="login">
                <div className="md:hidden absolute h-[0vh] bg-slate-800 w-[100%] z-0" style={{top: '90px'}}>
                    <div style={{ position: 'relative', minHeight: '90vh', backgroundColor: '#01d45b' }}>
                        <div className="custom-shape-divider-bottom-1720724252">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="md:container mx-auto h-screen md:h-auto px-[38px] md:px-0 md:flex md:justify-around md:items-center z-9 relative">
                    <div className="w-full md:max-w-xs relative top-[-50px] md:top-0">
                        <div className="logo md:hidden mb-[10px]">
                            <div className="w-[100%] mb-1 text-center">
                                <StaticImage src="../images/icon-text.png" alt="Clover Credit" className="mx-auto w-[150px]" />
                            </div>
                        </div>
                        <div className="bg-white px-[28px] py-[25px] rounded-lg bg-opacity-70">
                            <h2 className="text-[20px] md:hidden font-semibold">Login Credentials</h2>
                            <h1 className="text-[50px] hidden md:block font-semibold md:mt-[150px]">Welcome</h1>
                            <form onSubmit={handleSubmit} className="mt-[15px] md:mt-[25px] md:mb-[200px]">
                                <div className="mb-[25px] md:mb-[15px]">
                                    <input
                                        className="shadow appearance-none border rounded-[10px] w-[298px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm h-[35px]" style={{fontFamily: 'Aldrich'}}
                                        id="email"
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-[10px]">
                                    <input
                                        className="shadow appearance-none border rounded-[10px] w-[298px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" style={{fontFamily: 'Aldrich'}}
                                        id="password"
                                        type="password"
                                        placeholder="Social Security Number"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <span className="mb-[35px] md:mb-[25px] block text-[15px] font-normal">(Please enter full SSN# without hyphens)</span>
                                <div className="hidden md:block md:mb-[15px] ">
                                    <input type="checkbox" checked /> Remember me
                                </div>  
                                <div className="flex items-center justify-between w-[298px]">
                                    <button className="w-full bg-[#00D35B] text-white py-1 px-2 rounded-lg" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <StaticImage src="../images/clover.png" className="loginImg" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
