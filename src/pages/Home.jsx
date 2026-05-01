import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <SEO pageKey="home" />
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="typewriter">{t('hero.subtitle')}</p>
          <div className="scroll-indicator">
            <span className="arrow">↓</span>
            {t('hero.scrollDown')}
          </div>
        </div>
      </section>

      {/* 2. AI-DLC & Hydra Platform */}
      <section className="pipeline-section">
        <div className="section-header">
          <h2>{t('home.pipeline.title').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
        </div>
        <div className="pipeline-container">
          <div className="pipeline-step">
            <h3>{t('home.pipeline.step1.title')}</h3>
            <p>{t('home.pipeline.step1.desc')}</p>
          </div>
          <div className="pipeline-step">
            <h3>{t('home.pipeline.step2.title')}</h3>
            <p>{t('home.pipeline.step2.desc')}</p>
          </div>
          <div className="pipeline-step">
            <h3>{t('home.pipeline.step3.title')}</h3>
            <p>{t('home.pipeline.step3.desc')}</p>
          </div>
        </div>
      </section>

      {/* 3. Our Solutions */}
      <section className="solutions-section">
        <h2>{t('home.solutions.title')}</h2>
        <div className="bento-grid">
          <div className="bento-card syncboot">
            <h3>SyncBoot</h3>
            <p>{t('home.solutions.syncboot')}</p>
          </div>
          <div className="bento-card synceta">
            <h3>SyncEta</h3>
            <p>{t('home.solutions.synceta')}</p>
          </div>
          <div className="bento-card synccms">
            <h3>SyncCMS</h3>
            <p>{t('home.solutions.synccms')}</p>
          </div>
          <div className="bento-card syncapim">
            <h3>SyncAPIM</h3>
            <p>{t('home.solutions.syncapim')}</p>
          </div>
          <div className="bento-card syncshop">
            <h3>SyncShop</h3>
            <p>{t('home.solutions.syncshop')}</p>
          </div>
          <div className="bento-card logihub">
            <h3>AI Logistics Hub</h3>
            <p>{t('home.solutions.logihub')}</p>
          </div>
        </div>
      </section>

      {/* 4. Proven Performance */}
      <section className="performance-section">
        <h2>{t('home.performance.title')}</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="counter">100%</h3>
            <p>{t('home.performance.stat1')}</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">&lt; 0.8s</h3>
            <p>{t('home.performance.stat2')}</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">80%</h3>
            <p>{t('home.performance.stat3')}</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">10,000+</h3>
            <p>{t('home.performance.stat4')}</p>
          </div>
        </div>
      </section>

      {/* 5. Trusted by Enterprise */}
      <section className="trusted-section">
        <h2>{t('home.trusted.title')}</h2>
        <div className="marquee-container">
          <div className="marquee">
            <span>LG전자</span>
            <span>삼성전자 DS</span>
            <span>효성ITX</span>
            <span>비상교육</span>
            <span>SK매직</span>
            <span>홈플러스</span>
            <span>펜타시큐리티</span>
            <span>LX하우시스</span>
            {/* Duplicate for infinite effect */}
            <span>LG전자</span>
            <span>삼성전자 DS</span>
            <span>효성ITX</span>
            <span>비상교육</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;