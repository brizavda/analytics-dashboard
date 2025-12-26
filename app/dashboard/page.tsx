import Sidebar from "../components/Sidebar";

import UsersOrdersChart from "@/app/components/ui/UsersOrdersChart";
import DashboardHeader from "../components/ui/DashboardHeader";
import RevenueChart from "../components/ui/RevenueChart";
import StatCard from "../components/ui/StatCard";

import { dashboardStats } from "../data/mockData";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      
      {/* SIDEBAR (desktop + mobile) */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-64 px-6 sm:px-10 xl:px-14 py-10 space-y-10 max-w-[1400px] mx-auto w-full">
        
        {/* HEADER */}
        <DashboardHeader />

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </section>

        {/* CHARTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevenueChart />
          <UsersOrdersChart />
        </section>

      </main>
    </div>
  );
}
