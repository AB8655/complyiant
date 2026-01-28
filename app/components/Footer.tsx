// app/components/Footer.tsx
import Link from "next/link";
import { SIGNUP_URL } from "@/app/lib/urls";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 gap-3 sm:gap-0 sm:grid-cols-3 items-center text-xs sm:text-sm text-slate-300">
        {/* LEFT: Copyright */}
        <div className="text-left">
          © {new Date().getFullYear()} Complyiant. All rights reserved.
        </div>

        {/* CENTER: Proudly Canadian */}
        <div className="flex justify-start sm:justify-center text-slate-400">
          <span className="flex items-center gap-1.5">
            Proudly <span aria-hidden="true">🍁</span> Canadian
          </span>
        </div>

        {/* RIGHT: Links */}
        <div className="flex justify-start sm:justify-end gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <a
            href="mailto:support@complyiant.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
