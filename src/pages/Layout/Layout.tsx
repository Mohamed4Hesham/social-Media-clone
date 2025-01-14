import { Outlet } from 'react-router-dom'
const Layout = () => {
    return <>
    {/* Navbar*/ }
    <div className='min-h-screen container mx-auto  p-2'>
    <Outlet>

    </Outlet>
    </div>

    {/* Footer */ }
        
    </>
}

export default Layout
