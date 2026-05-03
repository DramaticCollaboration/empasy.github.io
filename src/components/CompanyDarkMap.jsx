import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';

const CompanyDarkMap = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{ width: '100%', height: isMobile ? '600px' : '500px', borderRadius: '24px', overflow: 'hidden', position: 'relative', border: '1px solid #334155' }}>
      {/* Google Maps Embed */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.44464879201!2d126.8833139766946!3d37.47385637206198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61f2231925b3%3A0xc6c76a4a49c46481!2z7ISc7Jq47Yq567OE7IucIOq4iOyynOq1rCDqsIDsgrDrlJTripDthLwx66GcIDIwNS0yNw!5e0!3m2!1sko!2skr!4v1714782000000!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.8) invert(0.9) contrast(1.2) brightness(0.8)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Empasy Office Location"
        />
      </div>

      {/* Location Info Card (Glassmorphism) */}
      <motion.div 
        initial={isMobile ? { y: 20, opacity: 0 } : { x: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        style={{ 
          position: 'absolute', 
          bottom: isMobile ? '20px' : '30px', 
          right: isMobile ? '10px' : '30px', 
          left: isMobile ? '10px' : 'auto',
          background: 'rgba(30, 41, 59, 0.85)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', 
          padding: isMobile ? '20px' : '30px', 
          width: isMobile ? 'auto' : '380px', 
          color: '#E2E8F0', zIndex: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: isMobile ? '15px' : '20px', color: '#FFF' }}>{t('company.location.office', 'Empasy HQ')}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <MapPin size={20} color="#00D1B2" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
              {t('company.location.address', '서울특별시 금천구 가산디지털1로 205-27 2층 208호')}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Phone size={18} color="#00D1B2" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.9rem' }}>0507-1360-8169</div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Mail size={18} color="#00D1B2" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.9rem' }}>poh@empasy.com</div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('https://maps.google.com/maps?daddr=서울특별시+금천구+가산디지털1로+205-27', '_blank')}
          style={{ 
            marginTop: '25px', width: '100%', background: '#00D1B2', color: '#0F172A',
            border: 'none', borderRadius: '8px', padding: '14px', fontWeight: 800,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            fontSize: '1rem'
          }}
        >
          <Navigation size={18} /> {t('company.location.directions', 'Get Directions')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CompanyDarkMap;
