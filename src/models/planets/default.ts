import { G } from './constants'

/** Дефолтная конфигурация планеты */
export const defaultPlanet: PlanetData = {
  g: {
    active: 'short',
    short: 0,
    detailed: {
      G,
      M: 0,
      R: 0,
    },
  },
}
