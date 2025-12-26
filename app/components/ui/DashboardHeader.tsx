
export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome back, <span className="text-rose-500">Italia</span> 🌸
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Thursday, December 25
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 font-semibold">
          I
        </div>
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Italia Barrón
        </span>
      </div>
    </header>
  );
}
