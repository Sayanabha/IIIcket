// src/scene/Lighting.jsx
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'

export default function Lighting() {
  return (
    <>
      {/* Ambient — soft base fill */}
      <ambientLight intensity={0.3} color="#b0c4de" />

      {/* Key light — main dramatic light from upper left */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light — soft blue from right (space feel) */}
      <directionalLight
        position={[-8, 3, -5]}
        intensity={0.8}
        color="#4fc3f7"
      />

      {/* Rim light — subtle from behind for edge definition */}
      <directionalLight
        position={[0, -5, -10]}
        intensity={0.4}
        color="#7e57c2"
      />

      {/* Point light — engine glow simulation */}
      <pointLight
        position={[0, -3, 1]}
        intensity={1.2}
        color="#ff6b35"
        distance={6}
        decay={2}
      />

      {/* Hemisphere — sky/ground gradient */}
      <hemisphereLight
        skyColor="#1a237e"
        groundColor="#263238"
        intensity={0.5}
      />
    </>
  )
}