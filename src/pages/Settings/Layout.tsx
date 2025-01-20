import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        {/* <div className='col-span-9' > */}
                <Outlet>
                    
                </Outlet>
        {/* </div> */}
    </>
}

export default Layout
