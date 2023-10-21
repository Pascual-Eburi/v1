
"use client";

import { PendingProviderProps, PendingContextType } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const PendingContext = createContext<PendingContextType | null >(null);

export function PendingProvider({ children } : PendingProviderProps) {
  const [pending, setPending] = useState<boolean>(false);

  return (
    <PendingContext.Provider value={{ pending, setPending }}>
      {children}
    </PendingContext.Provider>
  );
}

export function usePending() {
  const context = useContext(PendingContext);
  if (!context) {
    throw new Error("usePending must be used within a PendingProvider");
  }
  return context;
}