import { useToolbar } from 'hooks'
import React, { useEffect } from 'react'
import { PlanetRField, PlanetMField } from './Fields'
import { PickPlanetModelDataButton } from './PickPlanetModelDataButton'
import { GVariableView } from './VariableViews'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  const { setActionButtons } = useToolbar()

  useEffect(() => {
    setActionButtons([<PickPlanetModelDataButton />])

    return () => {
      setActionButtons()
    }
  }, [setActionButtons])

  return (
    <div>
      <PlanetRField />
      <PlanetMField />
      <GVariableView />
    </div>
  )
}
