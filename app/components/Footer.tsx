// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-3 items-center text-xs sm:text-sm text-slate-300">
        
        {/* LEFT: Copyright */}
        <div className="text-left">
          © {new Date().getFullYear()} Complyiant. All rights reserved.
        </div>

        {/* CENTER: Proudly Canadian */}
        <div className="flex justify-center text-slate-400">
          <span className="flex items-center gap-1.5">
            Proudly <span aria-hidden="true">🍁</span> Canadian
          </span>
        </div>

        {/* RIGHT: Links */}
        <div className="flex justify-end gap-4">
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
          <a
            href="https://microcompliance-frontend.onrender.com/signup"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
      
        </div>

      </div>
    </footer>
  );
}
