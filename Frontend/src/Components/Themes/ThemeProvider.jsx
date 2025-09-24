import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ThemesContext = createContext();
const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
        if (localStorage.theme) {
        return localStorage.theme === "dark";
    } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    }
    return false;
  });


    useEffect(()=>{
        const root = document.documentElement
        if(isDark){
            root.classList.add('dark')
            localStorage.theme = 'dark'
        }else{
            root.classList.remove('dark')
            localStorage.theme = 'light'
        }
    },[isDark])
  return (
    <ThemesContext.Provider value={{isDark,setIsDark}}>
        {children}
    </ThemesContext.Provider>
  )
}

export default ThemeProvider