import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CommerceLogi.css';

const CommerceLogi = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [isOptimized, setIsOptimized] = useState(false);

  return (
    <div className="commerce-logi-container">
      {/* 1. Hero Section */}
      <section className="comlogi-hero-section">
        <div className="hero-content">
          <h1>{t('commercelogi.hero.title')}</h1>
          <p>{t('commercelogi.hero.desc')}</p>
          {/* Placeholder for 3D Logistics Network Parallax */}
          <div className="logistics-parallax-placeholder">
            [3D City Map with data particles moving from phone to delivery truck here]
          </div>
        </div>
      </section>

      {/* 2. SyncShop: Headless eCommerce */}
      <section className="syncshop-section">
        <div className="section-header">
          <h2>{t('commercelogi.syncshop.title')}</h2>
        </div>
        <div className="headless-simulator-container">
          {/* Placeholder for Interactive Headless Simulator */}
          <div className="headless-simulator-placeholder">
            [Drag & Drop channels (Web, App, Kiosk) to SyncShop Core API cube here]
          </div>
          <div className="module-cards">
            <div className="module-card pms">
              <h3>{t('commercelogi.syncshop.pms')}</h3>
              <div className="hover-detail">{t('commercelogi.syncshop.pmsDesc')}</div>
            </div>
            <div className="module-card oms">
              <h3>{t('commercelogi.syncshop.oms')}</h3>
              <div className="hover-detail">{t('commercelogi.syncshop.omsDesc')}</div>
            </div>
            <div className="module-card sms">
              <h3>{t('commercelogi.syncshop.sms')}</h3>
              <div className="hover-detail">{t('commercelogi.syncshop.smsDesc')}</div>
            </div>
            <div className="module-card ums">
              <h3>{t('commercelogi.syncshop.ums')}</h3>
              <div className="hover-detail">{t('commercelogi.syncshop.umsDesc')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI Logistics Hub */}
      <section className="ai-logistics-section">
        <div className="section-header">
          <h2>{t('commercelogi.logistics.title')}</h2>
        </div>
        <div className="routing-optimization-container">
          <div className={`route-map ${isOptimized ? 'optimized' : 'messy'}`}>
            {/* Visual representation of route optimization */}
            <div className="map-visual">
              {isOptimized ? t('commercelogi.logistics.optimized') : t('commercelogi.logistics.messy')}
            </div>
            {isOptimized && (
              <div className="optimization-alerts">
                <span className="alert-pop">{t('commercelogi.logistics.alertTime')}</span>
                <span className="alert-pop">{t('commercelogi.logistics.alertDist')}</span>
              </div>
            )}
          </div>
          <button 
            className="optimize-toggle-btn"
            onClick={() => setIsOptimized(!isOptimized)}
          >
            {isOptimized ? t('commercelogi.logistics.btnAsIs') : t('commercelogi.logistics.btnToBe')}
          </button>
        </div>
      </section>

      {/* 4. Document AI & Enterprise RAG */}
      <section className="document-ai-section">
        <div className="section-header">
          <h2>{t('commercelogi.docai.title')}</h2>
        </div>
        <div className="doc-ai-container">
          {/* Placeholder for Document AI Scanning Motion */}
          <div className="scanning-motion-placeholder">
            [Receipts & PDFs converting into clean JSON format here]
            <div className="ocr-quality">{t('commercelogi.docai.ocr')}</div>
          </div>
          {/* Placeholder for Chat RAG Simulation */}
          <div className="rag-chat-placeholder">
            <div className="chat-bubble user">"{t('commercelogi.docai.chatUser')}"</div>
            <div className="chat-bubble ai">
              {t('commercelogi.docai.chatAi').split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line.startsWith('해결책:') || line.startsWith('Solution:') ? <b>{line.split(':')[0]}:</b> : null}
                  {line.startsWith('해결책:') || line.startsWith('Solution:') ? line.split(':')[1] : line}
                  <br/>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MLOps KPI Dashboard */}
      <section className="kpi-dashboard-section">
        <div className="section-header">
          <h2>{t('commercelogi.kpi.title')}</h2>
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
        <Link to={`/${currentLang}/contact`} className="contact-btn">
          <span className="btn-text">{t('commercelogi.cta.btn')}</span>
          <span className="truck-icon">🚚</span>
        </Link>
      </section>
    </div>
  );
};

export default CommerceLogi;