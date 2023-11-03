"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import type {
  SectionName,
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
} from "@/lib/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  /* useEffect(() => {
    const storedSectionActive = localStorage.getItem("activeSection") ?? "Home";
    if (storedSectionActive !== activeSection) {
      window.localStorage.setItem("activeSection", activeSection);
      window.history.pushState(
        null,
        "",
        `#${storedSectionActive.toLowerCase()}`
      );
    }
    console.log("Active", activeSection);
  }, [activeSection]); */

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
