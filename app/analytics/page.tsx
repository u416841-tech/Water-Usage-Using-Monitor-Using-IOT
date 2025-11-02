"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const dailyData = [
  { day: "Mon", usage: 245, expected: 280 },
  { day: "Tue", usage: 312, expected: 280 },
  { day: "Wed", usage: 267, expected: 280 },
  { day: "Thu", usage: 189, expected: 280 },
  { day: "Fri", usage: 290, expected: 280 },
  { day: "Sat", usage: 334, expected: 280 },
  { day: "Sun", usage: 278, expected: 280 },
]

const weeklyData = [
  { week: "Week 1", usage: 1895, savings: 245 },
  { week: "Week 2", usage: 2012, savings: 128 },
  { week: "Week 3", usage: 1756, savings: 384 },
  { week: "Week 4", usage: 1934, savings: 206 },
]

const usageBreakdown = [
  { name: "Toilet", value: 35 },
  { name: "Shower", value: 25 },
  { name: "Washing", value: 20 },
  { name: "Irrigation", value: 15 },
  { name: "Other", value: 5 },
]

const COLORS = [
  "hsl(var(--color-chart-1))",
  "hsl(var(--color-chart-2))",
  "hsl(var(--color-chart-3))",
  "hsl(var(--color-chart-4))",
  "hsl(var(--color-chart-5))",
]

export default function Analytics() {
  return (
    <main className="min-h-screen bg-background grid-background p-6">
      <div className="max-w-7xl mx-auto space-y-6 pt-20 relative z-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Detailed water usage insights and patterns</p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="purple-blur-glow border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Week Avg</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">249 L</div>
              <p className="text-xs text-muted-foreground mt-1">per day</p>
            </CardContent>
          </Card>
          <Card className="purple-blur-glow border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">7.9K</div>
              <p className="text-xs text-muted-foreground mt-1">this month</p>
            </CardContent>
          </Card>
          <Card className="purple-blur-glow border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Water Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">963 L</div>
              <p className="text-xs text-muted-foreground mt-1">vs baseline</p>
            </CardContent>
          </Card>
          <Card className="purple-blur-glow border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">38%</div>
              <p className="text-xs text-muted-foreground mt-1">improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Daily vs Expected */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Daily Usage vs Expected</CardTitle>
            <CardDescription>Last 7 days comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                <XAxis dataKey="day" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
                <YAxis tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--color-card))",
                    border: "1px solid hsl(var(--color-border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--color-foreground))",
                  }}
                />
                <Legend wrapperStyle={{ color: "hsl(var(--color-muted-foreground))" }} />
                <Bar dataKey="usage" fill="#ffffff" name="Actual Usage" />
                <Bar dataKey="expected" fill="rgba(255, 255, 255, 0.6)" name="Expected" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weekly Trend */}
          <Card className="purple-blur-glow border-border/30">
            <CardHeader>
              <CardTitle>Weekly Trend</CardTitle>
              <CardDescription>Usage and savings per week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                  <XAxis dataKey="week" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
                  <YAxis tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--color-card))",
                      border: "1px solid hsl(var(--color-border))",
                      borderRadius: "0.5rem",
                      color: "hsl(var(--color-foreground))",
                    }}
                  />
                  <Legend wrapperStyle={{ color: "hsl(var(--color-muted-foreground))" }} />
                  <Line
                    type="monotone"
                    dataKey="usage"
                    stroke="hsl(var(--color-accent))"
                    name="Total Usage (L)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="hsl(var(--color-accent))"
                    name="Savings (L)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Usage Breakdown */}
          <Card className="purple-blur-glow border-border/30">
            <CardHeader>
              <CardTitle>Usage Breakdown</CardTitle>
              <CardDescription>By water usage type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={usageBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {usageBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--color-card))",
                      border: "1px solid hsl(var(--color-border))",
                      borderRadius: "0.5rem",
                      color: "hsl(var(--color-foreground))",
                    }}
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card className="purple-blur-glow border-border/30">
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold text-foreground">Peak Usage Hours</h3>
              <p className="text-sm text-muted-foreground">Morning (6-8 AM) and evening (6-9 PM) see highest usage</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold text-foreground">Conservation Opportunity</h3>
              <p className="text-sm text-muted-foreground">
                Toilets account for 35% of usage - consider low-flow options
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold text-foreground">Trends</h3>
              <p className="text-sm text-muted-foreground">
                Weekend usage increases by ~20% - outdoor irrigation detected
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
