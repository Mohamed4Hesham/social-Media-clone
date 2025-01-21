import {DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { CircleUserRound, Cog, House, LogOut, TableOfContents } from "lucide-react";
import Cookies from "js-cookie";
import React from "react";

    const Items = [
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
    export function DropdownMenuRadioGroupDemo() {
        const [open, setOpen] = React.useState(false);
        const handleItemClick = () => {
            setOpen(false); 
        };

    return (
        <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
        <DropdownMenuTrigger asChild>
            <TableOfContents className="rounded-md cursor-pointer text-white w-8 h-12" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom"  align="end" className="bg-gray-900  rounded-xl  ">
                    <div className="flex flex-col p-2 gap-2 ">
                        {Items.map((item , index) => (
                            <Link onClick={handleItemClick} key={index} className=" text-white " to={item.href}>
                            <div className="flex justify-start items-center gap-2">
                                <item.icon className="w-5 h-5 items-center text-white" />
                                <span>{item.label}</span>
                            </div>
                            </Link>
                        ))}
                        
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
