import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
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
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="syncapim-container">
      <SEO pageKey="syncapim" />
      {/* 1. Hero Section */}
      <section className="syncapim-hero-section">
        <div className="hero-content">
          <h1>{t('syncapim.hero.title')}</h1>
          <p>{t('syncapim.hero.desc')}</p>
          <div className="gateway-particle-placeholder">
            <APIGatewayParticles isMobile={isMobile} hideText={true} />
          </div>
        </div>
      </section>

      {/* 2. Full Lifecycle Management */}
      <section className="lifecycle-section">
        <div className="section-header">
          <h2>{t('syncapim.lifecycle.title')}</h2>
          <p>{t('syncapim.lifecycle.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIScrollTelling isMobile={isMobile} />
        </div>
      </section>

      {/* 3. Core Features (Interactive Bento-box) */}
      <section className="core-features-section">
        <div className="section-header">
          <h2>{t('syncapim.features.title')}</h2>
          <p>{t('syncapim.features.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIInteractiveBento isMobile={isMobile} />
        </div>
      </section>

      {/* 4. Enterprise Security & Customization */}
      <section className="security-section">
        <div className="section-header">
          <h2>{t('syncapim.security.title')}</h2>
          <p>{t('syncapim.security.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APISecurityShield isMobile={isMobile} />
        </div>
      </section>

      {/* 5. Observability & Packetbeat Analytics */}
      <section className="observability-section">
        <div className="section-header">
          <h2>{t('syncapim.observability.title')}</h2>
          <p>{t('syncapim.observability.subtitle')}</p>
        </div>
        <div className="interactive-container">
          <APIPacketbeatAnalytics isMobile={isMobile} />
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncapim-cta-section">
        <h2>{t('syncapim.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">{t('syncapim.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default SyncAPIM;