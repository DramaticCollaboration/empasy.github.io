import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RefreshCw, Database, Cpu, Zap, TrendingUp } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

const EtaAILoop = () => {
  const { t } = useTranslation();
  const [accuracy, setAccuracy] = useState(65);
  const [chartData, setChartData] = useState([
    { val: 60 }, { val: 62 }, { val: 65 }
  ]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: t('synceta.loop.step.feedback', 'Feedback'), icon: RefreshCw },
    { name: t('synceta.loop.step.collection', 'Data Collection'), icon: Database },
    { name: t('synceta.loop.step.training', 'AI Training'), icon: Cpu },
    { name: t('synceta.loop.step.optimized', 'Optimized Test'), icon: Zap },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeStep === 3) {
      setTimeout(() => {
        const nextVal = Math.min(99, accuracy + Math.floor(Math.random() * 5 + 1));
        setAccuracy(nextVal);
        setChartData(prev => [...prev.slice(-10), { val: nextVal }]);
      }, 500);
    }
  }, [activeStep]);

  return (
    <div style={{ width: '100%', height: '500px', background: '#F8FAFC', borderRadius: '24px', padding: '40px', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Infinite Loop Track (SVG) */}
      <svg style={{ position: 'absolute', width: '600px', height: '300px' }} viewBox="0 0 600 300">
        <ellipse cx="300" cy="150" rx="250" ry="120" fill="none" stroke="#E2E8F0" strokeWidth="4" />
        {/* Active Segment Highlight */}
        <motion.ellipse
          cx="300" cy="150" rx="250" ry="120" fill="none" stroke="#00D1B2" strokeWidth="4"
          strokeDasharray="300, 1200"
          animate={{ strokeDashoffset: -activeStep * 300 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </svg>

      {/* Steps along the loop */}
      <div style={{ position: 'relative', width: '600px', height: '300px' }}>
        {steps.map((step, i) => {
          const angle = (i * 90) * (Math.PI / 180);
          const x = 300 + Math.cos(angle) * 250 - 40;
          const y = 150 + Math.sin(angle) * 120 - 40;
          const isActive = activeStep === i;

          return (
            <motion.div
              key={i}
              animate={{ 
                scale: isActive ? 1.2 : 1,
                boxShadow: isActive ? '0 0 8px rgba(8,145,178,0.3)' : 'none'
              }}
              style={{ 
                position: 'absolute', left: x, top: y, width: '80px', height: '80px', 
                background: isActive ? '#0891B2' : '#E2E8F0', borderRadius: '50%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, border: '2px solid #E2E8F0'
              }}
            >
              <step.icon color={isActive ? '#FFFFFF' : '#94A3B8'} size={24} />
              <div style={{ fontSize: '0.6rem', fontWeight: 800, color: isActive ? '#FFFFFF' : '#94A3B8', textAlign: 'center', marginTop: '5px' }}>
                {step.name}
              </div>
            </motion.div>
          );
        })}

        {/* Central Accuracy Chart */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.1em' }}>{t('synceta.loop.metric.accuracy', 'AI ACCURACY')}</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A' }}>{accuracy}%</div>
          <div style={{ height: '60px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="val" stroke="#10B981" strokeWidth={3} dot={false} isAnimationActive={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Learning Status */}
      <AnimatePresence>
        {activeStep === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', top: '30px', background: 'rgba(0, 209, 178, 0.2)', color: '#00D1B2', padding: '10px 20px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #00D1B2' }}
          >
            <TrendingUp size={16} /> {t('synceta.loop.status.learning', 'AI MODEL EVOLVING...')}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EtaAILoop;
