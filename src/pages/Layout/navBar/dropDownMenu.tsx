    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { CircleUserRound, Cog, House, LogOut, TableOfContents } from "lucide-react";
import Cookies from "js-cookie";

    export function DropdownMenuRadioGroupDemo() {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <TableOfContents className="rounded-md cursor-pointer text-white w-8 h-12" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900  rounded-xl me-12 ">
                    
                    <div className="flex flex-col p-2 gap-2 ">
                        <Link className=" text-white " to={'/'}>
                        <div className="flex justify-start items-center gap-2">
                            <House className="w-5 h-5 items-center text-white" />
                            <span>Home</span>
                        </div>
                        
                        </Link>
                        <Link className=" text-white " to={'/profile'}>
                        <div className="flex justify-start items-center gap-2">
                            <CircleUserRound className="w-5 h-5 items-center text-white" />
                            <span>Profile</span>
                        </div>
                        
                        </Link>
                        <Link className=" text-white " to={'/settings'}>
                        <div className="flex justify-start items-center gap-2">
                            <Cog className="w-5 h-5" />
                            <span>Settings</span>
                        </div>
                        
                        </Link>
                        <button onClick={() =>{
                        Cookies.remove('SocialMediaToken')
                        window.location.reload();
                        }}
                        className=" text-white ">
                            <div className="flex justify-start items-center gap-2">
                            <LogOut className="w-5 h-5 items-center text-white" />
                            <span>Logout</span>
                            </div>
                            
                        </button>
                        
                    </div>
                
        </DropdownMenuContent>
        </DropdownMenu>
    );
    }
