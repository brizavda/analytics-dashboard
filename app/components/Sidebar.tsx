"use client";

import { BarChart3, LayoutDashboard, Settings, Users } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Users", href: "/dashboard", icon: Users },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className="
          fixed top-0 left-0 h-screen w-64
          bg-[var(--card)]
          border-r border-[var(--border)]
          text-[var(--foreground)]
        "
      >

        <div className="flex flex-col px-6 py-8">
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
                onClick={onClose}
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
    </>
  );
}
