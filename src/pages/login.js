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
                <div className="absolute h-[0vh] bg-slate-800 w-[100%] z-0">
                    <div style={{ position: 'relative', minHeight: '90vh', backgroundColor: '#01d45b' }}>
                        <div className="custom-shape-divider-bottom-1720724252">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto h-screen flex justify-center z-9 relative">
                    <div className="p-8 w-full max-w-xs">
                        <div className="logo">
                            <div className="w-[100%] mb-1 text-center">
                                <StaticImage src="../images/icon-text.png" alt="Clover Credit" className="mx-auto w-[150px]" />
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-lg bg-opacity-70">
                            <h2 className="text-md font-bold mb-3">Login Credentials</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        className="shadow appearance-none border rounded-md w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        id="email"
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-1">
                                    <input
                                        className="shadow appearance-none border rounded-md w-full py-2 px-1 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                        id="password"
                                        type="password"
                                        placeholder="Social Security Number"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <span className="mb-4 block text-[9px]">(Please enter full SSN# without hyphens)</span>
                                <div className="flex items-center justify-between">
                                    <button className="w-full bg-green-600 text-white py-1 px-2 rounded-lg" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
