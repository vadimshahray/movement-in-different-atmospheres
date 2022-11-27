import { Container, TabPanel } from 'components'
import React, { useState } from 'react'
import { AtmosphereSection } from './AtmosphereSection'
import { MeteoriteSection } from './MeteoriteSection'
import { PlanetSection } from './PlanetSection'
import { SectionsTabs } from './SectionsTabs'

/** Секции конфигурации */
export const ConfigureSections = () => {
  const [activeTabPanel, setActiveTabPanel] = useState('0')

  const handleActiveTabChange = (tab: number) => {
    setActiveTabPanel(tab.toString())
  }

  return (
    <Container disableGutters>
      <SectionsTabs onActiveTabChange={handleActiveTabChange} />

      <Container>
        <TabPanel value={activeTabPanel} index='0'>
          <MeteoriteSection />
        </TabPanel>
        <TabPanel value={activeTabPanel} index='1'>
          <PlanetSection />
        </TabPanel>
        <TabPanel value={activeTabPanel} index='2'>
          <AtmosphereSection />
        </TabPanel>
      </Container>
    </Container>
  )
}
