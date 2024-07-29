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
                <div className={ `absolute bottom-32 left-10 h-2/3 w-72  bg-purple-700 z-10 flex flex-col itmes-center justify-end overflow-hidden rounded-3xl ${className}` }>
                    <div className='relative left-[110px] top-3.5 h-16 w-16 rounded-full bg-black  font-Inter font-bold text-white flex justify-center items-center text-4xl border-gray-400 border-2'>
                        <h3>{ firstChar }</h3>
                    </div>
                    <div className='bg-gray-400 text-black h-2/3 w-full flex flex-col items-center font-Inter pt-8'>
                        <p className='font-bold text-lg'>
                            { userName }
                        </p>
                        <p className='pt-1 text-sm'>
                            { userEmail }
                        </p>
                        <p className='pt-3 text-lg'>
                            { userStatus }
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
export default userInfo;