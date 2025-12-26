"use client";

import { X } from "lucide-react";
import SidebarContent from "./SidebarContent";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div
        className="absolute left-0 top-0 h-full w-64
        bg-black/90 backdrop-blur-xl border-r border-white/10
        animate-slide-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X size={20} />
        </button>

        <SidebarContent onItemClick={onClose} />
      </div>
    </div>
  );
}
