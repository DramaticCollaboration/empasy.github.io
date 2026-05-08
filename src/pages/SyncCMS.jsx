import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('synccms.cta.title').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{interest: 'Other'}}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'linear-gradient(135deg, #0891B2, #0D9488)', color: '#fff',
                padding: '20px 40px', borderRadius: '50px',
                fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(8, 145, 178, 0.25)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(8, 145, 178, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(8, 145, 178,0.2)';
              }}
            >
              {t('synccms.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SyncCMS;