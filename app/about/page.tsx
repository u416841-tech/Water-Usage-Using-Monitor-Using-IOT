"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Radio, Zap, Database } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background grid-background p-6">
      <div className="max-w-4xl mx-auto space-y-8 pt-20 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">About AquaFlow</h1>
          <p className="text-lg text-muted-foreground">
            The future of intelligent water management through IoT innovation
          </p>
        </div>

        {/* Mission */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              AquaFlow is dedicated to revolutionizing how households and businesses monitor and manage water
              consumption. By combining real-time IoT sensor data with advanced analytics, we empower users to detect
              leaks early, optimize usage patterns, and contribute to global water conservation efforts.
            </p>
            <p>
              Our vision is a world where every drop of water is accounted for, wasted water is minimized, and
              sustainable practices become the norm.
            </p>
          </CardContent>
        </Card>

        {/* IoT Integration */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">IoT Hardware Integration</h2>
          <p className="text-muted-foreground">
            AquaFlow leverages cutting-edge IoT hardware for real-time monitoring:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="purple-blur-glow border-border/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-accent" />
                  <CardTitle>NodeMCU</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">WiFi-enabled microcontroller</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>ESP8266 architecture</li>
                  <li>Direct cloud connectivity</li>
                  <li>Low power consumption</li>
                  <li>$5-10 per unit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="purple-blur-glow border-border/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-accent" />
                  <CardTitle>Flow Sensors</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Precise water flow measurement</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Accuracy: ±3%</li>
                  <li>Range: 0-30 L/min</li>
                  <li>Hall effect technology</li>
                  <li>Durable & long-lasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="purple-blur-glow border-border/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent" />
                  <CardTitle>Power Supply</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Reliable energy management</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>5V USB power input</li>
                  <li>Battery backup option</li>
                  <li>Low standby power</li>
                  <li>Safe voltage regulation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="purple-blur-glow border-border/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-accent" />
                  <CardTitle>Data Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Cloud-based processing</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Real-time data sync</li>
                  <li>Secure HTTPS transmission</li>
                  <li>Encrypted storage</li>
                  <li>Historical analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Architecture */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>System Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Hardware Layer
                </h3>
                <p className="text-sm text-muted-foreground ml-4">
                  Flow sensors connected to NodeMCU measure water consumption in real-time. Data is read from the sensor
                  pins at regular intervals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Connectivity
                </h3>
                <p className="text-sm text-muted-foreground ml-4">
                  NodeMCU connects to WiFi networks and transmits sensor data to our cloud backend via secure HTTPS APIs
                  every second.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Processing
                </h3>
                <p className="text-sm text-muted-foreground ml-4">
                  Data is processed in real-time to detect anomalies, calculate usage statistics, and trigger alerts
                  when thresholds are exceeded.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Visualization
                </h3>
                <p className="text-sm text-muted-foreground ml-4">
                  Users access the AquaFlow dashboard (this app) to view real-time data, analytics, and historical
                  trends through an intuitive web interface.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Roadmap */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Future Roadmap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Q1 2025</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>✓ Mobile app development</li>
                <li>✓ Multi-sensor support</li>
                <li>✓ Machine learning anomaly detection</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Q2-Q3 2025</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>✓ Smart valve automation</li>
                <li>✓ Integration with smart home platforms</li>
                <li>✓ Predictive consumption forecasting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Q4 2025+</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>✓ Community insights & benchmarking</li>
                <li>✓ Municipal-scale monitoring</li>
                <li>✓ Water quality analysis</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Technical Stack */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Technical Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• React 19</li>
                  <li>• Next.js 16</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• Recharts</li>
                  <li>• Lucide Icons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Hardware & IoT</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• NodeMCU (ESP8266)</li>
                  <li>• YF-S201 Flow Sensor</li>
                  <li>• Arduino Framework</li>
                  <li>• MQTT Protocol (optional)</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
