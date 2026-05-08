import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './SafeVaultMotion.css';

const SafeVaultMotion = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  const startAnimation = async () => {
    // Reset
    setCount(0);
    
    // Counter animation
    let start = 0;
    const end = 65000;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    requestAnimationFrame(updateCounter);

    // Vault Door Animation
    await controls.start("open");
  };

  const vaultVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { 
      rotate: 180, 
      scale: 1.1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const lightVariants = {
    closed: { opacity: 0 },
    open: { 
      opacity: [0, 1, 0.5],
      transition: { delay: 1, duration: 1 }
    }
  };

  return (
    <motion.div 
      className="svm-container"
      onMouseEnter={startAnimation}
    >
      <div className="svm-vault-area">
        <motion.div 
          className="svm-vault-door"
          variants={vaultVariants}
          animate={controls}
          initial="closed"
        >
          <div className="svm-vault-handle" />
          <div className="svm-vault-inner-circle" />
        </motion.div>
        <motion.div 
          className="svm-vault-light"
          variants={lightVariants}
          animate={controls}
          initial="closed"
        />
      </div>

      <div className="svm-info">
        <div className="svm-counter">
          <span className="svm-number">{count.toLocaleString()}+</span>
          <span className="svm-unit">{t('usecases.svm.metrics.users') || 'USERS'}</span>
        </div>
        <div className="svm-status">
          <div className="svm-status-dot" />
          <span>{t('usecases.svm.security.access') || 'ACCESS GRANTED'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SafeVaultMotion;
