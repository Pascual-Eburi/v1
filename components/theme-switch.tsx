/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeContext } from "@/context/theme-context";
import { themeOptions } from "@/lib/data/themes";

export default function ThemeSwith() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="fixed bottom-5 right-5 flex flex-col align-middle text-center justify-center gap-0 shadow-2xl bg-opacity-80 backdrop-blur-[0.5rem] border rounded-full bg-white border-white border-opacity-40 dark:bg-slate-800 dark:border-slate-800">
      {themeOptions?.map((option, index) => (
        <button
          key={index}
          className={` bg-transparent w-[2.5rem] h-[2.5rem]   rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all  ${
            option.text === theme && "text-sky-600"
          }`}
          onClick={() => toggleTheme(option.text)}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
