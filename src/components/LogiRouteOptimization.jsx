import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Zap, Navigation, Clock } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';

const LogiRouteOptimization = () => {
  const { t } = useTranslation();
  const [isOptimized, setIsOptimized] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleOptimize = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsOptimized(true);
    }, 2000);
  };

  const nodes = [
    { id: 1, x: '20%', y: '25%', label: 'HUB' },
    { id: 2, x: '50%', y: '15%' },
    { id: 3, x: '80%', y: '35%' },
    { id: 4, x: '85%', y: '65%' },
    { id: 5, x: '45%', y: '80%' },
    { id: 6, x: '15%', y: '60%' },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '400px' : '500px', 
      background: '#0F172A', 
      borderRadius: '24px', 
      position: 'relative', 
      overflow: 'hidden', 
      border: '1px solid #334155' 
    }}>
      {/* Map Background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Routes SVG */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <AnimatePresence>
          {!isOptimized && !isAnalyzing && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Tangled AS-IS Lines */}
              <path d="M 20,25 L 80,35 L 50,15 L 85,65 L 15,60 L 45,80 Z" fill="none" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="1,1" />
            </motion.g>
          )}
          {isOptimized && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Optimized TO-BE Lines */}
              <motion.path 
                d="M 20,25 L 50,15 L 80,35 L 85,65 L 45,80 L 15,60 Z" 
                fill="none" stroke="#00D1B2" strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div key={node.id} style={{ position: 'absolute', left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}>
          <div style={{ position: 'relative' }}>
            <MapPin color={node.label === 'HUB' ? '#00D1B2' : '#94A3B8'} size={isMobile ? 16 : 20} />
            {node.label === 'HUB' && (
              <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: '#00D1B2', color: '#0F172A', fontSize: '0.5rem', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>
                HUB
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Analysis Scanner */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ left: '0%' }}
            animate={{ left: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'linear' }}
            style={{ position: 'absolute', top: 0, bottom: 0, width: '50px', background: 'linear-gradient(90deg, transparent, rgba(0,209,178,0.2), transparent)', borderRight: '2px solid #00D1B2', zIndex: 30 }}
          />
        )}
      </AnimatePresence>

      {/* Controls & Stats */}
      <div style={{ position: 'absolute', bottom: isMobile ? '20px' : '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', zIndex: 40, width: '90%' }}>
        {!isOptimized ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOptimize}
            disabled={isAnalyzing}
            style={{ 
              background: '#00D1B2', color: '#0F172A', border: 'none', 
              padding: isMobile ? '10px 20px' : '12px 30px', borderRadius: '50px', fontWeight: 800, 
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 10px 20px rgba(0,209,178,0.3)',
              fontSize: isMobile ? '0.8rem' : '1rem'
            }}
          >
            {isAnalyzing ? t('commercelogi.route.status.analyzing', 'ANALYZING...') : (
              <>
                <Zap size={isMobile ? 16 : 18} /> {t('commercelogi.route.action.optimize', 'AI OPTIMIZE')}
              </>
            )}
          </motion.button>
        ) : (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ background: 'rgba(0, 209, 178, 0.1)', border: '1px solid #00D1B2', padding: isMobile ? '6px 12px' : '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={isMobile ? 14 : 16} color="#00D1B2" />
              <div style={{ color: '#E2E8F0', fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700 }}>Time: -22%</div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', padding: isMobile ? '6px 12px' : '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Navigation size={isMobile ? 14 : 16} color="#3B82F6" />
              <div style={{ color: '#E2E8F0', fontSize: isMobile ? '0.65rem' : '0.8rem', fontWeight: 700 }}>Dist: -18%</div>
            </motion.div>
            <button onClick={() => setIsOptimized(false)} style={{ background: 'transparent', border: 'none', color: '#94A3B8', fontSize: '0.65rem', textDecoration: 'underline', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>Reset</button>
          </div>
        )}
      </div>

      <div style={{ position: 'absolute', top: '15px', right: '15px', textAlign: 'right' }}>
        <div style={{ color: isOptimized ? '#00D1B2' : '#EF4444', fontSize: isMobile ? '0.55rem' : '0.7rem', fontWeight: 800 }}>
          {isOptimized ? 'ROUTE OPTIMIZED' : 'INEFFICIENT ROUTES DETECTED'}
        </div>
      </div>
    </div>
  );
};

export default LogiRouteOptimization;
