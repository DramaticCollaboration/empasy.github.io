import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
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
      <SEO pageKey="company" />
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
      <section className="location-section">
        <div className="section-header">
          <h2>{t('company.location.title', 'Our Location')}</h2>
        </div>
        <CompanyDarkMap />
      </section>

      <section className="company-cta-section">
        <h2>{t('company.cta.title')}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'Other' }} className="contact-btn">{t('company.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default Company;