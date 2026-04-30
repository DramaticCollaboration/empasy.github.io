import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncCMS.css';

const SyncCMS = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="synccms-container">
      {/* 1. Hero Section */}
      <section className="synccms-hero-section">
        <div className="hero-content">
          <h1>{t('synccms.hero.title')}</h1>
          <p>{t('synccms.hero.desc')}</p>
          {/* Placeholder for 3D block assembly animation */}
          <div className="block-assembly-placeholder">
            [3D blocks (Header, Banner, News) will fall and assemble into a website here]
          </div>
        </div>
      </section>

      {/* 2. Visual Builder & Quick Maintenance */}
      <section className="visual-builder-section">
        <div className="section-header">
          <h2>{t('synccms.builder.title')}</h2>
        </div>
        {/* Placeholder for interactive Drag & Drop simulator */}
        <div className="drag-drop-simulator-placeholder">
          [Interactive Drag &amp; Drop UI builder simulation will be here]
        </div>
      </section>

      {/* 3. Multi-site & Multi-language */}
      <section className="multisite-section">
        <div className="section-header">
          <h2>{t('synccms.multisite.title')}</h2>
        </div>
        {/* Placeholder for 3D global network parallax */}
        <div className="global-network-placeholder">
          [3D Globe with network lines to country sites will be here]
        </div>
      </section>

      {/* 4. Hybrid Architecture */}
      <section className="hybrid-architecture-section">
        <div className="section-header">
          <h2>{t('synccms.hybrid.title')}</h2>
        </div>
        {/* Placeholder for template puzzle assembly motion */}
        <div className="puzzle-assembly-placeholder">
          [Template puzzle pieces (Page, Fragment, Data) will assemble here]
        </div>
      </section>

      {/* 5. Editor History */}
      <section className="editor-history-section">
        <div className="section-header">
          <h2>{t('synccms.history.title')}</h2>
        </div>
        {/* Placeholder for interactive time machine slider */}
        <div className="time-machine-placeholder">
          [Interactive time machine slider to revert content will be here]
        </div>
      </section>
      
      {/* 6. SEO & Analytics */}
      <section className="seo-analytics-section">
        <div className="section-header">
          <h2>{t('synccms.seo.title')}</h2>
        </div>
        {/* Placeholder for real-time chart drawing */}
        <div className="chart-drawing-placeholder">
          [Real-time drawing of analytics charts will be here]
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="synccms-cta-section">
        <h2>{t('synccms.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">{t('synccms.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncCMS;