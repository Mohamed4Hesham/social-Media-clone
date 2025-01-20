import GridDynamicContainer from '@/components/Grid container/GridDynamicContainer'
import SideNav from '@/components/SideNav/SideNav'
import { Outlet } from 'react-router-dom'
const Settingslayout = () => {
    return <>

    <GridDynamicContainer cols={12} className=' gap-3' >
    <SideNav />
    <div className='min-h-screen container mx-auto  p-2'>
    <Outlet>
    </Outlet>
    </div>
        
        {/* <SettingsPage /> */}
    </GridDynamicContainer>
    
    </>
}

export default Settingslayout
