import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authenticationService from '../../appwrite/authentication.js';
import { logout as userLogout } from '../../store/features/authenticationSlice.js';

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        authenticationService.logout().then(() => {
            dispatch(userLogout());
            navigate('/');
        }).catch(() => {
            return console.log('err!!!')
        })
    }
    return (
        <button onClick={ logoutHandler } className='text-lg text-zinc-900 hover:text-violet-600'>
            Logout
        </button>
    )
}

export default LogoutBtn