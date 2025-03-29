"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01; // Rotation speed
    }
  });

  return (
    // Globe dimensions
    <Sphere ref={globeRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial
        map={new THREE.TextureLoader().load("images/earth-daymap.jpg")}
      />
    </Sphere>
  );
};

const RotatingGlobe = () => {
  return (
    <div className="flex h-[300px] w-full items-center justify-center sm:h-[400px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Stars />
        <Globe />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default RotatingGlobe;
