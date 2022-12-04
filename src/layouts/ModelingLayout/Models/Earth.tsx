/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export const Earth = React.memo(() => {
  const { nodes, materials } = useGLTF(
    '/models/earth/scene.gltf',
  ) as unknown as GLTFResult

  return (
    <group
      position={[120, 0, 0]}
      dispose={null}
      rotation={[-Math.PI / 3, Math.PI / 18, Math.PI]}
      scale={100}
    >
      <mesh
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
})

useGLTF.preload('/models/earth/scene.gltf')