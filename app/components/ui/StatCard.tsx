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
    <div
      className="
        bg-[var(--card)]
        text-[var(--card-foreground)]
        border border-[var(--border)]
        rounded-2xl
        p-6
        shadow-sm
        transition-colors
      "
    >
      <p className="text-sm text-[var(--muted)]">{label}</p>

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
