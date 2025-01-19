    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { TableOfContents } from "lucide-react";

    export function DropdownMenuRadioGroupDemo() {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <TableOfContents className="rounded-md cursor-pointer text-white w-8 h-12" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900  rounded-xl me-12 ">
                
                    <div className="flex flex-col p-2 gap-2 ">
                        <Link className="self-center text-white " to={'/'}>
                        Home
                        </Link>
                        <Link className="self-center text-white " to={'/profile'}>
                        Profile
                        </Link>
                        <button  className="self-center text-white ">
                            Logout
                        </button>
                        
                    </div>
                
        </DropdownMenuContent>
        </DropdownMenu>
    );
    }
