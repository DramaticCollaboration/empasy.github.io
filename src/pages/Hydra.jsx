import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hydra = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'ko';

  return (
    <div style={{ background: '#F8FAFC', overflowX: 'hidden' }}>

      {/* ── 1. Hero Section ── */}
      <section style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '1400px', margin: '0 auto', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', width: '100%', alignItems: 'center' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 20 }}
          >
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '50px', background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.25)', color: '#0891B2', fontSize: '0.875rem', fontWeight: 700, width: 'fit-content' }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#06B6D4', opacity: 0.75 }} />
                <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px', borderRadius: '50%', background: '#0891B2' }} />
              </span>
              AI Infrastructure Automation
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
              <span style={{ display: 'block', background: 'linear-gradient(90deg, #00B4D8, #10b981, #00B4D8)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t('hydra.hero.title')}
              </span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 500, lineHeight: 1.7, margin: 0, maxWidth: '480px' }}>
              {t('hydra.hero.desc')}
            </p>

            {/* Terminal card */}
            <div style={{ width: '100%', maxWidth: '520px', borderRadius: '16px', background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(100,116,139,0.4)', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(100,116,139,0.3)', background: 'rgba(30,41,59,0.5)' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#ff5f56','#ffbd2e','#27c93f'].map((c, i) => (
                    <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ margin: '0 auto', fontSize: '0.75rem', color: '#64748B', fontFamily: 'monospace', opacity: 0.7 }}>user@empasy-hydra:~</div>
              </div>
              <div style={{ padding: '24px', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.7 }}>
                <div style={{ display: 'flex', color: '#34D399' }}>
                  <span style={{ marginRight: '12px', userSelect: 'none' }}>❯</span>
                  <span className="hydra-typing-text" style={{ color: '#6EE7B7' }}>
                    {t('hydra.hero.prompt', 'Design an EKS cluster with NVIDIA GPUs...')}
                  </span>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="code-line-1" style={{ color: '#CBD5E1' }}>
                    <span style={{ color: '#22D3EE', marginRight: '8px' }}>▶</span> Analyzing user intent and constraints
                  </div>
                  <div className="code-line-2" style={{ color: '#CBD5E1' }}>
                    <span style={{ color: '#22D3EE', marginRight: '8px' }}>▶</span> Generating infrastructure blueprint
                  </div>
                  <div className="code-line-3" style={{ color: '#34D399', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', paddingTop: '8px', borderTop: '1px solid rgba(100,116,139,0.3)' }}>
                    <svg style={{ animation: 'spin 1s linear infinite', width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Initializing SyncBoot provisioning...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – floating infra cards */}
          <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* SVG connection lines */}
            <svg viewBox="0 0 800 800" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', zIndex: 0, pointerEvents: 'none' }}>
              <path d="M400,400 Q 550,250 650,200" fill="none" stroke="#48CAE4" strokeWidth="2" strokeDasharray="6 6" style={{ animation: 'svg-dash 30s linear infinite', opacity: 0.4 }} />
              <path d="M400,400 Q 600,500 650,650" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" style={{ animation: 'svg-dash 30s linear infinite', opacity: 0.4 }} />
              <path d="M400,400 Q 250,550 150,600" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" style={{ animation: 'svg-dash 30s linear infinite', opacity: 0.4 }} />
            </svg>

            {/* Center: EKS Control Plane */}
            <div className="anim-float-1" style={{ position: 'absolute', zIndex: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '192px', height: '192px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', width: '20px', height: '20px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#34D399', opacity: 0.75 }} />
                <span style={{ position: 'relative', display: 'inline-flex', width: '20px', height: '20px', borderRadius: '50%', background: '#10B981', border: '4px solid white', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }} />
              </span>
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #fb923c, #f59e0b)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(251,146,60,0.3)', marginBottom: '12px', color: '#fff' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>AWS EKS</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', marginTop: '2px' }}>Control Plane</div>
              </div>
            </div>

            {/* Top-right: GPU A100 */}
            <div className="anim-float-2" style={{ position: 'absolute', zIndex: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', width: '240px', top: '10%', right: '2%' }}>
              <div style={{ width: '48px', height: '48px', background: '#76B900', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-5h2v5zm0-6.5h-2v-2h2v2zm4 6.5h-2v-5h2v5zm0-6.5h-2v-2h2v2z"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.875rem' }}>GPU Node Group</div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>NVIDIA A100 × 4</div>
              </div>
            </div>

            {/* Bottom-right: GPU H100 */}
            <div className="anim-float-3" style={{ position: 'absolute', zIndex: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', width: '240px', bottom: '10%', right: '8%' }}>
              <div style={{ width: '48px', height: '48px', background: '#76B900', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-5h2v5zm0-6.5h-2v-2h2v2zm4 6.5h-2v-5h2v5zm0-6.5h-2v-2h2v2z"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.875rem' }}>GPU Node Group</div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>NVIDIA H100 × 8</div>
              </div>
            </div>

            {/* Bottom-left: System Node */}
            <div className="anim-float-2" style={{ position: 'absolute', zIndex: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', width: '208px', bottom: '18%', left: '2%' }}>
              <div style={{ width: '48px', height: '48px', background: '#3B82F6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.875rem' }}>System Node</div>
                <div style={{ fontSize: '0.75rem', color: '#3B82F6', fontWeight: 700, marginTop: '2px' }}>t3.xlarge × 2</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Pipeline Section ── */}
      <section style={{ padding: '96px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
              {t('hydra.pipeline.title', 'How Hydra Works')}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', fontWeight: 500 }}>
              {t('hydra.pipeline.subtitle', '자연어에서 완벽한 인프라까지, 단 3단계')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'start' }}>
            {[
              {
                step: 'Step 01', color: '#0891B2', bg: 'rgba(8,145,178,0.1)',
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                title: t('hydra.pipeline.step1.title'),
                desc: t('hydra.pipeline.step1.desc'),
                tags: ['NLP Parsing', 'Blueprint'],
                offset: 0
              },
              {
                step: 'Step 02', color: '#10B981', bg: 'rgba(16,185,129,0.1)',
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
                title: t('hydra.pipeline.step2.title'),
                desc: t('hydra.pipeline.step2.desc'),
                tags: ['IaC Automation', 'Provisioning'],
                offset: 24
              },
              {
                step: 'Step 03', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)',
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                title: t('hydra.pipeline.step3.title'),
                desc: t('hydra.pipeline.step3.desc'),
                tags: ['Auto-Scaling', 'Cost Ops'],
                offset: 48
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                style={{
                  background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)',
                  padding: '48px 40px', borderRadius: '2.5rem',
                  border: '1px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                  marginTop: `${item.offset}px`,
                  transition: 'box-shadow 0.3s'
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', transition: 'all 0.3s' }}>
                  {item.icon}
                </div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '32px', fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{ padding: '4px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 700, color: '#64748B', border: '1px solid #E2E8F0' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Validation Section ── */}
      <section style={{ padding: '96px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left: code scanner visual */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 1 }}
            whileHover={{ rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', width: '100%', background: '#0f172a', borderRadius: '2rem', padding: '24px 32px', height: '450px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', border: '1px solid #1E293B', overflow: 'hidden' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba(30,41,59,0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                main.tf
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34D399', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.1)', padding: '6px 12px', borderRadius: '50px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', animation: 'pulse 2s infinite' }} />
                Scanning
              </span>
            </div>

            {/* Scan beam */}
            <div className="scan-line" />

            {/* Code lines (decorative bars) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'monospace', fontSize: '0.8rem' }}>
              {[
                { w: '25%', color: 'rgba(167,139,250,0.25)', indent: 0 },
                { w: '50%', color: 'rgba(34,211,238,0.2)', indent: 0 },
                { w: '75%', color: 'rgba(52,211,153,0.2)', indent: 16 },
                { w: '33%', color: 'rgba(34,211,238,0.2)', indent: 16 },
                { w: '25%', color: 'rgba(251,191,36,0.2)', indent: 32 },
                { w: '66%', color: 'rgba(52,211,153,0.2)', indent: 32 },
                { w: '50%', color: 'rgba(34,211,238,0.2)', indent: 16 },
                { w: '33%', color: 'rgba(167,139,250,0.25)', indent: 0 },
                { w: '50%', color: 'rgba(52,211,153,0.2)', indent: 16 },
              ].map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <span style={{ color: '#475569', width: '20px', textAlign: 'right', flexShrink: 0 }}>{i + 1}</span>
                  <div style={{ height: '12px', background: line.color, borderRadius: '6px', width: line.w, marginLeft: `${line.indent}px` }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: text + check cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: '#10B981', fontSize: '0.875rem', fontWeight: 700, marginBottom: '24px', width: 'fit-content', border: '1px solid rgba(16,185,129,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              AI Agent
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '40px', lineHeight: 1.2 }}>
              {t('hydra.validation.title')}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* Syntax card */}
              <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10B981', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)', padding: '4px 8px', borderRadius: '6px', letterSpacing: '0.05em' }}>OK</span>
                </div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>{t('hydra.validation.syntaxAgent')}</div>
              </div>

              {/* Security card */}
              <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(8,145,178,0.1)', color: '#0891B2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0891B2', background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.15)', padding: '4px 8px', borderRadius: '6px', letterSpacing: '0.05em' }}>PASS</span>
                </div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>Security Rules</div>
              </div>

              {/* Cost card – full width */}
              <div style={{ gridColumn: 'span 2', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59,130,246,0.1)', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem' }}>{t('hydra.validation.costAgent')}</div>
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#3B82F6', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', padding: '6px 12px', borderRadius: '6px', letterSpacing: '0.05em' }}>OPTIMIZED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. ROI Section ── */}
      <section style={{ padding: '96px 24px', position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center',
          background: '#0f172a', borderRadius: '3rem', padding: 'clamp(40px, 6vw, 80px)',
          overflow: 'hidden', position: 'relative',
          boxShadow: '0 20px 60px rgba(15,23,42,0.3)'
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', filter: 'blur(120px)', transform: 'translate(33%, -33%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '500px', height: '500px', background: 'rgba(16,185,129,0.2)', borderRadius: '50%', filter: 'blur(120px)', transform: 'translate(-33%, 33%)', pointerEvents: 'none' }} />

          <div style={{ flex: '2 1 280px', color: '#fff', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2, color: '#fff' }}>
              {t('hydra.roi.title')}
            </h2>
          </div>

          <div style={{ flex: '3 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', position: 'relative', zIndex: 1 }}>
            {[
              { label: t('hydra.roi.time.title'), value: '2', unit: 'Weeks', before: '10 Weeks', badge: '80% 절감', badgeColor: '#34D399', badgeBg: 'rgba(16,185,129,0.2)', badgeBorder: 'rgba(16,185,129,0.3)' },
              { label: t('hydra.roi.cost.title'), value: '15', unit: 'Mins', before: '4 Hours', badge: '90% 단축', badgeColor: '#22D3EE', badgeBg: 'rgba(6,182,212,0.2)', badgeBorder: 'rgba(6,182,212,0.3)' },
            ].map((card, i) => (
              <div key={i}
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ color: '#94A3B8', fontWeight: 500, marginBottom: '12px', fontSize: '0.9rem' }}>{card.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{card.value}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#CBD5E1' }}>{card.unit}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.875rem' }}>
                  <span style={{ color: '#64748B', textDecoration: 'line-through', fontWeight: 500 }}>{card.before}</span>
                  <span style={{ padding: '4px 10px', borderRadius: '6px', background: card.badgeBg, color: card.badgeColor, fontWeight: 700, border: `1px solid ${card.badgeBorder}` }}>{card.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Section ── */}
      <section style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: '48px', lineHeight: 1.2 }}>
              {t('hydra.cta.title').split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i < t('hydra.cta.title').split('\n').length - 1 && <br />}</React.Fragment>
              ))}
            </h2>
            <Link
              to={`/${currentLang}/contact`}
              state={{ interest: 'Hydra' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: '#0F172A', color: '#fff',
                padding: '20px 40px', borderRadius: '50px',
                fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 20px 40px rgba(15,23,42,0.2)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E293B'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 28px 50px rgba(15,23,42,0.28)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 20px 40px rgba(15,23,42,0.2)'; }}
            >
              {t('hydra.cta.btn', 'Hydra 도입 상담하기')}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Hydra;
