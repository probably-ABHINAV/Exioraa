import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple animated particles
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random points
  const count = 1000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10; // x
    positions[i3 + 1] = (Math.random() - 0.5) * 10; // y
    positions[i3 + 2] = (Math.random() - 0.5) * 10; // z
  }
  
  // Animation loop
  useFrame(() => {
    if (!pointsRef.current) return;
    
    // Gentle rotation
    pointsRef.current.rotation.x += 0.0005;
    pointsRef.current.rotation.y += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#38BDF8" 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Simple animated mesh for background
function AnimatedBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    // Simple rotation
    meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry args={[15, 15, 20, 20]} />
      <meshBasicMaterial 
        color="#38BDF8" 
        wireframe 
        transparent 
        opacity={0.2} 
      />
    </mesh>
  );
}

// Main 3D scene component
const Hero3DScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} color="#38BDF8" />
        <ParticleField />
        <AnimatedBackground />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;