"use client";

import { revenueData } from "@/app/data/chartData";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RevenueChart() {
  return (
    <div
      className="
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-2xl
        p-6
      "
    >

      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
        Revenue Overview
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#f43f5e"
            strokeWidth={3}
            fill="url(#pinkGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
