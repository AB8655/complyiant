// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-4">
        {/* LEFT: BRAND */}
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
            <span className="text-[11px] text-slate-600">
              Compliance, without the chaos.
            </span>
          </div>
        </Link>

        {/* CENTER: Proudly 🍁 Canadian */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-slate-600">
          <span>Proudly</span>
          <span aria-hidden="true">🍁</span>
          <span>Canadian</span>
        </div>

        {/* RIGHT: CONTACT */}
        <div className="flex justify-end">
          <a
            href="#contact"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
