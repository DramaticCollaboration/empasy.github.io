import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './UseCases.css';

const UseCases = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('usecases.filters.all') },
    { id: 'ai-data', label: t('usecases.filters.ai-data') },
    { id: 'testops', label: t('usecases.filters.testops') },
    { id: 'msa-infra', label: t('usecases.filters.msa-infra') },
    { id: 'cms', label: t('usecases.filters.cms') },
  ];

  const cases = [
    {
      id: 'lg',
      category: 'testops',
      title: 'LG전자 & LG화학',
      subtitle: t('usecases.cases.lg.subtitle'),
      solution: t('usecases.cases.lg.solution'),
      hoverMotion: '[Visual Validation Scanning Animation]',
    },
    {
      id: 'samsung',
      category: 'cms',
      title: '삼성전자 DS',
      subtitle: t('usecases.cases.samsung.subtitle'),
      solution: t('usecases.cases.samsung.solution'),
      hoverMotion: '[6.5만 유저 카운터 & 3D Safe Vault Motion]',
    },
    {
      id: 'hyosung',
      category: 'ai-data',
      title: '효성ITX',
      subtitle: t('usecases.cases.hyosung.subtitle'),
      solution: t('usecases.cases.hyosung.solution'),
      hoverMotion: '[Data Ingestion Particle Animation]',
    },
    {
      id: 'lx',
      category: 'cms',
      title: 'LX하우시스',
      subtitle: t('usecases.cases.lx.subtitle'),
      solution: t('usecases.cases.lx.solution'),
      hoverMotion: '[15개국 국기 스위칭 & 동기화 애니메이션]',
    },
    {
      id: 'visang',
      category: 'testops',
      title: '비상교육',
      subtitle: t('usecases.cases.visang.subtitle'),
      solution: t('usecases.cases.visang.solution'),
      hoverMotion: '[N:M Interaction Network & 100% Stamp]',
    },
    {
      id: 'penta',
      category: 'msa-infra',
      title: '펜타시큐리티',
      subtitle: t('usecases.cases.penta.subtitle'),
      solution: t('usecases.cases.penta.solution'),
      hoverMotion: '[Zero-latency Shield Defense Dashboard]',
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="use-cases-container">
      {/* 1. Hero Section */}
      <section className="uc-hero-section">
        <div className="hero-content">
          <h1>{t('usecases.title')}</h1>
          <p>{t('usecases.desc').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
          <div className="globe-animation-placeholder">
            [Interactive 3D Globe with Client Logos here]
          </div>
        </div>
      </section>

      {/* 2. & 3. Dynamic Filter & Masonry Grid */}
      <section className="portfolio-section">
        <div className="section-header">
          <h2>{t('usecases.portfolioTitle')}</h2>
        </div>
        
        <div className="filter-nav">
          {filters.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cases-grid">
          {filteredCases.map(c => (
            <div key={c.id} className={`case-card ${c.category}`}>
              <div className="card-inner">
                <div className="card-front">
                  <span className="case-category">{filters.find(f => f.id === c.category).label}</span>
                  <h3>{c.title}</h3>
                  <p>{c.subtitle}</p>
                  <div className="solution-tags">
                    <span>{c.solution}</span>
                  </div>
                </div>
                <div className="card-hover-motion">
                  {c.hoverMotion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Impact Metrics */}
      <section className="impact-metrics-section">
        <div className="section-header">
          <h2>{t('usecases.metrics.title')}</h2>
        </div>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [80% Radial Chart]
            </div>
            <h3>{t('usecases.metrics.metric1.title')}</h3>
            <p>{t('usecases.metrics.metric1.desc')}</p>
          </div>
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [Cost Down Chart]
            </div>
            <h3>{t('usecases.metrics.metric2.title')}</h3>
            <p>{t('usecases.metrics.metric2.desc')}</p>
          </div>
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [0ms Chart]
            </div>
            <h3>{t('usecases.metrics.metric3.title')}</h3>
            <p>{t('usecases.metrics.metric3.desc')}</p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="uc-cta-section">
        <h2>{t('usecases.cta.title').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">
          {t('usecases.cta.btn')} <span className="arrow">→</span>
        </Link>
      </section>
    </div>
  );
};

export default UseCases;