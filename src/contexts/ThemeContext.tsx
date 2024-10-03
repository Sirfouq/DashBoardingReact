import { useContext,createContext,useState, useEffect } from "react";

interface ThemeContextProps{
    isDarkMode:boolean;
    toggleTheme:()=>void;
}

interface ThemeProviderProps{
    children:React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const useTheme=()=>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export const ThemeProvider =({children}:ThemeProviderProps)=>{
    const[isDarkMode,setIsDarkMode]= useState(false);
    const toggleTheme =()=>setIsDarkMode((mode)=>!mode);

    useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDarkMode]);

    return(
        <ThemeContext.Provider value ={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}