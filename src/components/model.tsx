"use client";
// src/ThreeScene.js
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const ThreeScene = () => {
  const model = useLoader(GLTFLoader, "/DamagedHelmet.gltf");
  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      style={{ width: "100%", height: "58vh" }}
    >
      <ambientLight intensity={10} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <primitive object={model.scene} />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

export default ThreeScene;