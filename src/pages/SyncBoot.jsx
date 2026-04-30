import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CubeAnimation from '../components/CubeAnimation';
import './SyncBoot.css';

const SyncBoot = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [activeTab, setActiveTab] = useState('circuit');
  const [isShattered, setIsShattered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShattered(true);
    }, 2000); // Shatter after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const tabContent = {
    circuit: '[Dashboard animation for Circuit Breaker will be here]',
    tracing: '[3D Node topology for SkyWalking will be here]',
    logs: '[Streaming terminal logs and Grafana charts will be here]',
    cicd: '[Progress bar for Jenkins/GitLab pipeline will be here]',
  };

  return (
    <div className="syncboot-container">
      {/* 1. Hero Section */}
      <section className="syncboot-hero-section">
        <div className="hero-content">
          <h1>{t('syncboot.hero.title')}</h1>
          <p>{t('syncboot.hero.desc')}</p>
          <div className="architecture-animation-placeholder">
            <CubeAnimation isShattered={isShattered} />
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>{t('syncboot.values.title')}</h2>
        </div>
        <div className="stacking-cards-container">
          <div className="card">
            <h3>{t('syncboot.values.card1.title')}</h3>
            <p>{t('syncboot.values.card1.desc')}</p>
            <div className="tech-logos">
              <span>Spring Boot</span> <span>Docker</span> <span>Kubernetes</span>
            </div>
          </div>
          <div className="card">
            <h3>{t('syncboot.values.card2.title')}</h3>
            <p>{t('syncboot.values.card2.desc')}</p>
          </div>
          <div className="card">
            <h3>{t('syncboot.values.card3.title')}</h3>
            <p>{t('syncboot.values.card3.desc')}</p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Architecture Map */}
      <section className="architecture-map-section">
        <div className="section-header">
          <h2>{t('syncboot.arch.title')}</h2>
        </div>
        {/* Placeholder for interactive SVG map */}
        <div className="svg-map-placeholder">
          [Interactive SVG Architecture Map will be here]
        </div>
      </section>

      {/* 4. Observability & DevOps */}
      <section className="observability-section">
        <div className="section-header">
          <h2>{t('syncboot.observability.title')}</h2>
        </div>
        <div className="tabs-container">
          <div className="tab-nav">
            <button 
              className={`tab-btn ${activeTab === 'circuit' ? 'active' : ''}`}
              onClick={() => setActiveTab('circuit')}
            >
              {t('syncboot.observability.tabs.circuit')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tracing' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracing')}
            >
              {t('syncboot.observability.tabs.tracing')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`}
              onClick={() => setActiveTab('logs')}
            >
              {t('syncboot.observability.tabs.logs')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'cicd' ? 'active' : ''}`}
              onClick={() => setActiveTab('cicd')}
            >
              {t('syncboot.observability.tabs.cicd')}
            </button>
          </div>
          <div className="tab-content">
            <div className="dashboard-placeholder">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>

      {/* 5. UI Framework & Admin */}
      <section className="ui-framework-section">
        <div className="section-header">
          <h2>{t('syncboot.framework.title')}</h2>
        </div>
        {/* Placeholder for Drag & Drop simulation */}
        <div className="drag-drop-placeholder">
          [Drag &amp; Drop UI builder simulation will be here]
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncboot-cta-section">
        <h2>{t('syncboot.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">{t('syncboot.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncBoot;