import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CubeAnimation from '../components/CubeAnimation';
import './SyncBoot.css';

const SyncBoot = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [activeTab, setActiveTab] = useState('circuit');
  const [isShattered, setIsShattered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShattered(true);
    }, 2000); // Shatter after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const tabContent = {
    circuit: '[Dashboard animation for Circuit Breaker will be here]',
    tracing: '[3D Node topology for SkyWalking will be here]',
    logs: '[Streaming terminal logs and Grafana charts will be here]',
    cicd: '[Progress bar for Jenkins/GitLab pipeline will be here]',
  };

  return (
    <div className="syncboot-container">
      {/* 1. Hero Section */}
      <section className="syncboot-hero-section">
        <div className="hero-content">
          <h1>비즈니스 민첩성을 위한 MSA 쾌속 개발 플랫폼, SyncBoot</h1>
          <p>컨테이너 관리부터 CI/CD, 모니터링, API 게이트웨이까지. E2E 클라우드 네이티브 생태계를 한 번에 구축하세요.</p>
          <div className="architecture-animation-placeholder">
            <CubeAnimation isShattered={isShattered} />
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>SyncBoot의 3대 핵심 경쟁력</h2>
        </div>
        <div className="stacking-cards-container">
          <div className="card">
            <h3>100% 오픈소스 기반</h3>
            <p>벤더 종속성(Lock-in) 없는 검증된 오픈소스 기술 스택</p>
            <div className="tech-logos">
              <span>Spring Boot</span> <span>Docker</span> <span>Kubernetes</span>
            </div>
          </div>
          <div className="card">
            <h3>End-to-End 통합 환경</h3>
            <p>설계, 개발, 배포, 운영의 파이프라인을 하나의 고리로 연결</p>
          </div>
          <div className="card">
            <h3>Low-Code 개발 생산성</h3>
            <p>블록을 조립하듯 UI 컴포넌트가 맞춰지며 백엔드 API 코드 자동 생성</p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Architecture Map */}
      <section className="architecture-map-section">
        <div className="section-header">
          <h2>검증된 오픈소스로 구성된 무결점 아키텍처</h2>
        </div>
        {/* Placeholder for interactive SVG map */}
        <div className="svg-map-placeholder">
          [Interactive SVG Architecture Map will be here]
        </div>
      </section>

      {/* 4. Observability & DevOps */}
      <section className="observability-section">
        <div className="section-header">
          <h2>통합 모니터링 및 배포 자동화</h2>
        </div>
        <div className="tabs-container">
          <div className="tab-nav">
            <button 
              className={`tab-btn ${activeTab === 'circuit' ? 'active' : ''}`}
              onClick={() => setActiveTab('circuit')}
            >
              서킷 브레이커
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tracing' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracing')}
            >
              콜체인 모니터링
            </button>
            <button 
              className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`}
              onClick={() => setActiveTab('logs')}
            >
              통합 로그
            </button>
            <button 
              className={`tab-btn ${activeTab === 'cicd' ? 'active' : ''}`}
              onClick={() => setActiveTab('cicd')}
            >
              CI/CD 툴체인
            </button>
          </div>
          <div className="tab-content">
            <div className="dashboard-placeholder">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>

      {/* 5. UI Framework & Admin */}
      <section className="ui-framework-section">
        <div className="section-header">
          <h2>표준화된 프레임워크로, 비즈니스 로직에만 집중하세요.</h2>
        </div>
        {/* Placeholder for Drag & Drop simulation */}
        <div className="drag-drop-placeholder">
          [Drag &amp; Drop UI builder simulation will be here]
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncboot-cta-section">
        <h2>모놀리식의 한계, 지금 SyncBoot로 넘어서십시오.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">SyncBoot 도입 문의하기</Link>
      </section>
    </div>
  );
};

export default SyncBoot;