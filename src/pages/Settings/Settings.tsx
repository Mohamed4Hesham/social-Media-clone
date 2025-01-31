import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer'
import Layout from './Layout'
import SideNav from './SideNav/SideNav'
import NavMenu from './NavMenu/NavMenu'
const Settings = () => {
    return <>
    <div className='flex justify-center items-center'>
    <NavMenu />
    </div>
    
    <GridDynamicContainer cols={12} className=' gap-3' >
        <SideNav />

        <Layout />
    </GridDynamicContainer>
    
    </>
}

export default Settings
