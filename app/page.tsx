// app/page.tsx

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Built for bookkeepers & small business owners
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Compliance tasks, handled{" "}
            <span className="text-emerald-400">without the chaos.</span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Complyiant keeps recurring deadlines, filings, and registrations
            in one place—so you and your clients always know what&apos;s due,
            what&apos;s done, and what&apos;s at risk of slipping.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#start-trial"
              className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Start free trial
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-white"
            >
              Book a walkthrough →
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>No credit card required</span>
            <span>•</span>
            <span>Designed for Canadian compliance workflows</span>
          </div>
        </div>

        {/* Simple “app preview” block */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-emerald-500/10">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span>Compliance dashboard</span>
            <span>Demo</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between rounded-lg bg-slate-900 px-3 py-2">
              <div>
                <div className="font-medium text-slate-100">
                  GST / HST Filing
                </div>
                <div className="text-slate-400 text-[11px]">
                  Quarterly · RDS Office Services
                </div>
              </div>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] text-amber-300">
                Due soon
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-slate-900 px-3 py-2">
              <div>
                <div className="font-medium text-slate-100">
                  Payroll remittance
                </div>
                <div className="text-slate-400 text-[11px]">
                  Monthly · All companies
                </div>
              </div>
              <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[11px] text-red-300">
                Overdue
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-slate-900 px-3 py-2">
              <div>
                <div className="font-medium text-slate-100">
                  WCB / WSIB filing
                </div>
                <div className="text-slate-400 text-[11px]">
                  Annual · Upcoming
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] text-emerald-300">
                On track
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Stay ahead of every filing, registration, and renewal.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-white">
              Centralized task hub
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              All recurring compliance obligations in one shared view—no more
              spreadsheets scattered across teams and clients.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-white">
              Recurring schedules that make sense
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monthly, quarterly, annual—you define the cadence, we keep track
              of what&apos;s due and what&apos;s overdue.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-white">
              Owner-ready visibility
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Give business owners a clear picture of compliance health without
              burying them in accountant-speak.
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE PRICING PLACEHOLDER */}
      <section id="pricing" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Pricing that works for small firms.
        </h2>
        <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Practice plan
              </div>
              <div className="text-xs text-slate-400">
                For bookkeepers and small accounting firms.
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-emerald-400">
                TBD
              </div>
              <div className="text-[11px] text-slate-500">
                per month, per firm
              </div>
            </div>
          </div>
          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
            <li>Unlimited companies</li>
            <li>Unlimited users</li>
            <li>Core compliance task tracking</li>
          </ul>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
      >
        <h2 className="text-xl font-semibold text-white">
          See if Complyiant fits your workflow.
        </h2>
        <p className="text-sm text-slate-300 max-w-xl">
          Tell us a bit about your firm and how you&apos;re handling
          compliance right now. We&apos;ll walk through your use case, not a
          generic demo.
        </p>
        <a
          href="mailto:info@example.com"
          className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
        >
          Email us to book a walkthrough
        </a>
      </section>
    </div>
  );
}
