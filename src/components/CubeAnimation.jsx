import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial, PerspectiveCamera, Environment } from '@react-three/drei';
import anime from 'animejs';
import * as THREE from 'three';

const Monolith = ({ isShattered }) => {
  const groupRef = useRef();
  const materialRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;

    anime({
      targets: groupRef.current.scale,
      x: isShattered ? 0 : 1,
      y: isShattered ? 0 : 1,
      z: isShattered ? 0 : 1,
      duration: 800,
      easing: 'easeInQuad'
    });

    if (materialRef.current) {
      anime({
        targets: materialRef.current,
        opacity: isShattered ? 0 : 1,
        duration: 800,
        easing: 'easeInQuad'
      });
    }
  }, [isShattered]);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Box args={[3, 3, 3]}>
          <meshStandardMaterial 
            ref={materialRef}
            color="#334155" 
            metalness={0.8} 
            roughness={0.2} 
            emissive="#00D1B2" 
            emissiveIntensity={0.1}
            transparent
          />
        </Box>
      </Float>
    </group>
  );
};

const MicroserviceCube = ({ position, delay, isShattered }) => {
  const groupRef = useRef();
  const materialRef = useRef();
  
  const targetPos = useMemo(() => [
    position[0] * 5 + (Math.random() - 0.5) * 2,
    position[1] * 5 + (Math.random() - 0.5) * 2,
    position[2] * 5 + (Math.random() - 0.5) * 2
  ], [position]);

  useEffect(() => {
    if (!groupRef.current) return;

    anime({
      targets: groupRef.current.position,
      x: isShattered ? targetPos[0] : 0,
      y: isShattered ? targetPos[1] : 0,
      z: isShattered ? targetPos[2] : 0,
      duration: 1500,
      delay: delay * 1000,
      easing: 'easeOutElastic(1, .5)'
    });

    anime({
      targets: groupRef.current.scale,
      x: isShattered ? 1 : 0,
      y: isShattered ? 1 : 0,
      z: isShattered ? 1 : 0,
      duration: 1500,
      delay: delay * 1000,
      easing: 'easeOutElastic(1, .5)'
    });

    if (materialRef.current) {
      anime({
        targets: materialRef.current,
        opacity: isShattered ? 0.8 : 0,
        duration: 1500,
        delay: delay * 1000,
        easing: 'linear'
      });
    }
  }, [isShattered, targetPos, delay]);

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0, 0, 0]}>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Box args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial 
            ref={materialRef}
            color="#00D1B2" 
            transparent 
            opacity={0}
            emissive="#00D1B2"
            emissiveIntensity={0.5}
          />
        </Box>
      </Float>
    </group>
  );
};

const CubeAnimation = ({ isShattered }) => {
  const cubes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ],
      delay: Math.random() * 0.5
    }));
  }, []);

  return (
    <div className="cube-animation-container" style={{ width: '100%', height: '500px' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Monolith isShattered={isShattered} />
        
        {cubes.map(cube => (
          <MicroserviceCube 
            key={cube.id} 
            position={cube.position} 
            delay={cube.delay}
            isShattered={isShattered} 
          />
        ))}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default CubeAnimation;