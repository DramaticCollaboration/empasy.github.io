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
            <span className="footer-logo">EMPASY</span>
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