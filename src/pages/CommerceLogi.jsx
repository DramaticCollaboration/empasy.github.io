import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CommerceLogi.css';

const featureCards = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    titleKey: 'commercelogi.page.feature1.title',
    descKey: 'commercelogi.page.feature1.desc',
    bullets: ['commercelogi.page.feature1.b1', 'commercelogi.page.feature1.b2', 'commercelogi.page.feature1.b3'],
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    titleKey: 'commercelogi.page.feature2.title',
    descKey: 'commercelogi.page.feature2.desc',
    bullets: ['commercelogi.page.feature2.b1', 'commercelogi.page.feature2.b2', 'commercelogi.page.feature2.b3'],
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    titleKey: 'commercelogi.page.feature3.title',
    descKey: 'commercelogi.page.feature3.desc',
    bullets: ['commercelogi.page.feature3.b1', 'commercelogi.page.feature3.b2', 'commercelogi.page.feature3.b3'],
  },
];

const CommerceLogi = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="cl-page">
      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', filter: 'blur(120px)' }} />
        <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', filter: 'blur(120px)' }} />
      </div>

      <main className="cl-main">
        {/* Hero */}
        <section className="cl-section cl-hero-section">
          <div className="cl-hero-inner">
            <div className="cl-hero-text">
              <span className="cl-badge">{t('commercelogi.page.badge')}</span>
              <h1 className="cl-hero-title">
                {t('commercelogi.page.heroLine1')}<br />
                <span className="cl-gradient-text">{t('commercelogi.page.heroLine2')}</span>
              </h1>
              <p className="cl-hero-desc">{t('commercelogi.page.heroDesc')}</p>
              <div className="cl-hero-btns">
                <Link
                  to={`/${currentLang}/contact`}
                  state={{ interest: 'Other' }}
                  className="cl-btn-primary"
                >
                  {t('commercelogi.page.btnDiagnose')}
                </Link>
                <button className="cl-btn-secondary">{t('commercelogi.page.btnDetail')}</button>
              </div>
            </div>

            {/* Logistics SVG animation */}
            <div className="cl-hero-visual">
              <div className="cl-glass-panel cl-svg-wrap cl-grid-bg">
                <svg viewBox="0 0 400 400" className="cl-logi-svg">
                  {/* Hub */}
                  <rect x="50" y="150" width="60" height="60" rx="10" fill="white" stroke="#00B4D8" strokeWidth="2" />
                  {/* Nodes */}
                  <rect x="290" y="80" width="40" height="40" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
                  <rect x="290" y="280" width="40" height="40" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
                  {/* Lines */}
                  <path d="M110 180 L290 100" className="cl-logistic-line" fill="none" stroke="#00B4D8" strokeWidth="2" />
                  <path d="M110 180 L290 300" className="cl-logistic-line" fill="none" stroke="#00B4D8" strokeWidth="2" />
                  {/* Animated dots */}
                  <circle r="4" fill="#00B4D8">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M110 180 L290 100" />
                  </circle>
                  <circle r="4" fill="#10b981">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M110 180 L290 300" />
                  </circle>
                </svg>

                {/* Live status card */}
                <div className="cl-live-card cl-glass-panel">
                  <div className="cl-live-left">
                    <p className="cl-live-label">Live Status</p>
                    <h4 className="cl-live-title">Global Fulfillment Flow</h4>
                  </div>
                  <div className="cl-live-right">
                    <span className="cl-live-pct">99.8%</span>
                    <p className="cl-live-sub">ON TIME DELIVERY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="cl-section cl-features-section">
          <div className="cl-section-header">
            <h2 className="cl-section-title">{t('commercelogi.page.featuresTitle')}</h2>
            <p className="cl-section-subtitle">{t('commercelogi.page.featuresSubtitle')}</p>
          </div>
          <div className="cl-features-grid">
            {featureCards.map((card, i) => (
              <div key={i} className={`cl-feature-card cl-glass-panel cl-feature-card--${card.color}`}>
                <div className={`cl-feature-icon cl-feature-icon--${card.color}`}>{card.icon}</div>
                <h3 className="cl-feature-title">{t(card.titleKey)}</h3>
                <p className="cl-feature-desc">{t(card.descKey)}</p>
                <ul className="cl-feature-list">
                  {card.bullets.map((bKey, j) => (
                    <li key={j} className="cl-feature-li">
                      <span className={`cl-dot cl-dot--${card.color}`} />
                      {t(bKey)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats section */}
        <section className="cl-section cl-stats-section">
          <div className="cl-stats-box cl-grid-bg-dark">
            <div className="cl-grid-overlay" />
            <div className="cl-stats-inner">
              {/* Progress bars */}
              <div className="cl-stats-bars">
                <h2 className="cl-stats-title">
                  {t('commercelogi.page.statsTitle').split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
                  ))}
                </h2>
                <div className="cl-bars">
                  <div className="cl-bar-row">
                    <div className="cl-bar-labels">
                      <span className="cl-bar-name">{t('commercelogi.page.bar1Label')}</span>
                      <span className="cl-bar-value cl-bar-value--emerald">{t('commercelogi.page.bar1Value')}</span>
                    </div>
                    <div className="cl-bar-track">
                      <div className="cl-bar-fill cl-bar-fill--emerald" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="cl-bar-row">
                    <div className="cl-bar-labels">
                      <span className="cl-bar-name">{t('commercelogi.page.bar2Label')}</span>
                      <span className="cl-bar-value cl-bar-value--cyan">{t('commercelogi.page.bar2Value')}</span>
                    </div>
                    <div className="cl-bar-track">
                      <div className="cl-bar-fill cl-bar-fill--cyan" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat grid */}
              <div className="cl-glass-panel cl-stat-grid-panel">
                <div className="cl-stat-grid">
                  {[
                    { label: 'Active Robots', value: '1,240+', color: 'white' },
                    { label: 'Nodes Connected', value: '48 Sites', color: 'white' },
                    { label: 'Daily Orders', value: '250K+', color: 'white' },
                    { label: 'Efficiency Gain', value: '3.5x', color: 'emerald' },
                  ].map((stat, i) => (
                    <div key={i} className="cl-stat-cell">
                      <p className="cl-stat-label">{stat.label}</p>
                      <p className={`cl-stat-value${stat.color === 'emerald' ? ' cl-stat-value--emerald' : ''}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommerceLogi;
