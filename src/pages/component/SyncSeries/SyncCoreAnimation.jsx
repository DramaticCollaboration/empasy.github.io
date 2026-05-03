import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  Text, 
  Sphere, 
  PerspectiveCamera, 
  Trail, 
  Environment,
  ContactShadows,
  MeshTransmissionMaterial,
  Stars
} from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import './SyncCoreAnimation.css';

/**
 * 솔루션 구체 컴포넌트
 * 공전 애니메이션, 잔상(Trail), 마그네틱 어트랙션 기능 포함
 */
const SolutionSphere = ({ color, name, label, index, onHover }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const { mouse, viewport } = useThree();
  const [hovered, setHovered] = useState(false);
  
  // 솔루션별 고유 궤도 파라미터
  const orbitParams = useMemo(() => ({
    radius: 3.2 + index * 0.7,
    speed: 0.12 + (5 - index) * 0.03,
    phase: (index * Math.PI * 2) / 5,
    yAmplitude: 0.5 + index * 0.2,
    ySpeed: 0.4 + index * 0.1
  }), [index]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // 1. 기본 공전 궤도 위치 계산
    const angle = time * orbitParams.speed + orbitParams.phase;
    const basePos = new THREE.Vector3(
      Math.cos(angle) * orbitParams.radius,
      Math.sin(time * orbitParams.ySpeed) * orbitParams.yAmplitude,
      Math.sin(angle) * orbitParams.radius
    );

    // 2. 마그네틱 어트랙션 (Magnetic Attraction)
    // 마우스 좌표를 월드 좌표계로 근사 변환
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    const distToMouse = Math.sqrt(
      Math.pow(mouseX - groupRef.current.position.x, 2) + 
      Math.pow(mouseY - groupRef.current.position.y, 2)
    );

    // 커서 근처(거리 2.5 이내)일 때 끌림 효과
    const attractionThreshold = 2.5;
    let attractionOffset = new THREE.Vector3(0, 0, 0);
    
    if (distToMouse < attractionThreshold) {
      const force = (1 - distToMouse / attractionThreshold) * 0.8;
      attractionOffset.set(
        (mouseX - basePos.x) * force,
        (mouseY - basePos.y) * force,
        0
      );
    }

    // 3. 최종 위치 적용 (보간을 통한 부드러운 이동)
    const finalPos = basePos.add(attractionOffset);
    groupRef.current.position.lerp(finalPos, 0.1);

    // 4. 호버 시 스케일 변화
    const targetScale = hovered ? 1.5 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group ref={groupRef}>
      {/* 잔상 효과 (Trail) */}
      <Trail
        width={1.2}
        length={5}
        color={new THREE.Color(color)}
        attenuation={(t) => t * t}
      >
        <Sphere
          ref={meshRef}
          args={[0.22, 32, 32]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            onHover({ name, color, label });
          }}
          onPointerOut={() => {
            setHovered(false);
            onHover(null);
          }}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 8 : 2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Trail>
      
      {/* 솔루션 레이블 */}
      {hovered && (
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor={color}
        >
          {label}
        </Text>
      )}
    </group>
  );
};

/**
 * 중앙 싱크 코어 컴포넌트
 * 맥동(Pulsing) 및 발광(Glow) 효과
 */
const CentralCore = () => {
  const coreRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // 맥동 애니메이션 (Pulsing)
    const pulse = 1 + Math.sin(t * 2) * 0.05;
    if (coreRef.current) {
      coreRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(pulse * 1.2 + Math.sin(t * 4) * 0.02);
      glowRef.current.rotation.y = t * 0.2;
      glowRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      {/* 메인 코어 결정체 */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={coreRef}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#00D1B2"
            speed={3}
            distort={0.3}
            radius={1}
            emissive="#00D1B2"
            emissiveIntensity={1.5}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* 내부 유리 질감 (고급화) */}
      <mesh scale={0.9}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          color="#00D1B2"
        />
      </mesh>

      {/* 주변 에너지 오라 (Glow) */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial 
          color="#00D1B2" 
          transparent 
          opacity={0.15} 
          wireframe
        />
      </mesh>

      {/* 포인트 라이트 코어 */}
      <pointLight intensity={10} distance={10} color="#00D1B2" />
    </group>
  );
};

/**
 * 전체 씬 구성
 */
const Scene = () => {
  const { t } = useTranslation();
  const [hoveredData, setHoveredData] = useState(null);
  const groupRef = useRef();
  const { mouse } = useThree();

  const solutions = useMemo(() => [
    { name: 'syncboot', color: '#00D1B2', label: 'SyncBoot' },
    { name: 'synceta', color: '#FF4E8E', label: 'SyncEta' },
    { name: 'synccms', color: '#007AFF', label: 'SyncCMS' },
    { name: 'syncapim', color: '#34C759', label: 'SyncAPIM' },
    { name: 'syncinsight', color: '#AF52DE', label: 'SyncInsight' },
  ], []);

  useFrame(() => {
    // Parallax Tilt 효과: 마우스 위치에 따라 전체 씬이 미세하게 기울어짐
    if (groupRef.current) {
      const targetRotationX = -mouse.y * 0.25;
      const targetRotationY = mouse.x * 0.25;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#00D1B2" intensity={1} />
      
      {/* 중앙 코어 */}
      <CentralCore />
      
      {/* 공전 솔루션들 */}
      {solutions.map((sol, idx) => (
        <SolutionSphere 
          key={sol.name}
          index={idx}
          {...sol}
          onHover={setHoveredData}
        />
      ))}

      {/* 궤도 가이드 라인 (디자인 요소) */}
      {solutions.map((_, idx) => (
        <mesh key={`orbit-${idx}`} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2 + idx * 0.7 - 0.005, 3.2 + idx * 0.7 + 0.005, 128]} />
          <meshBasicMaterial color="white" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* 배경 장식 */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Environment preset="city" />
      <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
    </group>
  );
};

const SyncCoreAnimation = () => {
  return (
    <div className="sync-core-container">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
        <Scene />
      </Canvas>
      
      {/* 오버레이 안내 문구 */}
      <div className="animation-overlay-info">
        <span>INTERACTIVE 3D ECOSYSTEM</span>
      </div>
    </div>
  );
};

export default SyncCoreAnimation;