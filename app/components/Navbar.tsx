// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-extrabold text-lg">
            C
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight">Complyiant</span>
            <span className="text-xs text-slate-400">
              Compliance, without the chaos
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden sm:inline-block text-xs sm:text-sm text-slate-300 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#start-trial"
            className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Start trial
          </a>
        </div>
      </div>
    </header>
  );
}
