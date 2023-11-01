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
  const { storedValue, setItem, getItem, removeItem } =
    useLocalStorage("theme");

  const initialTheme =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "system"
      : "system";

  const darkQuery =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;

  const _html =
    typeof document !== "undefined" ? document.documentElement : null;

  const [theme, setTheme] = useState<Theme>(initialTheme as Theme);
  //let _html: HTMLElement = document.documentElement;

  const toggleDark = () => {
    if (!_html) {
      return;
    }
    _html.classList.add("dark");
    setItem("dark");
  };

  const toggleLight = () => {
    if (!_html) {
      return;
    }
    _html.classList.remove("dark");
    setItem("light");
  };

  const toggleSystem = () => {
    removeItem("theme");
  };

  const onWindowMatch = () => {
    if (darkQuery === null || _html === null) {
      console.log(
        "Return onWindowMatch",
        "\nhtml",
        _html,
        "\ndarkquery",
        darkQuery
      );
      return;
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      _html.classList.add("dark");
      return;
    }

    _html.classList.remove("dark");
    return;
  };

  useEffect(() => {
    onWindowMatch();
    //const old = (window.localStorage.getItem("theme") as Theme) ?? "system";
    toggleTheme(theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    // const html = document.documentElement;
    setTheme(newTheme !== null ? newTheme : "system");

    switch (newTheme) {
      case "dark":
        toggleDark();
        break;

      case "light":
        toggleLight();
        break;
      default:
        toggleSystem();
        onWindowMatch();

        break;
    }
  };

  darkQuery?.addEventListener("change", (e) => {
    if (!_html || "theme" in localStorage) {
      return;
    }

    if (!e.matches) {
      _html.classList.remove("dark");
      return;
    }

    _html.classList.add("dark");
    return;
  });

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
    <themeContext.Provider value={{ theme, setTheme, toggleTheme, darkQuery }}>
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
