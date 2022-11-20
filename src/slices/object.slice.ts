import { createSlice } from '@reduxjs/toolkit'
import { ball } from 'models'
import { physicalModels, setDefinedProperties } from 'utils'

const initialState: ObjectSliceState = {
  physicalModel: ball,
  activePhysicalModel: '@Ball',
}

export const objectSlice = createSlice<ObjectSliceState, ObjectSlice>({
  name: 'object',
  initialState,
  reducers: {
    setActivePhysicalModel: (state, { payload }) => {
      state.activePhysicalModel = payload
      state.physicalModel = physicalModels.find((m) => m.key === payload)!.data //TODO: Refactor
    },
    setPhysicalModelData: (state, { payload }) => {
      setDefinedProperties(state.physicalModel, payload)
    },

    setActiveObjectModelData: (state) => {
      state.physicalModel = physicalModels.find(
        (m) => m.key === state.activePhysicalModel, //TODO: Refactor
      )!.data
    },
  },
})

export const {
  setActivePhysicalModel,
  setPhysicalModelData,
  setActiveObjectModelData,
} = objectSlice.actions
