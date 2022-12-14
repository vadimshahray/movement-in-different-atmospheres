import { createAsyncThunk } from '@reduxjs/toolkit'
import { EARTH_LIGHT_RADIUS_SCALE } from '@constants'
import {
  scaleMeters,
  radiansToDegrees,
  getAngleBetweenTwoVectors,
} from '@utils'
import {
  selectMeteoriteDistance,
  selectInvalidUserInputCount,
  selectMeteoriteVelocityVector,
} from '@selectors'

export const checkCanModelingStart = createAsyncThunk<
  boolean,
  void,
  { dispatch: AppDispatch }
>('modeling/checkCanStart', async (_, { dispatch }) => {
  const isUserInputValid =
    (await dispatch(checkUserInputIsValid())).payload ?? false
  if (!isUserInputValid) return false

  const canMeteoriteCollide =
    (await dispatch(checkCanMeteoriteCollide())).payload ?? false
  if (!canMeteoriteCollide) return false

  return true
})

export const checkUserInputIsValid = createAsyncThunk<
  boolean,
  void,
  { state: RootState; rejectValue: undefined }
>('modeling/checkUserInputIsValid', (_, { getState }) => {
  return selectInvalidUserInputCount(getState()) === 0
})

export const checkCanMeteoriteCollide = createAsyncThunk<
  boolean,
  void,
  { state: RootState; rejectValue: undefined }
>('modeling/checkCanMeteoriteCollide', (_, { getState }) => {
  const distance = scaleMeters(selectMeteoriteDistance(getState()))

  const velocityVector = selectMeteoriteVelocityVector(getState())
  const velocityAngle = getAngleBetweenTwoVectors(velocityVector, {
    x: 1,
    y: 0,
  })

  if (Math.abs(radiansToDegrees(velocityAngle)) >= 90) return false

  const meteoriteXOffset = Math.abs(distance * Math.tan(velocityAngle))
  return meteoriteXOffset < EARTH_LIGHT_RADIUS_SCALE
})
