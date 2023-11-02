/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import type {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType,
} from "@/lib/types";

import { useEffect, useState, createContext, useContext } from "react";

const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const { setItem, removeItem } = useLocalStorage("theme");

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
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
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
    const metaThemeColor = document.head.querySelector(
      "meta[name=theme-color]"
    );
    if (theme === "dark" && darkQuery?.matches) {
      metaThemeColor?.setAttribute("content", "rgba(3,7,18,1)");
    } else {
      metaThemeColor?.setAttribute("content", "#fff");
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
