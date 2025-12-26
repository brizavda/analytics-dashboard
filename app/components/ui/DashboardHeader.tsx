import { format } from "date-fns";

export default function DashboardHeader() {
  const today = format(new Date(), "EEEE, MMMM d");

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
      {/* Left side */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back, <span className="text-rose-500">Italia</span> 🌸
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {today}
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">
          I
        </div>
        <span className="text-sm font-medium text-gray-700">
          Italia Barrón
        </span>
      </div>
    </header>
  );
}
