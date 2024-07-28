import React from 'react'
import { Home, BarChart, Copy, Bookmark, Users, Settings } from 'lucide-react';
import { Status, UserInfo } from '../Index.js';


function Sidebar() {
    return (
        <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
            <nav className="flex flex-1 flex-col items-center space-y-6 mt-10">
            <UserInfo/>
                <a
                    href="#"
                    className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                >
                    <Home size={ 28 } />
                </a>

                <a
                    href="#"
                    className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                >
                    <Status />
                </a>


                <a
                    href="#"
                    className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                >
                    <Bookmark size={ 28 } />
                </a>

                <a
                    href="#"
                    className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                >
                    <Users size={ 28 } />
                </a>
            </nav>

            <div className="flex flex-col items-center space-y-6">
                <a
                    href="#"
                    className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
                >
                    <Settings size={ 28 } />
                </a>

                <button
                >
                    <img
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="User avatar"
                    />
                </button>
            </div>
        </aside>
    )
}

export default Sidebar;