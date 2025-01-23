import { LoggedUserData } from '@/interfaces/getLoggedUserData';
import { getLoggedUserData } from '@/redux/slices/UserSlice';
import { AppDispatch } from '@/redux/Store';
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux'

const Profile = () => {
    const [userData,setUserData] = React.useState<LoggedUserData>({
        message: "",
        user: {
            _id: "",
            name: "",
            email: "",
            dateOfBirth: "",
            gender: "",
            photo: "",
            createdAt: "",
            passwordChangedAt: ""
        }
    });
    const dispatch : AppDispatch = useDispatch();
    
    useEffect(() => {
        const getData  = async ()=>{
            try {
                const Data = await dispatch(getLoggedUserData()).unwrap();
                setUserData(Data);
            } catch (error) {
                console.log(error)
            }
            
        };
        getData();
    },[dispatch]);
    return <>
    <Helmet>
        <title>{userData.user.name.length > 2 ? `${userData.user.name}'s Profile` : "Profile"}</title>
        <meta name="description" content={`Profile to our lovely user ${userData.user.name}`} />
    </Helmet>
        <h1>{userData.user.name}</h1>
    </>
}

export default Profile
