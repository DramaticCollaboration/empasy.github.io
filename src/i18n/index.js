import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from './ko.json';
import en from './en.json';
import jp from './jp.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko,
      en,
      jp
    },
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
      lookupFromPathIndex: 0,
    }
  });

export default i18n;