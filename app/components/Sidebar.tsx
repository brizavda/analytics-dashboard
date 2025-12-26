"use client";

import { BarChart3, LayoutDashboard, Settings, Users } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Users", href: "/dashboard", icon: Users },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 bg-[#0f0f14] border-r border-white/5">
      <div className="flex flex-col w-full px-6 py-8">
        {/* Logo */}
        <h2 className="text-xl font-bold text-white mb-10">
          <span className="text-rose-500">Analytics</span> 
        </h2>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-rose-500/10 transition"
            >
              <item.icon size={18} className="text-rose-400" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
