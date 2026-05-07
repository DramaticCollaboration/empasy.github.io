import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Truck, Zap, Navigation, Clock, ShieldCheck } from 'lucide-react';

const LogiRouteOptimization = () => {
  const { t } = useTranslation();
  const [isOptimized, setIsOptimized] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleOptimize = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsOptimized(true);
    }, 2000);
  };

  const nodes = [
    { id: 1, x: 100, y: 100, label: 'HUB' },
    { id: 2, x: 250, y: 50 },
    { id: 3, x: 400, y: 150 },
    { id: 4, x: 450, y: 300 },
    { id: 5, x: 200, y: 350 },
    { id: 6, x: 50, y: 250 },
  ];

  return (
    <div style={{ width: '100%', height: '500px', background: '#F8FAFC', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
      {/* Map Background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Routes SVG */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <AnimatePresence>
          {!isOptimized && !isAnalyzing && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Tangled AS-IS Lines */}
              <path d="M 100,100 L 400,150 L 250,50 L 450,300 L 50,250 L 200,350 Z" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
            </motion.g>
          )}
          {isOptimized && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Optimized TO-BE Lines */}
              <motion.path 
                d="M 100,100 L 250,50 L 400,150 L 450,300 L 200,350 L 50,250 Z" 
                fill="none" stroke="#00D1B2" strokeWidth="3"
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
            <MapPin color={node.label === 'HUB' ? '#00D1B2' : '#94A3B8'} size={node.label === 'HUB' ? 32 : 20} />
            {node.label === 'HUB' && (
              <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', background: '#00D1B2', color: '#0F172A', fontSize: '0.6rem', fontWeight: 900, padding: '2px 6px', borderRadius: '4px' }}>
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
            style={{ position: 'absolute', top: 0, bottom: 0, width: '100px', background: 'linear-gradient(90deg, transparent, rgba(0,209,178,0.2), transparent)', borderRight: '2px solid #00D1B2', zIndex: 30 }}
          />
        )}
      </AnimatePresence>

      {/* Controls & Stats */}
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', zIndex: 40 }}>
        {!isOptimized ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOptimize}
            disabled={isAnalyzing}
            style={{ 
              background: '#00D1B2', color: '#0F172A', border: 'none', 
              padding: '12px 30px', borderRadius: '50px', fontWeight: 800, 
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 10px 20px rgba(0,209,178,0.3)'
            }}
          >
            {isAnalyzing ? t('commercelogi.route.status.analyzing', 'ANALYZING...') : (
              <>
                <Zap size={18} /> {t('commercelogi.route.action.optimize', 'AI OPTIMIZE')}
              </>
            )}
          </motion.button>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ background: 'rgba(0, 209, 178, 0.1)', border: '1px solid #00D1B2', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={16} color="#00D1B2" />
              <div style={{ color: '#0F172A', fontSize: '0.8rem', fontWeight: 700 }}>Time: -22%</div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Navigation size={16} color="#3B82F6" />
              <div style={{ color: '#0F172A', fontSize: '0.8rem', fontWeight: 700 }}>Dist: -18%</div>
            </motion.div>
            <button onClick={() => setIsOptimized(false)} style={{ background: 'transparent', border: 'none', color: '#94A3B8', fontSize: '0.7rem', textDecoration: 'underline', cursor: 'pointer' }}>Reset</button>
          </div>
        )}
      </div>

      <div style={{ position: 'absolute', top: '20px', right: '20px', textAlign: 'right' }}>
        <div style={{ color: isOptimized ? '#00D1B2' : '#EF4444', fontSize: '0.7rem', fontWeight: 800 }}>
          {isOptimized ? 'ROUTE OPTIMIZED' : 'INEFFICIENT ROUTES DETECTED'}
        </div>
      </div>
    </div>
  );
};

export default LogiRouteOptimization;
