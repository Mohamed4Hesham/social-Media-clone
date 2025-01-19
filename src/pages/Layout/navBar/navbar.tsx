import { CircleUserRound, House, Unplug } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { DropdownMenuRadioGroupDemo } from "./dropDownMenu";

export default function Navbar() {
return (
    <nav className=" bg-gray-900 border-gray-200">
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
        <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        >
        <span className="sr-only">Open main menu</span>
        <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
            />
        </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
            <li>
            <NavLink
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
            >
                <House className="w-6 h-6 items-center text-white" />
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/profile"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
                <CircleUserRound className="w-6 h-6 items-center text-white" />
            </NavLink>
            </li>
        </ul>
        </div>
        <div className="thirdSection">
            <DropdownMenuRadioGroupDemo/>
        </div>
    </div>
    </nav>
);
}
