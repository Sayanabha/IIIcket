// src/scene/MeshInspector.jsx
// ⚠️ TEMPORARY — delete after you note the mesh names

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function MeshInspector({ url = '/models/rocket.glb' }) {
  const { scene, nodes } = useGLTF(url)

  useEffect(() => {
    console.group('🚀 GLTF Mesh Inspector')
    console.log('All nodes:', Object.keys(nodes))

    scene.traverse((child) => {
      if (child.isMesh) {
        console.log({
          name: child.name,
          position: child.position.toArray().map(v => +v.toFixed(3)),
          geometry: child.geometry.type,
          vertices: child.geometry.attributes.position?.count,
        })
      }
    })
    console.groupEnd()
  }, [scene, nodes])

  return null
}