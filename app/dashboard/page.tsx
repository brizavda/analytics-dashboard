import UsersOrdersChart from "@/app/components/ui/UsersOrdersChart";
import DashboardHeader from "../components/ui/DashboardHeader";
import RevenueChart from "../components/ui/RevenueChart";
import StatCard from "../components/ui/StatCard";
import { dashboardStats } from "../data/mockData";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      
      {/* HEADER */}
      <DashboardHeader />

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {dashboardStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
        ))}
      </section>
        {/* CHARTS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <RevenueChart />
        <UsersOrdersChart />
      </section>

    </div>
  );
}
