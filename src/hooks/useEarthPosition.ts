import { EARTH_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'

export const useEarthPosition = () => {
  const distance = useSelector(selectMeteoriteDistance)

  return new THREE.Vector3(scaleMeters(distance) + EARTH_RADIUS, 0, 0)
}