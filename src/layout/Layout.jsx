import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLoading } from '../context/LoadingContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const { IsPageLoading, isFullPage } = useLoading();

  return (
    <div className="layout-container">
      {IsPageLoading && <LoadingSpinner fullPage={isFullPage} />}
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