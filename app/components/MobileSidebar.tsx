"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-rose-500 text-white p-2 rounded-lg"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 left-0 w-64 h-full bg-[#0f0f14] z-50 px-6 py-8"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">
                  Analytics <span className="text-rose-500">🌸</span>
                </h2>
                <button onClick={() => setOpen(false)}>
                  <X className="text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {["Dashboard", "Analytics", "Users", "Settings"].map((item) => (
                  <Link
                    key={item}
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
