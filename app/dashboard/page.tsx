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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
        <RevenueChart />
        <UsersOrdersChart />
      </section>

    </div>
  );
}
