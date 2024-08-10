import React, { useEffect, useState } from 'react';
import authService from '../appwrite/authentication';

function userInfo({ className }) {
    const [userInfo, setUserInfo] = useState({});
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userStatus, setUserStatus] = useState('Inactive');

    useEffect(() => {
        const userData = async () => {
            const userInformation = await authService.getCurrentUser()
            if (userInformation) setUserInfo(userInformation)
            if (userInformation.name) setUserName(userInformation.name);
            if (userInformation.email) setUserEmail(userInformation.email);
            if (userInformation.status === true) setUserStatus('Active');
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

        return (
            <>
                <div className={ `absolute bottom-28 left-14 h-36 w-96  bg-white border shadow-lg z-10 flex items-center rounded-3xl transition-opacity ${className}` }>
                    <div className='w-2/6 h-1/2 flex justify-center items-center border-r-2'>
                        <div className='h-12 w-12 rounded-full bg-pink-700  font-Inter font-semibold text-white flex justify-center items-center text-3xl border-gray-400 border-2'>
                            <h3>{ firstChar.toUpperCase() }</h3>
                        </div>
                    </div>
                    <div className='text-zinc-800 h-full w-4/6 flex flex-col items-center justify-center font-Inter pt-8 '>
                        <p className='font-semibold text-lg tracking-widest'>
                            { userName }
                        </p>
                        <p className='pt-1 text-sm'>
                            { userEmail }
                        </p>
                        <div className='pb-4 text-lg'>
                            <span className='flex items-center gap-2'>
                                { userStatus ? <div className='h-3 w-3 bg-green-400 rounded-full'></div> : <div className='h-3 w-3 bg-zinc-700 rounded-full'></div> } 
                                { userStatus.toLowerCase() }
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default userInfo;