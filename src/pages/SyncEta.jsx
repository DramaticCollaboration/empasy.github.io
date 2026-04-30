import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SyncEta.css';

const SyncEta = () => {
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  return (
    <div className="synceta-container">
      {/* 1. Hero Section */}
      <section className="synceta-hero-section">
        <div className="hero-content">
          <h1>사람처럼 이해하고, 기계처럼 테스트하라</h1>
          <p>코드 작성도, 화면 녹화도 필요 없습니다. 당신의 엑셀 문서가 즉시 실행 가능한 테스트가 되는 Zero-Recording AI 테스트 플랫폼.</p>
          {/* Placeholder for Typing & Transformation Motion */}
          <div className="excel-to-code-placeholder">
            [Excel cell typing "결제 플로우 테스트" and shattering into Playwright code here]
          </div>
        </div>
      </section>

      {/* 2. Zero-Recording Execution */}
      <section className="zero-recording-section">
        <div className="section-header">
          <h2>Zero-Recording Execution (엑셀 직접 실행 기술)</h2>
        </div>
        {/* Placeholder for Before & After comparison */}
        <div className="before-after-placeholder">
          [Scroll interaction: Manual Coding (AS-IS) vs AI Direct Execution (TO-BE) pipeline motion here]
        </div>
      </section>

      {/* 3. Self-Healing & Visual QA */}
      <section className="self-healing-section">
        <div className="section-header">
          <h2>UI가 바뀌어도 멈추지 않는 지능형 테스트, 그리고 픽셀 단위의 완벽한 시각 검증.</h2>
        </div>
        <div className="healing-visual-container">
          {/* Placeholder for Interactive Self-Healing Simulator */}
          <div className="healing-simulator-placeholder">
            [Interactive Drag &amp; Drop button simulator with AI laser recovery here]
          </div>
          {/* Placeholder for Visual Regression Magnifier */}
          <div className="visual-qa-placeholder">
            [Hover magnifier to detect 1px UI layout bug here]
          </div>
        </div>
      </section>

      {/* 4. Real-time Dashboard & TestOps */}
      <section className="testops-dashboard-section">
        <div className="section-header">
          <h2>Real-time Dashboard &amp; TestOps (실시간 관측 및 결함 증빙)</h2>
        </div>
        {/* Placeholder for Live Dashboard Animation */}
        <div className="dashboard-animation-placeholder">
          [Live dashboard UI with data waves and hover video playback for error logs here]
        </div>
      </section>

      {/* 5. AI Feedback Loop */}
      <section className="ai-feedback-section">
        <div className="section-header">
          <h2>사용할수록 더 똑똑해지는 QA 파트너, Self-Evolving AI</h2>
        </div>
        {/* Placeholder for Infinite Loop Animation */}
        <div className="feedback-loop-placeholder">
          [Infinite loop pipeline with data particles and accuracy chart drawing here]
        </div>
      </section>

      {/* 6. CI/CD Pipeline Integration */}
      <section className="cicd-integration-section">
        <div className="section-header">
          <h2>CI/CD Pipeline Integration (DevOps 생태계)</h2>
        </div>
        {/* Placeholder for Dropdown Pipeline Routing */}
        <div className="pipeline-routing-placeholder">
          [Domino-like pipeline workflow from Commit to Slack notification on a conveyor belt here]
        </div>
      </section>

      {/* Download and Guide Section */}
      <section className="download-guide-section">
        <div className="section-header">
          <h2>지금 바로 시작해 보세요</h2>
        </div>
        <div className="download-guide-content">
          <div className="guide-link">
            <h3>사용자 가이드</h3>
            <p>SyncEta의 모든 기능을 자세히 알아보세요.</p>
            <a href="https://doc.empasy.com/synceta/intro.html" target="_blank" rel="noopener noreferrer" className="guide-btn">가이드 바로가기</a>
          </div>
          <div className="download-links">
            <h3>클라이언트 다운로드</h3>
            <div className="os-downloads">
              <a href="https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA+Setup+3.3.4.exe" className="download-btn windows">Windows</a>
              <a href="https://synceta-release.s3.ap-northeast-2.amazonaws.com/SyncETA-3.3.4-arm64.dmg" className="download-btn macos">macOS (Apple Silicon)</a>
              <button className="download-btn linux" disabled>Linux (준비중)</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="synceta-cta-section">
        <h2>QA 업무의 병목 현상, 지금 SyncEta의 AI와 함께 해결하십시오.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">SyncEta 도입 문의하기</Link>
      </section>
    </div>
  );
};

export default SyncEta;