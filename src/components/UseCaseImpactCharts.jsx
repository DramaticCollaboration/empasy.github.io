import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TrendingDown, Zap, Clock, Sparkles } from 'lucide-react';

const UseCaseImpactCharts = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    { 
      id: 'tc', 
      label: t('usecases.impact.chart1.desc', 'TC Creation Saved'), 
      value: 80, 
      suffix: '%',
      icon: Clock,
      color: '#00D1B2' 
    },
    { 
      id: 'cost', 
      label: t('usecases.impact.chart2.desc', 'Cost Reduction'), 
      value: 45, 
      suffix: '%',
      icon: TrendingDown,
      color: '#3B82F6' 
    },
    { 
      id: 'latency', 
      label: t('usecases.impact.chart3.desc', 'Zero Latency'), 
      value: 0.8, 
      suffix: 'ms',
      icon: Zap,
      color: '#F59E0B' 
    }
  ];

  return (
    <div ref={ref} style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', padding: '40px 0' }}>
      {metrics.map((m, i) => (
        <MetricRadial key={m.id} metric={m} delay={i * 0.2} active={isInView} />
      ))}
    </div>
  );

};

const MetricRadial = ({ metric, delay, active }) => {
  const [count, setCount] = useState(0);
  const Icon = metric.icon;

  useEffect(() => {
    if (active) {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const stepTime = 20;
      const increment = (end / duration) * stepTime;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [active, metric.value]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(count, 100) / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      style={{
        textAlign: 'center', width: '220px',
        background: '#FFFFFF', borderRadius: '20px',
        border: '1px solid #E2E8F0',
        padding: '30px 20px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)'
      }}
    >
      <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 20px' }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="12" />
          <motion.circle
            cx="80" cy="80" r={radius} fill="none"
            stroke={metric.color}
            strokeWidth="12"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={active ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 2, ease: 'easeOut', delay }}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={24} color={metric.color} style={{ marginBottom: '5px' }} />
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A' }}>
            {metric.id === 'latency' ? count.toFixed(1) : Math.floor(count)}{metric.suffix}
          </div>
        </div>
      </div>
      <div style={{ color: '#0F172A', fontSize: '0.9rem', fontWeight: 700, marginBottom: '5px' }}>{metric.label}</div>
      <div style={{ color: '#94A3B8', fontSize: '0.7rem' }}>Validated by enterprise use-cases</div>
    </motion.div>
  );
};

export default UseCaseImpactCharts;
