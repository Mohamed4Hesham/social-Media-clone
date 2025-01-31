import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator} from "@/components/ui/breadcrumb";


const NavMenu = () => {
    
    return<>
    <div className="text-center justify-center md:hidden mt-4  ">

    
    <Breadcrumb >
    <BreadcrumbList>
    <BreadcrumbItem>
    <BreadcrumbLink href="/settings/ChangePassword">Reset Password</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/settings/ChangeProfilePic">Profile Picture</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/settings/theme">Theme</BreadcrumbLink>
    </BreadcrumbItem>
    </BreadcrumbList>
</Breadcrumb>
</div>
</>
};

export default NavMenu;