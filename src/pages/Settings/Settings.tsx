import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer'
import Layout from './Layout'
import SideNav from './SideNav/SideNav'
const Settings = () => {
    return <>

    <GridDynamicContainer cols={12} className=' gap-3' >
        <SideNav />

        <Layout />
    </GridDynamicContainer>
    
    </>
}

export default Settings
