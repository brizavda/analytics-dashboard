import DashboardHeader from "../components/ui/DashboardHeader";
import StatCard from "../components/ui/StatCard";
import { dashboardStats } from "../data/mockData";

export default function DashboardPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>
    </main>
  );
}
