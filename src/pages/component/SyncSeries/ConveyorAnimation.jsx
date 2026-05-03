import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { 
  Float, 
  PerspectiveCamera, 
  Text, 
  MeshDistortMaterial, 
  OrbitControls,
  Html,
  Box,
  Cylinder,
  Torus
} from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ConveyorAnimation.css';

gsap.registerPlugin(ScrollTrigger);

// --- 3D Components ---

const ServiceBlock = ({ progress }) => {
  const meshRef = useRef();
  const [color, setColor] = useState('#ffffff');
  
  useFrame((state) => {
    if (!meshRef.current) return;

    // Movement along conveyor (X axis) from -15 to 15
    meshRef.current.position.x = -15 + progress * 30;

    // Phase 1: Build (0.0 - 0.25)
    if (progress < 0.25) {
      const p = progress / 0.25;
      meshRef.current.scale.setScalar(p);
      meshRef.current.rotation.y = state.clock.getElapsedTime();
      setColor('#ffffff');
    } 
    // Phase 2: Manage (0.25 - 0.5)
    else if (progress < 0.5) {
      const p = (progress - 0.25) / 0.25;
      meshRef.current.scale.setScalar(1);
      meshRef.current.rotation.y = 0;
      const targetColor = new THREE.Color('#00B4D8');
      const startColor = new THREE.Color('#ffffff');
      startColor.lerp(targetColor, p);
      setColor(`#${startColor.getHexString()}`);
    }
    // Phase 3: Test (0.5 - 0.75)
    else if (progress < 0.75) {
      const p = (progress - 0.5) / 0.25;
      const pulse = Math.sin(state.clock.getElapsedTime() * 10) * 0.05 + 1;
      meshRef.current.scale.setScalar(pulse);
      setColor('#00B4D8');
    }
    // Phase 4: Connect (0.75 - 1.0)
    else {
      const p = (progress - 0.75) / 0.25;
      meshRef.current.scale.setScalar(1 - p);
      meshRef.current.rotation.x += 0.1;
      meshRef.current.rotation.z += 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} transparent />
    </mesh>
  );
};

const ConveyorBelt = () => {
  const meshRef = useRef();
  
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, 64, 64);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.set(20, 1);
    return tex;
  }, []);

  useFrame(() => {
    if (meshRef.current?.material?.map) {
      meshRef.current.material.map.offset.x -= 0.005;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[40, 4]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const FactoryAssets = ({ progress }) => {
  return (
    <group>
      {/* Manage Stage: Nozzle at x = -7.5 */}
      <group position={[-7.5, 3, 0]}>
        <Cylinder args={[0.1, 0.1, 2]}>
          <meshStandardMaterial color="#444" />
        </Cylinder>
        {progress > 0.35 && progress < 0.4 && (
          <mesh position={[0, -1.5, 0]}>
            <cylinderGeometry args={[0.05, 0.2, 1]} />
            <meshStandardMaterial color="#00B4D8" transparent opacity={0.6} />
          </mesh>
        )}
      </group>

      {/* Test Stage: Robot Arm at x = 0 */}
      <group position={[0, 0, -2]}>
        <Box args={[0.5, 4, 0.5]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#333" />
        </Box>
        <group position={[0, 3.5, 0]} rotation={[0.5, 0, 0]}>
          <Box args={[0.2, 0.2, 3]} position={[0, 0, 1.5]}>
            <meshStandardMaterial color="#555" />
          </Box>
          {progress > 0.55 && progress < 0.7 && (
            <mesh position={[0, 0, 3]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 6]} />
              <meshStandardMaterial 
                color={progress < 0.63 ? "#ff0000" : "#00ff00"} 
                emissive={progress < 0.63 ? "#ff0000" : "#00ff00"} 
                emissiveIntensity={5}
              />
            </mesh>
          )}
        </group>
      </group>

      {/* Connect Stage: Portal at x = 7.5 */}
      <group position={[7.5, 0, 0]}>
        <Torus args={[3, 0.1, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#00B4D8" emissive="#00B4D8" emissiveIntensity={2} />
        </Torus>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial color="#00B4D8" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

const ConveyorAnimation = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          setProgress(self.progress);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    { key: 'build', label: t('syncseries.verse.stages.build', '[Build] 서비스 구축'), range: [0, 0.25] },
    { key: 'manage', label: t('syncseries.verse.stages.manage', '[Manage] 콘텐츠 주입'), range: [0.25, 0.5] },
    { key: 'test', label: t('syncseries.verse.stages.test', '[Test] AI 자가 치유'), range: [0.5, 0.75] },
    { key: 'connect', label: t('syncseries.verse.stages.connect', '[Connect] 지능형 배포'), range: [0.75, 1.0] }
  ];

  const currentStageIndex = stages.findIndex(s => progress >= s.range[0] && progress < s.range[1]);
  const currentStage = stages[currentStageIndex === -1 ? 3 : currentStageIndex];

  return (
    <div className="conveyor-animation-wrapper" ref={containerRef}>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 5, 12], fov: 35 }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} />
          
          <ServiceBlock progress={progress} />
          <ConveyorBelt />
          <FactoryAssets progress={progress} />
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="ui-overlay">
        <div className="stage-info">
          <div className="stage-counter">STEP 0{currentStageIndex === -1 ? 4 : currentStageIndex + 1}</div>
          <h3 className="stage-label">{currentStage.label}</h3>
          <p className="stage-desc">
            {progress < 0.25 && t('syncseries.verse.desc.build', 'MSA 플랫폼을 통한 신속한 서비스 구축')}
            {progress >= 0.25 && progress < 0.5 && t('syncseries.verse.desc.manage', '비즈니스 로직 및 콘텐츠 데이터 주입')}
            {progress >= 0.5 && progress < 0.75 && t('syncseries.verse.desc.test', 'AI 기반 품질 검증 및 자가 치유 수행')}
            {progress >= 0.75 && t('syncseries.verse.desc.connect', 'API 게이트웨이를 통한 안전한 글로벌 배포')}
          </p>
        </div>

        <div className="progress-container">
           <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
           </div>
           <div className="stage-markers">
              {stages.map((s, idx) => (
                <div key={idx} className={`marker ${progress >= s.range[0] ? 'active' : ''}`}>
                  <span className="marker-dot" />
                  <span className="marker-name">{s.key.toUpperCase()}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ConveyorAnimation;