import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from '@slices'
import { SliderTextField } from '@components'
import { METEORITE_LIMITS } from '@constants'
import { MouseOutlined } from '@mui/icons-material'
import { selectMeteoriteDistance } from '@selectors'

export const DistanceField = () => {
  const dispatch = useDispatch()
  const distance = useSelector(selectMeteoriteDistance)

  const handleChange = (value: number) => {
    dispatch(
      setMeteoriteData({
        distance: value,
      }),
    )
  }

  return (
    <SliderTextField
      min={METEORITE_LIMITS.DISTANCE_MIN}
      max={METEORITE_LIMITS.DISTANCE_MAX}
      step={500}
      adornment='𝓓'
      label='Расстояние от поверхности планеты, м'
      value={distance}
      onChange={handleChange}
      EndIcon={MouseOutlined}
      endIconTooltip='Вы можете изменять этот параметр, используя зажатую клавишу Alt и колесико мышки'
    />
  )
}
