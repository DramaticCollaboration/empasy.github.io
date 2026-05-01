import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import './Hydra.css';

const Hydra = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';
  // 스크롤에 따른 Active 클래스 변경 로직 (간단한 예시)
  useEffect(() => {
    const handleScroll = () => {
      const steps = document.querySelectorAll('.step-card');
      const scrollPosition = window.scrollY;
      
      // 임의의 스크롤 위치에 따라 active 클래스 토글
      // 실제 구현에서는 IntersectionObserver를 사용하는 것이 좋습니다.
      steps.forEach((step, index) => {
        if (scrollPosition > 500 + (index * 300)) {
          steps.forEach(s => s.classList.remove('active'));
          step.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hydra-container">
      <SEO pageKey="hydra" />
      {/* 1. Hero Section */}
      <section className="hydra-hero-section">
        <div className="hero-content">
          <h1>{t('hydra.hero.title')}</h1>
          <p>{t('hydra.hero.desc')}</p>
          <div className="interactive-prompt">
            <div className="prompt-text">
              &gt; {t('hydra.hero.prompt')}
            </div>
            {/* Placeholder for 3D infrastructure animation */}
            <div className="infra-animation-placeholder">
              <div className="eks-control-plane">
                <div className="eks-icon"></div>
                <span>EKS Control Plane</span>
              </div>
              <div className="gpu-nodes">
                <div className="gpu-node">
                  <div className="gpu-icon"></div>
                  <span>g4dn.xlarge</span>
                </div>
                <div className="gpu-node">
                  <div className="gpu-icon"></div>
                  <span>g4dn.xlarge</span>
                </div>
                <div className="gpu-node">
                  <div className="gpu-icon"></div>
                  <span>g4dn.xlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI-DLC 3-step Pipeline */}
      <section className="hydra-pipeline-section">
        <div className="section-header">
          <h2>{t('hydra.pipeline.title')}</h2>
          <p>{t('hydra.pipeline.subtitle')}</p>
        </div>
        <div className="scroll-telling-container">
          <div className="pipeline-visual">
            {/* Visuals will change based on scroll */}
            <div className="terminal-ui">
              <div className="terminal-header">bash</div>
              <div className="terminal-body">
                <p>$ terraform apply -auto-approve</p>
                <p>aws_eks_cluster.main: Creating...</p>
                <p>aws_eks_node_group.gpu: Creating...</p>
                <p>Apply complete! Resources: 2 added, 0 changed, 0 destroyed.</p>
              </div>
            </div>
          </div>
          <div className="pipeline-steps">
            <div className="step-card active">
              <h3>{t('hydra.pipeline.step1.title')}</h3>
              <p>{t('hydra.pipeline.step1.desc')}</p>
            </div>
            <div className="step-card">
              <h3>{t('hydra.pipeline.step2.title')}</h3>
              <p>{t('hydra.pipeline.step2.desc')}</p>
            </div>
            <div className="step-card">
              <h3>{t('hydra.pipeline.step3.title')}</h3>
              <p>{t('hydra.pipeline.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multi-agent Validation System */}
      <section className="validation-section">
        <div className="section-header">
          <h2>{t('hydra.validation.title')}</h2>
        </div>
        <div className="agent-animation">
          <div className="agent">
            <span className="agent-icon">🤖</span>
            <p>{t('hydra.validation.syntaxAgent')}</p>
          </div>
          <div className="file-scan">
            <span className="file-icon">📄</span>
            <span className="scan-laser"></span>
          </div>
          <div className="agent">
            <span className="agent-icon">🤖</span>
            <p>{t('hydra.validation.costAgent')}</p>
          </div>
        </div>
        <div className="validation-result">✔️</div>
      </section>

      {/* 4. Expected Benefits (ROI) */}
      <section className="benefits-section">
        <div className="section-header">
          <h2>{t('hydra.roi.title')}</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>{t('hydra.roi.time.title')}</h3>
            <div className="benefit-value">
              <span className="before">{t('hydra.roi.time.before')}</span> → <span className="after">{t('hydra.roi.time.after')}</span>
            </div>
            <p>{t('hydra.roi.time.desc')}</p>
          </div>
          <div className="benefit-card">
            <h3>{t('hydra.roi.cost.title')}</h3>
            <div className="benefit-value">
              <span className="after">{t('hydra.roi.cost.value')}</span>
            </div>
            <p>{t('hydra.roi.cost.desc')}</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="hydra-cta-section">
        <h2>{t('hydra.cta.title').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
        <Link to={`/${currentLang}/contact`} state={{ interest: 'SyncBoot' }} className="contact-btn">{t('hydra.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default Hydra;