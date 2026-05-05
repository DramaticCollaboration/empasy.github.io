import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Monitor, Smartphone, Store, Share2, 
  Cpu, Link as LinkIcon, CheckCircle
} from 'lucide-react';

const LogiHeadlessSim = () => {
  const { t } = useTranslation();
  const [connectedChannels, setConnectedChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);

  const channels = [
    { id: 'web', icon: Monitor, label: 'PC Web', color: '#3B82F6' },
    { id: 'app', icon: Smartphone, label: 'Mobile App', color: '#A855F7' },
    { id: 'kiosk', icon: Store, label: 'Kiosk', color: '#F59E0B' },
    { id: 'social', icon: Share2, label: 'Social', color: '#EF4444' },
  ];

  const handleConnect = (id) => {
    if (connectedChannels.includes(id)) return;
    setActiveChannel(id);
    setConnectedChannels(prev => [...prev, id]);
    setTimeout(() => setActiveChannel(null), 2000);
  };

  return (
    <div style={{ width: '100%', height: '600px', background: '#F8FAFC', borderRadius: '24px', padding: '40px', border: '1px solid #E2E8F0', display: 'flex', gap: '40px', position: 'relative', overflow: 'hidden' }}>
      {/* 1. Channel Icons (Left) */}
      <div style={{ width: '180px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 10 }}>
        <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em', marginBottom: '10px' }}>CHANNELS</h5>
        {channels.map((ch) => (
          <motion.div
            key={ch.id}
            whileHover={{ x: 5 }}
            onClick={() => handleConnect(ch.id)}
            style={{ 
              background: '#FFFFFF', padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0',
              display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
              boxShadow: connectedChannels.includes(ch.id) ? `0 0 15px ${ch.color}22` : '0 2px 4px rgba(0,0,0,0.02)',
              opacity: connectedChannels.includes(ch.id) ? 0.6 : 1
            }}
          >
            <ch.icon color={ch.color} size={20} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E293B' }}>{ch.label}</span>
          </motion.div>
        ))}
      </div>

      {/* 2. Central Core Cube (Center) */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <motion.div
            animate={{ 
              rotateY: 360,
              scale: activeChannel ? [1, 1.1, 1] : 1,
              boxShadow: connectedChannels.length > 0 ? '0 0 50px rgba(0,209,178,0.3)' : 'none'
            }}
            style={{
              width: '150px', height: '150px', background: '#00D1B2', borderRadius: '24px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: '#FFFFFF', position: 'relative', zIndex: 20
            }}
          >
            <Cpu size={48} />
            <div style={{ fontSize: '0.7rem', fontWeight: 900, marginTop: '10px' }}>CORE API</div>
          </motion.div>

          {/* Connection Lines */}
          <svg style={{ position: 'absolute', inset: -300, width: '600px', height: '600px', pointerEvents: 'none' }}>
            {connectedChannels.map((id, index) => {
              const ch = channels.find(c => c.id === id);
              const chIndex = channels.findIndex(c => c.id === id);
              return (
                <motion.line
                  key={id}
                  x1="152" y1={180 + chIndex * 66} // Approximate from sidebar
                  x2="320" y2="380" // Center of SVG
                  stroke={ch.color}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  style={{ transform: 'translate(0, 0)' }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* 3. Preview UI (Right) */}
      <div style={{ width: '300px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)' }}>
        <h5 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8' }}>LIVE PREVIEW</h5>
        <div style={{ flex: 1, border: '1px dashed #E2E8F0', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {connectedChannels.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD5E1', fontSize: '0.8rem', textAlign: 'center', padding: '20px' }}>
                Connect a channel to see synchronized interface
              </motion.div>
            ) : (
              <motion.div 
                key={connectedChannels[connectedChannels.length - 1]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                style={{ height: '100%', padding: '15px' }}
              >
                <div style={{ height: '20px', background: '#F1F5F9', borderRadius: '4px', marginBottom: '10px' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                  <div style={{ height: '80px', background: '#E2E8F0', borderRadius: '8px' }} />
                  <div style={{ height: '80px', background: '#E2E8F0', borderRadius: '8px' }} />
                </div>
                <div style={{ height: '10px', background: '#F1F5F9', width: '80%', marginBottom: '5px' }} />
                <div style={{ height: '10px', background: '#F1F5F9', width: '60%' }} />
                
                <div style={{ position: 'absolute', bottom: '15px', left: '15px', right: '15px' }}>
                  <div style={{ background: channels.find(c => c.id === connectedChannels[connectedChannels.length-1]).color, height: '35px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.75rem', fontWeight: 700 }}>
                    ORDER NOW
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {activeChannel && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            style={{ 
              position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
              background: '#0F172A', color: '#FFF', padding: '12px 25px', borderRadius: '50px',
              display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 600, zIndex: 100
            }}
          >
            <CheckCircle size={18} color="#00D1B2" />
            {channels.find(c => c.id === activeChannel).label} Interface Synchronized!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogiHeadlessSim;
