import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingShape({ geometry, color, position, speed, size }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * speed[0];
      meshRef.current.rotation.y = time * speed[1];
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[size, size, size]}>
      {geometry === "torus" && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}
      {geometry === "dodecahedron" && <dodecahedronGeometry args={[1]} />}
      {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

function Scene({ mouse }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Gentle parallax follow on mouse
      groupRef.current.rotation.y = (mouse.x * Math.PI) / 10;
      groupRef.current.rotation.x = -(mouse.y * Math.PI) / 10;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#8B5CF6" />
      
      {/* Dynamic Floating primitives */}
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <FloatingShape
          geometry="torus"
          color="#6366F1"
          position={[0, 0, 0]}
          speed={[0.1, 0.2]}
          size={1.2}
        />
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <FloatingShape
          geometry="dodecahedron"
          color="#8B5CF6"
          position={[-3, 2, -2]}
          speed={[0.2, 0.1]}
          size={0.7}
        />
      </Float>

      <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
        <FloatingShape
          geometry="icosahedron"
          color="#0EA5E9"
          position={[3.2, -1.8, -1]}
          speed={[0.15, 0.25]}
          size={0.8}
        />
      </Float>
    </group>
  );
}

export default function Hero3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse positions to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (hasError) {
    // Beautiful pure CSS fallback for safety if WebGL is disabled or errored
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden opacity-40">
        <div className="w-80 h-80 rounded-full border border-brand-indigo/20 bg-gradient-to-r from-brand-purple/5 to-brand-cyan/5 blur-2xl animate-pulse floating-icon" />
        <div className="w-60 h-60 rounded-full border border-brand-cyan/20 bg-gradient-to-r from-brand-pink/5 to-brand-gold/5 blur-2xl animate-pulse floating-icon" style={{ animationDelay: "2s" }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        onError={() => setHasError(true)}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
