"use client";
// src/ThreeScene.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef<any>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio set to 1
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency

    renderer.setSize(1200, 1200);
    mountRef.current.appendChild(renderer.domElement);

    // Create a torus knot
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the object
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = 240 / 240; // Adjust aspect ratio
      camera.updateProjectionMatrix();
      renderer.setSize(100, 100);
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="flex-1" />;
};

export default ThreeScene;
