import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SyncCMS.css';

const heroPills = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    labelKey: 'synccms.page.pill1Label',
    valueKey: 'synccms.page.pill1Value',
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    labelKey: 'synccms.page.pill2Label',
    valueKey: 'synccms.page.pill2Value',
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" />
      </svg>
    ),
    labelKey: 'synccms.page.pill3Label',
    valueKey: 'synccms.page.pill3Value',
  },
];

const featureCards = [
  {
    color: 'cyan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M21 16v5h-5" /><path d="M3 16v5h5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    titleKey: 'synccms.page.cap1.title',
    descKey: 'synccms.page.cap1.desc',
  },
  {
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titleKey: 'synccms.page.cap2.title',
    descKey: 'synccms.page.cap2.desc',
  },
  {
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    titleKey: 'synccms.page.cap3.title',
    descKey: 'synccms.page.cap3.desc',
  },
];

const SyncCMS = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="sc-page">
      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(147,197,253,0.2)', filter: 'blur(120px)' }} />
        <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '30%', left: '-10%', width: '45%', height: '60%', borderRadius: '50%', background: 'rgba(103,232,249,0.15)', filter: 'blur(140px)' }} />
        <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(167,243,208,0.15)', filter: 'blur(130px)' }} />
      </div>

      <main className="sc-main">
        {/* Hero */}
        <section className="sc-hero-section">
          <div className="sc-network-bg" />
          <div className="sc-section-inner sc-hero-inner">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="sc-badge">{t('synccms.page.badge')}</span>
              <h1 className="sc-hero-title">
                <span className="sc-title-plain">Sync</span>
                <span className="sc-gradient-text">CMS</span>
              </h1>
              <p className="sc-hero-desc">{t('synccms.page.heroDesc')}</p>

              <div className="sc-hero-pills">
                {heroPills.map((pill, i) => (
                  <div key={i} className={`sc-glass-panel sc-pill`}>
                    <div className={`sc-pill-icon sc-pill-icon--${pill.color}`}>{pill.icon}</div>
                    <div>
                      <p className="sc-pill-label">{t(pill.labelKey)}</p>
                      <p className="sc-pill-value">{t(pill.valueKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="sc-section-inner sc-content-section">
          {/* Single Source split */}
          <motion.div
            className="sc-split-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left — mock UI panel */}
            <div className="sc-split-visual">
              <div className="sc-blur-blob" />
              <div className="sc-glass-panel-solid sc-mock-frame">
                <div className="sc-mock-screen">
                  <div className="sc-mock-dots">
                    <span className="sc-dot sc-dot--red" />
                    <span className="sc-dot sc-dot--amber" />
                    <span className="sc-dot sc-dot--green" />
                  </div>
                  <div className="sc-mock-body">
                    <div className="sc-mock-bar" />
                    <div className="sc-mock-grid">
                      <div className="sc-mock-tile sc-mock-tile--active" />
                      <div className="sc-mock-tile" />
                      <div className="sc-mock-tile" />
                    </div>
                    <div className="sc-mock-status">
                      <span className="sc-status-dot" />
                      <div className="sc-status-bar" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-glass-panel sc-sync-badge sc-node-float">
                <div className="sc-sync-pct">99%</div>
                <div>
                  <p className="sc-sync-label">{t('synccms.page.syncLabel')}</p>
                  <p className="sc-sync-sub">{t('synccms.page.syncSub')}</p>
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="sc-split-text">
              <h2 className="sc-split-title">
                {t('synccms.page.splitTitle1')}<br />
                <span className="sc-gradient-text">{t('synccms.page.splitTitleAccent')}</span>
                {t('synccms.page.splitTitle2')}
              </h2>
              <p className="sc-split-desc">{t('synccms.page.splitDesc')}</p>

              <div className="sc-features-list">
                <div className="sc-feature-item">
                  <div className="sc-feat-icon-sm sc-feat-icon-sm--cyan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="sc-feat-sm-title">{t('synccms.page.feat1.title')}</h4>
                    <p className="sc-feat-sm-desc">{t('synccms.page.feat1.desc')}</p>
                  </div>
                </div>
                <div className="sc-feature-item">
                  <div className="sc-feat-icon-sm sc-feat-icon-sm--emerald">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M11 9h4" /><path d="M11 12h4" /><path d="M11 15h4" />
                      <path d="M9 9h.01" /><path d="M9 12h.01" /><path d="M9 15h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="sc-feat-sm-title">{t('synccms.page.feat2.title')}</h4>
                    <p className="sc-feat-sm-desc">{t('synccms.page.feat2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            className="sc-caps-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="sc-caps-title">{t('synccms.page.capsTitle')}</h2>
            <p className="sc-caps-sub">{t('synccms.page.capsSub')}</p>
          </motion.div>

          <div className="sc-caps-grid">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                className={`sc-cap-card sc-glass-panel sc-cap-card--${card.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <div className={`sc-cap-icon sc-cap-icon--${card.color}`}>{card.icon}</div>
                <h3 className="sc-cap-title">{t(card.titleKey)}</h3>
                <p className="sc-cap-desc">{t(card.descKey)}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="sc-glass-panel-solid sc-cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sc-cta-glow" />
            <div className="sc-cta-inner">
              <h2 className="sc-cta-title">{t('synccms.page.ctaTitle')}</h2>
              <p className="sc-cta-desc">{t('synccms.page.ctaDesc')}</p>
              <div className="sc-cta-btns">
                <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="sc-cta-btn-primary">
                  {t('synccms.page.ctaBtn1')}
                </Link>
                <button className="sc-cta-btn-secondary">{t('synccms.page.ctaBtn2')}</button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default SyncCMS;
