import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, ShieldCheck, Zap, Lock, Eye, AlertCircle } from 'lucide-react';

const APISecurityShield = ({ isMobile }) => {
  const { t } = useTranslation();
  const [attackActive, setAttackActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttackActive(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const shields = [
    { name: 'API Key / IP Filter', delay: 0 },
    { name: 'OAuth 2.0 / JWT', delay: 0.2 },
    { name: 'WAF / IPS Integration', delay: 0.4 },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '400px' : '500px', 
      background: '#020617', 
      borderRadius: '24px', 
      position: 'relative', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      {/* Background Grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Attack Source (Left) */}
      <div style={{ position: 'absolute', left: isMobile ? '10px' : '50px', zIndex: 10 }}>
        <motion.div
          animate={{ x: attackActive ? [0, -5, 5, -5, 5, 0] : 0 }}
          style={{ color: attackActive ? '#EF4444' : '#475569', textAlign: 'center' }}
        >
          <AlertCircle size={isMobile ? 32 : 48} />
          <div style={{ fontSize: isMobile ? '0.5rem' : '0.7rem', fontWeight: 800, marginTop: '5px' }}>{isMobile ? 'ATTACK' : 'HACKER TRAFFIC'}</div>
        </motion.div>
      </div>

      {/* Attack Particles */}
      <AnimatePresence>
        {attackActive && Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
          <motion.div
            key={`attack-${i}`}
            initial={{ x: isMobile ? 50 : 100, y: (Math.random() - 0.5) * (isMobile ? 150 : 300), opacity: 0 }}
            animate={{ x: isMobile ? 120 : 350, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', left: '0px', width: isMobile ? '5px' : '8px', height: '2px', background: '#EF4444', borderRadius: '2px' }}
          />
        ))}
      </AnimatePresence>

      {/* Multi-layer Shield (Center) */}
      <div style={{ display: 'flex', gap: isMobile ? '10px' : '30px', zIndex: 20 }}>
        {shields.map((s, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <motion.div
              animate={{ 
                scale: attackActive ? [1, 1.05, 1] : 1,
                boxShadow: attackActive ? '0 0 20px rgba(0, 209, 178, 0.4)' : 'none',
                borderColor: attackActive ? '#00D1B2' : '#334155'
              }}
              transition={{ repeat: Infinity, duration: 1, delay: s.delay }}
              style={{ 
                width: isMobile ? '70px' : '120px', 
                height: isMobile ? '120px' : '180px', 
                border: '2px solid #334155', 
                borderRadius: isMobile ? '10px' : '15px', 
                background: 'rgba(15, 23, 42, 0.8)', 
                backdropFilter: 'blur(5px)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center', 
                padding: isMobile ? '5px' : '10px'
              }}
            >
              <ShieldCheck color={attackActive ? '#00D1B2' : '#475569'} size={isMobile ? 20 : 32} />
              <div style={{ 
                fontSize: isMobile ? '0.5rem' : '0.65rem', 
                color: attackActive ? '#E2E8F0' : '#64748B', 
                marginTop: isMobile ? '5px' : '10px', 
                fontWeight: 700 
              }}>{s.name}</div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Clean Data Particles (Right) */}
      {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
        <motion.div
          key={`clean-${i}`}
          initial={{ x: isMobile ? 250 : 450, y: (Math.random() - 0.5) * 100, opacity: 0 }}
          animate={{ x: isMobile ? 320 : 800, opacity: [0, 1, 0] }}
          transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: '0px', width: isMobile ? '8px' : '12px', height: '3px', background: '#00D1B2', borderRadius: '3px' }}
        >
          <div style={{ position: 'absolute', right: '-10px', top: '-5px' }}>
            <Zap size={isMobile ? 8 : 10} color="#00D1B2" />
          </div>
        </motion.div>
      ))}

      {/* Destination (Right) */}
      <div style={{ position: 'absolute', right: isMobile ? '10px' : '50px', zIndex: 10 }}>
        <div style={{ color: '#00D1B2', textAlign: 'center' }}>
          <Lock size={isMobile ? 32 : 48} />
          <div style={{ fontSize: isMobile ? '0.5rem' : '0.7rem', fontWeight: 800, marginTop: '5px' }}>{isMobile ? 'SECURE' : 'SECURE ASSETS'}</div>
        </div>
      </div>

      {/* Bottom Info */}
      <div style={{ 
        position: 'absolute', 
        bottom: isMobile ? '15px' : '30px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '5px' : '20px', 
        alignItems: 'center',
        width: isMobile ? '100%' : 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00D1B2', fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700 }}>
          <Zap size={14} />
          <span>{t('syncapim.security.status.latency', 'Zero-Latency Filtering')}</span>
        </div>
        {!isMobile && <div style={{ width: '1px', height: '15px', background: '#334155' }} />}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: isMobile ? '0.6rem' : '0.8rem' }}
        >
          <Eye size={14} />
          <span>WAPPLES API Security Reference</span>
        </motion.div>
      </div>
    </div>
  );
};

export default APISecurityShield;
