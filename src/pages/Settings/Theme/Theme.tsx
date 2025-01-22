import { ThemeToggle } from './ThemeToggle'

const Theme = () => {
    return <>
    <p className=' text-center mb-8 font-bold text-gray-800 text-xl '>Theme toggle</p>
    <div className='flex flex-col mx-8 min-h-screen justify-start '> 
        <div className='flex items-center justify-between bg-slate-200/60 dark:bg-slate-300/50 p-4  rounded-2xl '>
        <p className='text-center font-bold  dark:text-gray-700  '>Theme mode</p>
        <ThemeToggle />
        </div>
        
    </div>
    
    </>
}

export default Theme
