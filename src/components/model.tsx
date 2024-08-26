"use client"
// src/ThreeScene.js
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/DamagedHelmet.gltf');
  scene.rotation.x = Math.PI / 4; // Adjust the rotation if needed
  scene.rotation.y = Math.PI / 4;
  return <primitive object={scene} />;
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
