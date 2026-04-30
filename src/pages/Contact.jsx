import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
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
        return t('contact.form.question1');
      case 'SyncBoot':
        return t('contact.form.question2');
      case 'GovTech':
        return t('contact.form.question3');
      default:
        return t('contact.form.questionDefault');
    }
  };

  return (
    <div className="contact-container">
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="hero-content">
          <h1>{t('contact.hero.title')}</h1>
          <p className="typewriter-text">{t('contact.hero.desc')}</p>
        </div>
      </section>

      <div className="contact-main-layout">
        {/* Left Column: Form */}
        <div className="form-column">
          {/* 3. Smart Inquiry Form */}
          <section className="inquiry-form-section">
            <div className="section-header">
              <h2>{t('contact.form.title')}</h2>
              <p>{t('contact.form.subtitle')}</p>
            </div>
            
            <div className="form-progress">
              <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="smart-form">
                {step === 1 && (
                  <div className="form-step step-1 active">
                    <h3>{t('contact.form.step1Title')}</h3>
                    <div className="interest-buttons">
                      <button type="button" onClick={() => handleInterestSelect('SyncEta')}>{t('contact.form.interest1')}</button>
                      <button type="button" onClick={() => handleInterestSelect('SyncBoot')}>{t('contact.form.interest2')}</button>
                      <button type="button" onClick={() => handleInterestSelect('GovTech')}>{t('contact.form.interest3')}</button>
                      <button type="button" onClick={() => handleInterestSelect('Other')}>{t('contact.form.interest4')}</button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step step-2 active">
                    <h3>{getDynamicQuestion()}</h3>
                    <textarea 
                      name="detailQuestion" 
                      rows="4" 
                      placeholder={t('contact.form.placeholderDetail')}
                      value={formData.detailQuestion}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="step-actions">
                      <button type="button" className="btn-prev" onClick={() => setStep(1)}>{t('contact.form.btnPrev')}</button>
                      <button type="button" className="btn-next" onClick={() => setStep(3)}>{t('contact.form.btnNext')}</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step step-3 active">
                    <h3>{t('contact.form.placeholderName')}</h3>
                    <input type="text" name="company" placeholder={t('contact.form.placeholderCompany')} onChange={handleInputChange} required />
                    <input type="text" name="name" placeholder={t('contact.form.placeholderName')} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder={t('contact.form.placeholderEmail')} onChange={handleInputChange} required />
                    <div className="step-actions">
                      <button type="button" className="btn-prev" onClick={() => setStep(2)}>{t('contact.form.btnPrev')}</button>
                      {/* 6. Final CTA */}
                      <button type="submit" className="submit-btn">
                        {t('contact.form.btnSubmit')} <span className="paper-plane">✈️</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="success-state">
                <div className="check-mark">✔️</div>
                <h3>{t('contact.form.successTitle')}</h3>
                <p>{t('contact.form.successDesc')}</p>
                <button className="btn-reset" onClick={() => { setIsSubmitted(false); setStep(1); }}>{t('contact.form.btnReset')}</button>
              </div>
            )}
          </section>

          {/* 5. How we work */}
          <section className="process-section">
            <div className="section-header">
              <h2>{t('contact.process.title')}</h2>
            </div>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-icon">📝</div>
                <p>{t('contact.process.step1')}</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🔍</div>
                <p>{t('contact.process.step2')}</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🤝</div>
                <p>{t('contact.process.step3')}</p>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <div className="step-icon">🚀</div>
                <p>{t('contact.process.step4')}</p>
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
              <h3>{t('contact.info.title')}</h3>
              <ul>
                <li><strong>{t('contact.info.manager').split(':')[0]}:</strong> {t('contact.info.manager').split(':')[1]}</li>
                <li><strong>{t('contact.info.email').split(':')[0]}:</strong> {t('contact.info.email').split(':')[1]}</li>
                <li><strong>{t('contact.info.phone').split(':')[0]}:</strong> {t('contact.info.phone').split(':')[1]}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;