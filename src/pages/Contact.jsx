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
      setSubmitError(t('contact.page.form.errorSubmit'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const subtitleLines = t('contact.page.subtitle').split('\n');

  return (
    <div className="contact-page">
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', filter: 'blur(120px)' }} />
        <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '20%', right: '-10%', width: '45%', height: '60%', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', filter: 'blur(140px)' }} />
        <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '-20%', left: '20%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(59,130,246,0.08)', filter: 'blur(130px)' }} />
      </div>

      <main className="contact-main">
        <div className="network-bg-overlay" />

        <div className="contact-content">
          {/* Hero */}
          <div className="contact-hero">
            <span className="contact-badge">
              <span style={{ position: 'relative', display: 'inline-flex', marginRight: '8px', width: '10px', height: '10px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#06B6D4', opacity: 0.75 }} />
                <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px', borderRadius: '50%', background: '#0891B2' }} />
              </span>
              {t('contact.page.badge')}
            </span>
            <h1 className="contact-title">
              <span className="text-gradient-primary">{t('contact.page.title')}</span>
            </h1>
            <p className="contact-subtitle">
              {subtitleLines[0]}<br />
              {subtitleLines[1]}
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
                        <label className="form-label">{t('contact.page.form.nameLabel')}</label>
                        <input
                          type="text"
                          name="name"
                          placeholder={t('contact.page.form.namePlaceholder')}
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">{t('contact.page.form.companyLabel')}</label>
                        <input
                          type="text"
                          name="company"
                          placeholder={t('contact.page.form.companyPlaceholder')}
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t('contact.page.form.emailLabel')}</label>
                      <input
                        type="email"
                        name="email"
                        placeholder={t('contact.page.form.emailPlaceholder')}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t('contact.page.form.inquiryLabel')}</label>
                      <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        <option value="">{t('contact.page.form.inquiryPlaceholder')}</option>
                        <option value="AI 인프라 구축">{t('contact.page.form.inquiryAI')}</option>
                        <option value="물류/유통 자동화">{t('contact.page.form.inquiryLogistics')}</option>
                        <option value="Sync Series 도입">{t('contact.page.form.inquirySync')}</option>
                        <option value="기타 문의">{t('contact.page.form.inquiryOther')}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t('contact.page.form.messageLabel')}</label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={t('contact.page.form.messagePlaceholder')}
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
                      {isSubmitting
                        ? t('contact.page.form.submitting')
                        : t('contact.page.form.submit')}
                    </button>
                  </form>
                ) : (
                  <div className="contact-success">
                    <div className="success-icon">✔️</div>
                    <h3>{t('contact.page.success.title')}</h3>
                    <p>{t('contact.page.success.desc')}</p>
                    <button
                      className="contact-reset-btn"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', company: '', email: '', inquiry: '', message: '' });
                      }}
                    >
                      {t('contact.page.success.reset')}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Info column */}
            <div className="contact-info-col">
              <div className="glass-panel contact-info-panel">
                <h3 className="contact-info-title">{t('contact.info.title')}</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon contact-info-icon--cyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">{t('contact.page.info.phoneLabel')}</p>
                      <p className="contact-info-value">{t('contact.page.info.phoneValue')}</p>
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
                      <p className="contact-info-value">poh@empasy.com</p>
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
                      <p className="contact-info-value">서울 금천구 가산디지털1로 205-27<br />2층 208호</p>
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
                <div className="contact-map-badge">가산디지털단지역 1/7호선 도보 5분 거리</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
