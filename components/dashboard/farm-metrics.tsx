"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { region: "North", farms: 120 },
  { region: "South", farms: 85 },
  { region: "East", farms: 70 },
  { region: "West", farms: 95 }
];

export function FarmMetrics() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="farms" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}