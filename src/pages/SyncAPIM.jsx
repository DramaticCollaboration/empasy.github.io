import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './SyncAPIM.css';

import APIGatewayParticles from '../components/APIGatewayParticles';
import APIScrollTelling from '../components/APIScrollTelling';
import APIInteractiveBento from '../components/APIInteractiveBento';
import APISecurityShield from '../components/APISecurityShield';
import APIPacketbeatAnalytics from '../components/APIPacketbeatAnalytics';

const SyncAPIM = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="syncapim-container">
      {/* 1. Hero Section */}
      <section className="syncapim-hero-section">
        <APIGatewayParticles />
      </section>

      {/* 2. Full Lifecycle Management */}
      <section className="lifecycle-section">
        <div className="section-header">
          <h2>{t('syncapim.lifecycle.title')}</h2>
          <p>{t('syncapim.lifecycle.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIScrollTelling />
        </div>
      </section>

      {/* 3. Core Features (Interactive Bento-box) */}
      <section className="core-features-section">
        <div className="section-header">
          <h2>{t('syncapim.features.title')}</h2>
          <p>{t('syncapim.features.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIInteractiveBento />
        </div>
      </section>

      {/* 4. Enterprise Security & Customization */}
      <section className="security-section">
        <div className="section-header">
          <h2>{t('syncapim.security.title')}</h2>
          <p>{t('syncapim.security.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APISecurityShield />
        </div>
      </section>

      {/* 5. Observability & Packetbeat Analytics */}
      <section className="observability-section">
        <div className="section-header">
          <h2>{t('syncapim.observability.title')}</h2>
          <p>{t('syncapim.observability.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIPacketbeatAnalytics />
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('syncapim.cta.title').split('\n').map((line, i, arr) => (
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
              {t('syncapim.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SyncAPIM;