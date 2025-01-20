import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer'
import SideNav from '@/components/SideNav/SideNav'
const Settings = () => {
    return <>

    <GridDynamicContainer cols={12} className=' gap-3' >
        <SideNav />
        {/* <SettingsPage /> */}
    </GridDynamicContainer>
    
    </>
}

export default Settings
