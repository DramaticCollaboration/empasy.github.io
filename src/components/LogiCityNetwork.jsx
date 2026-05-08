import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Line, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CityBuilding = ({ position, args, color }) => (
  <mesh position={position}>
    <boxGeometry args={args} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const MovingTruck = ({ start, end, delay = 0 }) => {
  const meshRef = useRef();
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3(start[0], start[1], end[2]),
      new THREE.Vector3(...end)
    ]);
  }, [start, end]);

  useFrame((state) => {
    const t = ((state.clock.elapsedTime + delay) % 4) / 4;
    const pos = curve.getPoint(t);
    meshRef.current.position.copy(pos);
    const lookAt = curve.getPoint(Math.min(t + 0.01, 1));
    meshRef.current.lookAt(lookAt);
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <boxGeometry args={[0.4, 0.3, 0.8]} />
        <meshStandardMaterial color="#00D1B2" />
      </mesh>
      <pointLight color="#00D1B2" intensity={0.5} distance={2} />
    </group>
  );
};

const DataParticles = ({ start, end }) => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 20; i++) p.push(new THREE.Vector3());
    return p;
  }, []);

  const meshRef = useRef();
  useFrame((state) => {
    points.forEach((p, i) => {
      const t = ((state.clock.elapsedTime + i * 0.2) % 2) / 2;
      p.lerpVectors(new THREE.Vector3(...start), new THREE.Vector3(...end), t);
    });
    // This is a simplification. In a real app we'd use points or instancedMesh
  });

  return null; // Simplified for visual impact via trucks
};

const LogiCityNetwork = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '600px', background: '#0F172A', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
      <Canvas shadow={{ enabled: true }}>
        <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={40} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>

        {/* Buildings */}
        <CityBuilding position={[-5, 1, -5]} args={[1, 3, 1]} color="#1E293B" />
        <CityBuilding position={[-3, 0.5, -6]} args={[1, 2, 1]} color="#334155" />
        <CityBuilding position={[5, 1.5, 5]} args={[1.5, 4, 1.5]} color="#1E293B" />
        <CityBuilding position={[3, 1, 6]} args={[1, 3, 1]} color="#334155" />
        <CityBuilding position={[0, 0.5, 0]} args={[2, 1, 2]} color="#007F7A" /> {/* HUB */}

        {/* Logistic Hub Label */}
        <Float speed={2} floatIntensity={0.5}>
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial color="#00D1B2" />
          </mesh>
        </Float>

        {/* Trucks */}
        <MovingTruck start={[5, 0, 0]} end={[0, 0, 0]} delay={0} />
        <MovingTruck start={[-5, 0, 2]} end={[0, 0, 0]} delay={1} />
        <MovingTruck start={[0, 0, 0]} end={[5, 0, 5]} delay={2} />
        <MovingTruck start={[0, 0, 0]} end={[-5, 0, -5]} delay={3} />

        {/* Data Lines */}
        <Line points={[[-5, 0.1, -5], [0, 0.1, 0]]} color="#00D1B2" lineWidth={1} opacity={0.2} transparent />
        <Line points={[[5, 0.1, 5], [0, 0.1, 0]]} color="#00D1B2" lineWidth={1} opacity={0.2} transparent />
      </Canvas>

      <div style={{ position: 'absolute', top: '40px', left: '40px', pointerEvents: 'none' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ color: '#00D1B2', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '10px' }}>
          INTEGRATED LOGISTICS
        </motion.div>
        <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ color: '#0F172A', fontSize: '2rem', fontWeight: 900, margin: 0 }}>
          {t('commercelogi.hero.title', 'Smart City Network')}
        </motion.h2>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', right: '40px', background: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0891B2', boxShadow: '0 0 8px rgba(8,145,178,0.3)' }} />
          <span style={{ color: '#0F172A', fontSize: '0.8rem', fontWeight: 700 }}>{t('commercelogi.hero.status.order', 'Orders Processing: 1,240')}</span>
        </div>
        <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>{t('commercelogi.hero.status.sorting', 'AI Sorting: Active')}</div>
      </div>
    </div>
  );
};

export default LogiCityNetwork;
