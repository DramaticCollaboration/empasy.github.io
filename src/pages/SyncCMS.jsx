import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncCMS.css';

import UIBuilderSim from '../components/UIBuilderSim';
import GlobalNetworkGlobe from '../components/GlobalNetworkGlobe';
import HybridPuzzle from '../components/HybridPuzzle';
import TimeMachineSlider from '../components/TimeMachineSlider';
import AnalyticsChartDraw from '../components/AnalyticsChartDraw';

const SyncCMS = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="synccms-container">
      {/* 1. Hero Section */}
      <section className="synccms-hero-section">
        <div className="hero-content">
          <div className="hero-text-area">
            <h1>{t('synccms.hero.title')}</h1>
            <p className="hero-desc">{t('synccms.hero.desc')}</p>
          </div>
          {/* Placeholder for 3D block assembly animation - Using UIBuilderSim as a hero visual too if appropriate, 
              or we can keep it simple for now as requested. The request asked to fill the specific placeholders. */}
          <div className="hero-visual-area">
             <UIBuilderSim />
          </div>
        </div>
      </section>

      {/* 2. Visual Builder & Quick Maintenance */}
      <section className="visual-builder-section">
        <div className="section-header">
          <h2>{t('synccms.builder.title')}</h2>
          <p>{t('synccms.builder.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <UIBuilderSim />
        </div>
      </section>

      {/* 3. Multi-site & Multi-language */}
      <section className="multisite-section">
        <div className="section-header">
          <h2>{t('synccms.multisite.title')}</h2>
          <p>{t('synccms.multisite.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <GlobalNetworkGlobe />
        </div>
      </section>

      {/* 4. Hybrid Architecture */}
      <section className="hybrid-architecture-section">
        <div className="section-header">
          <h2>{t('synccms.hybrid.title')}</h2>
          <p>{t('synccms.hybrid.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <HybridPuzzle />
        </div>
      </section>

      {/* 5. Editor History */}
      <section className="editor-history-section">
        <div className="section-header">
          <h2>{t('synccms.history.title')}</h2>
          <p>{t('synccms.history.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <TimeMachineSlider />
        </div>
      </section>
      
      {/* 6. SEO & Analytics */}
      <section className="seo-analytics-section">
        <div className="section-header">
          <h2>{t('synccms.seo.title')}</h2>
          <p>{t('synccms.seo.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <AnalyticsChartDraw />
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="synccms-cta-section">
        <h2>{t('synccms.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">{t('synccms.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncCMS;