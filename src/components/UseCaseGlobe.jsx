import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, Float, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ClientNode = ({ position, name, logo }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={hovered ? '#00D1B2' : '#FFFFFF'} />
        </mesh>
      </Float>
      <Html distanceFactor={10}>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'rgba(15, 23, 42, 0.9)',
                color: '#FFF',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                whiteSpace: 'nowrap',
                border: '1px solid #00D1B2',
                pointerEvents: 'none'
              }}
            >
              <div style={{ fontWeight: 800 }}>{name}</div>
              <div style={{ color: '#00D1B2', fontSize: '0.6rem' }}>SyncSeries Solution Applied</div>
            </motion.div>
          )}
        </AnimatePresence>
      </Html>
    </group>
  );
};

const UseCaseGlobe = () => {
  const { t } = useTranslation();
  
  const clients = [
    { name: 'Samsung Electronics', pos: [1.2, 0.8, 1.5] },
    { name: 'LG Electronics', pos: [1.4, -0.5, 1.2] },
    { name: 'Hyosung ITX', pos: [0.5, 1.5, 1.0] },
    { name: 'Visang Education', pos: [1.8, 0.2, 0.5] },
    { name: 'Global Partner US', pos: [-1.5, 0.5, 1.2] },
    { name: 'Tokyo Logistics', pos: [0.8, 0.2, 1.8] },
  ];

  return (
    <div className="globe-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.5} />
        
        {/* Globe Base */}
        <group>
          <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshBasicMaterial color="#0F172A" transparent opacity={0.8} />
          </mesh>
          <mesh>
            <sphereGeometry args={[2.01, 64, 64]} />
            <meshBasicMaterial color="#00D1B2" wireframe transparent opacity={0.1} />
          </mesh>
        </group>

        {/* Client Nodes */}
        {clients.map((client, i) => (
          <ClientNode key={i} position={client.pos} name={client.name} />
        ))}

        {/* Connection Lines (Simplified) */}
        {clients.map((c, i) => (
           <Line 
             key={`line-${i}`}
             points={[[0, 0, 0], c.pos]} 
             color="#00D1B2" 
             lineWidth={0.5} 
             transparent 
             opacity={0.2} 
           />
        ))}
      </Canvas>

      <div className="globe-header">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="globe-subtitle">
          GLOBAL TRUST NETWORK
        </motion.div>
        <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="globe-title">
          {t('usecases.hero.globe.title', 'Trusted by Industry Leaders')}
        </motion.h2>
      </div>

      <div className="globe-brands">
        {['LG', 'SAMSUNG', 'HYOSUNG', 'VISANG'].map((brand) => (
          <div key={brand} className="brand-item">{brand}</div>
        ))}
      </div>
    </div>
  );
};

const Line = ({ points, color, lineWidth, transparent, opacity }) => {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p)));
    return g;
  }, [points]);
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} linewidth={lineWidth} transparent={transparent} opacity={opacity} />
    </line>
  );
};

const AnimatePresence = ({ children }) => <>{children}</>;

export default UseCaseGlobe;
