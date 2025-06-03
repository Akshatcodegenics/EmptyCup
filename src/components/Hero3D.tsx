
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape = 'sphere' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  const ShapeComponent = shape === 'box' ? Box : shape === 'torus' ? Torus : Sphere;

  return (
    <ShapeComponent
      ref={meshRef}
      position={position}
      args={shape === 'torus' ? [1, 0.3, 16, 100] : [1, 1, 1]}
    >
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </ShapeComponent>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
      
      <FloatingShape position={[-2, 0, 0]} color="#3B82F6" shape="sphere" />
      <FloatingShape position={[2, 1, -1]} color="#8B5CF6" shape="box" />
      <FloatingShape position={[0, -1, 1]} color="#10B981" shape="torus" />
      <FloatingShape position={[-1, 2, -2]} color="#F59E0B" shape="sphere" />
      <FloatingShape position={[3, -1, 1]} color="#EF4444" shape="box" />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};
