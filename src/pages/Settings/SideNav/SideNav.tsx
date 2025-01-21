import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return <>
        <div
        className=' flex flex-col col-span-3 shadow-xl min-h-screen text-start bg-gray-900 p-16'
        >
            <h2 className='text-2xl font-bold mb-20 p-2 text-start text-white'>Settings</h2>
            <div>
                <ul>
                    <li className='text-white text-base mb-6 '>
                        <NavLink to="/settings/ChangePassword">Reset password</NavLink>
                    </li>
                    <li className='text-white text-base mb-6 '>
                        <NavLink to="/settings/ChangeProfilePic">Profile picture</NavLink>
                    </li>
                    <li className='text-white text-base '>
                        <NavLink to="/settings/theme">Theme</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default SideNav
