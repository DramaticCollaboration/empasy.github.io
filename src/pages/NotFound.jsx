import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  
  // lang이 없거나 유효하지 않은 경우 기본값 ko 사용
  const currentLang = ['ko', 'en', 'jp'].includes(lang) ? lang : 'ko';

  return (
    <div className="not-found-container">
      <SEO customTitle="404 - Page Not Found" />
      <div className="not-found-content">
        <h1>404</h1>
        <h2>{t('error.404.title')}</h2>
        <p>{t('error.404.message')}</p>
        <Link to={`/${currentLang}`} className="home-link">
          {t('error.404.goHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
