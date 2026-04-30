import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SyncAPIM.css';

const SyncAPIM = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="syncapim-container">
      {/* 1. Hero Section */}
      <section className="syncapim-hero-section">
        <div className="hero-content">
          <h1>API Platform with Customization in its DNA</h1>
          <p>표준화된 시스템의 한계를 넘어, 기업의 비즈니스 환경에 완벽히 동기화되는 지능형 API 통합 관리 플랫폼입니다.</p>
          <div className="rolling-keywords">
            <span className="keyword">[ API Gateway ]</span>
            <span className="keyword">[ Developer Portal ]</span>
            <span className="keyword">[ Analytics ]</span>
            <span className="keyword">[ Security ]</span>
          </div>
          {/* Placeholder for 3D API Gateway particle motion */}
          <div className="gateway-particle-placeholder">
            [3D Core Gateway processing incoming data particles and routing to MSA nodes here]
          </div>
        </div>
      </section>

      {/* 2. Full Lifecycle Management */}
      <section className="lifecycle-section">
        <div className="section-header">
          <h2>설계부터 수익화까지, 하나의 플랫폼에서 완성하는 API 생태계</h2>
        </div>
        {/* Placeholder for Scroll-Telling Architecture Map */}
        <div className="architecture-map-placeholder">
          [Scroll-telling: Developer Services -&gt; API Services -&gt; Analytics Services lighting up here]
        </div>
      </section>

      {/* 3. Core Features (Interactive Bento-box) */}
      <section className="core-features-section">
        <div className="section-header">
          <h2>SyncAPIM 5대 핵심 기능</h2>
        </div>
        <div className="bento-grid">
          <div className="bento-card policy">
            <h3>① 정책 관리 (Policy)</h3>
            <p>호출 제한(Rate Limiting), IP 차단 등 트래픽 제어</p>
            <div className="hover-animation-placeholder">[Rate Limiting Blocking Animation]</div>
          </div>
          <div className="bento-card management">
            <h3>② API 관리 (Management)</h3>
            <p>엔드포인트 그룹핑 및 드래그 앤 드롭 정렬</p>
            <div className="hover-animation-placeholder">[Drag &amp; Drop Grouping Animation]</div>
          </div>
          <div className="bento-card testing">
            <h3>③ API 테스트 (Testing)</h3>
            <p>내장 클라이언트를 통한 실시간 API 호출 및 응답 확인</p>
            <div className="hover-animation-placeholder">[Send Request &amp; 200 OK Typing Animation]</div>
          </div>
          <div className="bento-card monitoring">
            <h3>④ 모니터링 (Monitoring)</h3>
            <p>API 성능 및 상태를 추적하는 준실시간 대시보드</p>
            <div className="hover-animation-placeholder">[Real-time Line Chart Animation]</div>
          </div>
          <div className="bento-card alert">
            <h3>⑤ 시스템 알림 (Alert)</h3>
            <p>위험 이벤트 발생 시 관리자 푸시 알림 전송</p>
            <div className="hover-animation-placeholder">[Warning Light &amp; Push Notification Animation]</div>
          </div>
        </div>
      </section>

      {/* 4. Enterprise Security & Customization */}
      <section className="security-section">
        <div className="section-header">
          <h2>10,000 TPS의 극한 환경에서도 흔들림 없는 맞춤형 보안 아키텍처</h2>
        </div>
        {/* Placeholder for Traffic Shield Simulator */}
        <div className="shield-simulator-placeholder">
          [Multi-layer Security Filters reflecting hacker traffic with Zero-Latency particles here]
          <br/><br/>
          <span className="tooltip-trigger">Hover: WAPPLES API Security Reference</span>
        </div>
      </section>

      {/* 5. Observability & Packetbeat Analytics */}
      <section className="observability-section">
        <div className="section-header">
          <h2>준실시간 분석 및 인사이트</h2>
        </div>
        <div className="analytics-visual-container">
          {/* Placeholder for Packetbeat Data Streaming Motion */}
          <div className="data-streaming-placeholder">
            [Packetbeat agents sending data via fiber-optic lines here]
          </div>
          {/* Placeholder for Real-time Custom Dashboard Rendering */}
          <div className="custom-dashboard-placeholder">
            [Real-time rendering of pie charts, bar graphs, and latency trackers here]
            <p className="fade-in-text">"관리자와 개발자에게 API 사용에 대한 완벽한 인사이트 제공"</p>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncapim-cta-section">
        <h2>불필요한 기능은 덜어내고, 필요한 기능만 도입하십시오.<br/>지금 맞춤형 API 생태계를 설계해 드립니다.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">SI 맞춤형 API 도입 문의하기</Link>
      </section>
    </div>
  );
};

export default SyncAPIM;