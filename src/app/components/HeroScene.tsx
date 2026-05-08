"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Blob() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.y = t * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} scale={2.4}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#5B8CFF"
          roughness={0.05}
          metalness={0.2}
          distort={0.45}
          speed={1.6}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh scale={1.1}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.5}
          chromaticAberration={0.6}
          anisotropy={0.4}
          distortion={0.4}
          distortionScale={0.4}
          temporalDistortion={0.2}
          ior={1.4}
          color="#A78BFA"
          background={undefined}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#A78BFA" />
        <directionalLight position={[-5, -3, -5]} intensity={0.8} color="#5EEAD4" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#5B8CFF" />
        <Blob />
        <InnerCore />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
