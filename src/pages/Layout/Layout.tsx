import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import React from 'react';

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;

    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on page load
    }, []);
    const isSettingsRoute = /^\/settings(?:\/.*)?$/.test(pathname);

    return <>
    {/* Navbar*/ }
    <Navbar/>
    <div className={`min-h-screen ${ isSettingsRoute ? '' : 'container p-2' } mx-auto  `}>
    <Outlet>
    </Outlet>
    </div>

    {/* Footer */ }
        
    </>
}

export default Layout
