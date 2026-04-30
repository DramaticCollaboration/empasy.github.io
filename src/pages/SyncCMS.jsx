import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SyncCMS.css';

const SyncCMS = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="synccms-container">
      {/* 1. Hero Section */}
      <section className="synccms-hero-section">
        <div className="hero-content">
          <h1>개발자 없이도, 상상하는 모든 웹을 조립하다.</h1>
          <p>독보적인 템플릿 엔진과 시각적 레이아웃 빌더로 비즈니스 환경 변화에 가장 민첩하게 대응하는 Java 기반 통합 CMS.</p>
          {/* Placeholder for 3D block assembly animation */}
          <div className="block-assembly-placeholder">
            [3D blocks (Header, Banner, News) will fall and assemble into a website here]
          </div>
        </div>
      </section>

      {/* 2. Visual Builder & Quick Maintenance */}
      <section className="visual-builder-section">
        <div className="section-header">
          <h2>직관적인 시각적 관리, 클릭 한 번으로 끝나는 빠른 유지보수.</h2>
        </div>
        {/* Placeholder for interactive Drag & Drop simulator */}
        <div className="drag-drop-simulator-placeholder">
          [Interactive Drag &amp; Drop UI builder simulation will be here]
        </div>
      </section>

      {/* 3. Multi-site & Multi-language */}
      <section className="multisite-section">
        <div className="section-header">
          <h2>단일 코어로 통제하는 글로벌 옴니채널.</h2>
        </div>
        {/* Placeholder for 3D global network parallax */}
        <div className="global-network-placeholder">
          [3D Globe with network lines to country sites will be here]
        </div>
      </section>

      {/* 4. Hybrid Architecture */}
      <section className="hybrid-architecture-section">
        <div className="section-header">
          <h2>동적/정적 하이브리드 아키텍처</h2>
        </div>
        {/* Placeholder for template puzzle assembly motion */}
        <div className="puzzle-assembly-placeholder">
          [Template puzzle pieces (Page, Fragment, Data) will assemble here]
        </div>
      </section>

      {/* 5. Editor History */}
      <section className="editor-history-section">
        <div className="section-header">
          <h2>모든 변경을 기록하는 완벽한 타임머신.</h2>
        </div>
        {/* Placeholder for interactive time machine slider */}
        <div className="time-machine-placeholder">
          [Interactive time machine slider to revert content will be here]
        </div>
      </section>
      
      {/* 6. SEO & Analytics */}
      <section className="seo-analytics-section">
        <div className="section-header">
          <h2>성과를 증명하는 데이터 (SEO &amp; 방문자 통계)</h2>
        </div>
        {/* Placeholder for real-time chart drawing */}
        <div className="chart-drawing-placeholder">
          [Real-time drawing of analytics charts will be here]
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="synccms-cta-section">
        <h2>낡은 시스템의 한계를 벗고, 변화하는 비즈니스에 올라타십시오.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">SyncCMS 도입 문의하기</Link>
      </section>
    </div>
  );
};

export default SyncCMS;