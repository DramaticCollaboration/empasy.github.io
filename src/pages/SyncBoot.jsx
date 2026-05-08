import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CubeAnimation from '../components/CubeAnimation';
import ArchitectureMap from '../components/ArchitectureMap';
import CircuitBreaker from '../components/CircuitBreaker';
import SkyWalking3D from '../components/SkyWalking3D';
import LogGrafana from '../components/LogGrafana';
import CICDPipeline from '../components/CICDPipeline';
import UIBuilder from '../components/UIBuilder';
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
    circuit: <CircuitBreaker />,
    tracing: <SkyWalking3D />,
    logs: <LogGrafana />,
    cicd: <CICDPipeline />,
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
        <ArchitectureMap />
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
        <UIBuilder />
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
              {t('syncboot.cta.title').split('\n').map((line, i, arr) => (
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
              {t('syncboot.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SyncBoot;