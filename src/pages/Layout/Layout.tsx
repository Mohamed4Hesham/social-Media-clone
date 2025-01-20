import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import React from 'react';
const Layout = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on page load
    }, []);
    return <>
    {/* Navbar*/ }
    <Navbar/>
    <div className='min-h-screen container mx-auto  p-2'>
    <Outlet>
    </Outlet>
    </div>

    {/* Footer */ }
        
    </>
}

export default Layout
