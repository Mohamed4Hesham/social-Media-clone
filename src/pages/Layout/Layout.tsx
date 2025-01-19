import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/navbar'
const Layout = () => {
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
