import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SyncSeries.css';
import SyncCoreAnimation from './component/SyncSeries/SyncCoreAnimation';
import ConveyorAnimation from './component/SyncSeries/ConveyorAnimation';
import SyncBootAnimation from './component/SyncSeries/SyncBootAnimation';
import SyncEtaAnimation from './component/SyncSeries/SyncEtaAnimation';
import SyncCmsAnimation from './component/SyncSeries/SyncCmsAnimation';
import SyncApimAnimation from './component/SyncSeries/SyncApimAnimation';

const SyncSeries = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [activeSolution, setActiveSolution] = useState('syncboot');

  const solutionDetails = {
    syncboot: {
      title: 'SyncBoot (MSA 플랫폼)',
      desc: '거대한 모놀리식 바위가 수십 개의 가볍고 빠른 미니 큐브로 쪼개져 날아다니는 파티클 모션.',
      animation: <SyncBootAnimation />
    },
    synceta: {
      title: 'SyncEta (AI 품질 검증)',
      desc: '엑셀 아이콘이 AI 두뇌를 통과하자 수십 대의 화면에서 자동으로 테스트가 병렬 실행되는 모션.',
      animation: <SyncEtaAnimation />
    },
    synccms: {
      title: 'SyncCMS (엔터프라이즈 CMS)',
      desc: '페이지 조각들이 자석처럼 끌려와 하나의 완벽한 글로벌 웹사이트로 조립되는 모션.',
      animation: <SyncCmsAnimation />
    },
    syncapim: {
      title: 'SyncAPIM (지능형 API 통합 관리)',
      desc: '폭주하는 트래픽 선들이 게이트웨이 방패에 부딪혀 안전하게 분산 라우팅되는 쉴드 이펙트.',
      animation: <SyncApimAnimation />
    }
  };

  return (
    <div className="syncseries-container">
      {/* 1. Hero Section */}
      <section className="syncseries-hero-section">
        <div className="hero-content">
          <h1>Boon to business by agility, 비즈니스 민첩성을 위한 완벽한 동기화</h1>
          <p>개발부터 운영, 검증, 콘텐츠 관리까지. 단절된 IT 인프라를 연결하여 가장 유연하고 강력한 디지털 혁신 생태계를 완성합니다.</p>
          <div className="core-animation-placeholder">
            <SyncCoreAnimation />
          </div>
        </div>
      </section>

      {/* 2. SyncVerse: Integration Pipeline */}
      <section className="syncverse-section">
        <div className="section-header">
          <h2>단절된 도구가 아닌, 하나로 연결된 지능형 파이프라인 (SyncVerse)</h2>
        </div>
        <ConveyorAnimation />
      </section>

      {/* 3. Interactive Product Showcase */}
      <section className="showcase-section">
        <div className="section-header">
          <h2>Interactive Product Showcase</h2>
        </div>
        <div className="rotary-wheel-container">
          <div className="wheel-nav">
            {Object.keys(solutionDetails).map((key) => (
              <button 
                key={key}
                className={`wheel-btn ${activeSolution === key ? 'active' : ''}`}
                onClick={() => setActiveSolution(key)}
              >
                {solutionDetails[key].title.split(' ')[0]}
              </button>
            ))}
          </div>
          <div className="wheel-content">
            <h3>{solutionDetails[activeSolution].title}</h3>
            <p className="wheel-desc">{solutionDetails[activeSolution].desc}</p>
            <div className="wheel-animation-placeholder">
              {solutionDetails[activeSolution].animation}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proven Synergy (ROI) */}
      <section className="synergy-roi-section">
        <div className="section-header">
          <h2>Proven Synergy (도입 기대 효과)</h2>
        </div>
        <div className="roi-grid">
          <div className="roi-card">
            <h3>TTM 단축</h3>
            <div className="roi-value">최대 60% ↓</div>
            <p>개발 및 배포 시간 단축</p>
          </div>
          <div className="roi-card">
            <h3>수동 테스트 공수</h3>
            <div className="roi-value">80% ↓</div>
            <p>테스트 및 유지보수 비용 절감</p>
          </div>
          <div className="roi-card">
            <h3>트래픽 처리 역량</h3>
            <div className="roi-value">10,000+ TPS</div>
            <p>무지연 대규모 트래픽 처리</p>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="syncseries-cta-section">
        <h2>단일 솔루션의 한계를 넘어, 완벽한 디지털 혁신 생태계로 진입하십시오.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">Sync Series 통합 컨설팅 신청</Link>
      </section>
    </div>
  );
};

export default SyncSeries;