import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useMeteoritePosition, useMeteoriteRadius } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVector } from 'selectors'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { getAngelBetweenTwoVectors } from 'utils'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']: THREE.MeshStandardMaterial
  }
}

export const METEORITE_MODEL_RADIUS = 0.03813021680565431
export const METEORITE_MODEL_NORM_RADIUS = 1.0 / METEORITE_MODEL_RADIUS

const MeteoriteModel = React.memo<MeshProps>((props) => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + '/models/meteorite/scene.gltf',
  ) as unknown as GLTFResult

  nodes.Object_2.geometry.center()

  return (
    <mesh
      dispose={null}
      geometry={nodes.Object_2.geometry}
      material={
        materials['MIL15307-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']
      }
      {...props}
    />
  )
})

export const Meteorite = React.memo(() => {
  const { scale } = useMeteoriteRadius()
  const position = useMeteoritePosition()

  const velocityVector = useSelector(selectMeteoriteVelocityVector)
  const angel = getAngelBetweenTwoVectors(velocityVector, { x: 1, y: 0 })

  return (
    <MeteoriteModel
      scale={scale}
      position={position}
      rotation={[0, angel, 0]}
    />
  )
})
