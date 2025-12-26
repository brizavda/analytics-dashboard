"use client";

import { useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";

import UsersOrdersChart from "@/app/components/ui/UsersOrdersChart";
import DashboardHeader from "../components/ui/DashboardHeader";
import RevenueChart from "../components/ui/RevenueChart";
import StatCard from "../components/ui/StatCard";
import { dashboardStats } from "../data/mockData";

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile sidebar */}
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main */}
      <main className="lg:ml-64 px-6 sm:px-10 py-10 space-y-10">
        
        <DashboardHeader onMenuClick={() => setMobileOpen(true)} />

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
