import React from 'react';
import { useTranslation } from 'react-i18next';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = '40px', color = '#00d1b2', fullPage = false }) => {
  const { t } = useTranslation();
  
  const spinner = (
    <div className={`loading-spinner-wrapper ${fullPage ? 'full-page' : 'mini'}`}>
      <div className="spinner-circle" style={{ width: size, height: size, borderColor: `${color}1a`, borderTopColor: color }}></div>
      <div className="spinner-text">{t('common.loading')}</div>
    </div>
  );

  if (fullPage) {
    return (
      <div className="loading-spinner-overlay">
        {spinner}
      </div>
    );
  }

  return (
    <div className="loading-spinner-mini-container">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;
