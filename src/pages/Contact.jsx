import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interest: '',
    detailQuestion: '',
    company: '',
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInterestSelect = (interest) => {
    setFormData({ ...formData, interest });
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getDynamicQuestion = () => {
    switch (formData.interest) {
      case 'SyncEta':
        return "현재 수작업 QA 인력 규모는 어떻게 되십니까?";
      case 'SyncBoot':
        return "현재 운영 중인 레거시 시스템 환경을 알려주세요.";
      case 'GovTech':
        return "소속된 지자체 및 공공기관명을 입력해 주세요.";
      default:
        return "도입하시려는 프로젝트의 대략적인 개요를 알려주세요.";
    }
  };

  return (
    <div className="contact-container">
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="hero-content">
          <h1>혁신의 시작, 엠파시와 동기화(Sync)할 준비가 되셨습니까?</h1>
          <p className="typewriter-text">비즈니스 민첩성(Agility)을 향한 여정, 엠파시의 최고 전문가들이 가장 빠르고 정확한 해답을 제시합니다.</p>
        </div>
      </section>

      <div className="contact-main-layout">
        {/* Left Column: Form */}
        <div className="form-column">
          {/* 3. Smart Inquiry Form */}
          <section className="inquiry-form-section">
            <div className="section-header">
              <h2>Smart Inquiry Form</h2>
              <p>귀하의 비즈니스 고민을 선택해 주세요. 최적의 솔루션을 매핑해 드립니다.</p>
            </div>
            
            <div className="form-progress">
              <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="smart-form">
                {step === 1 && (
                  <div className="form-step step-1 active">
                    <h3>관심 분야를 선택해 주세요.</h3>
                    <div className="interest-buttons">
                      <button type="button" onClick={() => handleInterestSelect('SyncEta')}>AI 테스트 자동화 (SyncEta)</button>
                      <button type="button" onClick={() => handleInterestSelect('SyncBoot')}>MSA & 클라우드 인프라 (SyncBoot)</button>
                      <button type="button" onClick={() => handleInterestSelect('GovTech')}>공공정보 AI 영상화 (GovTech)</button>
                      <button type="button" onClick={() => handleInterestSelect('Other')}>기타 솔루션 및 통합 컨설팅</button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step step-2 active">
                    <h3>{getDynamicQuestion()}</h3>
                    <textarea 
                      name="detailQuestion" 
                      rows="4" 
                      placeholder="상세 내용을 입력해 주세요..."
                      value={formData.detailQuestion}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="step-actions">
                      <button type="button" className="btn-prev" onClick={() => setStep(1)}>이전</button>
                      <button type="button" className="btn-next" onClick={() => setStep(3)}>다음</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step step-3 active">
                    <h3>기본 정보를 입력해 주세요.</h3>
                    <input type="text" name="company" placeholder="회사명" onChange={handleInputChange} required />
                    <input type="text" name="name" placeholder="담당자 성함" onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="이메일 주소" onChange={handleInputChange} required />
                    <div className="step-actions">
                      <button type="button" className="btn-prev" onClick={() => setStep(2)}>이전</button>
                      {/* 6. Final CTA */}
                      <button type="submit" className="submit-btn">
                        프로젝트 문의 제출하기 <span className="paper-plane">✈️</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="success-state">
                <div className="check-mark">✔️</div>
                <h3>성공적으로 접수되었습니다.</h3>
                <p>24시간 이내에 전문가가 연락드리겠습니다.</p>
                <button className="btn-reset" onClick={() => { setIsSubmitted(false); setStep(1); }}>새로운 문의 남기기</button>
              </div>
            )}
          </section>

          {/* 5. How we work */}
          <section className="process-section">
            <div className="section-header">
              <h2>엠파시 업무 프로세스 안내</h2>
            </div>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-icon">📝</div>
                <p>문의 접수</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🔍</div>
                <p>전문가 사전 분석</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🤝</div>
                <p>맞춤형 컨설팅 및 PoC</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🚀</div>
                <p>솔루션 도입 및 구축</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Info & Map */}
        <div className="info-column">
          {/* 2. Global Network & Contact Info */}
          <section className="global-network-section">
            <div className="globe-placeholder">
              [Interactive 3D Globe Map with Seoul, California, Tokyo nodes here]
            </div>
            <div className="contact-info-card">
              <h3>Contact Info</h3>
              <ul>
                <li><strong>총괄 담당자:</strong> 오병문 대표 (이사)</li>
                <li><strong>이메일:</strong> poh@empasy.com</li>
                <li><strong>연락처:</strong> 010-3420-8169</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;