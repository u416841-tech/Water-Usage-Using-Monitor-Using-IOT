"use client"

import { useEffect, useState } from "react"

interface WaterGaugeProps {
  value: number
  max: number
}

export default function WaterGauge({ value, max }: WaterGaugeProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value)
    }, 50)
    return () => clearTimeout(timer)
  }, [value])

  const percentage = Math.min((displayValue / max) * 100, 100)
  const angle = (percentage / 100) * 180 - 90

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-48 h-24">
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
          {/* Gauge background */}
          <path
            d="M 20 80 A 60 60 0 0 1 180 80"
            fill="none"
            stroke="hsl(var(--color-border))"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Gauge fill */}
          <path
            d="M 20 80 A 60 60 0 0 1 180 80"
            fill="none"
            stroke="hsl(var(--color-accent))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 188.4} 188.4`}
            style={{ transition: "stroke-dasharray 0.3s ease" }}
          />
          {/* Needle */}
          <line
            x1="100"
            y1="80"
            x2={100 + 50 * Math.cos((angle * Math.PI) / 180)}
            y2={80 + 50 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(var(--color-foreground))"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ transition: "all 0.3s ease" }}
          />
          {/* Center circle */}
          <circle cx="100" cy="80" r="5" fill="hsl(var(--color-foreground))" />
          {/* Labels */}
          <text x="25" y="95" fontSize="12" fill="hsl(var(--color-muted-foreground))">
            0
          </text>
          <text x="170" y="95" fontSize="12" fill="hsl(var(--color-muted-foreground))" textAnchor="end">
            {max}
          </text>
        </svg>
      </div>
      <div className="text-center mt-4">
        <div className="text-4xl font-bold text-foreground">{displayValue.toFixed(1)}</div>
        <div className="text-sm text-muted-foreground">Liters per Minute</div>
      </div>
    </div>
  )
}
