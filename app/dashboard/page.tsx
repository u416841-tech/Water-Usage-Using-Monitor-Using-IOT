"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import LiveChart from "@/components/live-chart"
import WaterGauge from "@/components/water-gauge"
import { AlertTriangle, Droplets } from "lucide-react"

interface WaterReading {
  timestamp: Date
  flowRate: number // liters per minute
}

export default function Dashboard() {
  const [readings, setReadings] = useState<WaterReading[]>([])
  const [currentFlow, setCurrentFlow] = useState(0)
  const [isAlert, setIsAlert] = useState(false)
  const FLOW_THRESHOLD = 8 // liters per minute

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setReadings((prev) => {
        // Generate realistic flow data (normally between 0.5-6 L/min, occasional spikes)
        const random = Math.random()
        let flowRate: number

        if (random < 0.05) {
          // 5% chance of spike (leak detection scenario)
          flowRate = Math.random() * 12 + 6 // 6-18 L/min
        } else if (random < 0.3) {
          // 25% chance of normal usage
          flowRate = Math.random() * 4 + 2 // 2-6 L/min
        } else {
          // 70% chance of idle
          flowRate = Math.random() * 1 // 0-1 L/min
        }

        const newReading: WaterReading = {
          timestamp: new Date(),
          flowRate: Math.round(flowRate * 10) / 10,
        }

        const updated = [...prev, newReading].slice(-60) // Keep last 60 readings
        return updated
      })
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  // Update current flow and check for alerts
  useEffect(() => {
    if (readings.length > 0) {
      const latest = readings[readings.length - 1]
      setCurrentFlow(latest.flowRate)
      setIsAlert(latest.flowRate > FLOW_THRESHOLD)
    }
  }, [readings])

  return (
    <main className="min-h-screen bg-background grid-background p-6">
      <div className="max-w-7xl mx-auto space-y-6 pt-20 relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Dashboard</h1>
          <p className="text-muted-foreground">Real-time water usage monitoring</p>
        </div>

        {/* Alert Banner */}
        {isAlert && (
          <Alert className="border-destructive bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive ml-2">
              ⚠️ High water flow detected ({currentFlow} L/min). Check for leaks!
            </AlertDescription>
          </Alert>
        )}

        {/* Current Flow Gauge and Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="purple-blur-glow border-border/30">
              <CardHeader>
                <CardTitle>Current Flow Rate</CardTitle>
                <CardDescription>Real-time sensor reading</CardDescription>
              </CardHeader>
              <CardContent>
                <WaterGauge value={currentFlow} max={15} />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="purple-blur-glow border-border/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-3xl font-bold text-foreground">{currentFlow}</div>
                    <div className="text-xs text-muted-foreground">L/min</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="purple-blur-glow border-border/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isAlert ? "bg-destructive animate-pulse" : "bg-accent"}`} />
                  <span className="font-medium text-foreground">{isAlert ? "Critical" : "Normal"}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chart */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Flow Rate Timeline (Last 60s)</CardTitle>
            <CardDescription>Continuous monitoring of water usage</CardDescription>
          </CardHeader>
          <CardContent>
            <LiveChart data={readings} threshold={FLOW_THRESHOLD} />
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="purple-blur-glow border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Daily Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">324 L</div>
              <p className="text-sm text-muted-foreground mt-2">Today's consumption</p>
            </CardContent>
          </Card>
          <Card className="purple-blur-glow border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Threshold</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{FLOW_THRESHOLD} L/min</div>
              <p className="text-sm text-muted-foreground mt-2">Alert limit for anomalies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
