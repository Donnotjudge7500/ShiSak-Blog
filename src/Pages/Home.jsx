import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tutorial, Sidebar } from '../components/Index.js';
import ShiSakBlog from '../assets/ShiSakBlog.png';

function Home() {
    const navigate = useNavigate();
    const imageLogo = ShiSakBlog;
    const userStatus = useSelector((store) => store.authenticationSlice.status)
    const handleGetStarted = () => {
            userStatus ? navigate('/all-posts') : navigate('/login');
    }

    return (
        <div>
            <div className="w-full min-h-screen relative">
                <Sidebar />
                <img className="w-[566px] h-[387px] left-32 top-20 absolute rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[1000px] rounded-br-[119px]" src={ imageLogo } alt='ShiSakBlog' />
                <div className="w-[625px] right-40 top-[35px] absolute text-right"><span className="text-zinc-900 text-[90px] font-semibold font-['Inter']">Write Your<br /></span><span className="text-violet-600 text-[90px] font-semibold font-['Inter']">Article<br /></span><span className="text-zinc-900 text-[90px] font-semibold font-['Inter']">here</span>
                </div>
                <div className="w-[194px] h-16 absolute bottom-24 right-48">
                    <span className="absolute flex h-3 w-3 right-6 z-50">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                    </span>
                    <div className="w-[140px] h-14 left-7 top-1 absolute bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-md " />
                    <button 
                    className="w-[140px] h-14 left-7 top-1 absolute text-center text-zinc-100 text-lg font-medium font-['Inter'] select-none"
                        onClick={ handleGetStarted }
                    >
                        { userStatus ? "Find all Posts" : "Get Started" }
                    </button>
                </div>
                {/* <div className="w-[1261.03px]  relative flex-col justify-start items-start inline-flex">
                    <div className="absolute top-3 left-20  w-[138.16px] h-[157px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px] opacity-80" />
                    <div className="absolute right-0 top-40 w-[93px] h-[81.84px] origin-top-left -rotate-90 bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                    <div className="absolute top-96 right-6 w-[129.36px] h-[147px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                    <div className="absolute top-96 left-16 w-[79.20px] h-[90px] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
                </div> */}

                {/* Rendering the Tutorial of the app. */ }
            </div>
            <Tutorial />
        </div>
    )
}

export default Home;