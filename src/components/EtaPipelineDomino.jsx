import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  GitBranch, Cog, CheckCircle2, MessageSquare, 
  ArrowRight, Box, Bell, Layout
} from 'lucide-react';

const EtaPipelineDomino = ({ isMobile }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  const workflow = [
    { id: 'commit', label: t('synceta.pipeline.step.commit', 'Code Commit'), icon: GitBranch, color: '#181717' },
    { id: 'build', label: t('synceta.pipeline.step.build', 'Auto Build'), icon: Cog, color: '#D24939' },
    { id: 'test', label: t('synceta.pipeline.step.test', 'AI Verification'), icon: Layout, color: '#00D1B2', highlight: true },
    { id: 'notify', label: t('synceta.pipeline.step.notify', 'Instant Notify'), icon: MessageSquare, color: '#4A154B' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % (workflow.length + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '350px' : '500px', 
      background: '#F8FAFC', 
      borderRadius: '24px', 
      border: '1px solid #E2E8F0', 
      position: 'relative', 
      overflow: 'hidden', 
      padding: isMobile ? '20px' : '60px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center' 
    }}>
      {/* Conveyor Belt Background */}
      <div style={{ 
        position: 'absolute', 
        left: 0, 
        right: 0, 
        height: isMobile ? '20px' : '40px', 
        background: '#1E293B', 
        bottom: isMobile ? '100px' : '150px', 
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' 
      }}>
        <div style={{ display: 'flex', width: '200%', height: '100%' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              animate={{ x: [-20, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              style={{ width: isMobile ? '20px' : '40px', height: '100%', borderRight: '2px solid rgba(255,255,255,0.1)' }} 
            />
          ))}
        </div>
      </div>

      {/* Tool Blocks */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'flex-end', 
        height: isMobile ? '200px' : '300px', 
        paddingBottom: '20px', 
        position: 'relative', 
        zIndex: 10 
      }}>
        {workflow.map((item, i) => {
          const isActive = step > i;
          const isCurrent = step === i;
          const Icon = item.icon;

          return (
            <div key={item.id} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: isMobile ? '10px' : '20px', 
              width: isMobile ? '80px' : '150px' 
            }}>
              <AnimatePresence>
                {isCurrent && (
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    style={{ position: 'absolute', top: 0 }}
                  >
                    <div style={{ 
                      background: item.color, 
                      color: '#FFF', 
                      padding: isMobile ? '3px 8px' : '5px 12px', 
                      borderRadius: '4px', 
                      fontSize: isMobile ? '0.5rem' : '0.7rem', 
                      fontWeight: 800 
                    }}>
                      {isActive || isCurrent ? 'PROCESSING...' : 'WAITING'}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                animate={{ 
                  y: isCurrent ? -10 : 0,
                  boxShadow: isCurrent ? `0 20px 30px ${item.color}44` : '0 4px 6px rgba(0,0,0,0.05)',
                  scale: isCurrent ? 1.1 : 1,
                  opacity: isActive || isCurrent ? 1 : 0.4
                }}
                style={{ 
                  width: isMobile ? '50px' : '100px', 
                  height: isMobile ? '50px' : '100px', 
                  background: '#FFFFFF', 
                  borderRadius: isMobile ? '8px' : '16px', 
                  border: `${isMobile ? '2px' : '3px'} solid ${isActive || isCurrent ? item.color : '#E2E8F0'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}
              >
                <Icon color={isActive || isCurrent ? item.color : '#94A3B8'} size={isMobile ? 24 : 40} />
                {isActive && (
                  <div style={{ 
                    position: 'absolute', 
                    top: isMobile ? -5 : -10, 
                    right: isMobile ? -5 : -10, 
                    background: '#00D1B2', 
                    borderRadius: '50%', 
                    padding: '2px' 
                  }}>
                    <CheckCircle2 color="#FFF" size={isMobile ? 12 : 20} />
                  </div>
                )}
                {item.highlight && isCurrent && (
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ 
                      position: 'absolute', 
                      inset: isMobile ? -10 : -20, 
                      border: `${isMobile ? '2px' : '4px'} solid #00D1B2`, 
                      borderRadius: isMobile ? '12px' : '24px' 
                    }} 
                  />
                )}
              </motion.div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: isMobile ? '0.5rem' : '0.8rem', 
                  fontWeight: 800, 
                  color: isActive || isCurrent ? '#1E293B' : '#94A3B8' 
                }}>
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slack Notification Popup */}
      <AnimatePresence>
        {step === 4 && (
          <motion.div
            initial={{ scale: 0, x: isMobile ? 50 : 200, y: 100 }}
            animate={{ scale: 1, x: isMobile ? 60 : 250, y: isMobile ? -30 : -50 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'absolute', background: '#FFFFFF', padding: isMobile ? '10px' : '15px', 
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0',
              display: 'flex', alignItems: 'center', gap: '12px', 
              width: isMobile ? '180px' : '250px', zIndex: 20
            }}
          >
            <div style={{ 
              background: '#4A154B', 
              borderRadius: '8px', 
              display: 'flex', 
              padding: isMobile ? '5px' : '8px' 
            }}>
              <Bell color="#FFF" size={isMobile ? 14 : 20} />
            </div>
            <div>
              <div style={{ fontSize: isMobile ? '0.6rem' : '0.75rem', fontWeight: 800, color: '#1E293B' }}>Slack Notification</div>
              <div style={{ fontSize: isMobile ? '0.55rem' : '0.7rem', color: '#64748B' }}>Tests Passed: 100%</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating virtual browsers for SyncEta step */}
      <AnimatePresence>
        {step === 2 && (
          <>
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.8, 
                  scale: 1, 
                  x: isMobile ? (i - 2) * 60 : (i - 2) * 120, 
                  y: isMobile ? -60 : -100 
                }}
                exit={{ opacity: 0, scale: 0 }}
                style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  width: isMobile ? '60px' : '100px', 
                  height: isMobile ? '45px' : '70px', 
                  background: '#FFF', 
                  borderRadius: '8px', 
                  border: '1px solid #E2E8F0', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                  overflow: 'hidden' 
                }}
              >
                <div style={{ height: isMobile ? '6px' : '10px', background: '#F1F5F9', width: '100%' }} />
                <div style={{ padding: '5px' }}>
                  <div style={{ width: '100%', height: '3px', background: '#00D1B2', marginBottom: '3px' }} />
                  <div style={{ width: '80%', height: '3px', background: '#E2E8F0' }} />
                </div>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EtaPipelineDomino;
