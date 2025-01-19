import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie'

const PublicRoutes = ({children}:{children:React.ReactNode}) => {
    if(Cookies.get('SocialMediaToken') !== undefined){
        return <Navigate to={'/'} />
    }else{
        return children
    }
}

export default PublicRoutes
