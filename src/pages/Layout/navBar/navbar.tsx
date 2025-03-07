import {  CircleUserRound, Cog, House, LogOut, Unplug } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { DropdownMenuRadioGroupDemo } from "./dropDownMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import Cookies from "js-cookie";

const navbarItems = [
    {
        label: "Home",
        href: "/",
        icon: House,
    },
    {
        label: "Profile",
        href: "/profile",
        icon: CircleUserRound,
    }, 
    {
        label: "Settings",
        href: "/settings",
        icon: Cog,
    }
]
export default function Navbar() {
    const Token = useSelector((state: RootState) => state.user?.token);
    if(!Token){
        return <>
            <nav className=" bg-gray-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4">
                <div >
                    <Link
                    to='/'
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Unplug className="text-white w-8 h-12"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Connect
                        </span>
                    </Link>
                </div>

            </div>
            </nav>
            </>
    }
    if(Token){
        return (
            <nav className=" bg-blue-600  dark:bg-black  border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <Link
                    to='/'
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Unplug className="text-white w-8 h-12"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Connect
                        </span>
                    </Link>
                </div>
                
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                    {navbarItems.map((item , index) => (
                        <li key={index}>
                        <NavLink
                            to={item.href}
                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page"
                        >
                        <item.icon className={`w-6 h-6 items-center text-white`} />
                        </NavLink>
                        </li>
                    ))}
                    <li>
                    <button
                    onClick={() =>{
                        Cookies.remove('SocialMediaToken')
                        window.location.reload();
                        }}
                        
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                    >
                    <LogOut className="w-6 h-6 items-center text-white" />
                    </button>
                    </li>
                </ul>
                </div>

                <div className="thirdSection  ">
                    <DropdownMenuRadioGroupDemo/>
                </div>
            </div>
            </nav>
        );
    }
}
