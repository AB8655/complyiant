// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} Complyiant. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#privacy" className="hover:text-slate-200">
            Privacy
          </a>
          <a href="#terms" className="hover:text-slate-200">
            Terms
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
