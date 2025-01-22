import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider/ThemeProvider"


export function ThemeToggle() {
    const {theme,setTheme} = useTheme();
    const isDark = theme === 'dark';
    return (
        <div onClick={isDark ? () => setTheme('light') : () => setTheme('dark')} className={`  cursor-pointer flex items-center justify-start transition-all duration-500 ${isDark ? 'rotate-180' : 'rotate-0'} `} >  
            {isDark ? (
                <Sun className='w-6 h-6 text-gray-900 rotate-0 transition-all ' />
            ) : (
                <Moon  className='w-6 h-6 text-gray-900 rotate-0 transition-all ' />
            )}
        </div>
    )
}
