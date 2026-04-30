import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
      <section className="syncseries-cta-section">
        <h2>{t('syncseries.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">{t('syncseries.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncSeries;