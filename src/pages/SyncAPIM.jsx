import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncAPIM.css';

const SyncAPIM = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="syncapim-container">
      {/* 1. Hero Section */}
      <section className="syncapim-hero-section">
        <div className="hero-content">
          <h1>{t('syncapim.hero.title')}</h1>
          <p>{t('syncapim.hero.desc')}</p>
          <div className="rolling-keywords">
            <span className="keyword">[ API Gateway ]</span>
            <span className="keyword">[ Developer Portal ]</span>
            <span className="keyword">[ Analytics ]</span>
            <span className="keyword">[ Security ]</span>
          </div>
          {/* Placeholder for 3D API Gateway particle motion */}
          <div className="gateway-particle-placeholder">
            [3D Core Gateway processing incoming data particles and routing to MSA nodes here]
          </div>
        </div>
      </section>

      {/* 2. Full Lifecycle Management */}
      <section className="lifecycle-section">
        <div className="section-header">
          <h2>{t('syncapim.lifecycle.title')}</h2>
        </div>
        {/* Placeholder for Scroll-Telling Architecture Map */}
        <div className="architecture-map-placeholder">
          [Scroll-telling: Developer Services -&gt; API Services -&gt; Analytics Services lighting up here]
        </div>
      </section>

      {/* 3. Core Features (Interactive Bento-box) */}
      <section className="core-features-section">
        <div className="section-header">
          <h2>{t('syncapim.features.title')}</h2>
        </div>
        <div className="bento-grid">
          <div className="bento-card policy">
            <h3>{t('syncapim.features.card1.title')}</h3>
            <p>{t('syncapim.features.card1.desc')}</p>
            <div className="hover-animation-placeholder">[Rate Limiting Blocking Animation]</div>
          </div>
          <div className="bento-card management">
            <h3>{t('syncapim.features.card2.title')}</h3>
            <p>{t('syncapim.features.card2.desc')}</p>
            <div className="hover-animation-placeholder">[Drag &amp; Drop Grouping Animation]</div>
          </div>
          <div className="bento-card testing">
            <h3>{t('syncapim.features.card3.title')}</h3>
            <p>{t('syncapim.features.card3.desc')}</p>
            <div className="hover-animation-placeholder">[Send Request &amp; 200 OK Typing Animation]</div>
          </div>
          <div className="bento-card monitoring">
            <h3>{t('syncapim.features.card4.title')}</h3>
            <p>{t('syncapim.features.card4.desc')}</p>
            <div className="hover-animation-placeholder">[Real-time Line Chart Animation]</div>
          </div>
          <div className="bento-card alert">
            <h3>{t('syncapim.features.card5.title')}</h3>
            <p>{t('syncapim.features.card5.desc')}</p>
            <div className="hover-animation-placeholder">[Warning Light &amp; Push Notification Animation]</div>
          </div>
        </div>
      </section>

      {/* 4. Enterprise Security & Customization */}
      <section className="security-section">
        <div className="section-header">
          <h2>{t('syncapim.security.title')}</h2>
        </div>
        {/* Placeholder for Traffic Shield Simulator */}
        <div className="shield-simulator-placeholder">
          [Multi-layer Security Filters reflecting hacker traffic with Zero-Latency particles here]
          <br/><br/>
          <span className="tooltip-trigger">Hover: WAPPLES API Security Reference</span>
        </div>
      </section>

      {/* 5. Observability & Packetbeat Analytics */}
      <section className="observability-section">
        <div className="section-header">
          <h2>{t('syncapim.observability.title')}</h2>
        </div>
        <div className="analytics-visual-container">
          {/* Placeholder for Packetbeat Data Streaming Motion */}
          <div className="data-streaming-placeholder">
            [Packetbeat agents sending data via fiber-optic lines here]
          </div>
          {/* Placeholder for Real-time Custom Dashboard Rendering */}
          <div className="custom-dashboard-placeholder">
            [Real-time rendering of pie charts, bar graphs, and latency trackers here]
            <p className="fade-in-text">"{t('syncapim.observability.desc')}"</p>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncapim-cta-section">
        <h2>{t('syncapim.cta.title').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">{t('syncapim.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncAPIM;