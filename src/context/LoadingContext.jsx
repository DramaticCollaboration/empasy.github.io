import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [IsPageLoading, setIsPageLoading] = useState(false);
  const [isFullPage, setIsFullPage] = useState(true);
  const location = useLocation();

  // Route change loading effect
  useEffect(() => {
    // Start loading on route change
    setIsPageLoading(true);
    setIsFullPage(true);

    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600); // Default loading duration for transitions

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={{ IsPageLoading, setIsPageLoading, isFullPage, setIsFullPage }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
