"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

interface ChartDataPoint {
  timestamp: Date
  flowRate: number
}

interface LiveChartProps {
  data: ChartDataPoint[]
  threshold: number
}

export default function LiveChart({ data, threshold }: LiveChartProps) {
  const chartData = data.map((point, index) => ({
    time: index,
    flowRate: point.flowRate,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
        <XAxis dataKey="time" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
        <YAxis tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--color-card))",
            border: "1px solid hsl(var(--color-border))",
            borderRadius: "0.5rem",
            color: "hsl(var(--color-foreground))",
          }}
          formatter={(value) => `${value} L/min`}
        />
        <Legend
          wrapperStyle={{
            color: "hsl(var(--color-muted-foreground))",
          }}
        />
        <ReferenceLine
          y={threshold}
          stroke="hsl(var(--color-destructive))"
          strokeDasharray="5 5"
          label={{
            value: `Threshold (${threshold} L/min)`,
            fill: "hsl(var(--color-destructive))",
            position: "right",
          }}
        />
        <Line
          type="monotone"
          dataKey="flowRate"
          stroke="hsl(var(--color-accent))"
          dot={false}
          isAnimationActive={false}
          name="Flow Rate"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
