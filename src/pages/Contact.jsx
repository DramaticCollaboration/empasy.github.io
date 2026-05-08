import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (location.state?.interest) {
      setFormData(prev => ({ ...prev, inquiry: location.state.interest }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: `[Empasy Contact] ${formData.inquiry}`,
      content: `Company: ${formData.company}\n\nInquiry: ${formData.inquiry}\n\nMessage:\n${formData.message}`,
    };

    try {
      const response = await fetch(
        'https://7f4wwc40if.execute-api.ap-northeast-2.amazonaws.com/dev/email-contact-us-template-dev-sendEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(t('contact.form.errorSubmit') || '메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Background blobs */}
      <div className="contact-bg-blobs">
        <div className="blob blob-cyan" />
        <div className="blob blob-emerald" />
      </div>

      <main className="contact-main">
        {/* Network pattern overlay */}
        <div className="network-bg-overlay" />

        <div className="contact-content">
          {/* Hero */}
          <div className="contact-hero">
            <span className="contact-badge">Get in touch</span>
            <h1 className="contact-title">
              <span className="text-gradient-primary">Contact Us</span>
            </h1>
            <p className="contact-subtitle">
              Empasy의 솔루션에 대해 궁금한 점이 있으신가요?<br />
              전문가 팀이 귀사의 디지털 혁신을 위해 대기하고 있습니다.
            </p>
          </div>

          {/* Grid */}
          <div className="contact-grid">
            {/* Form column */}
            <div className="contact-form-col">
              <div className="glass-panel contact-form-panel">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">성함</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="홍길동"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">회사명</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Empasy"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">이메일</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">문의 분야</label>
                      <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        <option value="">문의 유형을 선택해주세요</option>
                        <option value="AI 인프라 구축">AI 인프라 구축</option>
                        <option value="물류/유통 자동화">물류/유통 자동화</option>
                        <option value="Sync Series 도입">Sync Series 도입</option>
                        <option value="기타 문의">기타 문의</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">문의 내용</label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="프로젝트에 대한 간략한 설명이나 궁금한 점을 적어주세요."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-input form-textarea"
                      />
                    </div>

                    {submitError && (
                      <p className="form-error">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '전송 중...' : '메시지 보내기'}
                    </button>
                  </form>
                ) : (
                  <div className="contact-success">
                    <div className="success-icon">✔️</div>
                    <h3>메시지가 전송되었습니다!</h3>
                    <p>빠른 시일 내에 답변 드리겠습니다.</p>
                    <button
                      className="contact-reset-btn"
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', company: '', email: '', inquiry: '', message: '' }); }}
                    >
                      새 문의하기
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Info column */}
            <div className="contact-info-col">
              {/* Contact info panel */}
              <div className="glass-panel contact-info-panel">
                <h3 className="contact-info-title">Contact Info</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon contact-info-icon--cyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Phone</p>
                      <p className="contact-info-value">02-1234-5678</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon contact-info-icon--emerald">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Email</p>
                      <p className="contact-info-value">contact@empasy.ai</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon contact-info-icon--blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Office</p>
                      <p className="contact-info-value">서울특별시 강남구 테헤란로 123<br />Empasy 빌딩 12층</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glass-panel contact-map-panel">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.123456789!2d127.027!3d37.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14123456789%3A0x1234567890abcdef!2z6rCV64Ko7Jet!5e0!3m2!1sko!2skr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Empasy Office Location"
                />
                <div className="contact-map-badge">강남역 2호선 도보 5분 거리</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
