
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#3B82F6" 
        metalness={0.5} 
        roughness={0.2} 
        emissive="#1E40AF"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.4;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        metalness={0.6} 
        roughness={0.1} 
        emissive="#7C3AED"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.25, 16, 100]} />
      <meshStandardMaterial 
        color="#F59E0B" 
        metalness={0.4} 
        roughness={0.3}
        emissive="#D97706"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4F46E5" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#EC4899" />
      
      <FloatingCube position={[-2.5, 0, 0]} />
      <FloatingSphere position={[2, 1, -1]} />
      <FloatingTorus position={[0, -1.5, 1]} />
      <FloatingSphere position={[-1, 2, -2]} />
      <FloatingCube position={[1.5, -0.5, 2]} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
        Interactive 3D Designer Showcase
      </div>
    </div>
  );
};
