export default function DashboardHeader() {
  return (
    <header className="flex items-start justify-between gap-4">
      {/* LEFT */}
      <div>
        <h1 className="text-3xl font-semibold text-white">
          Welcome back, <span className="text-pink-500">Italia</span> 
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Thursday, December 25
        </p>
      </div>

      {/* RIGHT — USER */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-semibold">
          I
        </div>
        <span className="hidden sm:block text-sm text-gray-300">
          Italia Barrón
        </span>
      </div>
    </header>
  );
}
