import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, ShieldAlert, Zap } from 'lucide-react';
import './ShieldDefenseDashboard.css';

const ShieldDefenseDashboard = () => {
  const { t } = useTranslation();

  const normalPackets = Array.from({ length: 8 });
  const maliciousPackets = Array.from({ length: 4 });

  return (
    <div className="sdd-container">
      <div className="sdd-shield-area">
        <motion.div 
          className="sdd-shield"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield size={60} />
        </motion.div>
        
        {/* Normal Traffic */}
        {normalPackets.map((_, i) => (
          <motion.div
            key={`n-${i}`}
            className="sdd-packet normal"
            initial={{ x: -100, y: Math.random() * 100 - 50, opacity: 0 }}
            whileHover={{
              x: 0,
              opacity: [0, 1, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }
            }}
          />
        ))}

        {/* Malicious Traffic */}
        {maliciousPackets.map((_, i) => (
          <motion.div
            key={`m-${i}`}
            className="sdd-packet malicious"
            initial={{ x: 100, y: Math.random() * 100 - 50, opacity: 0 }}
            whileHover={{
              x: 20,
              opacity: [0, 1, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.5
              }
            }}
          />
        ))}
      </div>

      <div className="sdd-stats">
        <div className="sdd-stat-item">
          <Zap size={12} />
          <span>Latency: 0.02ms</span>
        </div>
        <div className="sdd-stat-item alert">
          <ShieldAlert size={12} />
          <span>Blocked: 24</span>
        </div>
      </div>

      <div className="sdd-footer">
        <span className="sdd-status">{t('usecases.sdd.alert.monitoring') || 'LIVE MONITORING'}</span>
      </div>
    </div>
  );
};

export default ShieldDefenseDashboard;
