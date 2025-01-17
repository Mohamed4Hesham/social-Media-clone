import { Navigate } from "react-router-dom"

const PublicRoutes = ({children}:{children:React.ReactNode}) => {
    if(localStorage.getItem('SocialMediaToken') !== null){
        return <Navigate to={'/'} />
    }else{
        return children
    }
}

export default PublicRoutes
