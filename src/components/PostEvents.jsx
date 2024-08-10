import React from 'react';
import { PlusCircleIcon, BookOpenIcon, HomeIcon, ArrowRightEndOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutBtn } from './Index.js';


function PostEvents() {
    const authentication = useSelector((store) => store.authenticationSlice.status)
    const navigate = useNavigate()


    const navItems = [
        {
            name: 'Home',
            component: <HomeIcon className='h-12 w-12' />,
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            component: <ArrowRightEndOnRectangleIcon className='h-12 w-12' />,
            slug: '/login',
            active: !authentication
        },
        {
            name: 'Sign Up',
            component: <UserPlusIcon className='h-12 w-12'/>,
            slug: '/signup',
            active: !authentication
        },
        {
            name: 'All Post',
            component: <BookOpenIcon className='h-12 w-12' />,
            slug: '/all-posts',
            active: authentication
        },
        {
            name: 'Add Post',
            component: <PlusCircleIcon className='h-12 w-12' />,
            slug: '/add-post',
            active: authentication
        },
    ]
    return (
        <div className='h-full w-full flex justify-evenly items-center md:hidden'>
            <ul className='flex justify-evenly items-center w-full h-full gap-x-3'>
                {
                    navItems.map((item) =>
                        item.active ? (
                            <li key={ item.name } className='flex flex-col justify-center items-center'>
                                <button
                                    onClick={ () => navigate(item.slug) }
                                    className='text-zinc-900 text-lg font-Inter hover:text-violet-600'
                                >{ item.component }</button>
                                <div className='text-lg font-Inter font-semibold'>{item.name}</div>
                            </li>
                        ) : null
                    )
                }

                { authentication && (
                    <>
                        <div className='flex flex-col justify-center items-center'>
                            <LogoutBtn />
                            <div className='font-Inter font-semibold text-lg'>Logout</div>
                        </div>
                    </>
                )

                }
            </ul>
        </div>
    )
}  



export default PostEvents