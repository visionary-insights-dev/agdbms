"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", production: 2890 },
  { month: "Feb", production: 2756 },
  { month: "Mar", production: 3322 },
  { month: "Apr", production: 3470 },
  { month: "May", production: 3475 },
  { month: "Jun", production: 3129 },
  { month: "Jul", production: 3490 },
  { month: "Aug", production: 2980 },
  { month: "Sep", production: 3282 },
  { month: "Oct", production: 3300 },
  { month: "Nov", production: 3408 },
  { month: "Dec", production: 3450 }
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}t`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="production"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}