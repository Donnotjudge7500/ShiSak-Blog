import React, { useState, useEffect } from 'react';
import authService from '../../appwrite/authentication.js';
import { Home, Bookmark, Users, Settings } from 'lucide-react';
import { Status, UserInfo } from '../Index.js';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [style, setStyle] = useState('opacity-0');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userData = async () => {
            const userInformation = await authService.getCurrentUser()
            if (userInformation.name) setUserName(userInformation.name);
        }
        userData()

        
    }, [])

    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let firstChar = '';
    for (let i = 0; i < userName.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (userName[i] === alpha[j]) {
                firstChar = userName[i];
            }
        }



        const handleStyle = () => {
            if (style === 'opacity-0') {
                setStyle('opacity-100')
            } else {
                setStyle('opacity-0')
            }
        }

        return (
            <div className='relative hidden md:inline md:sticky md:left-0 md:top-16'>
                    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r py-8 bg-white">
                        <nav className="flex flex-1 flex-col items-center space-y-6">

                            {/* <Link
                            to="/"
                            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                        >
                            <Home size={ 28 } />
                        </Link> */}

                            <Link
                                to="#"
                                className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                            >
                                <Status />
                            </Link>


                            <Link
                                to="#"
                                className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                            >
                                <Bookmark size={ 28 } />
                            </Link>

                            <Link
                                to="#"
                                className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                            >
                                <Users size={ 28 } />
                            </Link>
                        </nav>

                        <div className="flex flex-col items-center space-y-6 mb-16">
                            <Link
                                to="#"
                                className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-gray-100"
                            >
                                <Settings size={ 28 } />
                            </Link>

                            <button
                                onClick={ handleStyle }
                                className='h-10 w-10 font-Inter font-bold rounded-lg p-1.5 text-white transition-colors duration-200 bg-black/100  focus:outline-none hover:bg-zinc-400'
                            >
                                { firstChar.toUpperCase() }
                            </button>
                        </div>
                    </aside>
                <UserInfo className={ style } />
            </div>
        )
    }
}
export default Sidebar;