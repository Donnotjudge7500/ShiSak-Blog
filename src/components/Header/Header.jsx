import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutBtn } from '../Index.js';


function Header() {
    const authentication = useSelector((store) => store.authenticationSlice.status)
    const navigate = useNavigate()


    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authentication
        },
        {
            name: 'Sign Up',
            slug: '/signup',
            active: !authentication
        },
        {
            name: 'All Post',
            slug: '/all-posts',
            active: authentication
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authentication
        },
    ]



    return (
        <div className="w-full h-16 relative bg-zinc-100 shadow-lg bg-opacity-80 backdrop-blur-[30px] select-none font-Inter">
            <div className="right-24 top-[24px] absolute">
                <div className="relative text-zinc-900 flex justify-between items-center gap-10 h-full">
                    <nav>
                        <ul className='flex gap-6'>
                            {
                                navItems.map((item) =>
                                    item.active ? (
                                        <li key={ item.name }>
                                            <button
                                                onClick={ () => navigate(item.slug) }
                                                className='text-zinc-900 text-lg font-Inter hover:text-violet-600'
                                            >{ item.name }</button>
                                        </li>
                                    ) : null
                                )
                            }

                            { authentication && (
                                <LogoutBtn />
                            ) }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="left-[100px] top-[18px] absolute text-center"><span className="text-zinc-900 text-2xl font-bold font-Inter ">ShiSak</span><span className="text-violet-600 text-2xl font-medium font-Inter">BLOG</span></div>
        </div>
    )
}

export default Header
