import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, AlertCircle, CheckCircle2, Monitor, Video, Info, Activity } from 'lucide-react';

const EtaDashboardForensics = ({ isMobile }) => {
  const { t } = useTranslation();
  const [testCases, setTestCases] = useState([
    { id: 1, name: 'User Login Flow', device: 'iPhone 13', status: 'running', result: '-' },
    { id: 2, name: 'Add to Cart Test', device: 'Chrome / Win 11', status: 'failed', result: 'Failed' },
    { id: 3, name: 'Payment Integration', device: 'Pixel 6', status: 'completed', result: 'Pass' },
    { id: 4, name: 'Navigation Menu', device: 'Safari / Mac', status: 'completed', result: 'Pass' },
  ]);
  const [hoveredCase, setHoveredCase] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestCases(prev => prev.map(tc => 
        tc.status === 'running' ? { ...tc, status: Math.random() > 0.5 ? 'completed' : 'running', result: 'Pass' } : tc
      ));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      minHeight: isMobile ? '350px' : '500px', 
      background: '#0F172A', 
      borderRadius: '24px', 
      padding: isMobile ? '20px' : '40px', 
      border: '1px solid #334155', 
      position: 'relative' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: isMobile ? '20px' : '30px' 
      }}>
        <h4 style={{ 
          color: '#FFFFFF', 
          fontSize: isMobile ? '0.9rem' : '1.2rem', 
          fontWeight: 800, 
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px' 
        }}>
          <Monitor color="#00D1B2" size={isMobile ? 18 : 24} />
          {t('synceta.forensics.title', 'Live Test Dashboard')}
        </h4>
        <div style={{ display: 'flex', gap: isMobile ? '10px' : '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3B82F6', boxShadow: '0 0 8px #3B82F6' }} />
            <span style={{ color: '#94A3B8', fontSize: '0.65rem' }}>RUNNING</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 8px #EF4444' }} />
            <span style={{ color: '#94A3B8', fontSize: '0.65rem' }}>FAILED</span>
          </div>
        </div>
      </div>

      {/* Dashboard Table */}
      <div style={{ width: '100%', overflow: 'hidden', borderRadius: '12px', border: '1px solid #1E293B' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
          <thead>
            <tr style={{ background: '#1E293B', color: '#94A3B8' }}>
              <th style={{ padding: isMobile ? '10px 12px' : '15px 20px', fontWeight: 600 }}>TEST CASE</th>
              {!isMobile && <th style={{ padding: '15px 20px', fontWeight: 600 }}>DEVICE</th>}
              <th style={{ padding: isMobile ? '10px 12px' : '15px 20px', fontWeight: 600 }}>STATUS</th>
              <th style={{ padding: isMobile ? '10px 12px' : '15px 20px', fontWeight: 600 }}>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc) => (
              <motion.tr
                key={tc.id}
                onMouseEnter={() => !isMobile && setHoveredCase(tc.id)}
                onMouseLeave={() => !isMobile && setHoveredCase(null)}
                onClick={() => isMobile && setHoveredCase(hoveredCase === tc.id ? null : tc.id)}
                style={{ 
                  color: '#E2E8F0', borderBottom: '1px solid #1E293B',
                  background: tc.status === 'failed' ? 'rgba(239, 68, 68, 0.05)' : 'transparent',
                  position: 'relative', cursor: tc.status === 'failed' ? 'help' : 'default'
                }}
              >
                <td style={{ padding: isMobile ? '12px' : '18px 20px', fontWeight: 700 }}>{tc.name}</td>
                {!isMobile && <td style={{ padding: '18px 20px', color: '#94A3B8' }}>{tc.device}</td>}
                <td style={{ padding: isMobile ? '12px' : '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {tc.status === 'running' && (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
                        <Play size={12} color="#3B82F6" />
                      </motion.div>
                    )}
                    <span style={{ 
                      color: tc.status === 'failed' ? '#EF4444' : (tc.status === 'completed' ? '#00D1B2' : '#3B82F6'),
                      fontWeight: 700, fontSize: isMobile ? '0.65rem' : '0.75rem'
                    }}>
                      {tc.status.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td style={{ padding: isMobile ? '12px' : '18px 20px' }}>
                  {tc.result === 'Pass' ? <CheckCircle2 color="#00D1B2" size={isMobile ? 14 : 18} /> : 
                   (tc.result === 'Failed' ? <AlertCircle color="#EF4444" size={isMobile ? 14 : 18} /> : '-')}
                </td>

                {/* Video Forensic Popup */}
                <AnimatePresence>
                  {hoveredCase === tc.id && tc.status === 'failed' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      style={{ 
                        position: 'absolute', 
                        top: isMobile ? '-100px' : '-150px', 
                        left: isMobile ? '10%' : '20%', 
                        zIndex: 100,
                        width: isMobile ? '240px' : '280px', 
                        background: '#1E293B', 
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)', 
                        padding: '10px',
                        border: '1px solid #334155', 
                        pointerEvents: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '0.7rem', fontWeight: 800, marginBottom: '8px' }}>
                        <Video size={14} /> FORENSIC EVIDENCE
                      </div>
                      <div style={{ width: '100%', height: isMobile ? '100px' : '150px', background: '#0F172A', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                        {/* Mock Video content */}
                        <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80) center/cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(239, 68, 68, 0.2)' }} />
                        <motion.div 
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          style={{ position: 'absolute', top: 10, left: 10, display: 'flex', alignItems: 'center', gap: '5px' }}
                        >
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                          <span style={{ color: '#FFF', fontSize: '0.6rem', fontWeight: 900 }}>REC [ERR]</span>
                        </motion.div>
                        <div style={{ position: 'absolute', bottom: 10, left: 10, color: '#FFF', fontSize: '0.5rem', fontWeight: 700 }}>
                          Step 4: Click Login {"->"} Timeout (5000ms)
                        </div>
                      </div>
                      {!isMobile && (
                        <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                          <Info size={12} color="#94A3B8" />
                          <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>{t('synceta.forensics.action', 'Hover to check video evidence')}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Info */}
      <div style={{ position: 'absolute', bottom: isMobile ? '10px' : '30px', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '0.65rem', gap: '8px' }}>
        <Activity size={isMobile ? 12 : 16} color="#00D1B2" />
        {t('synceta.forensics.status', 'Real-time TestOps Monitoring Active')}
      </div>
    </div>
  );
};

export default EtaDashboardForensics;
