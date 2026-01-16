// app/page.tsx

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
            Built for bookkeepers &amp; small business owners
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Compliance tasks, handled{" "}
            <span className="text-emerald-600">without the chaos.</span>
          </h1>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Complyiant keeps recurring deadlines, filings, and registrations in
            one place—so you and your clients always know what&apos;s due,
            what&apos;s done, and what&apos;s at risk of slipping.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#start-trial"
              className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              Start free trial
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Book a walkthrough →
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>No credit card required</span>
            <span>•</span>
            <span>Designed for Canadian compliance workflows</span>
          </div>
        </div>

        {/* Simple “app preview” block */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
            <span>Compliance dashboard</span>
            <span>Sample view</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
              <div>
                <div className="font-medium text-slate-900">
                  GST / HST filing
                </div>
                <div className="text-slate-600 text-[11px]">
                  Quarterly · RDS Office Services
                </div>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700 border border-amber-100">
                Due soon
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
              <div>
                <div className="font-medium text-slate-900">
                  Payroll remittance
                </div>
                <div className="text-slate-600 text-[11px]">
                  Monthly · All companies
                </div>
              </div>
              <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] text-red-700 border border-red-100">
                Overdue
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
              <div>
                <div className="font-medium text-slate-900">
                  WCB / WSIB filing
                </div>
                <div className="text-slate-600 text-[11px]">
                  Annual · Upcoming
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700 border border-emerald-100">
                On track
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR STRIP */}
      <section className="mt-4">
        <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs text-slate-700">
          <span className="font-semibold text-slate-900 mr-1">
            Who is Complyiant for?
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
            Small businesses
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
            Bookkeepers
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
            Accounting firms
          </span>
        </div>
      </section>

      {/* FEATURES */}
<section id="features" className="space-y-6">
  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
    Built for small businesses and the firms that support them.
  </h2>
  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Centralized compliance hub
      </h3>
      <p className="text-sm text-slate-700 leading-snug">
        See every filing, registration, and renewal for a company in one shared
        list instead of scattered spreadsheets and emails.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Smart recurring schedules
      </h3>
      <p className="text-sm text-slate-700 leading-snug">
        Monthly, quarterly, annual—set it once and Complyiant keeps track of
        what&apos;s due, what&apos;s overdue, and what&apos;s coming up.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Company-wide calendar &amp; chat
      </h3>
      <p className="text-sm text-slate-700 leading-snug">
        One appointment calendar and one chat per company, so everyone sees the
        same deadlines, meetings, and messages.
      </p>
    </div>
  </div>
</section>


      {/* PRICING */}
      <section id="pricing" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Pricing that fits how you work.
        </h2>
        <p className="text-sm text-slate-700 max-w-xl">
          Two simple account types—one for a single business, one for firms that
          manage many companies.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Single business card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Single business
                </div>
                <div className="text-xs text-slate-600">For one company.</div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                Early access pricing
              </span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>One company on the account.</li>
              <li>Unlimited users for that company.</li>
              <li>Tasks, calendar, and chat all in one place.</li>
            </ul>
          </div>

          {/* Firm / multi-company card */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Firm / multi-company
                </div>
                <div className="text-xs text-slate-600">
                  For bookkeepers and accounting firms.
                </div>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-200">
                Early access pricing
              </span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Unlimited client companies on one firm account.</li>
              <li>Unlimited users across your firm and each client.</li>
              <li>Tasks, calendar, and chat for every company you manage.</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Tell us about your business or firm and we&apos;ll confirm a monthly
          rate that fits your workload.
        </p>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-slate-900">
          See if Complyiant fits your workflow.
        </h2>
        <p className="text-sm text-slate-700 max-w-xl">
          Tell us briefly how you handle compliance today, and we&apos;ll show
          you what it looks like inside Complyiant for your business or firm.
        </p>
        <a
          href="mailto:info@example.com"
          className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
        >
          Email us to book a walkthrough
        </a>
      </section>
    </div>
  );
}
