/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType,
} from "@/lib/types";
import { useEffect, useState, createContext, useContext } from "react";

const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  //const storage = new LocalStorage('theme');
  const { storedValue, setItem, getItem } = useLocalStorage("theme");

  const initialTheme =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("theme") as Theme) || "light"
      : "light";

  const [theme, setTheme] = useState<Theme | null>(storedValue as Theme);
  console.log("Guardado - FUERA EFFECT", storedValue);
  //let _html: HTMLElement = document.documentElement;

  const toggleTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    setTheme(newTheme);

    switch (newTheme) {
      case "dark":
        html.classList.add("dark");
        setItem("dark");
        break;

      case "light":
        html.classList.remove("dark");
        setItem("light");
        break;
      default:
        localStorage.removeItem("theme");

        break;
    }

    console.log("Tema", theme);
  };

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const localTheme = getItem("theme");
    if (!localTheme) {
      toggleTheme("system");
      setTheme("system");
      return;
    }

    console.log("TEMA LOCAL", localTheme);
    console.log("Guardado - DENTRO EFFECT", storedValue);

    if (localTheme === "dark" || darkQuery.matches) {
      //document.documentElement.classList.add("dark");
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  }, []);

  useEffect(() => {
    /*     const localTheme = getItem("theme") as Theme; //storage.getItem() as Theme | null;
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        _html.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setItem("dark");
      _html.classList.add("dark");
    } */
    /*     switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    } */
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.head
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "rgb(3 7 18)");
    } else {
      document.head
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#fff");
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error("ThemeContext must be used within an ThemeContextProvider");
  }

  return context;
}
