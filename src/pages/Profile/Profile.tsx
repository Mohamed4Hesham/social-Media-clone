import Card from '@/components/Card/Card';
import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer';
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
    console.log(userData);
    return <>
    <Helmet>
        <title>{userData.user.name.length > 2 ? `${userData.user.name}'s Profile` : "Profile"}</title>
        <meta name="description" content={`Profile to our lovely user ${userData.user.name}`} />
    </Helmet>
        <GridDynamicContainer cols={12} className=' ' >
                <div className="p-2 col-span-10 col-start-2">
        {userData.user.name.length <= 2 ? (
            <div className="animate-pulse">
            <div className="flex items-center mb-4">
                <div className="w-48 h-48 bg-gray-300 rounded-full mr-4"></div>
                <div>
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-48"></div>
                </div>
            </div>
            </div>
        ) : (
            <>
            
            <div className="flex items-center mb-4">
                <img
                className="w-48 h-48 rounded-full mr-4"
                src={userData.user.photo}
                alt={userData.user.name}
                />
                <div>
                <h3 className="text-lg font-semibold">{userData.user.name}</h3>
                <p className="text-gray-600">{userData.user.email}</p>
                </div>
            </div>
            </>
        )}
        </div>

                        <Card />
        </GridDynamicContainer>
    </>
}

export default Profile
