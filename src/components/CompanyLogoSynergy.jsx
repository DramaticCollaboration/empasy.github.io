import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Center, Text3D, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ParticleSynergy = () => {
  const count = 5000;
  const meshRef = useRef();
  const [assembled, setAssembled] = useState(false);

  // Generate random positions
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Target position (placeholder for actual logo points mapping)
      target[i * 3] = (Math.random() - 0.5) * 10;
      target[i * 3 + 1] = (Math.random() - 0.5) * 2;
      target[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    return { pos, target };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    const positions = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      if (assembled) {
        // Move towards center or form a loose shape
        positions[idx] += (particles.target[idx] - positions[idx]) * 0.05;
        positions[idx + 1] += (particles.target[idx + 1] - positions[idx + 1]) * 0.05;
        positions[idx + 2] += (particles.target[idx + 2] - positions[idx + 2]) * 0.05;
      } else {
        // Ambient movement
        positions[idx] += Math.sin(state.clock.elapsedTime + i) * 0.01;
        positions[idx + 1] += Math.cos(state.clock.elapsedTime + i) * 0.01;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.pos}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#00D1B2"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CompanyLogoSynergy = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '600px', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <ParticleSynergy />
        
        {/* Simple Text Fallback / Overlay */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Center>
            <Html center>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                {/* In a real project we'd use Text3D with a font file */}
              </motion.div>
            </Html>
          </Center>
        </Float>
      </Canvas>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ color: '#FFFFFF', fontSize: '6rem', fontWeight: 900, margin: 0, letterSpacing: '0.3em', textShadow: '0 0 30px rgba(0,209,178,0.5)' }}
        >
          EMPASY
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ color: '#00D1B2', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.5em', marginTop: '10px' }}
        >
          {t('company.hero.vision', 'LIVING SOFTWARE')}
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em' }}>
          {t('company.hero.action.scroll', 'SCROLL TO DISCOVER')}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoSynergy;
