"use client";
import { useState, useEffect } from 'react';
import type { Theme } from '../types';

export function useLocalStorage(key: string): [string | null, (value: Theme) => void, (key: string) => string | null] {
  const [storedValue, setStoredValue] = useState<Theme | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key) as Theme | null;
      
      setStoredValue(item);
    }
  },  [key]);

  const setItem = (value: Theme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
      setStoredValue(value);
    }
  };

  const getItem = (key: string) : Theme | null => {
    return  window.localStorage.getItem(key) as Theme ||  null;
  };

  return [storedValue, setItem, getItem];
}