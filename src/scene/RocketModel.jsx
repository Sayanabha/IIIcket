// src/scene/RocketModel.jsx
import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'
import { ROCKET_PARTS, DISASSEMBLY_END } from '../utils/partConfig'
import gsap from 'gsap'

// Procedural fallback rocket (used if no GLB is loaded yet)
function ProceduralRocket({ scrollProgress }) {
  const groupRef = useRef()
  const partsRef = useRef([])

  const parts = useMemo(() => [
    // [geometry, position, label, partConfig index]
    { geo: new THREE.ConeGeometry(0.3, 0.8, 16),    pos: [0,  3.6, 0], idx: 0 },
    { geo: new THREE.CylinderGeometry(0.3, 0.3, 0.9, 16), pos: [0, 2.9, 0], idx: 1 },
    { geo: new THREE.CylinderGeometry(0.28, 0.3, 1.0, 16), pos: [0, 1.9, 0], idx: 2 },
    { geo: new THREE.CylinderGeometry(0.3, 0.3, 1.2, 16), pos: [0, 0.6, 0], idx: 3 },
    { geo: new THREE.CylinderGeometry(0.32, 0.35, 1.8, 16), pos: [0,-1.0, 0], idx: 4 },
    { geo: new THREE.CylinderGeometry(0.22, 0.32, 0.6, 16), pos: [0,-2.2, 0], idx: 5 },
  ], [])

  useFrame(() => {
    if (!partsRef.current.length) return

    const t = Math.min(scrollProgress / DISASSEMBLY_END, 1)

    partsRef.current.forEach((mesh, i) => {
      if (!mesh) return
      const cfg = ROCKET_PARTS[i]
      const ease = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2 // cubic ease in-out

      const dir = new THREE.Vector3(...cfg.separationDir)
      const basePosY = parts[i].pos[1]

      mesh.position.x = dir.x * ease
      mesh.position.y = basePosY + dir.y * ease
      mesh.position.z = dir.z * ease

      mesh.rotation.x = cfg.rotationAmount * ease * cfg.orbitAxis[0]
      mesh.rotation.y = cfg.rotationAmount * ease * cfg.orbitAxis[1]
      mesh.rotation.z = cfg.rotationAmount * ease * cfg.orbitAxis[2]

      // Fade label in
      if (mesh.userData.labelOpacity !== undefined) {
        mesh.userData.labelOpacity = ease > 0.3 ? Math.min((ease - 0.3) / 0.3, 1) : 0
      }
    })
  })

  return (
    <group ref={groupRef}>
      {parts.map((part, i) => {
        const cfg = ROCKET_PARTS[i]
        return (
          <mesh
            key={cfg.id}
            ref={el => partsRef.current[i] = el}
            geometry={part.geo}
            position={part.pos}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color={cfg.color}
              roughness={0.6}
              metalness={0.1}
              envMapIntensity={0.8}
            />
            <Html
              position={[...ROCKET_PARTS[i].labelOffset]}
              center={false}
              distanceFactor={8}
              style={{ pointerEvents: 'none' }}
            >
              <PartLabel cfg={cfg} scrollProgress={scrollProgress} index={i} />
            </Html>
          </mesh>
        )
      })}
    </group>
  )
}

function PartLabel({ cfg, scrollProgress, index }) {
  const t = Math.min(scrollProgress / DISASSEMBLY_END, 1)
  const staggerStart = (index / ROCKET_PARTS.length) * 0.4
  const opacity = t > staggerStart
    ? Math.min((t - staggerStart) / 0.2, 1)
    : 0

  return (
    <div style={{
      opacity,
      transition: 'opacity 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      whiteSpace: 'nowrap',
    }}>
      {/* Line */}
      <div style={{
        width: '32px',
        height: '1px',
        background: 'rgba(79,195,247,0.7)',
        flexShrink: 0,
      }} />
      <div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          fontWeight: '600',
          color: '#4fc3f7',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          {cfg.label}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '9px',
          color: 'rgba(255,255,255,0.45)',
          marginTop: '2px',
          maxWidth: '140px',
          lineHeight: 1.4,
        }}>
          {cfg.description}
        </div>
      </div>
    </div>
  )
}

export default function RocketModel({ scrollProgress }) {
  return <ProceduralRocket scrollProgress={scrollProgress} />
}