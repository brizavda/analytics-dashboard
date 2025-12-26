"use client";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="relative flex items-start justify-between gap-4">
      
      {/* Botón hamburguesa (solo mobile) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden bg-rose-500 text-white p-2 rounded-xl"
      >
        ☰
      </button>

      {/* Texto bienvenida */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, <span className="text-rose-500">Italia</span>
        </h1>
        <p className="text-gray-400 mt-1">
          Thursday, December 25
        </p>
      </div>

      {/* Usuario */}
      <div className="hidden sm:flex items-center gap-3 ml-auto">
        <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
          I
        </div>
        <span className="text-sm text-gray-300">Italia Barrón</span>
      </div>

    </header>
  );
}
