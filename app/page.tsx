"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "siergej@cartesianschool.net";
const CALENDLY = "https://calendly.com/siergej";

// metric = the MEASURED problem on the original site (Google PageSpeed),
// shown as the "before". We never invent "after" numbers or client results.
const portfolio = [
  { name: "Reliance Roofing", niche: "Roofing · Austin, TX", url: "https://6-reliance-roofing.vercel.app", note: "Old site: 21.8 s mobile load, no HTTPS → rebuilt secure and mobile-first", metric: "21.8 s load", metricLabel: "Before · Google PSI" },
  { name: "Porter & Sons Roofing", niche: "Roof repair · Austin, TX", url: "https://5-porter-sons-roofing.vercel.app", note: "Same-day bookings put front and center with click-to-call", metric: "No mobile setup", metricLabel: "Before · Google PSI" },
  { name: "Texas Choice Roofing", niche: "Roofing & exteriors · Austin, TX", url: "https://1-texas-choice-roofing.vercel.app", note: "14.9 s mobile load replaced with an instant licensed-and-insured pitch", metric: "14.9 s load", metricLabel: "Before · Google PSI" },
  { name: "Zilker Roofing", niche: "Res/com/industrial · Austin, TX", url: "https://3-zilker-roofing.vercel.app", note: "Desktop-only page rebuilt mobile-first for phone searches", metric: "Desktop-only", metricLabel: "Before · Google PSI" },
  { name: "Blue Sky Roofing", niche: "Roofing · Austin, TX", url: "https://4-blue-sky-roofing.vercel.app", note: "'Not Secure' warning and failing server replaced outright", metric: "'Not Secure'", metricLabel: "Before · no HTTPS" },
  { name: "Elite Roofing LLC", niche: "Roofing · Austin, TX", url: "https://2-elite-roofing.vercel.app", note: "46/100 mobile speed score rebuilt to load instantly", metric: "46/100 speed", metricLabel: "Before · Google PSI" },
  { name: "RoofsOnly.com", niche: "Roofing specialist · Austin, TX", url: "https://7-roofsonly.vercel.app", note: "Specialist positioning finally reflected by the site itself", metric: "66/100 speed", metricLabel: "Before · Google PSI" },
];

const steps = [
  { n: "01", title: "Free Audit", desc: "We run Google's own performance and mobile tests on your current site and send you a one-page report in plain language — what's costing you customers and why.", icon: "🔍" },
  { n: "02", title: "Live Preview", desc: "We build your new homepage and put it on a live URL. You open it on your own phone and compare. No mockups, no promises: the actual site.", icon: "👁️" },
  { n: "03", title: "Fixed Price", desc: "If you like what you see, we talk scope and a fixed price. If not, no hard feelings — the audit is yours to keep.", icon: "💰" },
  { n: "04", title: "5-Day Launch", desc: "Your content and photos go in, one structured revision round, then we connect your domain. You own everything: domain, hosting, and code.", icon: "🚀" },
];

const features = [
  { title: "Mobile-First", desc: "Built for phones first. 60%+ of local searches happen on mobile.", icon: "📱" },
  { title: "Lightning Fast", desc: "Sub-second load times. Google ranks fast sites higher.", icon: "⚡" },
  { title: "HTTPS Secure", desc: "No 'Not Secure' warnings. SSL certificate included.", icon: "🔒" },
  { title: "Click-to-Call", desc: "One-tap calling from any phone. No forms to fill.", icon: "📞" },
  { title: "Local SEO", desc: "Structured data, correct titles, Google Maps integration.", icon: "🎯" },
  { title: "You Own It", desc: "Domain, hosting, code — everything is yours. No lock-in.", icon: "🔑" },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-bold text-white"
    >
      {target}{suffix}
    </motion.span>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link
              href="/"
              aria-label="CartesianSchool home"
              className="flex items-center gap-2 group shrink-0"
            >
              <Image
                src="/brand/logo_light.png"
                alt=""
                width={48}
                height={48}
                priority
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />

              <span className="inline-flex items-baseline whitespace-nowrap text-lg sm:text-xl font-bold tracking-tight leading-none text-slate-950">
                <span>Cartesian</span>
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  School
                </span>
              </span>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {["How it works", "Portfolio", "Pricing", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {EMAIL}
              </a>
              <a
                href={CALENDLY}
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all"
              >
                Book a call
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {["How it works", "Portfolio", "Pricing", "About"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="block text-lg font-medium text-slate-700 hover:text-indigo-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <a href={`mailto:${EMAIL}`} className="block text-sm text-slate-500">{EMAIL}</a>
                  <a href={CALENDLY} className="block w-full text-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white">
                    Book a 10-minute call
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5OSwxMDIsMjQxLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Websites for Local Businesses
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                See your new site{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                    live
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="url(#grad)" strokeWidth="4" strokeLinecap="round" />
                    <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#4f46e5"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
                  </svg>
                </span>
                {" "}before you pay
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                We find what your current site is costing you, rebuild it fast and mobile-first, 
                and put the result on a live URL you can open on your own phone. 
                <span className="font-semibold text-slate-900"> Like it? Launch in five business days at a fixed price.</span>{" "}
                Don&apos;t? It cost you nothing.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all"
                >
                  See live examples
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Website%20audit%20request`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-indigo-300 px-8 py-4 text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
                >
                  Get free audit
                </a>
              </div>

              <div className="mt-12 text-sm text-slate-500">
                <p>
                  <span className="font-semibold text-slate-700">7 live rebuilds</span> for
                  Austin businesses — open any of them on your phone, right now.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Phone mockup */}
                <div className="relative mx-auto w-[320px] h-[640px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen content */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">C</div>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 rounded-full bg-slate-200" />
                          <div className="w-4 h-4 rounded-full bg-slate-200" />
                        </div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="h-8 bg-slate-100 rounded-lg w-3/4" />
                        <div className="h-24 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl border border-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-semibold text-sm">Your new site loads here</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 bg-slate-50 rounded-lg" />
                          <div className="h-20 bg-slate-50 rounded-lg" />
                        </div>
                        <div className="h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">
                          Call Now
                        </div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
                  </div>
                </div>
                
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-8 top-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">🔍</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Free audit</p>
                      <p className="text-xs text-slate-500">Google-measured</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -left-12 bottom-32 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg">👁️</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Live preview</p>
                      <p className="text-xs text-slate-500">Before you pay</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-slate-400" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "7", label: "Live rebuilds you can open now" },
              { value: "5", label: "Business days to launch" },
              { value: "3", label: "Quality gates before every launch" },
              { value: "0", label: "Upfront cost for preview" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedCounter target={stat.value} />
                <p className="mt-2 text-sm text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">How it works</h2>
            <p className="mt-4 text-lg text-slate-600">No contracts, no deposits, no risk. See your new site before you commit.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-600/20 mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="absolute top-6 right-6 text-5xl font-bold text-slate-100 group-hover:text-indigo-100 transition-colors">
                    {step.n}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Portfolio</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Live rebuilds</h2>
            <p className="mt-4 text-lg text-slate-600">
              Every project is a real, live rebuild for a real local business. Open any on your phone.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, i) => (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-900/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-indigo-600 border border-indigo-100 shadow-sm">
                    {project.metric}
                  </div>
                </div>
                
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5" />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl mb-2">
                      🏠
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{project.metricLabel}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{project.niche}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{project.note}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                    View live 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="pricing" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">What you get</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Every rebuild includes</h2>
            <p className="mt-4 text-lg text-slate-600">No hidden fees. No monthly subscriptions. One fixed price, everything included.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md group-hover:border-indigo-200 transition-all">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">Fixed Price</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white">Custom</span>
                </div>
                <p className="mt-2 text-slate-400">Quote after free audit. No surprises.</p>
                
                <div className="mt-8 space-y-3 text-left max-w-sm mx-auto">
                  {["Free audit & report", "Live preview before payment", "5-day delivery guarantee", "1 revision round included", "Full ownership transfer"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={CALENDLY}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all"
                >
                  Book a 10-minute call
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Trust */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">About</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Built by someone who cares about results</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Cartesian School is a one-person agency focused on one thing: turning slow, broken local business websites 
                into fast, mobile-first lead generators. No templates. No shortcuts. Every site is hand-built for the business it represents.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Based in", value: "Warsaw, Poland" },
                  { label: "Serving", value: "US & EU markets" },
                  { label: "VAT ID", value: "PL5242589542" },
                  { label: "Booking", value: "calendly.com/siergej" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
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
              className="relative"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 sm:p-12 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold">Ready to see what your site is costing you?</h3>
                  <p className="mt-4 text-indigo-100 leading-relaxed">
                    Send your website address and we&apos;ll reply with a free audit — no obligation. 
                    Or book the call directly and we&apos;ll walk through it together.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${EMAIL}?subject=Website%20audit%20request`}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-50 transition-colors"
                    >
                      Email {EMAIL}
                    </a>
                    <a
                      href={CALENDLY}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                    >
                      Book a call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/brand/logo_dark.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain shrink-0"
                />

                <span className="inline-flex items-baseline whitespace-nowrap text-lg font-bold tracking-tight leading-none text-white">
                  <span>Cartesian</span>
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    School
                  </span>
                </span>
              </div>

              <p className="text-sm leading-relaxed">
                Website audits and rebuilds for local businesses. Based in Warsaw, serving the US and EU.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {["Website Audit", "Mobile Rebuild", "Local SEO", "Speed Optimization"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About", "Portfolio", "Process", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={CALENDLY} className="hover:text-white transition-colors">
                    Book a call
                  </a>
                </li>
                <li>Milenijna Str. 45E/41</li>
                <li>03-130 Warsaw, Poland</li>
                <li className="text-xs text-slate-500 mt-2">VAT: PL5242589542</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Cartesian School. All rights reserved.</p>

            <p className="flex items-center gap-2">
              Powered by FreeBSD
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/freebsd.png" alt="FreeBSD logo" className="h-4 w-auto" />
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
