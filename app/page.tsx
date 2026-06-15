"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  Search, Eye, Tag, Rocket, Smartphone, Zap, Lock, PhoneCall, Target,
  KeyRound, ArrowRight, ArrowUpRight, Check, Calendar, Globe, Mail, Menu, X,
} from "lucide-react";

const EMAIL = "siergej@cartesianschool.net";
const CALENDLY = "https://calendly.com/siergej";

const CASE_VISUALS = {
  performance: "/images/case-cards/1.png",
  mobile: "/images/case-cards/2.png",
  security: "/images/case-cards/3.png",
  conversion: "/images/case-cards/4.png",
  seo: "/images/case-cards/5.png",
} as const;

type CaseVisualType = keyof typeof CASE_VISUALS;

// metric = the MEASURED problem on the original site (Google PageSpeed),
// shown as the "before". We never invent "after" numbers or client results.
const portfolio = [
  { name: "Reliance Roofing", niche: "Roofing - Austin, TX", url: "https://6-reliance-roofing.vercel.app", note: "Old site: 21.8 s mobile load, no HTTPS; rebuilt secure and mobile-first", metric: "21.8 s load", tone: "before", visualType: "performance" },
  { name: "Porter & Sons Roofing", niche: "Roof repair - Austin, TX", url: "https://5-porter-sons-roofing.vercel.app", note: "Same-day bookings put front and center with click-to-call", metric: "No mobile setup", tone: "fail", visualType: "mobile" },
  { name: "Texas Choice Roofing", niche: "Roofing & exteriors - Austin, TX", url: "https://1-texas-choice-roofing.vercel.app", note: "14.9 s mobile load replaced with an instant licensed-and-insured pitch", metric: "14.9 s load", tone: "before", visualType: "performance" },
  { name: "Zilker Roofing", niche: "Res/com/industrial - Austin, TX", url: "https://3-zilker-roofing.vercel.app", note: "Desktop-only page rebuilt mobile-first for phone searches", metric: "Desktop-only", tone: "fail", visualType: "mobile" },
  { name: "Blue Sky Roofing", niche: "Roofing - Austin, TX", url: "https://4-blue-sky-roofing.vercel.app", note: "'Not Secure' warning and failing server replaced outright", metric: "'Not Secure'", tone: "fail", visualType: "security" },
  { name: "Elite Roofing LLC", niche: "Roofing - Austin, TX", url: "https://2-elite-roofing.vercel.app", note: "46/100 mobile speed score rebuilt to load instantly", metric: "46/100 speed", tone: "before", visualType: "performance" },
] as const;

const steps = [
  { n: "01", title: "Free Audit", desc: "We run Google's own performance and mobile tests on your current site and send you a one-page report in plain language: what's costing you customers and why.", Icon: Search },
  { n: "02", title: "Live Preview", desc: "We build your new homepage and put it on a live URL. You open it on your own phone and compare. No mockups, no promises: the actual site.", Icon: Eye },
  { n: "03", title: "Fixed Price", desc: "If you like what you see, we talk scope and a fixed price. If not, no hard feelings. The audit is yours to keep.", Icon: Tag },
  { n: "04", title: "5-Day Launch", desc: "Your content and photos go in, one structured revision round, then we connect your domain. You own everything: domain, hosting, and code.", Icon: Rocket },
];

const features = [
  { title: "Mobile-First", desc: "Built for phones first. 60%+ of local searches happen on mobile.", Icon: Smartphone },
  { title: "Lightning Fast", desc: "Sub-second load times. Google ranks fast sites higher.", Icon: Zap },
  { title: "HTTPS Secure", desc: "No 'Not Secure' warnings. SSL certificate included.", Icon: Lock },
  { title: "Click-to-Call", desc: "One-tap calling from any phone. No forms to fill.", Icon: PhoneCall },
  { title: "Local SEO", desc: "Structured data, correct titles, Google Maps integration.", Icon: Target },
  { title: "You Own It", desc: "Domain, hosting, code: everything is yours. No lock-in.", Icon: KeyRound },
];

// "before"-condition badges only: measured problems on the original site, never invented "after" wins.
const metricStyles: Record<string, string> = {
  before: "bg-amber-50 text-amber-700 border-amber-200",
  fail: "bg-red-50 text-red-700 border-red-200",
};

function CaseCardVisual({
  visualType,
  badge,
}: {
  visualType: CaseVisualType;
  badge: ReactNode;
}) {
  return (
    <div className="relative h-44 overflow-hidden bg-slate-100">
      <Image
        src={CASE_VISUALS[visualType]}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center scale-[1.12]"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-white/0 to-white/10" />
      <div className="absolute right-4 top-4 z-10">{badge}</div>
    </div>
  );
}

function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-baseline whitespace-nowrap text-xl font-extrabold tracking-tight leading-none ${dark ? "text-white" : "text-slate-950"}`}>
      <span>Cartesian</span>
      <span className="cs-gradient-text">School</span>
    </span>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [auditSent, setAuditSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openAudit = () => { setAuditSent(false); setAuditOpen(true); };

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* ---------------- Nav ---------------- */}
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-slate-200" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" aria-label="Cartesian School home" className="flex items-center gap-2.5 shrink-0">
              <Image src="/brand/logo_light.png" alt="" width={48} height={48} priority className="h-11 w-11 object-contain" />
              <Wordmark />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {["How it works", "Portfolio", "What you get", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">{EMAIL}</a>
              <a href={CALENDLY} className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all">Book a call</a>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
              <div className="px-4 py-6 space-y-4">
                {["How it works", "Portfolio", "What you get", "About"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="block text-lg font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>{item}</a>
                ))}
                <a href={CALENDLY} className="block w-full text-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white">Book a 10-minute call</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Restrained brand wash + masked grid (replaces the drifting blobs) */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 50% at 78% 18%, rgba(124,58,237,0.10), transparent 70%), radial-gradient(50% 50% at 12% 90%, rgba(37,99,235,0.08), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(80% 70% at 50% 30%, #000, transparent)", WebkitMaskImage: "radial-gradient(80% 70% at 50% 30%, #000, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Websites for Local Businesses
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                See your new site <span className="cs-gradient-text">live</span> before you pay
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                We find what your current site is costing you, rebuild it fast and mobile-first, and put the result on a live URL you can open on your own phone.{" "}
                <span className="font-semibold text-slate-900">Like it? Launch in five business days at a fixed price.</span> Don&apos;t? It cost you nothing.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-600/25 transition-all">
                  See live examples <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button onClick={openAudit} className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-indigo-300 px-8 py-4 text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">
                  Get free audit
                </button>
              </div>
              <p className="mt-12 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">7 live rebuilds</span> for Austin businesses. Open any of them on your phone, right now.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              {/* layered-sphere motif, faint */}
              <Image src="/brand/jajo.png" alt="" width={320} height={320} className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 w-80 opacity-[0.14]" />
              <div className="relative mx-auto w-[300px] h-[600px] bg-[#0a0820] rounded-[2.75rem] p-3 shadow-2xl shadow-slate-900/30">
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative p-4 flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0a0820] rounded-b-2xl" />
                  <div className="flex items-center justify-between mt-1 mb-4">
                    <Image src="/brand/logo_light.png" alt="" width={34} height={34} className="h-8 w-8 object-contain" />
                    <Menu className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="h-7 bg-slate-100 rounded-lg w-3/4" />
                    <div className="h-24 rounded-xl border border-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm" style={{ background: "linear-gradient(135deg,#f5f3ff,#eef2ff,#eff6ff)" }}>Your new site loads here</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-slate-50 rounded-lg" />
                      <div className="h-20 bg-slate-50 rounded-lg" />
                    </div>
                    <div className="h-12 rounded-lg flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-indigo-600/25" style={{ background: "linear-gradient(135deg,#7c3aed,#5b3df5,#2563eb)" }}>Call Now</div>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-6 top-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 flex items-center gap-3 will-change-transform">
                <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Search className="w-5 h-5" /></span>
                <div><p className="text-sm font-bold text-slate-900">Free audit</p><p className="text-xs text-slate-500">Google-measured</p></div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-10 bottom-28 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 flex items-center gap-3 will-change-transform">
                <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><Eye className="w-5 h-5" /></span>
                <div><p className="text-sm font-bold text-slate-900">Live preview</p><p className="text-xs text-slate-500">Before you pay</p></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats bar ---------------- */}
      <section className="py-14" style={{ background: "linear-gradient(160deg,#1b1442,#0a0820)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Live rebuilds you can open now" },
            { value: "5", label: "Business days to launch" },
            { value: "3", label: "Quality gates before every launch" },
            { value: "0", label: "Upfront cost for preview" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{s.value}</div>
              <p className="mt-2 text-sm text-slate-400 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Process" title="How it works" sub="No contracts, no deposits, no risk. See your new site before you commit." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(49,46,129,0.12)] transition-all duration-300">
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-slate-200 font-mono">{s.n}</span>
                <span className="inline-flex w-14 h-14 rounded-2xl items-center justify-center text-white shadow-lg shadow-indigo-600/20 mb-6" style={{ background: "linear-gradient(135deg,#7c3aed,#5b3df5,#2563eb)" }}>
                  <s.Icon className="w-7 h-7" />
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Portfolio ---------------- */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Portfolio" title="Live rebuilds" sub="Every project is a real, live rebuild for a real local business. Open any on your phone." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-900/10 hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300">
                <CaseCardVisual
                  visualType={p.visualType}
                  badge={<div className={`rounded-full px-3 py-1 text-xs font-semibold font-mono border ${metricStyles[p.tone]}`}>{p.metric}</div>}
                />
                <div className="p-6">
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{p.niche}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.note}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">View live <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Features + Pricing ---------------- */}
      <section id="what-you-get" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="What you get" title="Every rebuild includes" sub="No hidden fees. No monthly subscriptions. One fixed price, everything included." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm"><f.Icon className="w-6 h-6" /></span>
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 max-w-2xl mx-auto">
            <div className="relative rounded-4xl p-8 sm:p-12 text-center overflow-hidden" style={{ background: "linear-gradient(160deg,#1b1442,#0a0820)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ background: "rgba(124,58,237,0.25)" }} />
              <div className="relative">
                <p className="text-violet-400 font-semibold text-sm uppercase tracking-wide">Fixed Price</p>
                <div className="mt-3 text-5xl sm:text-6xl font-extrabold text-white tracking-tight">Custom</div>
                <p className="mt-2 text-slate-400">Quote after free audit. No surprises.</p>
                <div className="mt-8 space-y-3 text-left max-w-sm mx-auto">
                  {["Free audit & report", "Live preview before payment", "5-day delivery guarantee", "1 revision round included", "Full ownership transfer"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300"><Check className="w-5 h-5 text-violet-400 flex-shrink-0" /><span className="text-sm">{item}</span></div>
                  ))}
                </div>
                <a href={CALENDLY} className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg,#7c3aed,#5b3df5,#2563eb)" }}>
                  Book a 10-minute call <Calendar className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">About</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">Built by someone who cares about results</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Cartesian School is a one-person agency focused on one thing: turning slow, broken local business websites into fast, mobile-first lead generators. No templates. No shortcuts. Every site is hand-built for the business it represents.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Based in", value: "Warsaw, Poland" },
                { label: "Serving", value: "US & EU markets" },
                { label: "VAT ID", value: "PL5242589542" },
                { label: "Booking", value: "calendly.com/siergej" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                  <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-4xl p-8 text-white shadow-2xl shadow-violet-600/20 sm:p-12 bg-[linear-gradient(135deg,#6733e8_0%,#6236ee_45%,#2563eb_100%)]"
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-transparent"
              aria-hidden="true"
            >
              <Image
                src="/brand/jajo.png"
                alt=""
                aria-hidden="true"
                width={520}
                height={520}
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 440px, 360px"
                className="absolute right-[-60px] top-1/2 h-auto w-[360px] -translate-y-1/2 select-none object-contain opacity-35 md:w-[440px] lg:w-[520px]"
                priority={false}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-indigo-950/25 via-indigo-900/10 to-transparent" />
            <h3 className="relative z-10 text-2xl font-bold">Ready to see what your site is costing you?</h3>
            <p className="relative z-10 mt-4 text-white/85 leading-relaxed">Send your website address and we&apos;ll reply with a free audit, no obligation. Or book the call directly and we&apos;ll walk through it together.</p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-4">
              <button onClick={openAudit} className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-50 transition-colors"><Mail className="w-5 h-5" /> Get free audit</button>
              <a href={CALENDLY} className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">Book a call</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="text-slate-400 py-14" style={{ background: "#0a0820" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-2.5">
                <Image src="/brand/logo_dark.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
                <Wordmark dark />
              </div>
              <p className="text-sm leading-relaxed">Website audits and rebuilds for local businesses. Based in Warsaw, serving the US and EU.</p>
            </div>
            <FooterCol title="Services" items={["Website Audit", "Mobile Rebuild", "Local SEO", "Speed Optimization"]} />
            <FooterCol title="Company" items={["About", "Portfolio", "Process", "Contact"]} linked />
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
                <li>Milenijna Str. 45E/41</li>
                <li>03-130 Warsaw, Poland</li>
                <li className="text-xs text-slate-500 mt-2">VAT: PL5242589542</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>Copyright 2026 Cartesian School. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Powered by FreeBSD
              <Image src="/freebsd.png" alt="FreeBSD logo" width={92} height={75} className="h-4 w-auto" />
            </p>
          </div>
        </div>
      </footer>

      {/* ---------------- Audit modal ---------------- */}
      <AnimatePresence>
        {auditOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAuditOpen(false)}
            className="fixed inset-0 z-[100] grid place-items-center p-6" style={{ background: "rgba(10,8,32,0.55)", backdropFilter: "blur(6px)" }}>
            <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl relative">
              <button onClick={() => setAuditOpen(false)} aria-label="Close" className="absolute top-4 right-4 w-8 h-8 grid place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"><X className="w-4 h-4" /></button>
              {!auditSent ? (
                <>
                  <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center text-white shadow-lg shadow-indigo-600/20" style={{ background: "linear-gradient(135deg,#7c3aed,#5b3df5,#2563eb)" }}><Search className="w-6 h-6" /></span>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">Get your free audit</h3>
                  <p className="mt-2 text-slate-600">Send your site address and we&apos;ll reply with a plain-language report: what&apos;s costing you customers and why.</p>
                  <form className="mt-6 space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const site = String(data.get("website") ?? "").trim();
                    const from = String(data.get("email") ?? "").trim();
                    const subject = encodeURIComponent(`Free audit request: ${site}`);
                    const body = encodeURIComponent(`Website to audit: ${site}\nReply to: ${from}\n`);
                    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
                    setAuditSent(true);
                  }}>
                    <Field label="Your current website" name="website" icon={<Globe className="w-4 h-4" />} placeholder="yoursite.com" type="url" required />
                    <Field label="Email for the report" name="email" icon={<Mail className="w-4 h-4" />} placeholder="you@business.com" type="email" required />
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all">Send me the audit <ArrowRight className="w-5 h-5" /></button>
                  </form>
                  <p className="mt-3.5 text-xs text-slate-400 text-center">No obligation. The audit is yours to keep.</p>
                </>
              ) : (
                <div className="text-center py-4">
                  <span className="inline-grid w-14 h-14 place-items-center rounded-full bg-green-100 text-green-600"><Check className="w-7 h-7" /></span>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">Request received</h3>
                  <p className="mt-2 text-slate-600">We&apos;ll send your one-page audit within one business day. Want to talk it through sooner?</p>
                  <a href={CALENDLY} className="mt-6 inline-flex rounded-full border-2 border-slate-200 hover:border-indigo-300 px-6 py-3 font-semibold text-slate-700 hover:text-indigo-600 transition-all">Book a 10-minute call</a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </MotionConfig>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
      <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-4 text-lg text-slate-600">{sub}</p>
    </motion.div>
  );
}

function FooterCol({ title, items, linked = false }: { title: string; items: string[]; linked?: boolean }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) =>
          linked ? (
            <li key={item}><a href={footerHref(item)} className="hover:text-white transition-colors">{item}</a></li>
          ) : (
            <li key={item} className="text-slate-400">{item}</li>
          )
        )}
      </ul>
    </div>
  );
}

function footerHref(item: string) {
  const anchors: Record<string, string> = {
    About: "#about",
    Portfolio: "#portfolio",
    Process: "#how-it-works",
    Contact: `mailto:${EMAIL}`,
  };

  return anchors[item] ?? "#what-you-get";
}

function Field({ label, icon, ...rest }: { label: string; icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-900 mb-1.5">{label}</span>
      <span className="flex items-center gap-2.5 rounded-lg border border-slate-300 px-3.5 py-2.5 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/30 transition-all">
        <span className="text-slate-400">{icon}</span>
        <input {...rest} className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400" />
      </span>
    </label>
  );
}
