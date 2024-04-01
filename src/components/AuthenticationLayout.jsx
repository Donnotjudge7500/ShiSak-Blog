import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthenticationLayout({
    children,
    authentication = true
}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((store) => store.authenticationSlice.status)
    
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        } else if (!authentication && authStatus !== authentication) {
            navigate('/');
        };
        setLoader(false);
    },[authStatus,navigate,authentication])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthenticationLayout