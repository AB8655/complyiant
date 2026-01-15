// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon.svg"
            alt="Complyiant logo"
            width={32}
            height={32}
            priority
          />

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-white">
              Complyiant
            </span>
            <span className="text-xs text-slate-400">
              Compliance, without the chaos
            </span>
          </div>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden sm:inline-block text-sm text-slate-300 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#start-trial"
            className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Start trial
          </a>
        </div>
      </div>
    </header>
  );
}
