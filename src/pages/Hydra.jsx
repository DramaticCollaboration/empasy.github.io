import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Hydra.css';

const Hydra = () => {
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
          <h1>말하는 대로 구축되는 클라우드, Hydra</h1>
          <p>복잡한 설정 없이 자연어 대화만으로 AI-DLC(AI 개발 수명주기) 전 과정을 완벽하게 자동화합니다.</p>
          <div className="interactive-prompt">
            <div className="prompt-text">
              &gt; Llama 3 파인튜닝을 위한 저렴한 GPU 환경 구축해줘
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
          <h2>AI-DLC 3단계 파이프라인</h2>
          <p>착수에서 운영까지, AI가 주도하는 자율 운영 인프라</p>
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
              <h3>1. Inception (착수)</h3>
              <p>사용자의 자연어 프롬프트에서 목적과 리소스 제약 조건을 자동 추출하고, 조직의 비용 정책(Steering Files)을 강제 주입합니다.</p>
            </div>
            <div className="step-card">
              <h3>2. Construction (구축)</h3>
              <p>Terraform 및 Kubernetes Manifest(YAML)를 자동 생성하여 환경을 프로비저닝하고, 인프라 접속 정보를 문서화(Auto-Documentation)합니다.</p>
            </div>
            <div className="step-card">
              <h3>3. Operations (운영)</h3>
              <p>트래픽 유휴 시 파드 개수를 0으로 줄이는 'Scale-to-Zero' 기술과, 스팟 중단 시 즉각 대체하는 'Karpenter' 오케스트레이션으로 연속성을 보장합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multi-agent Validation System */}
      <section className="validation-section">
        <div className="section-header">
          <h2>빈틈없이 교차 검증하는 지능형 에이전트 협업</h2>
        </div>
        <div className="agent-animation">
          <div className="agent">
            <span className="agent-icon">🤖</span>
            <p>구문 검증 에이전트</p>
          </div>
          <div className="file-scan">
            <span className="file-icon">📄</span>
            <span className="scan-laser"></span>
          </div>
          <div className="agent">
            <span className="agent-icon">🤖</span>
            <p>비용 감사 에이전트</p>
          </div>
        </div>
        <div className="validation-result">✔️</div>
      </section>

      {/* 4. Expected Benefits (ROI) */}
      <section className="benefits-section">
        <div className="section-header">
          <h2>Hydra 도입 효과</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>인프라 구축 시간</h3>
            <div className="benefit-value">
              <span className="before">1주일</span> → <span className="after">5분 내</span>
            </div>
            <p>168시간 걸리던 작업을 단 5분만에 완료</p>
          </div>
          <div className="benefit-card">
            <h3>클라우드 비용 절감률</h3>
            <div className="benefit-value">
              <span className="after">40-60%</span>
            </div>
            <p>온디맨드 대비 스팟 인스턴스 활용 극대화</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="hydra-cta-section">
        <h2>DevOps 전문가 없이도 완벽한 AI 인프라를,<br/>지금 대화로 시작해 보세요.</h2>
        <Link to={`/${currentLang}/contact`} className="contact-btn">Hydra 도입 문의하기</Link>
      </section>
    </div>
  );
};

export default Hydra;