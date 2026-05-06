import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

const CompanyDarkMap = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', position: 'relative', border: '1px solid #E2E8F0' }}>
      {/* Mock Map Background (Dark) */}
      <div style={{ position: 'absolute', inset: 0, background: '#F8FAFC', backgroundImage: 'radial-gradient(#E2E8F0 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
        {/* Simple Road Lines */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '10px', background: '#E2E8F0' }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '10px', background: '#E2E8F0' }} />
      </div>

      {/* Ping Marker */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <motion.div
          animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', inset: -20, background: 'rgba(0, 209, 178, 0.4)', borderRadius: '50%' }}
        />
        <div style={{ position: 'relative', background: '#00D1B2', p: '10px', borderRadius: '50%', display: 'flex', padding: '10px', boxShadow: '0 0 20px #00D1B2' }}>
          <MapPin color="#FFF" size={24} />
        </div>
      </div>

      {/* Location Info Card (Glassmorphism) */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        style={{ 
          position: 'absolute', bottom: '30px', left: '30px', 
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
          border: '1px solid #E2E8F0', borderRadius: '20px',
          padding: '30px', width: '350px', color: '#0F172A', zIndex: 10
        }}
      >
        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>{t('company.location.office', 'Empasy HQ')}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <MapPin size={18} color="#00D1B2" />
            <div style={{ fontSize: '0.85rem' }}>
              {t('company.location.address', 'Seoul, Republic of Korea')}
              <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginTop: '4px' }}>Tech Center Tower A, 452</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Phone size={18} color="#00D1B2" />
            <div style={{ fontSize: '0.85rem' }}>+82 2-1234-5678</div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Mail size={18} color="#00D1B2" />
            <div style={{ fontSize: '0.85rem' }}>contact@empasy.com</div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          style={{ 
            marginTop: '25px', width: '100%', background: '#00D1B2', color: '#0F172A',
            border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 800,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
          }}
        >
          <Navigation size={18} /> {t('company.location.directions', 'Get Directions')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CompanyDarkMap;
