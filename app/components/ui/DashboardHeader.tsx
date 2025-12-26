"use client";
import ThemeToggle from "./ThemeToggle";


import { Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="
      sticky top-0 z-30
      flex items-center justify-between
      px-4 py-3
      backdrop-blur-md
    ">    
    
      {/* Hamburguesa SOLO mobile */}
      <button
        onClick={onMenuClick}
        className="
          lg:hidden
          p-2 rounded-xl
          bg-rose-500 text-white
          shadow-lg
          active:scale-95
          transition
        "
      >
        <Menu size={20} />
      </button>

      <div className="flex-1 text-center lg:text-left lg:ml-0">
        <h1 className="text-lg sm:text-2xl font-bold">
          Welcome back, <span className="text-rose-500">Italia</span>
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Thursday, December 25
        </p>
        
      </div>

      {/* Usuario */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="
          w-9 h-9 rounded-full
          bg-rose-500
          text-white
          flex items-center justify-center
          font-semibold
        ">
          I
        </div>

        <span className="font-medium text-[var(--foreground)]">
          Italia Barrón
        </span>
      </div>
    </header>
  );
}
