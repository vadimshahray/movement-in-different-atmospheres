import { Box, Typography, useTheme } from '@mui/material'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export type ChartPointData = {
  x: number
  y: number
}

export type LinearChartProps = {
  data: ChartPointData[]
  label: string
}

export const LinearChart = ({ data, label }: LinearChartProps) => {
  const { palette, typography } = useTheme()

  return (
    <>
      <Typography variant='caption'>{label}</Typography>

      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 4, left: -32, bottom: 5 }}
        >
          <YAxis
            dataKey='y'
            stroke={palette.text.secondary}
            fontSize={typography.caption.fontSize}
          />

          <XAxis
            dataKey='x'
            interval={'preserveStartEnd'}
            stroke={palette.text.secondary}
            fontSize={typography.caption.fontSize}
          />

          <Line
            type='monotone'
            dataKey='y'
            dot={false}
            stroke={palette.primary.main}
          />

          <CartesianGrid strokeDasharray='1 3' />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}