// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-emerald-500/10 p-1.5">
            <Image
              src="/logo-icon.svg"
              alt="Complyiant logo"
              width={28}
              height={28}
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Complyiant
            </span>
            <span className="text-xs text-emerald-700">
              Compliance, without the chaos
            </span>
          </div>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden sm:inline-block text-sm text-slate-600 hover:text-slate-900"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            Start trial
          </a>
        </div>
      </div>
    </header>
  );
}
