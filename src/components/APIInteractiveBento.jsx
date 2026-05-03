import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ShieldAlert, FolderTree, PlayCircle, Activity, 
  Bell, Smartphone, Send, AlertTriangle, CheckCircle
} from 'lucide-react';

const APIInteractiveBento = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
      gridAutoRows: 'minmax(200px, auto)',
      gap: isMobile ? '15px' : '20px', 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* 1. Policy Management (Rate Limiting) */}
      <BentoCard 
        title={t('syncapim.bento.policy.title', 'Policy Management')} 
        span={isMobile ? 1 : 1} 
        color="#EF4444"
        isMobile={isMobile}
      >
        <RateLimitSim isMobile={isMobile} />
      </BentoCard>

      {/* 2. API Management (Grouping) */}
      <BentoCard 
        title={t('syncapim.bento.mgmt.title', 'API Management')} 
        span={isMobile ? 1 : 2} 
        color="#3B82F6"
        isMobile={isMobile}
      >
        <GroupingSim isMobile={isMobile} />
      </BentoCard>

      {/* 3. API Testing */}
      <BentoCard 
        title={t('syncapim.bento.test.title', 'API Testing')} 
        span={isMobile ? 1 : 2} 
        color="#00D1B2"
        isMobile={isMobile}
      >
        <TestingSim isMobile={isMobile} />
      </BentoCard>

      {/* 4. Monitoring */}
      <BentoCard 
        title={t('syncapim.bento.monitor.title', 'Real-time Monitoring')} 
        span={isMobile ? 1 : 1} 
        color="#00D1B2"
        isMobile={isMobile}
      >
        <MonitoringSim isMobile={isMobile} />
      </BentoCard>

      {/* 5. Alert System */}
      <BentoCard 
        title={t('syncapim.bento.alert.title', 'Alert System')} 
        span={isMobile ? 1 : 3} 
        color="#F59E0B"
        layout={isMobile ? 'column' : 'row'}
        isMobile={isMobile}
      >
        <AlertSim isMobile={isMobile} />
      </BentoCard>
    </div>
  );
};

const BentoCard = ({ title, children, span, color, layout = 'column', isMobile }) => (
  <motion.div
    whileHover={isMobile ? {} : { y: -5 }}
    style={{
      gridColumn: `span ${span}`,
      background: '#FFFFFF',
      borderRadius: '24px',
      padding: isMobile ? '20px' : '30px',
      border: '1px solid #E2E8F0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: layout,
      gap: isMobile ? '15px' : '20px',
      overflow: 'hidden',
      position: 'relative'
    }}
  >
    <div style={{ flexShrink: 0 }}>
      <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 800, color: '#1E293B', margin: 0 }}>{title}</h4>
      <div style={{ width: '30px', height: '4px', background: color, borderRadius: '2px', marginTop: '10px' }} />
    </div>
    <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      {children}
    </div>
  </motion.div>
);

const RateLimitSim = ({ isMobile }) => {
  const [hover, setHover] = useState(false);
  const size = isMobile ? 80 : 100;
  const radius = isMobile ? 35 : 45;
  const center = isMobile ? 40 : 50;
  const dash = 2 * Math.PI * radius;

  return (
    <div 
      onMouseEnter={() => !isMobile && setHover(true)} 
      onMouseLeave={() => !isMobile && setHover(false)} 
      onClick={() => isMobile && setHover(!hover)}
      style={{ textAlign: 'center' }}
    >
      <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, margin: '0 auto' }}>
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} fill="none" stroke="#F1F5F9" strokeWidth="8" />
          <motion.circle
            cx={center} cy={center} r={radius} fill="none" 
            stroke={hover ? '#EF4444' : '#00D1B2'}
            strokeWidth="8"
            strokeDasharray={dash}
            animate={{ strokeDashoffset: hover ? 0 : dash }}
            transition={{ duration: 1 }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {hover ? <ShieldAlert color="#EF4444" size={isMobile ? 24 : 32} /> : <Activity color="#00D1B2" size={isMobile ? 24 : 32} />}
        </div>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#EF4444', fontSize: '0.7rem', fontWeight: 700, marginTop: '10px' }}>
            429 TOO MANY REQUESTS
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GroupingSim = ({ isMobile }) => {
  const [isGrouped, setIsGrouped] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setIsGrouped(prev => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { id: 1, pos: { x: 0, y: 0 } },
    { id: 2, pos: { x: 30, y: 40 } },
    { id: 3, pos: { x: -40, y: 20 } },
    { id: 4, pos: { x: 60, y: -10 } },
  ];

  return (
    <div style={{ position: 'relative', width: isMobile ? '150px' : '200px', height: '100px' }}>
      <motion.div
        animate={{ scale: isGrouped ? 1.1 : 1, borderColor: isGrouped ? '#3B82F6' : '#E2E8F0' }}
        style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: isMobile ? '60px' : '80px', border: '2px dashed #E2E8F0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FolderTree color="#3B82F6" size={isMobile ? 20 : 24} opacity={isGrouped ? 1 : 0.3} />
      </motion.div>
      {items.map(item => (
        <motion.div
          key={item.id}
          animate={{ x: isGrouped ? (isMobile ? 100 : 130) : item.pos.x, y: isGrouped ? 35 : item.pos.y, opacity: isGrouped ? 0.5 : 1 }}
          style={{ position: 'absolute', width: isMobile ? '24px' : '30px', height: isMobile ? '24px' : '30px', background: '#3B82F6', borderRadius: '6px' }}
        />
      ))}
    </div>
  );
};

const TestingSim = ({ isMobile }) => {
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState(false);

  const runTest = () => {
    setSending(true);
    setResponse(false);
    setTimeout(() => {
      setSending(false);
      setResponse(true);
    }, 1500);
  };

  return (
    <div style={{ width: '100%', background: '#0F172A', borderRadius: '12px', padding: '15px', color: '#FFFFFF', fontFamily: 'monospace', fontSize: isMobile ? '0.7rem' : '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>GET /api/v1/users</span>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={runTest}
          disabled={sending}
          style={{ background: '#00D1B2', border: 'none', borderRadius: '4px', color: '#fff', padding: '2px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}
        >
          <Send size={12} /> {isMobile ? '' : 'SEND'}
        </motion.button>
      </div>
      <div style={{ height: isMobile ? '50px' : '60px', overflow: 'hidden' }}>
        {sending && <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }}>Calling...</motion.div>}
        {response && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ color: '#00D1B2' }}>Status: 200</div>
            <div style={{ color: '#94A3B8', fontSize: '0.65rem' }}>{`{ "id": 1, ... }`}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const MonitoringSim = ({ isMobile }) => {
  return (
    <div style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
      {[40, 60, 45, 90, 50, 40, 30, 80, 40].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 + Math.random() }}
          style={{ flex: 1, background: '#00D1B2', borderRadius: '2px 2px 0 0' }}
        />
      ))}
    </div>
  );
};

const AlertSim = ({ isMobile }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setAlert(prev => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', alignItems: 'center', gap: isMobile ? '20px' : '40px' }}>
      <div style={{ position: 'relative' }}>
        <Smartphone size={isMobile ? 60 : 80} color={alert ? '#EF4444' : '#94A3B8'} />
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ 
                position: 'absolute', 
                top: isMobile ? '-40px' : '-10px', 
                left: isMobile ? '10px' : '20px', 
                background: '#EF4444', 
                color: '#FFF', 
                padding: '10px', 
                borderRadius: '12px', 
                fontSize: '0.65rem', 
                fontWeight: 800, 
                width: isMobile ? '100px' : '120px', 
                boxShadow: '0 10px 15px rgba(239, 68, 68, 0.3)',
                zIndex: 10
              }}
            >
              LATENCY SPIKE!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ width: '100%' }}>
        <motion.div 
          animate={{ x: alert ? [0, -5, 5, -5, 5, 0] : 0 }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '10px' : '15px', 
            padding: isMobile ? '12px' : '20px', 
            background: alert ? '#FEF2F2' : '#F8FAFC', 
            borderRadius: '16px', 
            border: `1px solid ${alert ? '#FEE2E2' : '#F1F5F9'}` 
          }}
        >
          <div style={{ background: alert ? '#EF4444' : '#10B981', borderRadius: '50%', display: 'flex', padding: isMobile ? '8px' : '10px' }}>
            {alert ? <AlertTriangle color="#FFF" size={isMobile ? 16 : 24} /> : <CheckCircle color="#FFF" size={isMobile ? 16 : 24} />}
          </div>
          <div>
            <div style={{ fontSize: isMobile ? '0.8rem' : '1rem', fontWeight: 800, color: alert ? '#B91C1C' : '#065F46' }}>{alert ? 'Anomaly' : 'Healthy'}</div>
            <div style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', color: alert ? '#EF4444' : '#059669' }}>{alert ? 'Check latency' : 'System OK'}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default APIInteractiveBento;
