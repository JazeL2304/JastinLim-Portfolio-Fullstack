/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

// ✅ Definisi path file di luar component
const cardGLB = '/models/card.glb';
const lanyardTexture = '/models/lanyard.png';

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  
  // ✅ Perbaikan: Kurangi damping agar lebih stabil
  const segmentProps = { 
    type: 'dynamic', 
    canSleep: true, 
    colliders: false, 
    angularDamping: 2, // Dikurangi dari 4
    linearDamping: 2   // Dikurangi dari 4
  };
  
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardTexture);
  
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(), 
        new THREE.Vector3(), 
        new THREE.Vector3(), 
        new THREE.Vector3()
      ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  // ✅ Perbaikan: Tambahkan max distance untuk rope joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.5]); // Tambah max distance dari 1 ke 1.5
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.5]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.5]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      
      // ✅ Wake up all bodies
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      
      // ✅ Perbaikan: Limit dragging range
      const dragOffset = new THREE.Vector3(
        vec.x - dragged.x,
        vec.y - dragged.y,
        vec.z - dragged.z
      );
      
      // Clamp position to prevent extreme stretching
      const maxDragDistance = 5;
      if (dragOffset.length() > maxDragDistance) {
        dragOffset.normalize().multiplyScalar(maxDragDistance);
      }
      
      card.current?.setNextKinematicTranslation({ 
        x: fixed.current.translation().x + dragOffset.x, 
        y: fixed.current.translation().y + dragOffset.y, 
        z: dragOffset.z 
      });
    }
    
    if (fixed.current) {
      // ✅ Perbaikan: Smooth lerping dengan safeguard
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const currentPos = ref.current.translation();
        const distance = ref.current.lerped.distanceTo(currentPos);
        const clampedDistance = Math.max(0.1, Math.min(1, distance));
        
        // Limit lerp speed
        const lerpSpeed = Math.min(delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)), 0.5);
        ref.current.lerped.lerp(currentPos, lerpSpeed);
      });
      
      // ✅ Update curve points dengan safeguard
      if (j3.current && j2.current && j1.current && fixed.current) {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());
        
        // Update band geometry
        try {
          band.current.geometry.setPoints(curve.getPoints(32));
        } catch (error) {
          console.warn('Error updating band geometry:', error);
        }
      }
      
      // ✅ Angular velocity damping
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ 
          x: ang.x * 0.95, 
          y: ang.y - rot.y * 0.15, // Dikurangi dari 0.25
          z: ang.z * 0.95 
        });
      }
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[3, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody 
          position={[2, 0, 0]} 
          ref={card} 
          {...segmentProps} 
          type={dragged ? 'kinematicPosition' : 'dynamic'}
          // ✅ Add additional damping for card
          linearDamping={3}
          angularDamping={3}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={e => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={true}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
          opacity={1}
          transparent={false}
        />
      </mesh>
    </>
  );
}

export default function Lanyard({ 
  position = [0, 0, 30], 
  gravity = [0, -30, 0], // ✅ Dikurangi dari -40 ke -30
  fov = 20, 
  transparent = true 
}) {
  return (
    <Canvas
      camera={{ position: position, fov: fov }}
      gl={{ 
        alpha: transparent,
        antialias: true, // ✅ Tambah antialiasing
        powerPreference: "high-performance" // ✅ Performance optimization
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        gl.shadowMap.enabled = false; // ✅ Disable shadows for better performance
      }}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
      // ✅ Add frame loop to prevent rendering issues
      frameloop="always"
    >
      <ambientLight intensity={Math.PI} />
      <Physics 
        gravity={gravity} 
        timeStep={1 / 60}
        // ✅ Add these properties for more stable physics
        iterations={20}
        colliders="hull"
      >
        <Band />
      </Physics>
      <Environment blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
}

// Preload assets
useGLTF.preload(cardGLB);
useTexture.preload(lanyardTexture);