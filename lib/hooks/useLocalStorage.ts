"use client";
import { useState, useEffect } from 'react';
import type { Theme } from '../types';

type useLocalStorageProps = {
  storedValue: Theme | null, 
  setItem: (value: Theme) => void, 
  getItem:  (key: string) => string | null, 
  removeItem:  (key: string) => void
}


export function useLocalStorage(key: string): useLocalStorageProps {
  const [storedValue, setStoredValue] = useState<Theme | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {return; }
    
    const item = window.localStorage.getItem(key) as Theme | null;
    setStoredValue(item);
      
    
  },  [key]);

  const setItem = (value: Theme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
      setStoredValue(value);
    }
  };

  const getItem =  (key: string) : Theme | null => {
    if( typeof window !== 'undefined' ){
      return window.localStorage.getItem(key) as Theme ||  null
    }else{
      console.log('stored', storedValue)
      return storedValue;
    }
    // return  null;
  };
  const removeItem = (key: string) =>{ 
    window.localStorage.removeItem(key)
  }

  

  return {storedValue, setItem, getItem, removeItem};
}