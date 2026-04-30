import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Core = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00D1B2" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#00D1B2"
          speed={2}
          distort={0.4}
          radius={0.8}
        />
      </mesh>
      <pointLight color="#00D1B2" intensity={2} distance={10} />
    </Float>
  );
};

const ParticleStream = () => {
  const count = 200;
  const particles = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          10 + Math.random() * 10
        ),
        speed: 0.1 + Math.random() * 0.2,
        target: new THREE.Vector3(0, 0, 0),
        phase: 'incoming',
        color: new THREE.Color('#FFFFFF')
      });
    }
    return p;
  }, []);

  const meshRef = useRef();
  const dummy = new THREE.Object3D();

  useFrame(() => {
    particles.forEach((p, i) => {
      if (p.phase === 'incoming') {
        p.position.lerp(p.target, p.speed);
        if (p.position.length() < 0.2) {
          p.phase = 'outgoing';
          const angle = Math.random() * Math.PI * 2;
          const spread = 10;
          p.target = new THREE.Vector3(
            Math.cos(angle) * spread,
            Math.sin(angle) * spread,
            -5 - Math.random() * 5
          );
          const colors = ['#3B82F6', '#EF4444', '#F59E0B'];
          p.color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
        }
      } else {
        p.position.lerp(p.target, 0.05);
        if (p.position.distanceTo(p.target) < 0.5) {
          p.phase = 'incoming';
          p.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            15
          );
          p.target = new THREE.Vector3(0, 0, 0);
          p.color = new THREE.Color('#FFFFFF');
        }
      }

      dummy.position.copy(p.position);
      dummy.scale.setScalar(0.05);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, p.color);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
};

const Nodes = () => {
  const nodes = [
    { pos: [4, 3, -5], color: '#3B82F6' },
    { pos: [-4, -3, -5], color: '#EF4444' },
    { pos: [5, -2, -5], color: '#F59E0B' },
    { pos: [-5, 2, -5], color: '#3B82F6' },
  ];

  return (
    <group>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color={n.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

const APIGatewayParticles = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '600px', background: '#020617', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Core />
        <ParticleStream />
        <Nodes />
      </Canvas>

      <div style={{ position: 'absolute', top: '40px', left: '40px', pointerEvents: 'none' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ color: '#00D1B2', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '10px' }}
        >
          {t('syncapim.hero.status.routing', 'INTELLIGENT ROUTING')}
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: 900, margin: 0 }}
        >
          {t('syncapim.hero.ui.gateway', 'API Gateway')}
        </motion.h2>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', gap: '20px' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', border: '1px solid #334155', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginBottom: '5px' }}>THROUGHPUT</div>
          <div style={{ color: '#00D1B2', fontSize: '1.2rem', fontWeight: 800 }}>45,200 TPS</div>
        </div>
        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', border: '1px solid #334155', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginBottom: '5px' }}>LATENCY</div>
          <div style={{ color: '#3B82F6', fontSize: '1.2rem', fontWeight: 800 }}>0.8 ms</div>
        </div>
      </div>
    </div>
  );
};

export default APIGatewayParticles;
