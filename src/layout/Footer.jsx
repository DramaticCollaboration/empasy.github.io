import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="company-info">
            <img src="/empasy-logo.svg" alt="EMPASY Logo" className="footer-logo" />
            <p>{t('footer.desc')}</p>
            <p>{t('footer.address')}</p>
            <p>{t('footer.contact')}</p>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} EMPASY. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;