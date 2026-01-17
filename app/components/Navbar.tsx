// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
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
            <span className="text-[11px] text-slate-500">
              Compliance without the chaos
            </span>
          </div>
        </Link>

        {/* CENTER: IDENTITY */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-700">
          <span>Proudly</span>
          <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 px-1.5 py-0.5">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 text-emerald-700"
              aria-hidden="true"
            >
              <path
                d="M12 2l2 4.3 4.7-.8-2.7 3.8 2.7 3.8-4.7-.8L12 22l-2-9.7-4.7.8 2.7-3.8-2.7-3.8 4.7.8z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>Canadian</span>
        </div>

        {/* RIGHT: CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://microcompliance-frontend.onrender.com/signup"
            className="rounded-md bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-emerald-700"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
