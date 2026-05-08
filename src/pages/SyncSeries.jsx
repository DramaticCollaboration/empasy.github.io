import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncSeries.css';

const featureCards = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19c.7 0 1.3-.2 1.8-.7.5-.4.7-1 .7-1.8 0-1.5-1.2-2.7-2.7-2.7h-.3c-.3-1.5-1.7-2.8-3.3-2.8-1.3 0-2.5.8-3 2-.3-.1-.6-.2-1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3" />
        <path d="M12 13v9" /><path d="m9 16 3-3 3 3" />
      </svg>
    ),
    titleKey: 'syncseries.page.feature1.title',
    descKey: 'syncseries.page.feature1.desc',
    bullets: ['syncseries.page.feature1.b1', 'syncseries.page.feature1.b2'],
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    titleKey: 'syncseries.page.feature2.title',
    descKey: 'syncseries.page.feature2.desc',
    bullets: ['syncseries.page.feature2.b1', 'syncseries.page.feature2.b2'],
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    titleKey: 'syncseries.page.feature3.title',
    descKey: 'syncseries.page.feature3.desc',
    bullets: ['syncseries.page.feature3.b1', 'syncseries.page.feature3.b2'],
  },
];

const SyncSeries = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="ss-page">
      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', filter: 'blur(120px)' }} />
        <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '20%', right: '-10%', width: '45%', height: '60%', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', filter: 'blur(140px)' }} />
        <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '-20%', left: '20%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(59,130,246,0.08)', filter: 'blur(130px)' }} />
      </div>

      <main className="ss-main">
        {/* Hero */}
        <section className="ss-hero-section">
          <div className="ss-network-bg" />
          <div className="ss-pulse-dot ss-pulse-dot--cyan" />
          <div className="ss-pulse-dot ss-pulse-dot--emerald" style={{ animationDelay: '1s' }} />
          <div className="ss-hero-inner">
            <span className="ss-badge">{t('syncseries.page.badge')}</span>
            <h1 className="ss-hero-title">
              <span className="ss-gradient-text">{t('syncseries.page.heroTitle')}</span>
            </h1>
            <p className="ss-hero-desc">
              {t('syncseries.page.heroDescPre')}{' '}
              <span className="ss-hero-desc-bold">{t('syncseries.page.heroDescBold')}</span>{' '}
              {t('syncseries.page.heroDescPost')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="ss-section">
          {/* Feature Cards */}
          <div className="ss-features-grid">
            {featureCards.map((card, i) => (
              <div key={i} className={`ss-feature-card ss-glass-panel ss-feature-card--${card.color}`}>
                <div className={`ss-feature-icon ss-feature-icon--${card.color}`}>{card.icon}</div>
                <h3 className="ss-feature-title">{t(card.titleKey)}</h3>
                <p className="ss-feature-desc">{t(card.descKey)}</p>
                <ul className="ss-feature-list">
                  {card.bullets.map((bKey, j) => (
                    <li key={j} className="ss-feature-li">
                      <span className={`ss-dot ss-dot--${card.color}`} />
                      {t(bKey)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Edge */}
          <div className="ss-tech-grid">
            <div className="ss-tech-text">
              <span className="ss-tech-eyebrow">{t('syncseries.page.techEdge')}</span>
              <h2 className="ss-tech-title">
                {t('syncseries.page.techTitle').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
                ))}
              </h2>
              <div className="ss-tech-items">
                <div className="ss-tech-item">
                  <div className="ss-tech-num">01</div>
                  <div>
                    <h4 className="ss-tech-item-title">{t('syncseries.page.tech1Title')}</h4>
                    <p className="ss-tech-item-desc">{t('syncseries.page.tech1Desc')}</p>
                  </div>
                </div>
                <div className="ss-tech-item">
                  <div className="ss-tech-num">02</div>
                  <div>
                    <h4 className="ss-tech-item-title">{t('syncseries.page.tech2Title')}</h4>
                    <p className="ss-tech-item-desc">{t('syncseries.page.tech2Desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-tech-visual">
              <div className="ss-glass-panel-solid ss-ring-box">
                <div className="ss-ring-bg" />
                <div className="ss-spinning-ring">
                  <div className="ss-ring-card ss-ring-card--top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" />
                    </svg>
                  </div>
                  <div className="ss-ring-card ss-ring-card--bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                </div>
                <div className="ss-sync-center">
                  <span className="ss-sync-label">SYNC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="ss-glass-panel-solid ss-perf-box">
            <div className="ss-perf-glow" />
            <div className="ss-perf-inner">
              <div className="ss-perf-header">
                <h2 className="ss-perf-title">{t('syncseries.page.perfTitle')}</h2>
                <p className="ss-perf-subtitle">{t('syncseries.page.perfSubtitle')}</p>
              </div>
              <div className="ss-perf-grid">
                <div className="ss-perf-cell">
                  <p className="ss-perf-label">{t('syncseries.page.perf1Label')}</p>
                  <h3 className="ss-perf-value">10<span className="ss-perf-unit">GB/s</span></h3>
                </div>
                <div className="ss-perf-cell">
                  <p className="ss-perf-label">{t('syncseries.page.perf2Label')}</p>
                  <h3 className="ss-perf-value">0.5<span className="ss-perf-unit">s</span></h3>
                </div>
                <div className="ss-perf-cell">
                  <p className="ss-perf-label">{t('syncseries.page.perf3Label')}</p>
                  <h3 className="ss-perf-value ss-perf-value--gradient">99.99<span className="ss-perf-unit ss-perf-unit--emerald">%</span></h3>
                </div>
                <div className="ss-perf-cell">
                  <p className="ss-perf-label">{t('syncseries.page.perf4Label')}</p>
                  <h3 className="ss-perf-value">120<span className="ss-perf-unit">+</span></h3>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="ss-cta">
            <h2 className="ss-cta-title">{t('syncseries.page.ctaTitle')}</h2>
            <p className="ss-cta-desc">{t('syncseries.page.ctaDesc')}</p>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'Other' }}
              className="ss-cta-btn"
            >
              {t('syncseries.page.ctaBtn')}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SyncSeries;
