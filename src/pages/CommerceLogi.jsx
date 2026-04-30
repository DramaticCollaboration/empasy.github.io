import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
      <section className="comlogi-cta-section">
        <h2>{t('commercelogi.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">
          <span className="btn-text">{t('commercelogi.cta.btn')}</span>
          <span className="truck-icon">🚚</span>
        </Link>
      </section>
    </div>
  );
};

export default CommerceLogi;