"use client";

import { BarChart3, LayoutDashboard, Menu, Settings, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Users", href: "/dashboard", icon: Users },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HAMBURGER — SOLO MOBILE */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-rose-500 text-white shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* OVERLAY MOBILE */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          bg-[#0f0f14] border-r border-white/5
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex
        `}
      >
        <div className="flex flex-col w-full px-6 py-8">
          {/* LOGO */}
          <h2 className="text-xl font-bold text-white mb-10">
            <span className="text-rose-500">Analytics</span>
          </h2>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-rose-500/10 transition"
              >
                <item.icon size={18} className="text-rose-400" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
