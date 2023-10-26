/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { Theme, ThemeContextProviderProps, ThemeContextType } from '@/lib/types';
import { useEffect, useState, createContext, useContext } from 'react'

const themeContext = createContext<ThemeContextType | null> (null);


export default function ThemeContextProvider({ children } : ThemeContextProviderProps) {
    //const storage = new LocalStorage('theme');
    const [stroredValue , setItem, getItem] = useLocalStorage('theme');

    const initialTheme = getItem('theme') || 'light';
    const [theme, setTheme] = useState<Theme>(initialTheme as Theme);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setItem('dark');
            document.documentElement.classList.add('dark');

        } else {

            setTheme('light');
            setItem('light');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect( () => {
        const localTheme = getItem('theme') as Theme; //storage.getItem() as Theme | null; 
        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }

        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            setItem('dark');
            document.documentElement.classList.add('dark');
        }

    }, [] );

    useEffect( () => {
        if (theme === 'dark') {
            document.head
                    .querySelector("meta[name=theme-color]")
                    ?.setAttribute("content", "rgb(3 7 18)");
        } else {
            document.head
                    .querySelector("meta[name=theme-color]")
                    ?.setAttribute("content", "#fff");
        }
    }, [theme])

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  )
}


export function useThemeContext(){
    const context = useContext(themeContext);
    if (context === null){
        throw new Error ("ThemeContext must be used within an ThemeContextProvider")
    }

    return context;

}