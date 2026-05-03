import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '../hooks/useMediaQuery';

const CompanyProjectFadeIn = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const milestones = [
    {
      year: '2020',
      title: t('company.milestones.2020.title', 'SyncCMS Launched'),
      desc: 'Enterprise Content Management Solution',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      color: '#3B82F6'
    },
    {
      year: '2023',
      title: t('company.milestones.2023.title', 'SyncBoot Launched'),
      desc: 'Microservice-based Rapid Development Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      color: '#00D1B2'
    },
    {
      year: '2025',
      title: t('company.milestones.2025.title', 'LG Global Portal'),
      desc: 'Scale-out to 15 countries with SyncSeries',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      color: '#F59E0B'
    }
  ];

  return (
    <div style={{ width: '100%', padding: isMobile ? '50px 0' : '100px 0' }}>
      {milestones.map((ms, i) => (
        <MilestoneItem key={ms.year} item={ms} index={i} isMobile={isMobile} />
      ))}
    </div>
  );
};

const MilestoneItem = ({ item, index, isMobile }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  return (
    <div 
      ref={ref} 
      style={{ 
        display: 'flex', 
        minHeight: isMobile ? 'auto' : '600px', 
        alignItems: 'center', 
        gap: isMobile ? '30px' : '60px', 
        opacity: isInView ? 1 : 0.2, 
        transition: 'opacity 0.8s', 
        flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
        marginBottom: isMobile ? '80px' : '0'
      }}
    >
      {/* Text Side */}
      <div style={{ flex: 1, textAlign: isMobile ? 'center' : (index % 2 === 0 ? 'right' : 'left'), width: '100%' }}>
        <motion.div
          initial={{ x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50), y: isMobile ? 20 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 900, color: item.color, lineHeight: 1 }}>{item.year}</div>
          <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 800, color: '#1E293B', margin: '15px 0' }}>{item.title}</h3>
          <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', color: '#64748B', maxWidth: '400px', margin: isMobile ? '0 auto' : (index % 2 === 0 ? '0 0 0 auto' : '0 auto 0 0') }}>{item.desc}</p>
        </motion.div>
      </div>

      {/* Timeline Center - Hide on mobile if preferred, or adjust */}
      {!isMobile && (
        <div style={{ width: '2px', height: '600px', background: '#E2E8F0', position: 'relative' }}>
          <motion.div 
            animate={{ height: isInView ? '100%' : '0%' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: item.color }} 
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', borderRadius: '50%', background: '#FFF', border: `4px solid ${item.color}`, zIndex: 10 }} />
        </div>
      )}

      {/* Image Side */}
      <div style={{ flex: 1.5, width: '100%' }}>
        <AnimatePresence>
          {isInView && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{ 
                width: '100%', height: isMobile ? '250px' : '400px', borderRadius: '24px', 
                overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                background: `url(${item.image}) center/cover`
              }}
            >
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(to bottom, transparent, ${item.color}22)` }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const useInView = (ref, options) => {
  const [isInView, setIsInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return isInView;
};

export default CompanyProjectFadeIn;
