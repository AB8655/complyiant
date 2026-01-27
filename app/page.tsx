// app/page.tsx
import { SIGNUP_URL } from "@/app/lib/urls";

export default function Home() {
  return (
    <>
      {/* Anchor for logo -> /#top */}
      <div id="top" className="scroll-mt-24" />

      <div className="mx-auto max-w-6xl px-4 py-8 md:py-14 space-y-14 md:space-y-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left column: copy + CTA */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
              Built for small businesses and the firms that support them
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Compliance{" "}
              <span className="text-emerald-600">without the chaos.</span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-xl">
              Know what&apos;s due, what&apos;s done, and what needs attention—
              without juggling spreadsheets, calendars, or reminders.
            </p>

            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-800">
                Track compliance, tasks, and projects
              </span>{" "}
              — your business, your call.
            </p>

            {/* CTA block */}
            <div className="mt-8 flex flex-col items-stretch gap-4">
              {/* Primary CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a
                  href={SIGNUP_URL}
                  className="w-full sm:w-auto text-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Start free trial
                </a>
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  No credit card required
                </span>
              </div>

              {/* Trust bullets */}
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-slate-600">
                <li>Designed for Canadian compliance workflows</li>
                <li>Built for small businesses, bookkeepers, and firms</li>
              </ul>

              {/* Secondary CTA */}
              <a
                href="#pricing"
                className="mx-auto mt-2 block text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                See account options →
              </a>
            </div>
          </div>

          {/* Right column: Simple “app preview” block */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
              <span>Compliance dashboard</span>
              <span>Sample view</span>
            </div>

            <div className="space-y-2 text-xs">
              {/* On track first */}
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <div>
                  <div className="font-medium text-slate-900">
                    WCB / WSIB filing
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Annual · Upcoming
                  </div>
                </div>
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
                  On track
                </span>
              </div>

              {/* Due soon */}
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <div>
                  <div className="font-medium text-slate-900">
                    GST / HST filing
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Quarterly · RDS Office Services
                  </div>
                </div>
                <span className="rounded-full border border-amber-100 bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700">
                  Due soon
                </span>
              </div>

              {/* Overdue last */}
              <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                <div>
                  <div className="font-medium text-slate-900">
                    Payroll remittance
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Monthly · All companies
                  </div>
                </div>
                <span className="rounded-full border border-red-100 bg-red-50 px-2 py-0.5 text-[11px] text-red-700">
                  Overdue
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            How it works
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                1. Create your account
              </div>
              <p className="mt-1 text-sm text-slate-700">
                Sign up with your email—no credit card required.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                2. Choose Single or Multi
              </div>
              <p className="mt-1 text-sm text-slate-700">
                Pick the setup that matches how many companies or projects you
                manage.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                3. Add companies and tasks
              </div>
              <p className="mt-1 text-sm text-slate-700">
                Track compliance, schedules, and deadlines in one place.
              </p>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR STRIP */}
        <section>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs text-slate-700">
            <span className="mr-1 font-semibold text-slate-900">
              Who is Complyiant for?
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
              Canadian small businesses
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
              Bookkeepers
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px]">
              Accounting firms
            </span>
          </div>
        </section>

        {/* FEATURES – two cards only */}
        <section id="features" className="space-y-6 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Built for small businesses and the firms that support them.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Centralized compliance hub
              </h3>
              <p className="text-sm leading-snug text-slate-700">
                See payroll, tax, WCB, subscriptions, and renewals for a company
                in one shared list instead of scattered spreadsheets and emails.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Smart recurring schedules
              </h3>
              <p className="text-sm leading-snug text-slate-700">
                Monthly, quarterly, annual—set it once and Complyiant keeps
                track of what&apos;s due, what&apos;s overdue, and what&apos;s
                coming up.
              </p>
            </div>
          </div>
        </section>

        {/* COLLABORATION DETAILS */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Calendar &amp; messaging that match how you work.
          </h2>
          <p className="text-sm text-slate-700 max-w-xl">
            Give your team one place to see what&apos;s happening and talk about
            it—without bouncing between separate apps.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Calendar details */}
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Company-wide calendar
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>
                  View company-wide appointments or your own private appointments
                </li>
                <li>Switch between monthly, weekly, and daily views</li>
                <li>Keep deadlines, meetings, and key dates in one place</li>
              </ul>
            </div>

            {/* Messaging details */}
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Messaging</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Company-wide broadcasts for announcements and reminders</li>
                <li>Person-to-person messaging for quick questions</li>
                <li>Conversations stay tied to the company</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING / ACCOUNT TYPES */}
        <section id="pricing" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Pricing that fits how you work.
          </h2>
          <p className="text-sm text-slate-700 max-w-xl">
            Pricing is based on the number of companies you manage—not the
            number of users. Add your whole team without per-user fees.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Single business card */}
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Single Business
                  </div>
                  <div className="text-xs text-slate-600">
                    For one company and its team.
                  </div>
                </div>
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  All users included
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-slate-900">$19</span>
                <span className="text-xs text-slate-600">/ month</span>
              </div>

              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>1 company on the account.</li>
                <li>Add as many team members as you need.</li>
                <li>Tasks, calendar, and chat all in one place.</li>
              </ul>
            </div>

            {/* Firm / multi-company card */}
            <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Multi-Company / Firm
                  </div>
                  <div className="text-xs text-slate-600">
                    For bookkeepers, accounting firms, or multi-entity
                    businesses.
                  </div>
                </div>
                <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-medium text-emerald-700">
                  All users included
                </span>
              </div>

              <div className="space-y-1 text-sm text-slate-800">
                <div className="flex items-baseline justify-between">
                  <span>2–49 companies</span>
                  <span className="font-semibold">$49 / month</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>50–99 companies</span>
                  <span className="font-semibold">$79 / month</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>100+ companies</span>
                  <span className="font-semibold">Contact us</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>
                  Track multiple client companies, projects, or entities from one
                  firm account.
                </li>
                <li>Add firm staff and client users as needed.</li>
                <li>Tasks, calendar, and chat for every company you manage.</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-600 text-center">
            All prices in CAD. Choose your plan during signup based on how many
            companies you manage.
          </p>
          <ul className="mx-auto max-w-xl list-disc list-inside text-sm text-slate-600">
          <li>30-day free trial — no credit card required</li>
          <li>Cancel anytime — data stays accessible according to your account settings</li>
        </ul>

        </section>
        


        


        {/* CONTACT / CTA */}
        <section
          id="contact"
          className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm scroll-mt-24"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            Start your free trial of Complyiant.
          </h2>
          <p className="text-sm text-slate-700 max-w-xl">
            Use our signup page to create your account. Once you&apos;ve entered
            your name, email, and password, you&apos;ll choose between a Single
            Business or Multi-Company account based on how you work.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex justify-center sm:justify-start w-full sm:w-auto rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Go to signup
          </a>
        </section>
      </div>
    </>
  );
}
