import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import OnlineLogo from '../assets/Online.png';
import OfflineLogo from '../assets/Offline.png';

function Status() {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine)
        };
        window.addEventListener("online", updateOnlineStatus)
        window.addEventListener("offline", updateOnlineStatus)

        return () => {
            window.addEventListener("online", updateOnlineStatus)
            window.addEventListener("offline", updateOnlineStatus)
        }
    }, []);
    return (
        <>
            <div className='h-auto w-full flex items-center justify-center'>

                {
                    <LazyLoad className='h-3/4 w-3/4 p-0'>
                        <img src={ isOnline ? OnlineLogo : OfflineLogo } alt="Status" />
                    </LazyLoad>
                }
            </div>
        </>
    )
}

export default Status