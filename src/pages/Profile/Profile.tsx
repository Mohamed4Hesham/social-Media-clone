import { LoggedUserData } from '@/interfaces/getLoggedUserData';
import { getLoggedUserData } from '@/redux/slices/UserSlice';
import { AppDispatch } from '@/redux/Store';
import React, { useEffect } from 'react'
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
    },[])
    return <>
        <h1>{userData.user.name}</h1>
    </>
}

export default Profile
