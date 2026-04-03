// src/scene/RocketScene.jsx
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import Lighting from './Lighting'
import RocketModel from './RocketModel'

function SceneLoader() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#4fc3f7" wireframe />
    </mesh>
  )
}

export default function RocketScene({ scrollProgress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45, near: 0.1, far: 100 }}
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: 2, // ACESFilmicToneMapping
        toneMappingExposure: 1.2,
        outputColorSpace: 'srgb',
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<SceneLoader />}>
        <Lighting />

        <Stars
          radius={80}
          depth={50}
          count={3000}
          factor={3}
          saturation={0.3}
          fade
          speed={0.3}
        />

        <Environment preset="night" />

        <RocketModel scrollProgress={scrollProgress} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={4}
          maxDistance={18}
          autoRotate={scrollProgress < 0.05}
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.8}
        />
      </Suspense>
    </Canvas>
  )
}