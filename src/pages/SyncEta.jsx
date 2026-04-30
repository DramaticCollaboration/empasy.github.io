import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncEta.css';

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
          {/* Placeholder for Typing & Transformation Motion */}
          <div className="excel-to-code-placeholder">
            [Excel cell typing "결제 플로우 테스트" and shattering into Playwright code here]
          </div>
        </div>
      </section>

      {/* 2. Zero-Recording Execution */}
      <section className="zero-recording-section">
        <div className="section-header">
          <h2>{t('synceta.recording.title')}</h2>
        </div>
        {/* Placeholder for Before & After comparison */}
        <div className="before-after-placeholder">
          [Scroll interaction: Manual Coding (AS-IS) vs AI Direct Execution (TO-BE) pipeline motion here]
        </div>
      </section>

      {/* 3. Self-Healing & Visual QA */}
      <section className="self-healing-section">
        <div className="section-header">
          <h2>{t('synceta.healing.title')}</h2>
        </div>
        <div className="healing-visual-container">
          {/* Placeholder for Interactive Self-Healing Simulator */}
          <div className="healing-simulator-placeholder">
            [Interactive Drag &amp; Drop button simulator with AI laser recovery here]
          </div>
          {/* Placeholder for Visual Regression Magnifier */}
          <div className="visual-qa-placeholder">
            [Hover magnifier to detect 1px UI layout bug here]
          </div>
        </div>
      </section>

      {/* 4. Real-time Dashboard & TestOps */}
      <section className="testops-dashboard-section">
        <div className="section-header">
          <h2>{t('synceta.dashboard.title')}</h2>
        </div>
        {/* Placeholder for Live Dashboard Animation */}
        <div className="dashboard-animation-placeholder">
          [Live dashboard UI with data waves and hover video playback for error logs here]
        </div>
      </section>

      {/* 5. AI Feedback Loop */}
      <section className="ai-feedback-section">
        <div className="section-header">
          <h2>{t('synceta.feedback.title')}</h2>
        </div>
        {/* Placeholder for Infinite Loop Animation */}
        <div className="feedback-loop-placeholder">
          [Infinite loop pipeline with data particles and accuracy chart drawing here]
        </div>
      </section>

      {/* 6. CI/CD Pipeline Integration */}
      <section className="cicd-integration-section">
        <div className="section-header">
          <h2>{t('synceta.cicd.title')}</h2>
        </div>
        {/* Placeholder for Dropdown Pipeline Routing */}
        <div className="pipeline-routing-placeholder">
          [Domino-like pipeline workflow from Commit to Slack notification on a conveyor belt here]
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
      <section className="synceta-cta-section">
        <h2>{t('synceta.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">{t('synceta.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncEta;