import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Company.css';

const Company = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="company-container">
      {/* 1. Hero Section */}
      <section className="company-hero-section">
        <div className="hero-content">
          <h1>{t('company.hero.title')}</h1>
          <p>{t('company.hero.desc')}</p>
          <div className="typography-animation-placeholder">
            [3D Particles gathering to form "EMPASY" logo here]
          </div>
          <div className="scroll-guide">
            {t('company.hero.scroll')} <span className="pulse-arrow">↓</span>
          </div>
        </div>
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
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020. 10</h3>
              <p>{t('company.history.item1')}</p>
            </div>
            <div className="timeline-image-placeholder">[SyncCMS Screenshot Fade-in]</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023. 01</h3>
              <p>{t('company.history.item2')}</p>
            </div>
            <div className="timeline-image-placeholder">[SyncBoot Architecture Fade-in]</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024. 03</h3>
              <p>{t('company.history.item3')}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2025. 01</h3>
              <p>{t('company.history.item4')}</p>
            </div>
          </div>
          <div className="timeline-item highlight">
            <div className="timeline-dot pulse"></div>
            <div className="timeline-content">
              <h3>2026 (Vision)</h3>
              <p>{t('company.history.item5')}</p>
            </div>
          </div>
        </div>
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
      <section className="company-cta-section">
        <div className="location-container">
          <div className="map-placeholder">
            [Dark Mode Map Embed with Ping Marker here]
          </div>
        </div>
        <div className="cta-content">
          <h2>{t('company.cta.title')}</h2>
          <Link to={`/${currentLang}/contact`} className="magnetic-btn">{t('company.cta.btn')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Company;