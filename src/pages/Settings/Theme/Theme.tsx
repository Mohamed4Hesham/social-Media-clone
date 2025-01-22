import { ThemeToggle } from './ThemeToggle'

const Theme = () => {
    return <>
    <p className=' text-center mb-8 font-bold text-gray-800 text-xl '>Theme toggle</p>
    <div className='flex flex-col mx-8 min-h-screen justify-start '> 
        <div className='flex items-center justify-between '>
        <p className='text-center font-bold text-yellow-400 dark:text-gray-700  '>Theme mode</p>
        <ThemeToggle />
        </div>
        
    </div>
    
    </>
}

export default Theme
