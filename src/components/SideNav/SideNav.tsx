import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return <>
        <div className=' flex flex-col justify-center col-span-3 shadow-xl rounded-2xl min-h-screen bg-slate-100'>
            <h2 className='text-2xl font-bold text-center mb-4 p-2 text-slate-700'>Settings</h2>
            <ul>
                <li className='text-slate-700 text-base underline'>
                    <NavLink to="/reset-password">Reset password</NavLink>
                </li>
            </ul>
            <p className='text-slate-700 text-base underline'> Reset password </p>

        </div>
    </>
}

export default SideNav
