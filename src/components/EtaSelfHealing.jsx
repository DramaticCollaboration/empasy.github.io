import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cpu, Search, CheckCircle2, AlertCircle, LogIn, Code } from 'lucide-react';

const EtaSelfHealing = ({ isMobile }) => {
  const { t } = useTranslation();
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState('stable'); // stable, broken, healing, recovered
  const [scanning, setScanning] = useState(false);
  const containerRef = useRef(null);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.offset.y) > 50) {
      setStatus('broken');
      setTimeout(() => {
        startHealing();
      }, 1000);
    }
  };

  const startHealing = () => {
    setStatus('healing');
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setStatus('recovered');
      setTimeout(() => setStatus('stable'), 3000);
    }, 2000);
  };

  return (
    <div ref={containerRef} style={{ 
      width: '100%', 
      height: isMobile ? '350px' : '500px', 
      background: '#F8FAFC', 
      borderRadius: '24px', 
      border: '1px solid #E2E8F0', 
      position: 'relative', 
      overflow: 'hidden', 
      padding: isMobile ? '20px' : '40px' 
    }}>
      {/* AI Brain */}
      <div style={{ 
        position: 'absolute', 
        top: isMobile ? '20px' : '40px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        textAlign: 'center', 
        zIndex: 30 
      }}>
        <motion.div
          animate={{ 
            scale: status === 'healing' ? [1, 1.2, 1] : 1,
            color: status === 'broken' ? '#EF4444' : (status === 'healing' ? '#00D1B2' : '#3B82F6')
          }}
          transition={{ repeat: status === 'healing' ? Infinity : 0, duration: 0.5 }}
        >
          <Cpu size={isMobile ? 48 : 64} />
        </motion.div>
        <div style={{ 
          fontSize: isMobile ? '0.6rem' : '0.8rem', 
          fontWeight: 800, 
          color: '#64748B', 
          marginTop: '10px', 
          letterSpacing: '0.1em' 
        }}>
          SYNCETA AI ENGINE
        </div>
      </div>

      {/* Login Form UI */}
      <div style={{ 
        position: 'absolute', 
        bottom: isMobile ? '30px' : '60px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: isMobile ? '240px' : '300px', 
        background: '#FFFFFF', 
        padding: isMobile ? '15px' : '30px', 
        borderRadius: '16px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
        border: '1px solid #E2E8F0', 
        zIndex: 10 
      }}>
        <div style={{ marginBottom: isMobile ? '10px' : '15px' }}>
          <div style={{ width: '40px', height: '6px', background: '#E2E8F0', borderRadius: '3px', marginBottom: '8px' }} />
          <div style={{ width: '100%', height: isMobile ? '25px' : '35px', background: '#F1F5F9', borderRadius: '6px' }} />
        </div>
        <div style={{ marginBottom: isMobile ? '15px' : '25px' }}>
          <div style={{ width: '60px', height: '6px', background: '#E2E8F0', borderRadius: '3px', marginBottom: '8px' }} />
          <div style={{ width: '100%', height: isMobile ? '25px' : '35px', background: '#F1F5F9', borderRadius: '6px' }} />
        </div>

        <motion.div
          drag
          dragConstraints={containerRef}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 1.1 }}
          style={{ 
            background: status === 'broken' ? '#EF4444' : '#3B82F6',
            color: '#FFFFFF',
            padding: isMobile ? '8px' : '12px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'grab',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
        >
          <LogIn size={isMobile ? 14 : 18} />
          <span style={{ fontWeight: 700, fontSize: isMobile ? '0.75rem' : '0.9rem' }}>{t('synceta.healing.ui.button', 'Login Button')}</span>
        </motion.div>
      </div>

      {/* Messages */}
      <div style={{ 
        position: 'absolute', 
        top: isMobile ? '90px' : '120px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 40,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <AnimatePresence>
          {status === 'broken' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ background: '#EF4444', color: '#FFF', padding: isMobile ? '4px 12px' : '8px 16px', borderRadius: '20px', fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={isMobile ? 12 : 14} /> {t('synceta.healing.msg.error', 'UI Change Detected!')}
            </motion.div>
          )}
          {status === 'recovered' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ background: '#00D1B2', color: '#FFF', padding: isMobile ? '4px 12px' : '8px 16px', borderRadius: '20px', fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={isMobile ? 12 : 14} /> {t('synceta.healing.msg.recover', 'Self-Healing Complete!')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Guide Text */}
      <div style={{ position: 'absolute', top: '20px', left: 0, right: 0, textAlign: 'center', color: '#94A3B8', fontSize: isMobile ? '0.6rem' : '0.75rem', fontWeight: 600 }}>
        DRAG BUTTON TO BREAK TEST
      </div>
    </div>
  );
};

const CodeIcon = ({ x, y }) => (
  <foreignObject x={x} y={y} width="40" height="40">
    <div style={{ background: '#F1F5F9', padding: '8px', borderRadius: '8px', color: '#64748B', border: '1px solid #E2E8F0' }}>
      <Code size={24} />
    </div>
  </foreignObject>
);

const ConnectorLine = ({ status }) => {
  // Simplification: In a real app we'd get the actual element positions
  const color = status === 'broken' ? '#EF4444' : (status === 'stable' ? '#3B82F6' : '#00D1B2');
  const dashArray = status === 'broken' ? '5,5' : '0';

  return (
    <motion.path
      d="M 100,400 C 150,400 200,450 400,450" // Example static path
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray={dashArray}
      animate={{ opacity: status === 'healing' ? [0.3, 1] : 1 }}
      transition={{ repeat: status === 'healing' ? Infinity : 0, duration: 0.3 }}
    />
  );
};

export default EtaSelfHealing;
