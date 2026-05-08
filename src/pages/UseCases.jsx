import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('usecases.cta.title').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'Other' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: '#0F172A', color: '#fff',
                padding: '20px 40px', borderRadius: '50px',
                fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 20px 40px rgba(15,23,42,0.2)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E293B'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 28px 50px rgba(15,23,42,0.28)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 20px 40px rgba(15,23,42,0.2)'; }}
            >
              {t('usecases.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;