import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="typewriter">{t('hero.subtitle')}</p>
          <div className="scroll-indicator">
            <span className="arrow">↓</span>
            Scroll Down
          </div>
        </div>
      </section>

      {/* 2. AI-DLC & Hydra Platform */}
      <section className="pipeline-section">
        <div className="section-header">
          <h2>Inception에서 Operations까지,<br/>AI가 주도하는 자율 운영 인프라</h2>
        </div>
        <div className="pipeline-container">
          <div className="pipeline-step">
            <h3>1. Inception</h3>
            <p>Hydra를 통한 자연어 의도 분석 및 스티어링 파일 주입</p>
          </div>
          <div className="pipeline-step">
            <h3>2. Construction</h3>
            <p>SyncBoot를 활용한 인프라 자동 생성 및 문서화</p>
          </div>
          <div className="pipeline-step">
            <h3>3. Operations</h3>
            <p>SyncEta를 통한 테스트 및 자율 운영 최적화</p>
          </div>
        </div>
      </section>

      {/* 3. Our Solutions */}
      <section className="solutions-section">
        <h2>Our Solutions</h2>
        <div className="bento-grid">
          <div className="bento-card syncboot">
            <h3>SyncBoot</h3>
            <p>Java/Spring Boot 기반 MSA 쾌속 개발 플랫폼</p>
          </div>
          <div className="bento-card synceta">
            <h3>SyncEta</h3>
            <p>LLM 기반 자연어 테스트케이스 직접 제어 솔루션</p>
          </div>
          <div className="bento-card synccms">
            <h3>SyncCMS</h3>
            <p>Java 기반의 엔터프라이즈 맞춤형 CMS</p>
          </div>
          <div className="bento-card syncapim">
            <h3>SyncAPIM</h3>
            <p>유연하고 강력한 API 생태계 플랫폼</p>
          </div>
          <div className="bento-card syncshop">
            <h3>SyncShop</h3>
            <p>헤드리스(Headless) 커머스 아키텍처</p>
          </div>
          <div className="bento-card logihub">
            <h3>AI Logistics Hub</h3>
            <p>물류 자율운영 AI 에이전트 결합</p>
          </div>
        </div>
      </section>

      {/* 4. Proven Performance */}
      <section className="performance-section">
        <h2>Proven Performance</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="counter">100%</h3>
            <p>실시간 인터랙션 데이터 정합성</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">&lt; 0.8s</h3>
            <p>피크 타임 평균 동기화 지연</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">80%</h3>
            <p>수작업 대비 테스트 공수 절감률</p>
          </div>
          <div className="stat-card">
            <h3 className="counter">10,000+</h3>
            <p>초당 대용량 트래픽 처리 (TPS)</p>
          </div>
        </div>
      </section>

      {/* 5. Trusted by Enterprise */}
      <section className="trusted-section">
        <h2>Trusted by Enterprise</h2>
        <div className="marquee-container">
          <div className="marquee">
            <span>LG전자</span>
            <span>삼성전자 DS</span>
            <span>효성ITX</span>
            <span>비상교육</span>
            <span>SK매직</span>
            <span>홈플러스</span>
            <span>펜타시큐리티</span>
            <span>LX하우시스</span>
            {/* Duplicate for infinite effect */}
            <span>LG전자</span>
            <span>삼성전자 DS</span>
            <span>효성ITX</span>
            <span>비상교육</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;