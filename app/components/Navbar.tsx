// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
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
            <span className="text-[11px] text-emerald-700">
              Built in Canada for Canadian businesses
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
            Request early access
          </a>
        </div>
      </div>
    </header>
  );
}
