const EMAIL = "siergej@cartesianschool.net";
const CALENDLY = "https://calendly.com/siergej";

const portfolio = [
  { name: "Reliance Roofing", niche: "Roofing · Austin, TX", url: "https://6-reliance-roofing.vercel.app", note: "Old site: 21.8 s mobile load, no HTTPS → instant, secure, mobile-first" },
  { name: "Porter & Sons Roofing", niche: "Roof repair · Austin, TX", url: "https://5-porter-sons-roofing.vercel.app", note: "Same-day bookings put front and center with click-to-call" },
  { name: "Texas Choice Roofing", niche: "Roofing & exteriors · Austin, TX", url: "https://1-texas-choice-roofing.vercel.app", note: "15 s mobile load replaced with an instant licensed-and-insured pitch" },
  { name: "Zilker Roofing", niche: "Res/com/industrial · Austin, TX", url: "https://3-zilker-roofing.vercel.app", note: "Desktop-only page rebuilt mobile-first for phone searches" },
  { name: "Blue Sky Roofing", niche: "Roofing · Austin, TX", url: "https://4-blue-sky-roofing.vercel.app", note: "'Not Secure' warning and failing server replaced outright" },
  { name: "Elite Roofing LLC", niche: "Roofing · Austin, TX", url: "https://2-elite-roofing.vercel.app", note: "46/100 speed score rebuilt to load instantly" },
  { name: "RoofsOnly.com", niche: "Roofing specialist · Austin, TX", url: "https://7-roofsonly.vercel.app", note: "Specialist positioning finally reflected by the site itself" },
];

const steps = [
  { n: "1", title: "Audit", desc: "We run Google's own performance and mobile tests on your current site and send you a one-page report in plain language — what's costing you customers and why." },
  { n: "2", title: "Live demo — before you pay", desc: "We build your new homepage and put it on a live URL. You open it on your own phone and compare. No mockups, no promises: the actual site." },
  { n: "3", title: "10-minute call", desc: "If you like what you see, we talk scope and a fixed price. If not, no hard feelings — the audit is yours to keep." },
  { n: "4", title: "Launch in 5 business days", desc: "Your content and photos go in, one structured revision round, then we connect your domain. You own everything: domain, hosting, code." },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Cartesian<span className="text-indigo-600"> School</span>
          </span>
          <a
            href={CALENDLY}
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Book a 10-minute call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Websites for local businesses
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight max-w-3xl text-slate-900">
            See your new website live — before you pay anything
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We find what your current site is costing you, rebuild it fast and
            mobile-first, and put the result on a live URL you can open on your
            own phone. Like it? Launch in five business days at a fixed price.
            Don&apos;t? It cost you nothing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 font-semibold text-white"
            >
              See live examples
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-slate-900">Live rebuilds</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Every project below is a real, live rebuild for a real local business
          — open any of them on your phone. Findings come from Google&apos;s own
          PageSpeed measurements of the original sites.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 p-6 shadow-sm hover:border-indigo-400 hover:shadow-md transition"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{p.niche}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{p.note}</p>
              <p className="mt-3 text-sm font-medium text-indigo-600">View live →</p>
            </a>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-3xl font-bold">What every rebuild includes</h2>
          <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 max-w-4xl text-slate-300">
            {[
              "Mobile-first build that loads instantly",
              "HTTPS — no 'Not Secure' warnings",
              "Click-to-call and a working contact form",
              "Local SEO basics: structured data, correct titles, map",
              "Your domain connected; you own domain, hosting, and code",
              "One structured revision round included, fixed price",
            ].map((item) => (
              <p key={item} className="flex gap-3">
                <span className="text-indigo-400">✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Want to see what your site is costing you?
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto">
          Send your website address and we&apos;ll reply with the audit — free,
          no obligation. Or book the call directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Website%20audit%20request`}
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 font-semibold text-white"
          >
            Email {EMAIL}
          </a>
          <a
            href={CALENDLY}
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Book a 10-minute call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-sm">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap justify-between gap-3">
          <span>
            Cartesian School Siergej Sobolewski · Milenijna Str. 45E/41, 03-130
            Warsaw, Poland · EU VAT PL5242589542
          </span>
          <a href={`mailto:${EMAIL}`} className="hover:text-white">
            {EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
