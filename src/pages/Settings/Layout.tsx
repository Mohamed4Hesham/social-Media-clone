import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <Helmet>
            <title>Settings</title>
            <meta name="description" content={`Settings page where you can change password , theme and profile picture`} />
        </Helmet>
        <div className='col-span-9' >
                <Outlet>
                    
                </Outlet>
        </div>
    </>
}

export default Layout
