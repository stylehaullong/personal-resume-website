'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeMonitorProps {
  x: number;
  y: number;
}

const ThreeMonitor: React.FC<ThreeMonitorProps> = ({ x, y }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 150);
    mountRef.current.appendChild(renderer.domElement);

    // Monitor body
    const geometry = new THREE.BoxGeometry(2, 1.2, 0.1);
    const material = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const monitor = new THREE.Mesh(geometry, material);
    scene.add(monitor);

    // Screen
    const screenGeometry = new THREE.PlaneGeometry(1.9, 1.1);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.051;
    monitor.add(screen);

    // Stand
    const standGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.1);
    const stand = new THREE.Mesh(standGeometry, material);
    stand.position.y = -0.85;
    monitor.add(stand);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 2);
    scene.add(light);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      monitor.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', left: x, top: y, width: '200px', height: '150px' }} />;
};

export default ThreeMonitor;