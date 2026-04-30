import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { lang } = useParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    if (pathParts.length > 1 && ['ko', 'en', 'jp'].includes(pathParts[1])) {
      pathParts[1] = newLang;
      navigate(pathParts.join('/'));
    } else {
       navigate(`/${newLang}`);
    }
  };

  const currentLang = lang || 'ko';

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to={`/${currentLang}`}>
            <img 
              src="/empasy-logo_white.svg" 
              alt="EMPASY Logo" 
              className="logo-img"
            />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to={`/${currentLang}/hydra`}>{t('nav.aiInfra')}</Link></li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to={`/${currentLang}/sync-series`}>{t('nav.syncSeries')}</Link>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li><Link to={`/${currentLang}/sync-series`} onClick={() => setIsDropdownOpen(false)}>{t('nav.intro')}</Link></li>
                <li><Link to={`/${currentLang}/syncboot`} onClick={() => setIsDropdownOpen(false)}>{t('nav.syncboot')}</Link></li>
                <li><Link to={`/${currentLang}/synccms`} onClick={() => setIsDropdownOpen(false)}>{t('nav.synccms')}</Link></li>
                <li><Link to={`/${currentLang}/syncapim`} onClick={() => setIsDropdownOpen(false)}>{t('nav.syncapim')}</Link></li>
                <li><Link to={`/${currentLang}/synceta`} onClick={() => setIsDropdownOpen(false)}>{t('nav.synceta')}</Link></li>
              </ul>
            </li>
            <li><Link to={`/${currentLang}/commercelogi`}>{t('nav.commerceLogi')}</Link></li>
            <li><Link to={`/${currentLang}/use-cases`}>{t('nav.useCases')}</Link></li>
            <li><Link to={`/${currentLang}/company`}>{t('nav.company')}</Link></li>
            <li><Link to={`/${currentLang}/contact`} className="contact-nav-link">{t('nav.contact')}</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="lang-switcher">
            <span onClick={() => changeLanguage('ko')} style={{ fontWeight: currentLang === 'ko' ? 'bold' : 'normal', color: currentLang === 'ko' ? 'var(--primary-color)' : 'inherit' }}>KO</span> | 
            <span onClick={() => changeLanguage('en')} style={{ fontWeight: currentLang === 'en' ? 'bold' : 'normal', color: currentLang === 'en' ? 'var(--primary-color)' : 'inherit' }}> EN</span> | 
            <span onClick={() => changeLanguage('jp')} style={{ fontWeight: currentLang === 'jp' ? 'bold' : 'normal', color: currentLang === 'jp' ? 'var(--primary-color)' : 'inherit' }}> JP</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;