import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, ShieldCheck, BarChart3, ChevronRight, Laptop, Server, PieChart } from 'lucide-react';

const APIScrollTelling = ({ isMobile }) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'developer',
      title: t('syncapim.scroll.layer.developer', 'Developer Services'),
      desc: t('syncapim.scroll.desc.developer', 'Design and document your APIs with Smart Doc and automated testing tools.'),
      icon: Code2,
      color: '#3B82F6',
      features: ['Smart Doc', 'Sandbox', 'SDK Generator']
    },
    {
      id: 'gateway',
      title: t('syncapim.scroll.layer.gateway', 'API Services'),
      desc: t('syncapim.scroll.desc.gateway', 'Secure and manage traffic with multi-layer security and flexible policy enforcement.'),
      icon: ShieldCheck,
      color: '#00D1B2',
      features: ['OAuth 2.0', 'Rate Limiting', 'WAF Integration']
    },
    {
      id: 'analytics',
      title: t('syncapim.scroll.layer.analytics', 'Analytics Services'),
      desc: t('syncapim.scroll.desc.analytics', 'Gain deep insights with real-time monitoring and packet-level traffic analysis.'),
      icon: BarChart3,
      color: '#F59E0B',
      features: ['Live Dashboards', 'Anomaly Detection', 'Log Export']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      padding: isMobile ? '30px 20px' : '60px', 
      background: '#FFFFFF', 
      borderRadius: '24px', 
      border: '1px solid #E2E8F0', 
      display: 'flex', 
      gap: isMobile ? '30px' : '60px', 
      alignItems: 'center', 
      flexWrap: 'wrap' 
    }}>
      {/* Left: Interactive Map */}
      <div style={{ 
        flex: 1, 
        minWidth: isMobile ? '280px' : '350px', 
        position: 'relative', 
        height: isMobile ? '350px' : '500px' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: isMobile ? '15px' : '30px', height: '100%' }}>
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isPassed = activeStep > index;
            const Icon = step.icon;

            return (
              <div key={step.id} style={{ flex: 1, position: 'relative' }}>
                <motion.div
                  animate={{ 
                    scale: isActive ? (isMobile ? 1.02 : 1.05) : 1,
                    opacity: isActive || isPassed ? 1 : 0.4,
                    borderColor: isActive ? step.color : '#E2E8F0',
                    boxShadow: isActive ? `0 20px 25px -5px ${step.color}22` : 'none'
                  }}
                  onClick={() => setActiveStep(index)}
                  style={{ 
                    background: '#FFFFFF', 
                    padding: isMobile ? '15px' : '24px', 
                    borderRadius: '16px', 
                    border: '2px solid #E2E8F0', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: isMobile ? '12px' : '20px', 
                    zIndex: 2, 
                    position: 'relative'
                  }}
                >
                  <div style={{ 
                    width: isMobile ? '40px' : '50px', 
                    height: isMobile ? '40px' : '50px', 
                    borderRadius: '12px', 
                    background: isActive ? step.color : '#F1F5F9',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transition: 'all 0.3s'
                  }}>
                    <Icon color={isActive ? '#FFFFFF' : '#94A3B8'} size={isMobile ? 20 : 24} />
                  </div>
                  <div>
                    <div style={{ fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700, color: isActive ? step.color : '#64748B', marginBottom: '2px' }}>STEP 0{index + 1}</div>
                    <div style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 800, color: '#1E293B' }}>{step.title}</div>
                  </div>
                  {isActive && (
                    <motion.div layoutId="arrow" style={{ marginLeft: 'auto' }}>
                      <ChevronRight color={step.color} size={isMobile ? 20 : 24} />
                    </motion.div>
                  )}
                </motion.div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div style={{ 
                    position: 'absolute', 
                    top: isMobile ? '-15px' : '-30px', 
                    left: isMobile ? '34px' : '49px', 
                    width: '2px', 
                    height: isMobile ? '15px' : '30px', 
                    background: '#E2E8F0' 
                  }}>
                    <motion.div 
                      animate={{ height: isActive || isPassed ? '100%' : '0%' }}
                      style={{ width: '100%', background: steps[index + 1].color }} 
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Content Details */}
      <div style={{ flex: 1, minWidth: isMobile ? '280px' : '350px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ 
              color: steps[activeStep].color, 
              fontSize: isMobile ? '0.8rem' : '0.9rem', 
              fontWeight: 700, 
              letterSpacing: '0.1em', 
              marginBottom: isMobile ? '8px' : '16px' 
            }}>
              {steps[activeStep].id.toUpperCase()} LAYER
            </div>
            <h3 style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem', 
              fontWeight: 900, 
              color: '#0F172A', 
              marginBottom: isMobile ? '16px' : '24px', 
              lineHeight: 1.2 
            }}>
              {steps[activeStep].title}
            </h3>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              color: '#475569', 
              lineHeight: 1.6, 
              marginBottom: isMobile ? '24px' : '32px' 
            }}>
              {steps[activeStep].desc}
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: '12px' 
            }}>
              {steps[activeStep].features.map((f, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  padding: '12px', 
                  background: '#F8FAFC', 
                  borderRadius: '10px', 
                  border: '1px solid #F1F5F9' 
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: steps[activeStep].color }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Visual Mini-simulation for the step */}
            <div style={{ 
              marginTop: isMobile ? '30px' : '40px', 
              height: isMobile ? '100px' : '120px', 
              background: '#F1F5F9', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1px dashed #CBD5E1' 
            }}>
              {activeStep === 0 && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Laptop size={isMobile ? 32 : 40} color="#3B82F6" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ width: isMobile ? '60px' : '80px', height: '8px', background: '#CBD5E1', borderRadius: '4px' }} />
                    <div style={{ width: isMobile ? '40px' : '60px', height: '8px', background: '#CBD5E1', borderRadius: '4px' }} />
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div style={{ position: 'relative' }}>
                  <Server size={isMobile ? 32 : 40} color="#00D1B2" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', inset: -8, border: '2px solid #00D1B2', borderRadius: '50%' }} 
                  />
                </div>
              )}
              {activeStep === 2 && (
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-end' }}>
                  {[40, 70, 50, 90].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: isMobile ? h * 0.8 : h }}
                      style={{ width: isMobile ? '8px' : '10px', background: '#F59E0B', borderRadius: '5px' }} 
                    />
                  ))}
                  <PieChart size={isMobile ? 24 : 30} color="#F59E0B" />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default APIScrollTelling;
