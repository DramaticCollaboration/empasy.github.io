import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, Line, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';

const GlobePoints = () => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 2000; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = 2 * Math.sin(phi) * Math.cos(theta);
      const y = 2 * Math.sin(phi) * Math.sin(theta);
      const z = 2 * Math.cos(phi);
      p.push(x, y, z);
    }
    return new Float32Array(p);
  }, []);

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#94A3B8"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshBasicMaterial color="#0F172A" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const DataLines = () => {
  const locations = [
    { name: 'US', pos: [1.5, 0.8, 1.2] },
    { name: 'UK', pos: [0.2, 1.3, 1.5] },
    { name: 'JP', pos: [-1.2, 0.5, 1.5] },
    { name: 'VN', pos: [-0.8, -0.5, 1.7] },
  ];
  const corePos = [0, 0, 2]; // Korea

  return (
    <group>
      {locations.map((loc, i) => (
        <group key={i}>
          <Line
            points={[corePos, loc.pos]}
            color="#00D1B2"
            lineWidth={0.5}
            transparent
            opacity={0.4}
          />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={loc.pos}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#00D1B2" />
            </mesh>
          </Float>
        </group>
      ))}
      <mesh position={corePos}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00D1B2" />
        <pointLight color="#00D1B2" intensity={2} distance={5} />
      </mesh>
    </group>
  );
};

const GlobalNetworkGlobe = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '500px', background: '#020617', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <GlobePoints />
        <DataLines />
      </Canvas>
      
      <div style={{ position: 'absolute', top: '20px', left: '20px', pointerEvents: 'none' }}>
        <div style={{ color: '#00D1B2', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em' }}>
          GLOBAL CONNECTIVITY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700 }}>
          {t('synccms.multisite.globe.title', 'Unified Global Control')}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(15, 23, 42, 0.8)', padding: '15px', borderRadius: '12px', border: '1px solid #334155', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D1B2', boxShadow: '0 0 8px #00D1B2' }} />
          <span style={{ color: '#E2E8F0', fontSize: '0.75rem' }}>{t('synccms.multisite.status.core', 'Integrated Core: Active')}</span>
        </div>
        <div style={{ color: '#94A3B8', fontSize: '0.7rem' }}>
          {t('synccms.multisite.status.connection', 'Connections: 4 Active Nodes')}
        </div>
      </div>
    </div>
  );
};

export default GlobalNetworkGlobe;
