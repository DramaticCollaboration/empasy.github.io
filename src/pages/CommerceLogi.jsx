import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './CommerceLogi.css';

import LogiCityNetwork from '../components/LogiCityNetwork';
import LogiHeadlessSim from '../components/LogiHeadlessSim';
import LogiRouteOptimization from '../components/LogiRouteOptimization';
import LogiDocumentAI from '../components/LogiDocumentAI';

const CommerceLogi = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="commerce-logi-container">
      {/* 1. Hero Section */}
      <section className="comlogi-hero-section">
        <LogiCityNetwork />
      </section>

      {/* 2. SyncShop: Headless eCommerce */}
      <section className="syncshop-section">
        <div className="section-header">
          <h2>{t('commercelogi.syncshop.title')}</h2>
          <p>{t('commercelogi.syncshop.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <LogiHeadlessSim />
        </div>
      </section>

      {/* 3. AI Logistics Hub */}
      <section className="ai-logistics-section">
        <div className="section-header">
          <h2>{t('commercelogi.logistics.title')}</h2>
          <p>{t('commercelogi.logistics.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <LogiRouteOptimization />
        </div>
      </section>

      {/* 4. Document AI & Enterprise RAG */}
      <section className="document-ai-section">
        <div className="section-header">
          <h2>{t('commercelogi.docai.title')}</h2>
          <p>{t('commercelogi.docai.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <LogiDocumentAI />
        </div>
      </section>

      {/* 5. MLOps KPI Dashboard */}
      <section className="kpi-dashboard-section">
        <div className="section-header">
          <h2>{t('commercelogi.kpi.title')}</h2>
          <p>{t('commercelogi.kpi.subtitle')}</p>
        </div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>{t('commercelogi.kpi.card1.title')}</h3>
            <div className="kpi-value">18% ↓</div>
            <p>{t('commercelogi.kpi.card1.desc')}</p>
          </div>
          <div className="kpi-card">
            <h3>{t('commercelogi.kpi.card2.title')}</h3>
            <div className="kpi-value">6 시간 ↓</div>
            <p>{t('commercelogi.kpi.card2.desc')}</p>
          </div>
          <div className="kpi-card">
            <h3>{t('commercelogi.kpi.card3.title')}</h3>
            <div className="kpi-value">12 ms</div>
            <p>{t('commercelogi.kpi.card3.desc')}</p>
          </div>
          <div className="kpi-card">
            <h3>{t('commercelogi.kpi.card4.title')}</h3>
            <div className="kpi-value">41% ↓</div>
            <p>{t('commercelogi.kpi.card4.desc')}</p>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('commercelogi.cta.title').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'Other' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: '#0F172A', color: '#fff',
                padding: '20px 40px', borderRadius: '50px',
                fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 20px 40px rgba(15,23,42,0.2)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E293B'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 28px 50px rgba(15,23,42,0.28)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 20px 40px rgba(15,23,42,0.2)'; }}
            >
              {t('commercelogi.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommerceLogi;