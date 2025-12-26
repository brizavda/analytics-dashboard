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
      <aside
        className=" hidden lg:flex flex-col h-screen
          fixed inset-y-0 left-0 z-50 w-64
          backdrop-blur-xl
          bg-[var(--card)]
          border-r border-[var(--border)]
          text-[var(--foreground)]
          shadow-xl
          transition-transform duration-300
          lg:translate-x-0
        "
      >

        <div className="flex flex-col px-6 py-8 w-full">
          {/* Logo */}
          <h2 className="text-xl font-bold mb-10 text-foreground">
            <span className="text-accent">Analytics</span>
          </h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  flex items-center gap-3 px-4 py-2 rounded-lg
                  text-[var(--muted)]
                  hover:text-rose-500
                  hover:bg-rose-500/10
                "
              >
                <item.icon size={18} className="text-accent" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
  );
}
