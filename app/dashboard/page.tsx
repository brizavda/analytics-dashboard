"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/ui/DashboardHeader";
import RevenueChart from "../components/ui/RevenueChart";
import StatCard from "../components/ui/StatCard";
import UsersOrdersChart from "../components/ui/UsersOrdersChart";
import { dashboardStats } from "../data/mockData";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 lg:ml-64 px-4 sm:px-8 xl:px-16 py-10 space-y-10">
        
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevenueChart />
          <UsersOrdersChart />
        </section>

      </main>
    </div>
  );
}
