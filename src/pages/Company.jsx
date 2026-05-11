import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Company.css';

import CompanyLogoSynergy from '../components/CompanyLogoSynergy';
import CompanyProjectFadeIn from '../components/CompanyProjectFadeIn';
import CompanyDarkMap from '../components/CompanyDarkMap';

const Company = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div className="company-container">
      {/* 1. Hero Section */}
      <section className="company-hero-section">
        <CompanyLogoSynergy />
      </section>

      {/* 2. Core Values */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>{t('company.values.title')}</h2>
          <p>{t('company.values.subtitle')}</p>
        </div>
        <div className="flip-cards-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">⚙️</span>
                <h3>{t('company.values.card1.title')}</h3>
              </div>
              <div className="flip-card-back">
                <p>{t('company.values.card1.desc')}</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">🤝</span>
                <h3>{t('company.values.card2.title')}</h3>
              </div>
              <div className="flip-card-back">
                <p>{t('company.values.card2.desc')}</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">⚖️</span>
                <h3>{t('company.values.card3.title')}</h3>
              </div>
              <div className="flip-card-back">
                <p>{t('company.values.card3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History & Milestone */}
      <section className="history-section">
        <div className="section-header">
          <h2>{t('company.history.title')}</h2>
        </div>
        <CompanyProjectFadeIn />
      </section>

      {/* 4. Leadership & Expert Team */}
      <section className="team-section">
        <div className="section-header">
          <h2>{t('company.team.title')}</h2>
          <p>{t('company.team.subtitle')}</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: {t('company.team.member1.name')} 대표]</div>
            <div className="member-info">
              <h3>{t('company.team.member1.name')}</h3>
              <p className="role">{t('company.team.member1.role')}</p>
              <p className="desc">{t('company.team.member1.desc')}</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: {t('company.team.member2.name')} 팀장]</div>
            <div className="member-info">
              <h3>{t('company.team.member2.name')}</h3>
              <p className="role">{t('company.team.member2.role')}</p>
              <p className="desc">{t('company.team.member2.desc')}</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: {t('company.team.member3.name')} 파트너]</div>
            <div className="member-info">
              <h3>{t('company.team.member3.name')}</h3>
              <p className="role">{t('company.team.member3.role')}</p>
              <p className="desc">{t('company.team.member3.desc')}</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: {t('company.team.member4.name')} 팀장]</div>
            <div className="member-info">
              <h3>{t('company.team.member4.name')}</h3>
              <p className="role">{t('company.team.member4.role')}</p>
              <p className="desc">{t('company.team.member4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech R&D DNA */}
      <section className="rnd-section">
        <div className="section-header">
          <h2>{t('company.rnd.title')}</h2>
        </div>
        <div className="badges-container">
          <div className="hologram-badge-placeholder">
            [{t('company.rnd.badge1')}]
          </div>
          <div className="hologram-badge-placeholder">
            [{t('company.rnd.badge2')}]
          </div>
          <div className="hologram-badge-placeholder">
            [{t('company.rnd.badge3')}]
          </div>
        </div>
      </section>

      {/* 6. Location & Contact CTA */}
      <section style={{ padding: '0 0 128px', position: 'relative', zIndex: 10 }}>
        <CompanyDarkMap />
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', padding: '80px 24px 0' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('company.cta.title').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{interest: 'Other'}}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'linear-gradient(135deg, #0891B2, #0D9488)', color: '#fff',
                padding: '20px 40px', borderRadius: '50px',
                fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(8, 145, 178, 0.25)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(8, 145, 178, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(8, 145, 178,0.2)';
              }}
            >
              {t('company.cta.btn')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;