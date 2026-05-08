import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './VisualValidationScanner.css';

const VisualValidationScanner = () => {
  const { t } = useTranslation();

  const containerVariants = {
    initial: {},
    hover: {}
  };

  const beamVariants = {
    initial: { top: '0%' },
    hover: {
      top: ['0%', '100%', '0%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const boxVariants = {
    initial: { opacity: 0.3, scale: 1 },
    hover: (i) => ({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.2
      }
    })
  };

  return (
    <motion.div 
      className="vvs-container"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="vvs-wireframe">
        {/* Abstract UI Elements */}
        <div className="vvs-header" />
        <div className="vvs-hero" />
        <div className="vvs-grid">
          {[0, 1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              className="vvs-item" 
              custom={i}
              variants={boxVariants}
            >
              <div className="vvs-item-box" />
              <div className="vvs-item-line" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scanning Beam */}
      <motion.div className="vvs-beam" variants={beamVariants} />

      {/* Overlay Status */}
      <div className="vvs-overlay">
        <div className="vvs-status">
          <span className="vvs-label">{t('usecases.vvs.status.scanning') || 'Scanning...'}</span>
          <span className="vvs-value">99.9%</span>
        </div>
        <div className="vvs-badge">
          {t('usecases.vvs.status.verified') || 'Verified'}
        </div>
      </div>
    </motion.div>
  );
};

export default VisualValidationScanner;
