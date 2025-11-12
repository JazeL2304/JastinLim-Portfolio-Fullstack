/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState, memo, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

const cardGLB = '/models/card.glb';
const lanyardTexture = '/models/lanyard.png';

// Memoize Band component untuk mencegah re-render
const Band = memo(function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  
  // Gunakan useMemo untuk objek yang tidak berubah
  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  
  const { camera, size, viewport } = useThree();
  
  const segmentProps = useMemo(() => ({ 
    type: 'dynamic', 
    canSleep: true, 
    colliders: false, 
    angularDamping: 2,
    linearDamping: 2
  }), []);
  
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
  
  const [dragged, setDrag] = useState(false);
  const [hovered, setHover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.5]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.5]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.5]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

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
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Throttle frame updates untuk performa lebih baik
  const frameCountRef = useRef(0);
  useFrame((state, delta) => {
    frameCountRef.current++;
    
    // Update setiap 2 frame untuk mengurangi beban
    if (frameCountRef.current % 2 !== 0 && !dragged) return;
    
    if (dragged && card.current) {
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      
      card.current.setNextKinematicTranslation({ 
        x: x,
        y: y,
        z: 0
      });
    }
    
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const currentPos = ref.current.translation();
        const distance = ref.current.lerped.distanceTo(currentPos);
        const clampedDistance = Math.max(0.1, Math.min(1, distance));
        const lerpSpeed = Math.min(delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)), 0.5);
        ref.current.lerped.lerp(currentPos, lerpSpeed);
      });
      
      if (j3.current && j2.current && j1.current && fixed.current) {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());
        
        try {
          band.current.geometry.setPoints(curve.getPoints(32));
        } catch (error) {
          console.warn('Error updating band geometry:', error);
        }
      }
      
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ 
          x: ang.x * 0.95, 
          y: ang.y - rot.y * 0.15,
          z: ang.z * 0.95 
        });
      }
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const handlers = useMemo(() => ({
    onPointerOver: () => setHover(true),
    onPointerOut: () => setHover(false),
    onPointerUp: (e) => {
      e.target.releasePointerCapture(e.pointerId);
      setDrag(false);
    },
    onPointerDown: (e) => {
      e.target.setPointerCapture(e.pointerId);
      e.stopPropagation();
      setDrag(true);
    }
  }), []);

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
          linearDamping={3}
          angularDamping={3}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            {...handlers}
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
});

export default function Lanyard({ 
  position = [0, 0, 30], 
  gravity = [0, -30, 0],
  fov = 20, 
  transparent = true 
}) {
  // Pause physics saat tidak terlihat
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const canvas = document.querySelector('canvas');
    if (canvas) observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  return (
    <Canvas
      camera={{ position: position, fov: fov }}
      gl={{ 
        alpha: transparent,
        antialias: true,
        powerPreference: "high-performance"
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        gl.shadowMap.enabled = false;
      }}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
      frameloop={isVisible ? "always" : "demand"}
      dpr={[1, 2]} // Limit pixel ratio untuk performa
    >
      <ambientLight intensity={Math.PI} />
      <Physics 
        gravity={gravity} 
        timeStep={1 / 60}
        iterations={15}
        colliders="hull"
        paused={!isVisible}
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

useGLTF.preload(cardGLB);
useTexture.preload(lanyardTexture);