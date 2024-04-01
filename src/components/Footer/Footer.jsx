import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-violet-500 w-full min-h-24 flex justify-center items-center">
            <section>
                    <div className="flex flex-wrap">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <p className="text-sm text-zinc-300">
                                    &copy; Copyright 2023. All Rights Reserved by <span className="text-zinc-900 text-2xl font-bold font-Inter ">Shi</span><span className="text-zinc-300 text-2xl font-medium font-Inter">Sak</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-3 underline text-lg font-bold uppercase text-zinc-300">
                                    Company
                                </h3>
                                <ul>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900
                                            hover:text-white"
                                            to="/"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Affiliate&nbsp;Program
                                        </Link>
                                    </li>
                                <li className='hover:scale-125 transition-all duration-500'>
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Press Kit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                            <h3 className="tracking-px mb-3 underline text-lg font-bold uppercase text-zinc-300">
                                    Support
                                </h3>
                                <ul>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Account
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Help
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Customer&nbsp;Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                            <div className="h-full">
                            <h3 className="tracking-px mb-3 underline text-lg font-bold uppercase text-zinc-300">
                                    Legals
                                </h3>
                                <ul>
                                <li className="mb-2 hover:scale-125 transition-all duration-300">
                                        <Link
                                            className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                <li className="mb-2 hover:scale-125 transition-all duration-500">
                                        <Link
                                        className=" text-base font-medium text-zinc-900 hover:text-white"
                                            to="/"
                                        >
                                            Licensing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Footer