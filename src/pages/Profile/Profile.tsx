import Card from '@/components/Card/Card';
import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer';
import { UserType } from '@/interfaces/UserSlice';
import { getLoggedUserData } from '@/redux/slices/UserSlice';
import { AppDispatch } from '@/redux/Store';
import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux'

interface Store {
    user : UserType
}
const Profile = () => {
    const dispatch : AppDispatch = useDispatch();
    const {name,photo,email} = useSelector((state:Store ) => state.user);
    React.useEffect(() => {
        const getData  = async ()=>{
            try {
                const Data = await dispatch(getLoggedUserData()).unwrap();
                console.log(Data);
            } catch (error) {
                console.log(error)
            }
            };
        getData();
    },[dispatch]);
    return <>
    <Helmet>
        <title>{name.length > 2 ? `${name}'s Profile` : "Profile"}</title>
        <meta name="description" content={`Profile to our lovely user ${name}`} />
    </Helmet>
        <GridDynamicContainer cols={12} className=' ' >
                <div className="p-2 col-span-10 col-start-2">
        {name.length <= 2 ? (
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
                src={photo}
                alt={name}
                />
                <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600">{email}</p>
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
