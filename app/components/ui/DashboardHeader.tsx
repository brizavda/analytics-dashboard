
export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back, <span className="text-rose-500">Italia</span> 🌸
            </h1>
            <p className="text-sm text-gray-400 mt-1">
            Thursday, December 25
            </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-semibold">
            I
            </div>
            <span className="text-sm text-gray-200 hidden sm:block">
            Italia Barrón
            </span>
        </div>
        </div>
    </header>
  );
}
