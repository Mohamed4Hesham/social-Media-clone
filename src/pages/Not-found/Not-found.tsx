import {  AlertTriangle  } from 'lucide-react'

const NotFound = () => {
    return <>
        <div className='min-h-screen flex flex-col justify-center items-center '>
            <h1 className='text-2xl font-bold'>Error : 404</h1>
            <div className='flex items-center justify-center gap-2'>
            <AlertTriangle className='w-6 h-6 items-center text-red-600  ' />
            <p className='text-2xl font-bold '>Page not found</p>
            </div>
            
        </div>
    </>
}

export default NotFound
