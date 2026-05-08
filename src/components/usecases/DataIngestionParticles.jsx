import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mic, MessageSquare, FileText, User } from 'lucide-react';
import './DataIngestionParticles.css';

const DataIngestionParticles = () => {
  const { t } = useTranslation();

  const particles = Array.from({ length: 20 });

  return (
    <div className="dip-container">
      <div className="dip-sources">
        <Mic size={16} className="dip-icon" />
        <MessageSquare size={16} className="dip-icon" />
        <FileText size={16} className="dip-icon" />
        <User size={16} className="dip-icon" />
      </div>

      <div className="dip-stream">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="dip-particle"
            initial={{ left: '-10%', top: `${Math.random() * 100}%`, opacity: 0 }}
            whileHover={{
              left: '110%',
              opacity: [0, 1, 1, 0],
              transition: {
                duration: 1 + Math.random() * 1.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="dip-hub">
        <motion.div 
          className="dip-core"
          whileHover={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 10px #00d1b2',
              '0 0 30px #00d1b2',
              '0 0 10px #00d1b2'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        />
        <span className="dip-hub-label">AI HUB</span>
      </div>

      <div className="dip-footer">
        <span className="dip-status">{t('usecases.dip.process.ingesting') || 'Ingesting Data...'}</span>
      </div>
    </div>
  );
};

export default DataIngestionParticles;
