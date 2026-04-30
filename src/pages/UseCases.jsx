import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UseCases.css';

const UseCases = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'ai-data', label: 'AI & Data' },
    { id: 'testops', label: 'AI TestOps' },
    { id: 'msa-infra', label: 'MSA & 인프라' },
    { id: 'cms', label: '글로벌 CMS' },
  ];

  const cases = [
    {
      id: 'lg',
      category: 'testops',
      title: 'LG전자 & LG화학',
      subtitle: '글로벌 EAP 2.0 포털 및 진단봇 구축',
      solution: 'SyncEta, AI 챗봇',
      hoverMotion: '[Visual Validation Scanning Animation]',
    },
    {
      id: 'samsung',
      category: 'cms',
      title: '삼성전자 DS',
      subtitle: '브랜드 데스크 글로벌 마이크로 사이트',
      solution: 'SyncCMS, MSA',
      hoverMotion: '[6.5만 유저 카운터 & 3D Safe Vault Motion]',
    },
    {
      id: 'hyosung',
      category: 'ai-data',
      title: '효성ITX',
      subtitle: '지능형 스마트 크롤링 및 RAG 시스템',
      solution: 'SyncCrawl, SyncInsight',
      hoverMotion: '[Data Ingestion Particle Animation]',
    },
    {
      id: 'lx',
      category: 'cms',
      title: 'LX하우시스',
      subtitle: '글로벌 다국어 브랜드 사이트 통합',
      solution: 'SyncCMS Multi-Site',
      hoverMotion: '[15개국 국기 스위칭 & 동기화 애니메이션]',
    },
    {
      id: 'visang',
      category: 'testops',
      title: '비상교육',
      subtitle: 'AI 디지털 교과서(AIDT) 품질 검증',
      solution: 'SyncEta',
      hoverMotion: '[N:M Interaction Network & 100% Stamp]',
    },
    {
      id: 'penta',
      category: 'msa-infra',
      title: '펜타시큐리티',
      subtitle: '차세대 API 보안(WAAP) 통합 플랫폼',
      solution: 'SyncAPIM, SyncBoot',
      hoverMotion: '[Zero-latency Shield Defense Dashboard]',
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="use-cases-container">
      {/* 1. Hero Section */}
      <section className="uc-hero-section">
        <div className="hero-content">
          <h1>Trusted by Global Innovators</h1>
          <p>복잡한 엔터프라이즈 환경에서 증명된 비즈니스 민첩성.<br/>엠파시의 기술력이 글로벌 리더들의 디지털 혁신을 완성합니다.</p>
          <div className="globe-animation-placeholder">
            [Interactive 3D Globe with Client Logos here]
          </div>
        </div>
      </section>

      {/* 2. & 3. Dynamic Filter & Masonry Grid */}
      <section className="portfolio-section">
        <div className="section-header">
          <h2>도전 과제별 맞춤형 혁신 사례를 확인해 보세요.</h2>
        </div>
        
        <div className="filter-nav">
          {filters.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cases-grid">
          {filteredCases.map(c => (
            <div key={c.id} className={`case-card ${c.category}`}>
              <div className="card-inner">
                <div className="card-front">
                  <span className="case-category">{filters.find(f => f.id === c.category).label}</span>
                  <h3>{c.title}</h3>
                  <p>{c.subtitle}</p>
                  <div className="solution-tags">
                    <span>{c.solution}</span>
                  </div>
                </div>
                <div className="card-hover-motion">
                  {c.hoverMotion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Impact Metrics */}
      <section className="impact-metrics-section">
        <div className="section-header">
          <h2>수치로 증명하는 엠파시의 성과</h2>
        </div>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [80% Radial Chart]
            </div>
            <h3>수작업 대비 TC 작성 80% 단축</h3>
            <p>TestOps 생산성</p>
          </div>
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [Cost Down Chart]
            </div>
            <h3>글로벌 사이트 리소스 대폭 절감</h3>
            <p>CMS 효율성</p>
          </div>
          <div className="metric-card">
            <div className="radial-chart-placeholder">
              [0ms Chart]
            </div>
            <h3>응답 지연 최소화 (Zero Latency)</h3>
            <p>MSA 안정성</p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="uc-cta-section">
        <h2>최고의 기업들이 엠파시를 선택한 이유,<br/>이제 귀하의 비즈니스에서 직접 증명해 보이겠습니다.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">
          우리 기업에 맞는 솔루션 상담하기 <span className="arrow">→</span>
        </Link>
      </section>
    </div>
  );
};

export default UseCases;