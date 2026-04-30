import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // 테마 토글 기능 삭제 (다크 모드 고정)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
