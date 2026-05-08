import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const languages = {
  ko: 'ko',
  en: 'en',
  jp: 'jp'
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const lang = pathSegments[1];
    
    if (Object.values(languages).includes(lang)) {
      setLanguage(lang);
    } else {
      setLanguage('ko');
    }
  }, [location.pathname]);

  const changeLanguage = (newLang) => {
    const pathSegments = location.pathname.split('/');
    const currentLang = pathSegments[1];
    
    let newPath;
    if (Object.values(languages).includes(currentLang)) {
      pathSegments[1] = newLang;
      newPath = pathSegments.join('/') || '/';
    } else {
      newPath = `/${newLang}${location.pathname}`;
    }
    
    // 기본 언어인 ko는 /ko 대신 / 로 처리하고 싶다면 추가 로직 필요
    // 여기서는 가이드라인에 따라 /, /ko, /en, /jp 를 지원하도록 처리
    navigate(newPath);
  };

  const t = (translations) => {
    return translations[language] || translations['ko'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
