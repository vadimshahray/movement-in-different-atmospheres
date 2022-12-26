import { useTheme } from '@mui/material'
import { CurveType } from 'recharts/types/shape/Curve'

export const useBaseChartElementsProps = () => {
  const { palette, typography } = useTheme()

  const axisCommonProps = {
    stroke: palette.text.secondary,
    fontSize: typography.caption.fontSize,
  }

  return {
    chartBaseProps: {
      margin: { top: 10, right: 4, left: -47, bottom: -12 },
    },
    yAxisBaseProps: {
      dataKey: 'y',
      angle: -90,
      ...axisCommonProps,
    },
    xAxisBaseProps: {
      dataKey: 'x',
      allowDuplicatedCategory: false,
      ...axisCommonProps,
    },
    lineBaseProps: {
      type: 'monotone' as CurveType,
      dataKey: 'y',
      dot: false,
      stroke: palette.primary.main,
    },
    cartesianGridBaseProps: {
      strokeDasharray: '1 3',
    },
  }
}
