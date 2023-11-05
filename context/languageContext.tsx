"use client";

import { useTranslation } from "@/app/i18n/client";
import React, { useState, createContext, useContext, useEffect } from "react";

type LanguageContextType = {
  lng: string;
};

type LanguageContextProviderProps = {
  children: React.ReactNode;
  language: string;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
  language,
}: LanguageContextProviderProps) {
  const [lng, setLanguage] = useState(language);
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  return (
    <LanguageContext.Provider value={{ lng }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext(nameSpace: string) {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error(
      "useLanguageContext must be used within an LanguageContextProvider"
    );
  }
  const { t } = useTranslation(context.lng, nameSpace);

  return { lng: context.lng, t: t };
}
