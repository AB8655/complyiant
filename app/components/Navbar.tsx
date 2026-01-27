// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const SIGNUP_URL = "https://microcompliance-frontend.onrender.com/signup";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* LEFT: BRAND (always scroll to top) */}
        <Link
          href="/#top"
          className="flex items-center gap-3"
          onClick={(e) => {
            // If we're already on the homepage, force scroll-to-top
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          aria-label="Complyiant — go to top"
        >
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
        <div className="flex items-center gap-1 text-[10px] md:text-xs font-medium text-slate-700">
          <span>Proudly</span>
          <span aria-hidden="true">🍁</span>
          <span>Canadian</span>
        </div>

        {/* RIGHT: CTA */}
        <div className="flex items-center gap-3">
          <a
            href={SIGNUP_URL}
            className="rounded-md bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-emerald-700"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
