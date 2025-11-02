"use client"

import { Button } from "@/components/ui/button"
import { Droplets, TrendingDown, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background grid-background">
      {/* Hero Section */}
      <section className="relative min-h-[700px] overflow-hidden pt-32">
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            src="https://my.spline.design/theabstractelement-6FSMZdsAAjHbmdtZVomrtm0H/"
            frameBorder="0"
            className="w-full h-full"
            title="Abstract element background"
          />
        </div>

        {/* Content overlay with relative positioning */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Monitor Every Drop</h1>
                <p className="text-xl text-muted-foreground">
                  Real-time IoT water usage monitoring. Track consumption, reduce waste, and save resources with
                  intelligent analytics.
                </p>
              </div>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                >
                  <Droplets className="w-5 h-5" />
                  Start Monitoring
                </Button>
              </Link>
            </div>

            <div className="purple-blur-glow rounded-2xl border border-border/30 p-8 space-y-6 hover:border-border/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Droplets className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real-Time Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Live water usage data with IoT sensors</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Usage Optimization</h3>
                  <p className="text-sm text-muted-foreground">Identify patterns and reduce consumption</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Smart Analytics</h3>
                  <p className="text-sm text-muted-foreground">Detailed daily & weekly insights</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Smart Alerts</h3>
                  <p className="text-sm text-muted-foreground">Get notified of anomalies instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-6 relative z-20">
        <div className="purple-blur-glow border border-border/30 rounded-2xl p-8 text-center hover:border-border/50 transition-all duration-300">
          <div className="text-4xl font-bold text-accent mb-2">47%</div>
          <p className="text-muted-foreground font-medium">Average water saved</p>
        </div>
        <div className="purple-blur-glow border border-border/30 rounded-2xl p-8 text-center hover:border-border/50 transition-all duration-300">
          <div className="text-4xl font-bold text-accent mb-2">500+</div>
          <p className="text-muted-foreground font-medium">Active installations</p>
        </div>
        <div className="purple-blur-glow border border-border/30 rounded-2xl p-8 text-center hover:border-border/50 transition-all duration-300">
          <div className="text-4xl font-bold text-accent mb-2">24/7</div>
          <p className="text-muted-foreground font-medium">Real-time monitoring</p>
        </div>
      </section>
    </main>
  )
}
