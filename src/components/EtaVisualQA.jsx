import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';

const EtaVisualQA = ({ isMobile }) => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Bug location in percentage
  const bugX = 65;
  const bugY = 45;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const isNearBug = Math.abs(mousePos.x - bugX) < 10 && Math.abs(mousePos.y - bugY) < 10;

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => !isMobile && setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        setIsHovering(true);
        const touch = e.touches[0];
        handleMouseMove(touch);
      }}
      onTouchEnd={() => setIsHovering(false)}
      style={{ 
        width: '100%', 
        height: isMobile ? '350px' : '500px', 
        background: '#FFFFFF', 
        borderRadius: '24px', 
        border: '1px solid #E2E8F0', 
        position: 'relative', 
        overflow: 'hidden', 
        cursor: isMobile ? 'default' : 'none' 
      }}
    >
      {/* Background Content (Original vs Test) */}
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div style={{ flex: 1, borderRight: '1px solid #F1F5F9', padding: isMobile ? '15px' : '40px', position: 'relative' }}>
          <div style={{ fontSize: isMobile ? '0.5rem' : '0.7rem', color: '#94A3B8', fontWeight: 800, marginBottom: isMobile ? '10px' : '20px' }}>ORIGINAL DESIGN</div>
          <MockUI isMobile={isMobile} />
        </div>
        <div style={{ flex: 1, padding: isMobile ? '15px' : '40px', position: 'relative' }}>
          <div style={{ fontSize: isMobile ? '0.5rem' : '0.7rem', color: '#94A3B8', fontWeight: 800, marginBottom: isMobile ? '10px' : '20px' }}>CURRENT TEST</div>
          <MockUI isMobile={isMobile} hasBug />
          <div style={{ position: 'absolute', top: `${bugY}%`, left: `${bugX}%`, width: '10px', height: '10px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '50%' }} />
        </div>
      </div>

      {/* Magnifier Lens */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: `${mousePos.x}%`, y: `${mousePos.y}%` }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ 
              position: 'absolute', 
              top: 0, left: 0,
              width: isMobile ? '120px' : '180px', 
              height: isMobile ? '120px' : '180px', 
              borderRadius: '50%', 
              border: `4px solid ${isNearBug ? '#EF4444' : '#00D1B2'}`,
              background: '#FFF',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              zIndex: 100
            }}
          >
            <div style={{ 
              position: 'absolute', 
              width: '800%', height: '800%',
              left: `-${mousePos.x * 8}%`, top: `-${mousePos.y * 8}%`,
              padding: '100px'
            }}>
               <MockUI isMobile={isMobile} zoom />
            </div>
            {/* Grid Lines in Lens */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
            
            {/* Bug Highlight in Lens */}
            {isNearBug && (
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                style={{ position: 'absolute', inset: 0, border: '10px solid rgba(239, 68, 68, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ background: '#EF4444', color: '#FFF', padding: isMobile ? '3px 6px' : '5px 10px', borderRadius: '4px', fontSize: isMobile ? '0.45rem' : '0.6rem', fontWeight: 900 }}>
                  1px OFFSET
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Messages */}
      <div style={{ position: 'absolute', bottom: isMobile ? '15px' : '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 110, width: isMobile ? '90%' : 'auto', display: 'flex', justifyContent: 'center' }}>
        {isNearBug ? (
          <div style={{ background: '#EF4444', color: '#FFF', padding: isMobile ? '6px 12px' : '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, boxShadow: '0 10px 20px rgba(239, 68, 68, 0.3)', fontSize: isMobile ? '0.6rem' : '1rem' }}>
            <AlertCircle size={isMobile ? 14 : 18} /> {t('synceta.visual.msg.bug', 'Visual Bug Found!')}
          </div>
        ) : (
          <div style={{ background: '#0F172A', color: '#FFF', padding: isMobile ? '6px 12px' : '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: isMobile ? '0.6rem' : '1rem' }}>
            <Search size={isMobile ? 14 : 18} /> {isMobile ? t('synceta.visual.action.hint.mobile', 'Touch to inspect pixels') : t('synceta.visual.action.hint', 'Move mouse to inspect pixels')}
          </div>
        )}
      </div>
    </div>
  );
};

const MockUI = ({ hasBug, zoom, isMobile }) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: zoom ? (isMobile ? '10px' : '20px') : (isMobile ? '5px' : '10px') }}>
    <div style={{ width: '80%', height: zoom ? (isMobile ? '20px' : '40px') : (isMobile ? '10px' : '20px'), background: '#F1F5F9', borderRadius: '4px' }} />
    <div style={{ display: 'flex', gap: zoom ? (isMobile ? '10px' : '20px') : (isMobile ? '5px' : '10px') }}>
      <div style={{ width: zoom ? (isMobile ? '50px' : '100px') : (isMobile ? '25px' : '50px'), height: zoom ? (isMobile ? '50px' : '100px') : (isMobile ? '25px' : '50px'), background: '#E2E8F0', borderRadius: '8px' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: zoom ? (isMobile ? '8px' : '15px') : (isMobile ? '4px' : '8px') }}>
        <div style={{ width: '100%', height: zoom ? (isMobile ? '10px' : '20px') : (isMobile ? '5px' : '10px'), background: '#F1F5F9' }} />
        <div style={{ width: '90%', height: zoom ? (isMobile ? '10px' : '20px') : (isMobile ? '5px' : '10px'), background: '#F1F5F9' }} />
        {/* The Bug: 1px offset on the third line */}
        <div style={{ 
          width: '70%', height: zoom ? (isMobile ? '10px' : '20px') : (isMobile ? '5px' : '10px'), background: '#F1F5F9',
          marginLeft: hasBug ? '1px' : '0' 
        }} />
      </div>
    </div>
    <div style={{ width: '100%', height: zoom ? (isMobile ? '40px' : '80px') : (isMobile ? '20px' : '40px'), background: '#3B82F6', borderRadius: '8px', opacity: 0.1 }} />
  </div>
);

const AnimatePresence = ({ children }) => {
  return <>{children}</>; // Simplified for this context
};

export default EtaVisualQA;
