import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './GlobalFlagSync.css';

const GlobalFlagSync = () => {
  const { t } = useTranslation();

  const countries = [
    'KR', 'US', 'JP', 'CN', 'VN', 
    'DE', 'FR', 'GB', 'IT', 'ES',
    'CA', 'AU', 'BR', 'IN', 'RU'
  ];

  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const flagVariants = {
    initial: { filter: 'grayscale(100%)', opacity: 0.3, scale: 0.8 },
    hover: { 
      filter: 'grayscale(0%)', 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      className="gfs-container"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="gfs-master">
        <motion.div 
          className="gfs-master-icon"
          animate={{
            boxShadow: ['0 0 0px #00d1b2', '0 0 20px #00d1b2', '0 0 0px #00d1b2'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Globe size={24} />
        </motion.div>
        <span className="gfs-master-label">MASTER CMS</span>
      </div>

      <div className="gfs-grid">
        {countries.map((c, i) => (
          <motion.div 
            key={i} 
            className="gfs-flag-node"
            variants={flagVariants}
          >
            <div className="gfs-flag-circle">{c}</div>
          </motion.div>
        ))}
      </div>

      <div className="gfs-overlay">
        <span className="gfs-status">{t('usecases.gfs.status.allupdated') || '15 REGIONS SYNCED'}</span>
      </div>
    </motion.div>
  );
};

export default GlobalFlagSync;
