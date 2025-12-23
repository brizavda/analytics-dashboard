interface StatCardProps {
  label: string;
  value: string;
  change: string;
}

export default function StatCard({
  label,
  value,
  change,
}: StatCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="p-6 bg-white rounded-xl border border-rose-100 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="text-3xl font-bold text-rose-500 mt-2">
        {value}
      </p>

      <p
        className={`text-sm mt-2 font-medium ${
          isPositive ? "text-rose-500" : "text-rose-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
}
