import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncBoot.css';

const featureCards = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    titleKey: 'syncboot.page.feat1.title',
    descKey: 'syncboot.page.feat1.desc',
    bullets: ['syncboot.page.feat1.b1', 'syncboot.page.feat1.b2'],
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    titleKey: 'syncboot.page.feat2.title',
    descKey: 'syncboot.page.feat2.desc',
    bullets: ['syncboot.page.feat2.b1', 'syncboot.page.feat2.b2'],
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 8 12 12 14 14" /><path d="M3.05 11a9 9 0 1 1 .45 4" />
      </svg>
    ),
    titleKey: 'syncboot.page.feat3.title',
    descKey: 'syncboot.page.feat3.desc',
    bullets: ['syncboot.page.feat3.b1', 'syncboot.page.feat3.b2'],
  },
];

const steps = [
  { num: '1', color: 'cyan', titleKey: 'syncboot.page.step1.title', descKey: 'syncboot.page.step1.desc' },
  { num: '2', color: 'emerald', titleKey: 'syncboot.page.step2.title', descKey: 'syncboot.page.step2.desc' },
  { num: '3', color: 'blue', titleKey: 'syncboot.page.step3.title', descKey: 'syncboot.page.step3.desc' },
];

const SyncBoot = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="sb-page">
      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(34,211,238,0.1)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(16,185,129,0.08)', filter: 'blur(120px)' }} />
      </div>

      <main className="sb-main">
        {/* Hero */}
        <section className="sb-hero-section">
          <div className="sb-network-bg" />
          <div className="sb-section-inner sb-hero-inner">
            <div className="sb-badge">
              <span className="sb-badge-dot">
                <span className="sb-badge-ping" />
                <span className="sb-badge-core" />
              </span>
              {t('syncboot.page.badge')}
            </div>

            <h1 className="sb-hero-title">
              {t('syncboot.page.heroLine1')}<br />
              <span className="sb-gradient-text">{t('syncboot.page.heroLine2')}</span>
            </h1>

            <p className="sb-hero-desc">{t('syncboot.page.heroDesc')}</p>

            <div className="sb-hero-pills">
              <div className="sb-glass-panel sb-pill">
                <div className="sb-pill-icon sb-pill-icon--cyan">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="sb-pill-label">{t('syncboot.page.pill1Label')}</p>
                  <p className="sb-pill-value">{t('syncboot.page.pill1Value')}</p>
                </div>
              </div>
              <div className="sb-glass-panel sb-pill">
                <div className="sb-pill-icon sb-pill-icon--emerald">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </div>
                <div>
                  <p className="sb-pill-label">{t('syncboot.page.pill2Label')}</p>
                  <p className="sb-pill-value">{t('syncboot.page.pill2Value')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="sb-section-inner sb-features-section">
          <div className="sb-features-grid">
            {featureCards.map((card, i) => (
              <div key={i} className={`sb-feat-card sb-glass-panel sb-feat-card--${card.color}`}>
                <div className={`sb-feat-icon sb-feat-icon--${card.color}`}>{card.icon}</div>
                <h3 className="sb-feat-title">{t(card.titleKey)}</h3>
                <p className="sb-feat-desc">{t(card.descKey)}</p>
                <ul className="sb-feat-list">
                  {card.bullets.map((bk, j) => (
                    <li key={j} className={`sb-feat-bullet sb-feat-bullet--${card.color}`}>
                      <div className={`sb-bullet-dot sb-bullet-dot--${card.color}`} />
                      {t(bk)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="sb-section-inner sb-how-section">
          <div className="sb-glass-panel-solid sb-how-box">
            {/* Left — steps */}
            <div className="sb-how-left">
              <h2 className="sb-how-title">{t('syncboot.page.howTitle')}</h2>
              <div className="sb-steps">
                {steps.map((step, i) => (
                  <div key={i} className="sb-step">
                    <div className={`sb-step-num sb-step-num--${step.color}`}>{step.num}</div>
                    <div>
                      <h4 className="sb-step-title">{t(step.titleKey)}</h4>
                      <p className="sb-step-desc">{t(step.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual diagram */}
            <div className="sb-how-right">
              <div className="sb-diagram-box">
                <div className="sb-diagram-nodes">
                  <div className="sb-diagram-node sb-diagram-node--plain">
                    <div className="sb-node-icon sb-node-icon--plain animate-blob">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
                      </svg>
                    </div>
                    <span className="sb-node-label">{t('syncboot.page.nodeSource')}</span>
                  </div>
                  <div className="sb-node-line" />
                  <div className="sb-diagram-node sb-diagram-node--accent">
                    <div className="sb-node-icon sb-node-icon--accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M17.5 19l4.5-4.5L17.5 10" /><path d="M22 14.5H9c-3.87 0-7-3.13-7-7s3.13-7 7-7h1" />
                      </svg>
                    </div>
                    <span className="sb-node-label sb-node-label--accent">SyncBoot</span>
                  </div>
                  <div className="sb-node-line" />
                  <div className="sb-diagram-node sb-diagram-node--plain">
                    <div className="sb-node-icon sb-node-icon--cloud animate-blob animation-delay-2000">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="sb-node-label">{t('syncboot.page.nodeTarget')}</span>
                  </div>
                </div>
                <div className="sb-glass-panel sb-progress-card">
                  <div className="sb-progress-header">
                    <span className="sb-progress-label">{t('syncboot.page.progressLabel')}</span>
                    <span className="sb-progress-pct">98%</span>
                  </div>
                  <div className="sb-progress-track">
                    <div className="sb-progress-fill" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sb-section-inner sb-cta-section">
          <h2 className="sb-cta-title">{t('syncboot.page.ctaTitle')}</h2>
          <p className="sb-cta-desc">{t('syncboot.page.ctaDesc')}</p>
          <div className="sb-cta-btns">
            <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="sb-cta-btn-primary">
              {t('syncboot.page.ctaBtn1')}
            </Link>
            <button className="sb-cta-btn-secondary">{t('syncboot.page.ctaBtn2')}</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SyncBoot;
