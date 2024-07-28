import React, { useEffect, useState } from 'react';
import authService from '../appwrite/authentication.js';

function userInfo() {
    // const [userInfo, setUserInfo] = useState({});
    // const [userName, setUserName] = useState('');
    // const [useremail, setUserEmail] = useState('');
    // const [userStatus, setUserStatus] = useState('Inactive');

    // useEffect(() => {
    //     (async () => {
    //         const userInfo = await authService.getCurrentUser()
    //         console.log(userInfo)
    //         if (userInfo) setUserInfo(userInfo);
    //         if (userInfo.name) setUserName(userInfo.name);
    //         if (userInfo.email) setUserEmail(userInfo.email);
    //         if (userInfo.status === true) setUserStatus('Active');
    //     })
    // }, [])

    const userInfo = async () => {
        const userData = await authService.getCurrentUser().then((response) => JSON.stringify(response))

        return userData
        
    }
    console.log(userInfo())

    return (
        <>
            <div className='relative h-1/4 w-1/4 bg-green-500 z-10'>
                {/* <p>{ userName }</p>
                <p>{ useremail }</p>
                <p>{ userStatus }</p> */}
            </div>
        </>
    )
}

export default userInfo