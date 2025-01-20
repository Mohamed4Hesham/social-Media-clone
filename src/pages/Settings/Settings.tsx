import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer'
import SideNav from '@/components/SideNav/SideNav'
import Layout from './Layout'
const Settings = () => {
    return <>

    <GridDynamicContainer cols={12} className=' gap-3' >
        <SideNav />

        <Layout />
    </GridDynamicContainer>
    
    </>
}

export default Settings
