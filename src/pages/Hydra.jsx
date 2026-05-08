import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
      <section style={{ padding: '96px 0', position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center',
          background: '#0f172a', borderRadius: '3rem', padding: 'clamp(40px, 6vw, 80px)',
          overflow: 'hidden', position: 'relative',
          boxShadow: '0 20px 60px rgba(15,23,42,0.3)'
        }}>
          {/* Background glows */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', filter: 'blur(120px)', transform: 'translate(33%, -33%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '500px', height: '500px', background: 'rgba(16,185,129,0.2)', borderRadius: '50%', filter: 'blur(120px)', transform: 'translate(-33%, 33%)', pointerEvents: 'none' }} />

          {/* Inner layout: text left + cards right */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}>

            {/* Left: Title & description */}
            <div style={{ flex: '2 1 280px', color: '#fff' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2, color: '#fff' }}>
                압도적인<br />{t('hydra.roi.title', '도입 효과')}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 500 }}>
                기존 수작업 방식과 비교할 수 없는 속도와 안정성.<br />Hydra가 인프라 구축의 모든 병목을 해소합니다.
              </p>
            </div>

            {/* Right: Stat cards */}
            <div style={{ flex: '3 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>

              {/* Card 1 – 인프라 설계 및 개발 */}
              <div style={{
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)',
                padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ color: '#94A3B8', fontWeight: 500, marginBottom: '12px', fontSize: '0.9rem' }}>{t('hydra.roi.time.title', '인프라 설계 및 개발')}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>2</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#CBD5E1' }}>Weeks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.875rem' }}>
                  <span style={{ color: '#64748B', textDecoration: 'line-through', fontWeight: 500 }}>10 Weeks</span>
                  <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(16,185,129,0.2)', color: '#34D399', fontWeight: 700, border: '1px solid rgba(16,185,129,0.3)' }}>80% 절감</span>
                </div>
              </div>

              {/* Card 2 – 신규 환경 배포 */}
              <div style={{
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)',
                padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ color: '#94A3B8', fontWeight: 500, marginBottom: '12px', fontSize: '0.9rem' }}>{t('hydra.roi.cost.title', '신규 환경 배포 시간')}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>15</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#CBD5E1' }}>Mins</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.875rem' }}>
                  <span style={{ color: '#64748B', textDecoration: 'line-through', fontWeight: 500 }}>4 Hours</span>
                  <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(6,182,212,0.2)', color: '#22D3EE', fontWeight: 700, border: '1px solid rgba(6,182,212,0.3)' }}>90% 단축</span>
                </div>
              </div>

            </div>
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