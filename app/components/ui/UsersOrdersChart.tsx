"use client";

import { usersOrdersData } from "@/app/data/chartData";
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export default function UsersOrdersChart() {
  return (
    <div className="bg-white dark:bg-[#18181f] rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Users & Orders
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={usersOrdersData}>
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="users"
            fill="#f43f5e"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="orders"
            fill="#fb7185"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
