import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import React from 'react';
import SideNav from '@/components/SideNav/SideNav';
import Settings from '../Settings/Settings';
const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on page load
    }, []);
    const location = useLocation();
    const pathName = location.pathname;
    return <>
    {/* Navbar*/ }
    <Navbar/>
<<<<<<< Updated upstream
    <div className={`min-h-screen ${pathname === '/settings' || pathname === '/settings/ChangeProfilePic' || pathname === '/settings/ChangePassword'  ? '' : 'container' } mx-auto  p-2`}>
=======
    {pathName === '/settings' || pathName === '/settings/ChangePassword' || pathName === '/settings/ChangeProfilePic' ?
    <div className='grid grid-cols-12'> 
        <div className="side-Nav col-span-3">
        {<SideNav/>}
        </div>
        <div className="settings col-span-9">
            <Settings/>
        </div>
    </div>
    : null}
        <div className='min-h-screen container mx-auto  p-2'>
>>>>>>> Stashed changes
    <Outlet>
    </Outlet>
    </div>

    {/* Footer */ }
        
    </>
}

export default Layout
