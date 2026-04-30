import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CommerceLogi.css';

const CommerceLogi = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  const [isOptimized, setIsOptimized] = useState(false);

  return (
    <div className="commerce-logi-container">
      {/* 1. Hero Section */}
      <section className="comlogi-hero-section">
        <div className="hero-content">
          <h1>커머스의 한계를 넘고, 물류의 흐름을 지배하다</h1>
          <p>프론트/백엔드가 분리된 유연한 SyncShop과 완벽한 동선·재고 최적화를 이끄는 AI Logistics Hub의 결합.</p>
          {/* Placeholder for 3D Logistics Network Parallax */}
          <div className="logistics-parallax-placeholder">
            [3D City Map with data particles moving from phone to delivery truck here]
          </div>
        </div>
      </section>

      {/* 2. SyncShop: Headless eCommerce */}
      <section className="syncshop-section">
        <div className="section-header">
          <h2>초유연 커머스 아키텍처 (SyncShop: Headless eCommerce)</h2>
        </div>
        <div className="headless-simulator-container">
          {/* Placeholder for Interactive Headless Simulator */}
          <div className="headless-simulator-placeholder">
            [Drag & Drop channels (Web, App, Kiosk) to SyncShop Core API cube here]
          </div>
          <div className="module-cards">
            <div className="module-card pms">
              <h3>PMS (상품)</h3>
              <div className="hover-detail">[SKU 재고 연동 애니메이션]</div>
            </div>
            <div className="module-card oms">
              <h3>OMS (주문/물류)</h3>
              <div className="hover-detail">[주문 처리 흐름 렌더링]</div>
            </div>
            <div className="module-card sms">
              <h3>SMS (마케팅)</h3>
              <div className="hover-detail">[지능형 쿠폰 발급 로직]</div>
            </div>
            <div className="module-card ums">
              <h3>UMS (회원)</h3>
              <div className="hover-detail">[회원 등급 및 혜택 동기화]</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI Logistics Hub */}
      <section className="ai-logistics-section">
        <div className="section-header">
          <h2>데이터가 예측하고, AI가 최적의 경로를 그립니다.</h2>
        </div>
        <div className="routing-optimization-container">
          <div className={`route-map ${isOptimized ? 'optimized' : 'messy'}`}>
            {/* Visual representation of route optimization */}
            <div className="map-visual">
              {isOptimized ? '[최적화된 직선 경로 맵]' : '[복잡하게 꼬인 경로 맵]'}
            </div>
            {isOptimized && (
              <div className="optimization-alerts">
                <span className="alert-pop">배송 시간 약 22분 단축</span>
                <span className="alert-pop">이동 거리 18% 감소</span>
              </div>
            )}
          </div>
          <button 
            className="optimize-toggle-btn"
            onClick={() => setIsOptimized(!isOptimized)}
          >
            {isOptimized ? '초기화 (AS-IS)' : 'AI 최적화 실행 (TO-BE)'}
          </button>
        </div>
      </section>

      {/* 4. Document AI & Enterprise RAG */}
      <section className="document-ai-section">
        <div className="section-header">
          <h2>지식 자산화 및 문서 자동화 (Document AI & Enterprise RAG)</h2>
        </div>
        <div className="doc-ai-container">
          {/* Placeholder for Document AI Scanning Motion */}
          <div className="scanning-motion-placeholder">
            [Receipts & PDFs converting into clean JSON format here]
            <div className="ocr-quality">OCR 품질 97.4% 확보</div>
          </div>
          {/* Placeholder for Chat RAG Simulation */}
          <div className="rag-chat-placeholder">
            <div className="chat-bubble user">"최근 수도권 배송 지연 원인을 분석해 줘"</div>
            <div className="chat-bubble ai">
              "WMS 로그 및 VOC 분석 결과, 수도권 A허브의 물량 집중이 원인입니다.<br/>
              <b>해결책:</b> 수도권 A허브 재고를 12% 선배치할 것을 권장합니다."
            </div>
          </div>
        </div>
      </section>

      {/* 5. MLOps KPI Dashboard */}
      <section className="kpi-dashboard-section">
        <div className="section-header">
          <h2>MLOps 및 도입 기대 효과</h2>
        </div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>물류 운영 비용 절감</h3>
            <div className="kpi-value">18% ↓</div>
            <p>물류 최적화 알고리즘</p>
          </div>
          <div className="kpi-card">
            <h3>문서 처리 시간 단축</h3>
            <div className="kpi-value">6 시간 ↓</div>
            <p>수작업 대비 (일 기준)</p>
          </div>
          <div className="kpi-card">
            <h3>모델 서빙 응답 속도</h3>
            <div className="kpi-value">12 ms</div>
            <p>MLOps 모니터링</p>
          </div>
          <div className="kpi-card">
            <h3>계약서 구조화 비용 절감</h3>
            <div className="kpi-value">41% ↓</div>
            <p>Document AI 도입</p>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="comlogi-cta-section">
        <h2>주문에서 배송까지, 당신의 비즈니스를 완벽하게 동기화(Sync) 하세요.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">
          <span className="btn-text">Commerce & Logi 도입 문의하기</span>
          <span className="truck-icon">🚚</span>
        </Link>
      </section>
    </div>
  );
};

export default CommerceLogi;