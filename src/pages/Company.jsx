import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Company.css';

const Company = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="company-container">
      {/* 1. Hero Section */}
      <section className="company-hero-section">
        <div className="hero-content">
          <h1>살아있는 소프트웨어를 만듭니다.</h1>
          <p>Empathic Synergy. 깊은 공감과 협업의 힘으로, 비즈니스 민첩성(Agility)을 극대화하는 디지털 혁신을 이끕니다.</p>
          <div className="typography-animation-placeholder">
            [3D Particles gathering to form "EMPASY" logo here]
          </div>
          <div className="scroll-guide">
            Discover Our DNA <span className="pulse-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>Core Values</h2>
          <p>엠파시의 3대 핵심 가치</p>
        </div>
        <div className="flip-cards-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">⚙️</span>
                <h3>Agile & Tech-Driven</h3>
              </div>
              <div className="flip-card-back">
                <p>빠른 피드백과 실험을 두려워하지 않는 애자일 개발. 선도적 AI 기술과 시스템 안정성의 완벽한 균형을 추구합니다.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">🤝</span>
                <h3>Respect & Trust</h3>
              </div>
              <div className="flip-card-back">
                <p>모든 동료, 고객, 파트너를 공정하게 존중합니다. 정직하고 투명한 커뮤니케이션이 엠파시의 신뢰를 만듭니다.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="icon">⚖️</span>
                <h3>Work-Life Balance</h3>
              </div>
              <div className="flip-card-back">
                <p>주말 및 업무 외 시간의 완벽한 보장. 건강한 생활 균형에서 폭발적인 비즈니스 혁신이 탄생합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History & Milestone */}
      <section className="history-section">
        <div className="section-header">
          <h2>History & Milestone</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020. 10</h3>
              <p>SyncCMS 솔루션 출시 (콘텐츠 혁신 시작)</p>
            </div>
            <div className="timeline-image-placeholder">[SyncCMS Screenshot Fade-in]</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023. 01</h3>
              <p>SyncBoot 플랫폼 출시 (MSA 생태계 구축)</p>
            </div>
            <div className="timeline-image-placeholder">[SyncBoot Architecture Fade-in]</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024. 03</h3>
              <p>홈플러스 MIS 시스템 재구축 / 엠파시 법인 설립</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2025. 01</h3>
              <p>LG전자 글로벌 AI 진단 포털 구축</p>
            </div>
          </div>
          <div className="timeline-item highlight">
            <div className="timeline-dot pulse"></div>
            <div className="timeline-content">
              <h3>2026 (Vision)</h3>
              <p>SyncEta 북미 AWS Marketplace 진출 및 AI First QA 플랫폼 상용화</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Expert Team */}
      <section className="team-section">
        <div className="section-header">
          <h2>Leadership & Expert Team</h2>
          <p>글로벌 엔터프라이즈의 기준을 넘어서는 최정예 Tech 그룹</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: 오병문 대표]</div>
            <div className="member-info">
              <h3>오병문</h3>
              <p className="role">CEO / PM</p>
              <p className="desc">25년 특급 기술자. LG/삼성 대형 시스템 구축 총괄 및 빅데이터/AI/MSA/Cloud 아키텍처 전문가.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: 김재은 팀장]</div>
            <div className="member-info">
              <h3>김재은</h3>
              <p className="role">CTO / PL</p>
              <p className="desc">25년 특급 기술자. 데이터베이스 및 백/프론트엔드 통합 설계, 글로벌 이커머스 기술 리드.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: 안수호 파트너]</div>
            <div className="member-info">
              <h3>안수호</h3>
              <p className="role">Global Tech Advisor</p>
              <p className="desc">AWS 미주 AI Product 개발 및 글로벌 커머스 시스템 총괄. 북미 시장 진출 리드.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo-placeholder">[Photo: 이옥수 팀장]</div>
            <div className="member-info">
              <h3>이옥수</h3>
              <p className="role">QA / Data PL</p>
              <p className="desc">10년 특급 기술자. AI 데이터 수집 및 플랫폼 구축 운영 총괄.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech R&D DNA */}
      <section className="rnd-section">
        <div className="section-header">
          <h2>Tech R&D DNA</h2>
        </div>
        <div className="badges-container">
          <div className="hologram-badge-placeholder">
            [기업부설연구소]
          </div>
          <div className="hologram-badge-placeholder">
            [벤처기업인증 (혁신성장유형)]
          </div>
          <div className="hologram-badge-placeholder">
            [LLM MCP 원천 기술 특허 출원]
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
          <h2>엠파시와 함께 혁신을 시작하시겠습니까?</h2>
          <Link to={`/${currentLang}/contact`} className="magnetic-btn">프로젝트 문의하기</Link>
        </div>
      </section>
    </div>
  );
};

export default Company;