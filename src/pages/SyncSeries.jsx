import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SyncSeries.css';
import SyncCoreAnimation from './component/SyncSeries/SyncCoreAnimation';
import ConveyorAnimation from './component/SyncSeries/ConveyorAnimation';
import SyncBootAnimation from './component/SyncSeries/SyncBootAnimation';
import SyncEtaAnimation from './component/SyncSeries/SyncEtaAnimation';
import SyncCmsAnimation from './component/SyncSeries/SyncCmsAnimation';
import SyncApimAnimation from './component/SyncSeries/SyncApimAnimation';

const SyncSeries = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [activeSolution, setActiveSolution] = useState('syncboot');

  const solutionDetails = {
    syncboot: {
      title: t('syncseries.solutions.syncboot.title'),
      desc: t('syncseries.solutions.syncboot.desc'),
      animation: <SyncBootAnimation />
    },
    synceta: {
      title: t('syncseries.solutions.synceta.title'),
      desc: t('syncseries.solutions.synceta.desc'),
      animation: <SyncEtaAnimation />
    },
    synccms: {
      title: t('syncseries.solutions.synccms.title'),
      desc: t('syncseries.solutions.synccms.desc'),
      animation: <SyncCmsAnimation />
    },
    syncapim: {
      title: t('syncseries.solutions.syncapim.title'),
      desc: t('syncseries.solutions.syncapim.desc'),
      animation: <SyncApimAnimation />
    }
  };

  return (
    <div className="syncseries-container">
      {/* 1. Hero Section */}
      <section className="syncseries-hero-section">
        <div className="hero-content">
          <h1>{t('syncseries.hero.title')}</h1>
          <p>{t('syncseries.hero.desc')}</p>
          <div className="core-animation-placeholder">
            <SyncCoreAnimation />
          </div>
        </div>
      </section>

      {/* 2. SyncVerse: Integration Pipeline */}
      <section className="syncverse-section">
        <div className="section-header">
          <h2>{t('syncseries.verse.title')}</h2>
        </div>
        <ConveyorAnimation />
      </section>

      {/* 3. Interactive Product Showcase */}
      <section className="showcase-section">
        <div className="section-header">
          <h2>{t('syncseries.showcase.title')}</h2>
        </div>
        <div className="rotary-wheel-container">
          <div className="wheel-nav">
            {Object.keys(solutionDetails).map((key) => (
              <button 
                key={key}
                className={`wheel-btn ${activeSolution === key ? 'active' : ''}`}
                onClick={() => setActiveSolution(key)}
              >
                {solutionDetails[key].title.split(' ')[0]}
              </button>
            ))}
          </div>
          <div className="wheel-content">
            <h3>{solutionDetails[activeSolution].title}</h3>
            <p className="wheel-desc">{solutionDetails[activeSolution].desc}</p>
            <div className="wheel-animation-placeholder">
              {solutionDetails[activeSolution].animation}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proven Synergy (ROI) */}
      <section className="synergy-roi-section">
        <div className="section-header">
          <h2>{t('syncseries.roi.title')}</h2>
        </div>
        <div className="roi-grid">
          <div className="roi-card">
            <h3>{t('syncseries.roi.ttm.title')}</h3>
            <div className="roi-value">{t('syncseries.roi.ttm.value')}</div>
            <p>{t('syncseries.roi.ttm.desc')}</p>
          </div>
          <div className="roi-card">
            <h3>{t('syncseries.roi.test.title')}</h3>
            <div className="roi-value">{t('syncseries.roi.test.value')}</div>
            <p>{t('syncseries.roi.test.desc')}</p>
          </div>
          <div className="roi-card">
            <h3>{t('syncseries.roi.traffic.title')}</h3>
            <div className="roi-value">{t('syncseries.roi.traffic.value')}</div>
            <p>{t('syncseries.roi.traffic.desc')}</p>
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
              {t('syncseries.cta.title').split('\n').map((line, i, arr) => (
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
              {t('syncseries.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SyncSeries;