import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History, ShieldCheck } from 'lucide-react';

const TimeMachineSlider = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(100);
  const [isRestored, setIsRestored] = useState(false);

  const versions = {
    0: {
      title: t('synccms.history.content.title_old', 'Coming Soon'),
      date: t('synccms.history.slider.past', 'Yesterday'),
      opacity: 0.5,
      grayscale: 1,
    },
    50: {
      title: t('synccms.history.content.title_mid', 'Testing Phase'),
      date: '3 Hours Ago',
      opacity: 0.8,
      grayscale: 0.5,
    },
    100: {
      title: t('synccms.history.content.title_new', 'New Product Launch!'),
      date: t('synccms.history.slider.current', 'Current'),
      opacity: 1,
      grayscale: 0,
    }
  };

  const getActiveVersion = (val) => {
    if (val < 25) return versions[0];
    if (val < 75) return versions[50];
    return versions[100];
  };

  const active = getActiveVersion(value);

  const handleRestore = () => {
    setIsRestored(true);
    setTimeout(() => setIsRestored(false), 2000);
  };

  return (
    <div style={{ width: '100%', height: '500px', background: '#FFFFFF', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      {/* Content Canvas */}
      <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <motion.div
          animate={{ opacity: active.opacity, filter: `grayscale(${active.grayscale})` }}
          style={{ width: '100%' }}
        >
          <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '5px', fontWeight: 600 }}>{active.date}</div>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '15px' }}>{active.title}</h3>
          <div style={{ width: '100%', height: '200px', background: '#E2E8F0', borderRadius: '8px', marginBottom: '20px', backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover' }} />
          <p style={{ color: '#475569', lineHeight: 1.6 }}>
            {t('synccms.history.content.body', 'Empowering businesses with agile content management solutions that scale globally.')}
          </p>
        </motion.div>

        {/* Restore Stamp */}
        <AnimatePresence>
          {isRestored && (
            <motion.div
              initial={{ scale: 2, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: -15 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '4px solid #EF4444',
                color: '#EF4444',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '0.1em',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                pointerEvents: 'none'
              }}
            >
              {t('synccms.history.status.restored', 'DATA RESTORED')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider Area */}
      <div style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem' }}>
            <History size={16} />
            <span>{t('synccms.history.slider.label', 'Slide to travel in time')}</span>
          </div>
          <button 
            onClick={handleRestore}
            style={{ 
              background: '#00D1B2', color: '#FFFFFF', border: 'none', 
              padding: '8px 20px', borderRadius: '8px', fontSize: '0.85rem', 
              fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' 
            }}
          >
            <ShieldCheck size={16} />
            {t('synccms.history.btn.restore', 'Restore This Version')}
          </button>
        </div>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={setValue}
          trackStyle={{ backgroundColor: '#00D1B2', height: 8 }}
          railStyle={{ backgroundColor: '#E2E8F0', height: 8 }}
          handleStyle={{
            borderColor: '#00D1B2',
            height: 24,
            width: 24,
            marginLeft: -12,
            marginTop: -8,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          marks={{
            0: versions[0].date,
            50: versions[50].date,
            100: versions[100].date
          }}
        />
      </div>
    </div>
  );
};

export default TimeMachineSlider;
