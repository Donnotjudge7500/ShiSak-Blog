import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import afterlog from '../assets/afterlog.mp4';
import findAllPostBtn from '../assets/findbutton.png';
import loginSection from '../assets/loginSection.png';
import signupSection from '../assets/signupSection.png';

const Tutorial = () => {
    const [elementVisibilities, setElementVisibilities] = useState({
        isVisible1: false,
        isVisible2: false,
        isVisible3: false,
        isVisible4: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.scrollY;

            setElementVisibilities({
                isVisible1: yOffset > 270,
                isVisible2: yOffset > 600,
                isVisible3: yOffset > 1150,
                isVisible4: yOffset > 1400,
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='mb-10'>
            <div className="bg-black/50 px-32 py-20 mt-10">
                <div className="flex justify-center items-center h-80 mt-5 overflow-hidden px-5 bg-zinc-500 rounded-lg">
                    <Transition
                        show={ elementVisibilities.isVisible1 }
                        enter="transition-transform duration-1000"
                        enterFrom="opacity-0 -translate-x-20"
                        enterTo="opacity-100 translate-x-0"
                    >
                        <p className="text-white font-Inter w-1/2 text-xl">
                            This is the <span className="font-Inter font-semibold text-purple-800">Navigation</span> section. You can navigate to different pages on this platform.
                        </p>
                    </Transition>
                    <div className="overflow-hidden w-1/2">
                        <Transition
                            show={ elementVisibilities.isVisible1 }
                            enter="transition-transform duration-1000 ease-out"
                            enterFrom="opacity-0 translate-x-20"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <video preload="auto" width={ 700 } height={ 800 } className="rounded-lg">
                                <source src={ afterlog } type="video/mp4" />
                                File Not Supported.
                            </video>
                        </Transition>
                    </div>
                </div>

                <div className="flex justify-center items-center h-80 mt-5 overflow-hidden px-5 bg-zinc-500 rounded-lg">
                    <Transition
                        show={ elementVisibilities.isVisible2 }
                        enter="transition-transform duration-1000"
                        enterFrom="opacity-0 -translate-x-20"
                        enterTo="opacity-100 translate-x-0"
                    >
                        <p className="text-white font-Inter w-1/2 text-xl">
                            This <span className="font-Inter font-semibold text-purple-800">Find all posts</span> button will navigate you to all the resources and insights.
                        </p>
                    </Transition>
                    <div className="overflow-hidden w-1/2">
                        <Transition
                            show={ elementVisibilities.isVisible2 }
                            enter="transition-transform duration-1000 ease-out"
                            enterFrom="opacity-0 translate-x-20"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <img src={ findAllPostBtn } alt="Tut." className="rounded-lg" />
                        </Transition>
                    </div>
                </div>
            </div>

            
            {/* Login And SignUp Tutorial Page */}
            <div className="bg-black/40 px-32 py-20">
                <div className="flex justify-center items-center h-80 mt-5 overflow-hidden px-5 bg-zinc-400 rounded-lg">
                    <Transition
                        show={ elementVisibilities.isVisible3 }
                        enter="transition-transform duration-1000"
                        enterFrom="opacity-0 -translate-x-20"
                        enterTo="opacity-100 translate-x-0"
                    >
                        <p className="text-white font-Inter w-1/2 text-xl">
                            This is the <span className="font-Inter font-semibold text-purple-800">Login</span> section. You can log in by using your email and password.
                        </p>
                    </Transition>
                    <div className="overflow-hidden w-1/2">
                        <Transition
                            show={ elementVisibilities.isVisible3 }
                            enter="transition-transform duration-1000 ease-out"
                            enterFrom="opacity-0 translate-x-20"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <img src={ loginSection } alt="loginSection.png" className="rounded-lg" />
                        </Transition>
                    </div>
                </div>

                <div className="flex justify-center items-center h-80 mt-5 overflow-hidden px-5 bg-zinc-400 rounded-lg">
                    <Transition
                        show={ elementVisibilities.isVisible4 }
                        enter="transition-transform duration-1000"
                        enterFrom="opacity-0 -translate-x-20"
                        enterTo="opacity-100 translate-x-0"
                    >
                        <p className="text-white font-Inter w-1/2 text-xl">
                            This is the <span className="font-Inter font-semibold text-purple-800">Sign Up</span> section. You can create account if you don't have one.
                        </p>
                    </Transition>
                    <div className="overflow-hidden w-1/2">
                        <Transition
                            show={ elementVisibilities.isVisible4 }
                            enter="transition-transform duration-1000 ease-out"
                            enterFrom="opacity-0 translate-x-20"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <img src={ signupSection } alt="signupSection.png" className="rounded-lg" />
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;