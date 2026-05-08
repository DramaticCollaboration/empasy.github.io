import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SyncEta.css';

import EtaSelfHealing from '../components/EtaSelfHealing';
import EtaVisualQA from '../components/EtaVisualQA';
import EtaDashboardForensics from '../components/EtaDashboardForensics';
import EtaAILoop from '../components/EtaAILoop';
import EtaPipelineDomino from '../components/EtaPipelineDomino';

const SyncEta = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="synceta-container">
      {/* 1. Hero Section */}
      <section className="synceta-hero-section">
        <div className="hero-content">
          <h1>{t('synceta.hero.title')}</h1>
          <p>{t('synceta.hero.desc')}</p>
          <div className="hero-visual">
            <EtaAILoop />
          </div>
        </div>
      </section>

      {/* 2. Zero-Recording Execution */}
      <section className="zero-recording-section">
        <div className="section-header">
          <h2>{t('synceta.recording.title')}</h2>
          <p>{t('synceta.recording.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <EtaPipelineDomino />
        </div>
      </section>

      {/* 3. Self-Healing & Visual QA */}
      <section className="self-healing-section">
        <div className="section-header">
          <h2>{t('synceta.healing.title')}</h2>
          <p>{t('synceta.healing.subtitle')}</p>
        </div>
        <div className="dual-visual-grid">
          <div className="visual-card">
            <h3>{t('synceta.healing.card1.title', 'AI Self-Healing')}</h3>
            <EtaSelfHealing />
          </div>
          <div className="visual-card">
            <h3>{t('synceta.healing.card2.title', 'Visual Regression')}</h3>
            <EtaVisualQA />
          </div>
        </div>
      </section>

      {/* 4. Real-time Dashboard & TestOps */}
      <section className="testops-dashboard-section">
        <div className="section-header">
          <h2>{t('synceta.dashboard.title')}</h2>
          <p>{t('synceta.dashboard.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <EtaDashboardForensics />
        </div>
      </section>

      {/* 5. AI Feedback Loop */}
      <section className="ai-feedback-section">
        <div className="section-header">
          <h2>{t('synceta.feedback.title')}</h2>
          <p>{t('synceta.feedback.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <EtaAILoop />
        </div>
      </section>

      {/* 6. CI/CD Pipeline Integration */}
      <section className="cicd-integration-section">
        <div className="section-header">
          <h2>{t('synceta.cicd.title')}</h2>
          <p>{t('synceta.cicd.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <EtaPipelineDomino />
        </div>
      </section>

      {/* Download and Guide Section */}
      <section className="download-guide-section">
        <div className="section-header">
          <h2>{t('synceta.download.title')}</h2>
        </div>
        <div className="download-guide-content">
          <div className="guide-link">
            <h3>{t('synceta.download.guide.title')}</h3>
            <p>{t('synceta.download.guide.desc')}</p>
            <a href="https://doc.empasy.com/synceta/intro.html" target="_blank" rel="noopener noreferrer" className="guide-btn">{t('synceta.download.guide.btn')}</a>
          </div>
          <div className="download-links">
            <h3>{t('synceta.download.client.title')}</h3>
            <div className="os-downloads">
              <a href="https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA+Setup+3.3.4.exe" className="download-btn windows">Windows</a>
              <a href="https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA-3.3.4-arm64.dmg" className="download-btn macos">macOS (Apple Silicon)</a>
              <button className="download-btn linux" disabled>{t('synceta.download.client.linux')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('synceta.cta.title').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'SyncEta' }}
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
              {t('synceta.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SyncEta;