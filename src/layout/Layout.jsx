import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="layout-container">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('siteTitle')} - Boon to business by agility</title>
      </Helmet>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;