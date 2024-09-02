 "use client"
 import React, { useState, createContext, ReactNode } from 'react';

export const categoryContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | undefined>(undefined);

interface CategoryContextProviderProps {
  children: ReactNode;
}

const CategoryContextProvider = ({ children }: CategoryContextProviderProps) => {
  const category = useState<string>("home");

  return (
    <categoryContext.Provider value={category}>
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryContextProvider;
