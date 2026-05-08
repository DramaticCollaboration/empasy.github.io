import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SyncAPIM.css';

const capabilityCards = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    titleKey: 'syncapim.page.cap1.title',
    descKey: 'syncapim.page.cap1.desc',
    hoverColor: 'cyan',
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8" /><path d="M4.93 10.93l1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" />
        <path d="M19.07 10.93l-1.41 1.41" /><path d="M22 22H2" /><path d="M8 22l4-10 4 10" />
      </svg>
    ),
    titleKey: 'syncapim.page.cap2.title',
    descKey: 'syncapim.page.cap2.desc',
    hoverColor: 'emerald',
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titleKey: 'syncapim.page.cap3.title',
    descKey: 'syncapim.page.cap3.desc',
    hoverColor: 'blue',
  },
];

const trafficItems = [
  { titleKey: 'syncapim.page.traffic1.title', descKey: 'syncapim.page.traffic1.desc' },
  { titleKey: 'syncapim.page.traffic2.title', descKey: 'syncapim.page.traffic2.desc' },
  { titleKey: 'syncapim.page.traffic3.title', descKey: 'syncapim.page.traffic3.desc' },
];

const barHeights = [96, 128, 160, 176, 112, 144, 120];
const barColors = ['#e2e8f0', '#e2e8f0', '#22d3ee', '#06b6d4', '#67e8f9', '#e2e8f0', '#e2e8f0'];

const SyncAPIM = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [email, setEmail] = useState('');

  return (
    <div className="sa-page">
      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', filter: 'blur(120px)' }} />
        <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '20%', right: '-10%', width: '45%', height: '60%', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', filter: 'blur(140px)' }} />
        <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '-20%', left: '20%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(59,130,246,0.08)', filter: 'blur(130px)' }} />
      </div>

      <main className="sa-main">
        {/* Hero */}
        <section className="sa-hero-section">
          <div className="sa-network-bg" />
          {/* Floating dots */}
          <span className="animate-pulse-slow" style={{ position: 'absolute', top: '80px', left: '20%', width: '12px', height: '12px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 15px rgba(34,211,238,0.6)', display: 'block' }} />
          <span className="animate-pulse-slow" style={{ position: 'absolute', bottom: '80px', right: '25%', width: '16px', height: '16px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 20px rgba(52,211,153,0.6)', animationDelay: '1s', display: 'block' }} />
          <span className="animate-pulse-slow" style={{ position: 'absolute', top: '160px', right: '15%', width: '8px', height: '8px', borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 10px rgba(96,165,250,0.6)', animationDelay: '2s', display: 'block' }} />

          <div className="sa-section-inner sa-hero-inner">
            <div className="sa-hero-text">
              <span className="sa-badge">
                <span style={{ position: 'relative', display: 'inline-flex', marginRight: '8px', width: '10px', height: '10px' }}>
                  <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#06B6D4', opacity: 0.75 }} />
                  <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px', borderRadius: '50%', background: '#0891B2' }} />
                </span>
                {t('syncapim.page.badge')}
              </span>
              <h1 className="sa-hero-title">
                <span className="sa-hero-title-plain">{t('syncapim.page.heroLine1')}</span>
                <span className="sa-gradient-text">{t('syncapim.page.heroLine2')}</span>
              </h1>
              <p className="sa-hero-desc">{t('syncapim.page.heroDesc')}</p>
              <div className="sa-hero-btns">
                <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="sa-btn-primary">
                  {t('syncapim.page.btnStart')}
                </Link>
                <button className="sa-btn-secondary">{t('syncapim.page.btnDocs')}</button>
              </div>
            </div>

            {/* Code window */}
            <div className="sa-code-side">
              <div className="sa-code-window">
                <div className="sa-code-dots">
                  <span className="sa-dot-red" /><span className="sa-dot-amber" /><span className="sa-dot-green" />
                </div>
                <pre className="sa-code-pre"><code>
<span className="sa-code-blue">GET</span>{' /v1/gateway/sync-apim\n'}
<span className="sa-code-muted">{'{'}</span>{'\n'}
{'  '}<span className="sa-code-cyan">"status"</span>{': '}<span className="sa-code-green">"connected"</span>{',\n'}
{'  '}<span className="sa-code-cyan">"gateway"</span>{': {'}<br />
{'    '}<span className="sa-code-cyan">"protocol"</span>{': '}<span className="sa-code-green">"gRPC to REST"</span>{',\n'}
{'    '}<span className="sa-code-cyan">"auth"</span>{': '}<span className="sa-code-green">"OAuth 2.0"</span>{',\n'}
{'    '}<span className="sa-code-cyan">"latency"</span>{': '}<span className="sa-code-green">"12ms"</span>{'\n'}
{'  '},<span className="sa-code-muted">{'}'}</span>{',\n'}
{'  '}<span className="sa-code-cyan">"rate_limit"</span>{': '}<span className="sa-code-green">"1000 req/sec"</span>{'\n'}
<span className="sa-code-muted">{'}'}</span>
                </code></pre>
              </div>
              <div className="animate-blob sa-security-badge sa-glass-panel-solid">
                <div className="sa-security-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="sa-security-label">{t('syncapim.page.securityLabel')}</p>
                  <p className="sa-security-title">{t('syncapim.page.securityTitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="sa-section-inner sa-capabilities-section">
          <div className="sa-section-header">
            <h2 className="sa-section-title">{t('syncapim.page.capsTitle')}</h2>
            <p className="sa-section-subtitle">{t('syncapim.page.capsSubtitle')}</p>
          </div>
          <div className="sa-caps-grid">
            {capabilityCards.map((card, i) => (
              <div key={i} className={`sa-api-card sa-glass-panel sa-api-card--${card.hoverColor}`}>
                <div className={`sa-cap-icon sa-cap-icon--${card.color}`}>{card.icon}</div>
                <h3 className="sa-cap-title">{t(card.titleKey)}</h3>
                <p className="sa-cap-desc">{t(card.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traffic Control */}
        <section className="sa-section-inner sa-traffic-section">
          <div className="sa-glass-panel-solid sa-traffic-box">
            {/* Dark left panel */}
            <div className="sa-traffic-left">
              <h2 className="sa-traffic-title">
                {t('syncapim.page.trafficTitle')}{' '}
                <span className="sa-traffic-title-accent">{t('syncapim.page.trafficTitleAccent')}</span>
              </h2>
              <div className="sa-traffic-items">
                {trafficItems.map((item, i) => (
                  <div key={i} className="sa-traffic-item">
                    <div className="sa-check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="sa-traffic-item-title">{t(item.titleKey)}</h4>
                      <p className="sa-traffic-item-desc">{t(item.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel — Gateway Load chart */}
            <div className="sa-traffic-right">
              <div className="sa-chart-card">
                <div className="sa-chart-header">
                  <div>
                    <p className="sa-chart-eyebrow">{t('syncapim.page.chartEyebrow')}</p>
                    <h4 className="sa-chart-title">{t('syncapim.page.chartTitle')}</h4>
                  </div>
                  <span className="sa-chart-badge">{t('syncapim.page.chartBadge')}</span>
                </div>
                <div className="sa-chart-bars">
                  {barHeights.map((h, i) => (
                    <div key={i} className="sa-bar-col" style={{ height: `${h}px`, backgroundColor: barColors[i] }} />
                  ))}
                </div>
                <div className="sa-chart-stats">
                  <div className="sa-chart-stat">
                    <p className="sa-chart-stat-label">{t('syncapim.page.stat1Label')}</p>
                    <p className="sa-chart-stat-value">0.45ms</p>
                  </div>
                  <div className="sa-chart-stat">
                    <p className="sa-chart-stat-label">{t('syncapim.page.stat2Label')}</p>
                    <p className="sa-chart-stat-value">2.4 TB/s</p>
                  </div>
                </div>
              </div>
              <div className="sa-traffic-ring" />
              <div className="sa-traffic-glow" />
            </div>
          </div>
        </section>

        {/* Stats + CTA */}
        <section className="sa-section-inner sa-stats-section">
          <h2 className="sa-stats-main-title">{t('syncapim.page.statsTitle')}</h2>
          <div className="sa-stats-grid">
            {[
              { value: '99.99%', label: 'syncapim.page.stat1' },
              { value: '1M+',    label: 'syncapim.page.stat2' },
              { value: '50%',    label: 'syncapim.page.stat3' },
              { value: 'ISO 27001', label: 'syncapim.page.stat4' },
            ].map((s, i) => (
              <div key={i}>
                <p className="sa-stat-value sa-gradient-text">{s.value}</p>
                <p className="sa-stat-label">{t(s.label)}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Demo CTA */}
        <section className="sa-cta">
          <div className="sa-cta-box">
            <h2 className="sa-cta-title">{t('syncapim.page.ctaTitle')}</h2>
            <p className="sa-cta-desc">{t('syncapim.page.ctaDesc')}</p>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'Other' }}
              className="sa-cta-btn"
            >
              {t('syncapim.page.ctaBtn')}
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

export default SyncAPIM;
