/* Cartesian School marketing site — content sections */

function SectionHead({ eyebrow, title, sub }) {
  const { Eyebrow } = window.CartesianSchoolDesignSystem_f05947;
  return (
    <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontSize: "var(--text-h1)", fontWeight: 700, color: "var(--text-strong)", margin: "12px 0 0", letterSpacing: "-0.02em" }}>{title}</h2>
      {sub && <p style={{ marginTop: 16, fontSize: "var(--text-lead)", color: "var(--text-body)" }}>{sub}</p>}
    </div>
  );
}

function Container({ children, bg, id }) {
  return (
    <section id={id} style={{ background: bg || "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>{children}</div>
    </section>
  );
}

function StatsBar() {
  const { StatBlock } = window.CartesianSchoolDesignSystem_f05947;
  return (
    <section style={{ background: "linear-gradient(160deg, var(--space-800), var(--space-950))", padding: "56px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
        {window.CS_DATA.stats.map((s) => <StatBlock key={s.label} value={s.value} label={s.label} />)}
      </div>
    </section>
  );
}
window.StatsBar = StatsBar;

function Process() {
  const { StepCard } = window.CartesianSchoolDesignSystem_f05947;
  return (
    <Container id="how-it-works">
      <SectionHead eyebrow="Process" title="How it works" sub="No contracts, no deposits, no risk. See your new site before you commit." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {window.CS_DATA.steps.map((s) => (
          <StepCard key={s.n} n={s.n} title={s.title} desc={s.desc} icon={<window.Icon n={s.icon} s={26} />} />
        ))}
      </div>
    </Container>
  );
}
window.Process = Process;

function Portfolio() {
  const { Card, Badge } = window.CartesianSchoolDesignSystem_f05947;
  return (
    <Container id="portfolio" bg="var(--surface-subtle)">
      <SectionHead eyebrow="Portfolio" title="Live rebuilds" sub="Every project is a real, live rebuild for a real local business. Open any on your phone." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {window.CS_DATA.portfolio.map((p) => (
          <Card key={p.name} interactive padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", height: 150, background: "linear-gradient(135deg, var(--slate-100), var(--slate-200))", display: "grid", placeItems: "center" }}>
              <div style={{ position: "absolute", top: 14, right: 14 }}><Badge tone={p.tone} metric>{p.metric}</Badge></div>
              <span style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", boxShadow: "var(--shadow-md)", display: "grid", placeItems: "center", color: "var(--indigo-600)" }}><window.Icon n="home" s={26} /></span>
            </div>
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--indigo-600)" }}>{p.niche}</p>
              <h3 style={{ marginTop: 8, fontSize: 18, fontWeight: 700, color: "var(--text-strong)" }}>{p.name}</h3>
              <p style={{ marginTop: 8, fontSize: 14, color: "var(--text-body)", lineHeight: 1.55 }}>{p.note}</p>
              <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--indigo-600)" }}>
                View live <window.Icon n="arrow-up-right" s={16} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
window.Portfolio = Portfolio;

function Features() {
  const { FeatureCard } = window.CartesianSchoolDesignSystem_f05947;
  return (
    <Container id="what-you-get">
      <SectionHead eyebrow="What you get" title="Every rebuild includes" sub="No hidden fees. No monthly subscriptions. One fixed price, everything included." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 980, margin: "0 auto" }}>
        {window.CS_DATA.features.map((f) => (
          <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={<window.Icon n={f.icon} s={22} />} />
        ))}
      </div>
      <Pricing />
    </Container>
  );
}
window.Features = Features;

function Pricing() {
  const { Card, Button } = window.CartesianSchoolDesignSystem_f05947;
  const { pricingIncludes, calendly } = window.CS_DATA;
  return (
    <div style={{ maxWidth: 640, margin: "64px auto 0" }}>
      <Card tone="space" padding="48px" style={{ textAlign: "center", overflow: "hidden" }}>
        <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--violet-400)" }}>Fixed Price</p>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#fff", margin: "12px 0 4px", letterSpacing: "-0.02em" }}>Custom</div>
        <p style={{ color: "var(--slate-400)" }}>Quote after free audit. No surprises.</p>
        <div style={{ margin: "32px auto 0", maxWidth: 340, display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
          {pricingIncludes.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--slate-300)" }}>
              <window.Icon n="check" s={18} style={{ color: "var(--violet-400)", flexShrink: 0 }} />
              <span style={{ fontSize: 14 }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <Button tone="gradient" size="lg" iconRight={<window.Icon n="calendar" s={18} />} href={calendly}>Book a 10-minute call</Button>
        </div>
      </Card>
    </div>
  );
}

function About({ onAudit }) {
  const { Eyebrow, Button } = window.CartesianSchoolDesignSystem_f05947;
  const { about, email, calendly } = window.CS_DATA;
  return (
    <Container id="about">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <Eyebrow>About</Eyebrow>
          <h2 style={{ fontSize: "var(--text-h1)", fontWeight: 700, color: "var(--text-strong)", margin: "12px 0 0", letterSpacing: "-0.02em" }}>Built by someone who cares about results</h2>
          <p style={{ marginTop: 24, fontSize: "var(--text-lead)", color: "var(--text-body)", lineHeight: 1.6 }}>
            Cartesian School is a one-person agency focused on one thing: turning slow, broken local business websites into fast, mobile-first lead generators. No templates. No shortcuts.
          </p>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {about.map((a) => (
              <div key={a.label} style={{ padding: 16, borderRadius: "var(--radius-xl)", background: "var(--surface-subtle)", border: "1px solid var(--border-subtle)" }}>
                <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)" }}>{a.label}</p>
                <p style={{ marginTop: 4, fontWeight: 600, color: "var(--text-strong)" }}>{a.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", borderRadius: "var(--radius-3xl)", background: "var(--brand-gradient)", padding: 48, color: "#fff", overflow: "hidden", boxShadow: "var(--glow-violet)" }}>
          <img src={window.CS_IMG.jajo} alt="" style={{ position: "absolute", right: -40, bottom: -40, width: 220, opacity: 0.25 }} />
          <h3 style={{ fontSize: 26, fontWeight: 700, position: "relative" }}>Ready to see what your site is costing you?</h3>
          <p style={{ marginTop: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, position: "relative" }}>
            Send your website address and we'll reply with a free audit — no obligation. Or book the call directly and we'll walk through it together.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap", position: "relative" }}>
            <Button tone="onDark" onClick={onAudit} iconLeft={<window.Icon n="mail" s={18} />}>Get free audit</Button>
            <Button tone="ghost" href={calendly} style={{ color: "#fff", border: "2px solid rgba(255,255,255,0.4)" }}>Book a call</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
window.About = About;

function Footer() {
  const { email, calendly } = window.CS_DATA;
  const cols = [
    { h: "Services", items: ["Website Audit", "Mobile Rebuild", "Local SEO", "Speed Optimization"] },
    { h: "Company", items: ["About", "Portfolio", "Process", "Contact"] },
  ];
  return (
    <footer style={{ background: "var(--space-950)", color: "var(--slate-400)", padding: "56px 0 32px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 32, marginBottom: 48 }}>
          <div>
            <window.Logo dark />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>Website audits and rebuilds for local businesses. Based in Warsaw, serving the US and EU.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 15 }}>{c.h}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {c.items.map((i) => <li key={i}><a href="#top" style={{ color: "var(--slate-400)", textDecoration: "none", fontSize: 14 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 15 }}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <li><a href={"mailto:" + email} style={{ color: "var(--slate-400)", textDecoration: "none" }}>{email}</a></li>
              <li>Milenijna Str. 45E/41</li>
              <li>03-130 Warsaw, Poland</li>
              <li style={{ fontSize: 12, color: "var(--slate-500)", marginTop: 4 }}>VAT: PL5242589542</li>
            </ul>
          </div>
        </div>
        <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14 }}>
          <p>© 2026 Cartesian School. All rights reserved.</p>
          <p style={{ display: "flex", alignItems: "center", gap: 8 }}>Powered by FreeBSD <img src={window.CS_IMG.freebsd} alt="FreeBSD" style={{ height: 16 }} /></p>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
