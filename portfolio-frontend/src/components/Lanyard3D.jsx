import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState } from 'react';

// ID Card Component (Built with primitives, no GLB needed)
function IDCard() {
  return (
    <RigidBody colliders="cuboid" mass={1} position={[0, 0, 0]}>
      {/* Card Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2.8, 0.08]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      
      {/* Purple Background */}
      <mesh position={[0, 0, 0.041]} castShadow>
        <boxGeometry args={[1.9, 2.7, 0.01]} />
        <meshStandardMaterial 
          color="#8b5cf6"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Avatar Circle */}
      <mesh position={[0, 0.9, 0.05]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.02, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Name Bar */}
      <mesh position={[0, 0.3, 0.05]} castShadow>
        <boxGeometry args={[1.4, 0.18, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Title Bar */}
      <mesh position={[0, 0, 0.05]} castShadow>
        <boxGeometry args={[1.2, 0.14, 0.02]} />
        <meshStandardMaterial color="#e9d5ff" />
      </mesh>
      
      {/* ID Badge */}
      <mesh position={[0, -0.3, 0.05]} castShadow>
        <boxGeometry args={[1, 0.25, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Barcode Background */}
      <mesh position={[0, -1.15, 0.05]} castShadow>
        <boxGeometry args={[1.8, 0.4, 0.02]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>
      
      {/* Barcode Lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh 
          key={i}
          position={[-0.7 + (i * 0.1), -1.15, 0.06]} 
          castShadow
        >
          <boxGeometry args={[0.03, 0.3, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
      
      {/* Corner Decoration */}
      <mesh position={[0.7, 0.9, 0.05]} castShadow>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </RigidBody>
  );
}

// Lanyard String Segment
function StringSegment({ position }) {
  return (
    <RigidBody 
      colliders="ball" 
      mass={0.05}
      position={position}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial 
          color="#374151"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
    </RigidBody>
  );
}

// Decorative Bead
function Bead({ position, color = "#9ca3af" }) {
  return (
    <RigidBody 
      colliders="ball" 
      mass={0.08}
      position={position}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
    </RigidBody>
  );
}

// Main Scene
function LanyardScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={45} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[5, 3, -5]} intensity={0.5} color="#ec4899" />

      <Physics gravity={[0, -9.81, 0]} debug={false}>
        {/* Fixed Hook Point */}
        <RigidBody type="fixed" position={[0, 4.5, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.3, 32]} />
            <meshStandardMaterial 
              color="#6b7280" 
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </RigidBody>

        {/* Lanyard String */}
        {Array.from({ length: 20 }).map((_, i) => (
          <StringSegment 
            key={`string-${i}`}
            position={[0, 4.2 - (i * 0.15), 0]} 
          />
        ))}

        {/* Decorative Beads */}
        <Bead position={[0, 3.5, 0]} color="#e9d5ff" />
        <Bead position={[0, 2.5, 0]} color="#ddd6fe" />
        <Bead position={[0, 1.5, 0]} color="#c4b5fd" />

        {/* ID Card */}
        <IDCard />

        {/* Invisible Floor */}
        <RigidBody type="fixed" position={[0, -3, 0]}>
          <mesh receiveShadow>
            <boxGeometry args={[20, 0.5, 20]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>
        </RigidBody>
      </Physics>

      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={4}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        target={[0, 1, 0]}
      />
      
      <Environment preset="sunset" />
    </>
  );
}

// Export Component for Hero Section
export default function Lanyard3D() {
  const [key, setKey] = useState(0);

  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <LanyardScene key={key} />
      </Canvas>

      {/* Reset Button - Positioned for Hero */}
      <button
        onClick={() => setKey(prev => prev + 1)}
        className="absolute top-4 right-4 px-4 py-2 bg-purple-600/80 hover:bg-purple-700 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg transition-all duration-200 hover:scale-105 font-medium z-10"
      >
        🔄 Reset
      </button>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs z-10">
        <p className="opacity-80">🖱️ Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}