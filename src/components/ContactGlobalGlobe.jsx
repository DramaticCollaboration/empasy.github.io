import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, Float, Html, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const GlobalNode = ({ position, name, timeZone, phone, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  const [localTime, setLocalTime] = useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      setLocalTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <group position={position}>
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={hovered ? '#FFFFFF' : '#00D1B2'} />
      </mesh>
      
      {/* Ping Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.12, 32]} />
        <motion.meshBasicMaterial 
          transparent 
          color="#00D1B2" 
          animate={{ scale: [1, 3], opacity: [0.6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </mesh>

      <Html distanceFactor={10}>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(10px)',
                color: '#FFF',
                padding: isMobile ? '12px' : '20px',
                borderRadius: '16px',
                fontSize: isMobile ? '0.7rem' : '0.8rem',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(0, 209, 178, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                pointerEvents: 'none',
                minWidth: isMobile ? '150px' : '200px'
              }}
            >
              <div style={{ fontWeight: 900, fontSize: '1rem', color: '#00D1B2', marginBottom: '10px' }}>{name}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2E8F0' }}>
                  <Clock size={14} color="#00D1B2" />
                  <span>Local Time: {localTime}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2E8F0' }}>
                  <Phone size={14} color="#00D1B2" />
                  <span>{phone}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </group>
  );
};

const ContactGlobalGlobe = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const locations = [
    { name: 'Seoul HQ', pos: [1.3, 0.8, 1.5], tz: 'Asia/Seoul', phone: '+82 0507-1360-8169' },
    { name: 'California Office', pos: [-1.8, 0.5, 0.8], tz: 'America/Los_Angeles', phone: 'Preparing' },
    { name: 'Tokyo Office', pos: [1.6, 0.6, 1.2], tz: 'Asia/Tokyo', phone: 'Preparing' },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? '350px' : '500px', 
      background: 'radial-gradient(circle at center, #0F172A 0%, #020617 100%)', 
      borderRadius: '24px', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <Canvas camera={{ position: [0, 0, isMobile ? 7 : 5], fov: 45 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Globe */}
        <group>
          <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh>
            <sphereGeometry args={[2.02, 64, 64]} />
            <meshBasicMaterial color="#00D1B2" wireframe transparent opacity={0.05} />
          </mesh>
        </group>

        {/* Location Nodes */}
        {locations.map((loc, i) => (
          <GlobalNode key={i} position={loc.pos} name={loc.name} timeZone={loc.tz} phone={loc.phone} isMobile={isMobile} />
        ))}

        {/* Data lines between nodes */}
        <Line points={[locations[0].pos, locations[1].pos]} color="#00D1B2" lineWidth={0.5} transparent opacity={0.1} />
        <Line points={[locations[0].pos, locations[2].pos]} color="#00D1B2" lineWidth={0.5} transparent opacity={0.1} />
      </Canvas>

      <div style={{ position: 'absolute', top: '30px', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#00D1B2', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em' }}>
          GLOBAL NETWORK
        </motion.div>
      </div>

      {/* Floating UI Hints */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        right: isMobile ? 'auto' : '30px',
        left: isMobile ? '20px' : 'auto',
        color: '#475569', 
        fontSize: isMobile ? '0.6rem' : '0.7rem', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '5px' : '20px' 
      }}>
        <span>KR • SEOUL</span>
        <span>US • CALIFORNIA</span>
        <span>JP • TOKYO</span>
      </div>
    </div>
  );
};

export default ContactGlobalGlobe;
