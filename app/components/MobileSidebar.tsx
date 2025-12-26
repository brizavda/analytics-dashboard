"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="relative w-64 h-full bg-[#0f0f14] p-6">
        <button
          onClick={onClose}
          className="mb-6 text-white"
        >
          <X />
        </button>

        <nav className="flex flex-col gap-4 text-white">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/users">Users</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>
    </div>
  );
}
