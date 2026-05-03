import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Puzzle, Database, Layout as LayoutIcon, Zap } from 'lucide-react';

const HybridPuzzle = ({ isMobile }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const pieces = [
    { id: 'layout', icon: LayoutIcon, color: '#3B82F6', label: t('synccms.hybrid.piece.layout', 'Page Layout'), pos: { top: '10%', left: '10%' } },
    { id: 'fragment', icon: Puzzle, color: '#00D1B2', label: t('synccms.hybrid.piece.fragment', 'Content Fragment'), pos: { top: '10%', right: '10%' } },
    { id: 'data', icon: Database, color: '#F59E0B', label: t('synccms.hybrid.piece.data', 'Dynamic Data'), pos: { bottom: '10%', left: '10%' } },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '400px' : '500px', 
      background: '#F8FAFC', 
      borderRadius: '20px', 
      position: 'relative', 
      overflow: 'hidden', 
      border: '1px solid #E2E8F0' 
    }}>
      {/* Background Code Streaming */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, overflow: 'hidden', pointerEvents: 'none', fontSize: '0.7rem', fontFamily: 'monospace' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-100, 500] }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', left: `${i * 5}%`, whiteSpace: 'nowrap' }}
          >
            {'<#list items as item> <div> ${item.name} </div> </#list>'.repeat(5)}
          </motion.div>
        ))}
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        scale: isMobile ? 0.8 : 1
      }}>
        {/* Central Assembly Area */}
        <div style={{ width: '280px', height: '360px', border: '2px dashed #CBD5E1', borderRadius: '12px', position: 'relative' }}>
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.5, x: -100, y: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                style={{ position: 'absolute', inset: 0, background: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3B82F6', borderRadius: '10px', display: 'flex', padding: '10px' }}
              >
                <div style={{ fontSize: '0.6rem', color: '#3B82F6' }}>LAYOUT</div>
              </motion.div>
            )}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.5, x: 100, y: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                style={{ position: 'absolute', top: '50px', left: '20px', right: '20px', height: '120px', background: 'rgba(0, 209, 178, 0.1)', border: '2px solid #00D1B2', borderRadius: '8px', padding: '10px' }}
              >
                <div style={{ fontSize: '0.6rem', color: '#00D1B2' }}>FRAGMENT</div>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.5, x: -100, y: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                style={{ position: 'absolute', bottom: '50px', left: '40px', right: '40px', height: '80px', background: 'rgba(245, 158, 11, 0.1)', border: '2px solid #F59E0B', borderRadius: '8px', padding: '10px' }}
              >
                <div style={{ fontSize: '0.6rem', color: '#F59E0B' }}>DATA BINDING</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final Transformation */}
          <AnimatePresence>
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ position: 'absolute', inset: -5, background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #E2E8F0', zIndex: 10 }}
              >
                <div style={{ background: '#3B82F6', height: '40px', width: '100%' }} />
                <div style={{ padding: '20px' }}>
                  <div style={{ width: '60%', height: '15px', background: '#E2E8F0', marginBottom: '10px' }} />
                  <div style={{ width: '100%', height: '80px', background: '#00D1B2', borderRadius: '8px', marginBottom: '15px' }} />
                  <div style={{ width: '100%', height: '10px', background: '#F1F5F9', marginBottom: '5px' }} />
                  <div style={{ width: '90%', height: '10px', background: '#F1F5F9', marginBottom: '5px' }} />
                  <div style={{ width: '40%', height: '10px', background: '#F1F5F9' }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Flying Pieces */}
        {pieces.map((p, i) => (
          <motion.div
            key={p.id}
            animate={step > i ? { opacity: 0.3, scale: 0.8 } : { opacity: 1, scale: 1 }}
            style={{ position: 'absolute', ...p.pos, background: '#FFFFFF', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: `2px solid ${p.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <p.icon size={24} color={p.color} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>{p.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Speed Gauge */}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '250px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 600 }}>RENDERING SPEED</span>
          <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700 }}>{step * 25}% BOOST</span>
        </div>
        <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
          <motion.div 
            animate={{ width: `${step * 25}%` }}
            style={{ height: '100%', background: '#10B981' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default HybridPuzzle;
