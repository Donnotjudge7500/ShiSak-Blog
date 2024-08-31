import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tutorial, Sidebar } from '../components/Index.js';
import ShiSakBlog from '../assets/ShiSakBlog.png';
import PostEvents from '../components/PostEvents.jsx';

function Home() {
    const navigate = useNavigate();
    const imageLogo = ShiSakBlog;
    const userStatus = useSelector((store) => store.authenticationSlice.status)
    const handleGetStarted = () => {
        userStatus ? navigate('/all-posts') : navigate('/login');
    }

    return (
        <div>
            <div className="w-full h-svh relative">
                <Sidebar />
                <div className='h-full w-full flex flex-col justify-evenly items-center md:flex-row lg:flex-row md:justify-evenly'>
                    
                    {/* <img className="w-[566px] h-[387px] left-32 top-20 absolute rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[1000px] rounded-br-[119px]" src={ imageLogo } alt='ShiSakBlog' /> */ }
                    <img className="w-5/6 rounded-b-full rounded-t-full -z-10 absolute top-6 md:w-[566px] md:h-[387px] md:absolute md:left-32 md:top-14 md:rounded-tl-[1000px] md:rounded-tr-[1000px] md:rounded-bl-[1000px] md:rounded-br-[119px]" src={ imageLogo } alt='ShiSakBlog' />


                    <div className='h-3/5 flex flex-col justify-evenly items-center lg:w-5/12 lg:h-2/3 md:top-16 lg:absolute lg:right-16'>
                        <div className="flex flex-col justify-center items-center lg:block lg:text-right lg:h-2/3 lg:leading-10 ">
                            <span className="text-zinc-900 text-5xl md:text-9xl lg:text-7xl tracking-wide lg:tracking-normal font-semibold font-['Inter'] pt-8">Write Your<br /></span>
                            <span className="text-violet-600 text-6xl sm:text-8xl lg:text-7xl tracking-wide font-semibold font-['Inter']">Article<br /></span>

                            <span className="text-zinc-900 text-5xl md:text-6xl lg:text-7xl tracking-widest font-semibold font-['Inter']">here</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-md  w-1/2 flex justify-center lg:h-16 lg:w-32 lg:ml-52">
                            <button
                                className="h-20 w-80 lg:h-16 text-center text-zinc-100 text-lg font-medium md:text-3xl font-['Inter'] select-none lg:text-lg"
                                onClick={ handleGetStarted }
                            >
                                { userStatus ? "Find all Posts" : "Get Started" }
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[1261.03px]  relative flex-col justify-start items-start inline-flex">
                    <div className="absolute right-0 top-40 w-[93px] h-[81.84px] origin-top-left -rotate-90 bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                    <div className="absolute top-96 left-16 w-[79.20px] h-[90px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                </div> */}
                {/* <div className="hidden md:block lg:hidden absolute bottom-96 left-20  w-[138.16px] h-[157px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                <div className="hidden md:block lg:hidden absolute bottom-96 right-20 w-[138.16px] h-[157px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" /> */}
                {/* Rendering the Tutorial of the app. */ }
                <div className='w-full h-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-t-md sticky bottom-0 md:hidden'>
                    <PostEvents />
                </div>
            </div>
            <Tutorial />
        </div>
    )
}

export default Home;