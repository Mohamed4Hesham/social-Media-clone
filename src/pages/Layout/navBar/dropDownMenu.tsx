    import * as React from "react";
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuRadioGroup,
        DropdownMenuRadioItem,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { TableOfContents } from "lucide-react";

    export function DropdownMenuRadioGroupDemo() {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <TableOfContents className="rounded-md text-white w-8 h-12" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900 p-8 rounded ">
            <DropdownMenuRadioGroup >
                <DropdownMenuRadioItem value="top" className="text-white">
                <Link to={"/profile"}>
                Profile
                </Link>
                </DropdownMenuRadioItem>
            <Link to={"/login"}>
                <DropdownMenuRadioItem value="top" className="text-white">
                Logout
                </DropdownMenuRadioItem>
            </Link>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        </DropdownMenu>
    );
    }
