import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';

const Node = ({ position, label, color, size = 1 }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <Sphere args={[size, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Text
        position={[0, -size - 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </Float>
  );
};

const TraceLine = ({ start, end }) => {
  const lineRef = useRef();
  
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.dashOffset = -clock.getElapsedTime() * 2;
    }
  });

  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineDashedMaterial
        ref={lineRef}
        attach="material"
        color="#FDE047"
        dashSize={0.5}
        gapSize={0.2}
      />
    </line>
  );
};

const SkyWalking3D = () => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', height: '400px', background: '#0F172A', borderRadius: '12px' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Node position={[-4, 0, 0]} label="Gateway" color="#60A5FA" size={0.8} />
        <Node position={[0, 2, 0]} label="Order Service" color="#00D1B2" size={0.6} />
        <Node position={[0, -2, 0]} label="Auth Service" color="#00D1B2" size={0.6} />
        <Node position={[4, 0, 0]} label="MySQL" color="#94A3B8" size={0.5} />

        <TraceLine start={[-4, 0, 0]} end={[0, 2, 0]} />
        <TraceLine start={[-4, 0, 0]} end={[0, -2, 0]} />
        <TraceLine start={[0, 2, 0]} end={[4, 0, 0]} />
        <TraceLine start={[0, -2, 0]} end={[4, 0, 0]} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#94A3B8', fontSize: '0.7rem' }}>
        {t('syncboot.tracing.ui', '3D Distributed Tracing Map')}
      </div>
    </div>
  );
};

export default SkyWalking3D;
