import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './UseCases.css';

import UseCaseGlobe from '../components/UseCaseGlobe';
import UseCaseImpactCharts from '../components/UseCaseImpactCharts';

// Import Motion Components
import VisualValidationScanner from '../components/usecases/VisualValidationScanner';
import SafeVaultMotion from '../components/usecases/SafeVaultMotion';
import DataIngestionParticles from '../components/usecases/DataIngestionParticles';
import GlobalFlagSync from '../components/usecases/GlobalFlagSync';
import InteractionNetwork from '../components/usecases/InteractionNetwork';
import ShieldDefenseDashboard from '../components/usecases/ShieldDefenseDashboard';

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
      hoverMotion: <VisualValidationScanner />,
    },
    {
      id: 'samsung',
      category: 'cms',
      title: '삼성전자 DS',
      subtitle: t('usecases.cases.samsung.subtitle'),
      solution: t('usecases.cases.samsung.solution'),
      hoverMotion: <SafeVaultMotion />,
    },
    {
      id: 'hyosung',
      category: 'ai-data',
      title: '효성ITX',
      subtitle: t('usecases.cases.hyosung.subtitle'),
      solution: t('usecases.cases.hyosung.solution'),
      hoverMotion: <DataIngestionParticles />,
    },
    {
      id: 'lx',
      category: 'cms',
      title: 'LX하우시스',
      subtitle: t('usecases.cases.lx.subtitle'),
      solution: t('usecases.cases.lx.solution'),
      hoverMotion: <GlobalFlagSync />,
    },
    {
      id: 'visang',
      category: 'testops',
      title: '비상교육',
      subtitle: t('usecases.cases.visang.subtitle'),
      solution: t('usecases.cases.visang.solution'),
      hoverMotion: <InteractionNetwork />,
    },
    {
      id: 'penta',
      category: 'msa-infra',
      title: '펜타시큐리티',
      subtitle: t('usecases.cases.penta.subtitle'),
      solution: t('usecases.cases.penta.solution'),
      hoverMotion: <ShieldDefenseDashboard />,
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="use-cases-container">
      {/* 1. Hero Section */}
      <section className="uc-hero-section">
        <UseCaseGlobe />
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
          <p>{t('usecases.metrics.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <UseCaseImpactCharts />
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="uc-cta-section">
        <h2>{t('usecases.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">
          {t('usecases.cta.btn')} <span className="arrow">→</span>
        </Link>
      </section>
    </div>
  );
};

export default UseCases;