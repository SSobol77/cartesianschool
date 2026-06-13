/* Cartesian School marketing site — Nav + Hero */
const DS = () => window.CartesianSchoolDesignSystem_f05947;
const Icon = ({ n, s = 20, style = {} }) =>
  React.createElement("i", { "data-lucide": n, style: { width: s, height: s, ...style } });
window.Icon = Icon;

function Logo({ dark = false }) {
  return (
    <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <img src={window.CS_IMG.logo} alt="" style={{ height: 40, width: 40, objectFit: "contain" }} />
      <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: dark ? "#fff" : "var(--text-strong)" }}>
        Cartesian<span className="cs-gradient-text">School</span>
      </span>
    </a>
  );
}
window.Logo = Logo;

function Nav({ onAudit }) {
  const { Button } = DS();
  const { nav, email, calendly } = window.CS_DATA;
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const host = document.getElementById("kit-scroll");
    const fn = () => setScrolled((host ? host.scrollTop : window.scrollY) > 30);
    (host || window).addEventListener("scroll", fn);
    return () => (host || window).removeEventListener("scroll", fn);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, transition: "all .3s var(--ease-soft)",
      background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {nav.map((item) => (
            <a key={item} href={"#" + item.toLowerCase().replace(/\s/g, "-")}
              style={{ fontSize: 14, fontWeight: 500, color: "var(--text-body)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--indigo-600)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
              {item}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href={"mailto:" + email} style={{ fontSize: 14, fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}>{email}</a>
          <Button tone="primary" onClick={onAudit}>Book a call</Button>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;

function Hero({ onAudit }) {
  const { Button, Badge } = DS();
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "var(--surface-subtle)" }}>
      {/* brand wash */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 50% at 78% 18%, rgba(124,58,237,0.10), transparent 70%), radial-gradient(50% 50% at 12% 90%, rgba(37,99,235,0.08), transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4, maskImage: "radial-gradient(80% 70% at 50% 30%, #000, transparent)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px var(--container-pad) 96px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
        <div>
          <Badge tone="indigo" dot>Websites for Local Businesses</Badge>
          <h1 style={{ fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--text-strong)", margin: "24px 0 0" }}>
            See your new site <span className="cs-gradient-text">live</span> before you pay
          </h1>
          <p style={{ marginTop: 24, fontSize: "var(--text-lead)", color: "var(--text-body)", lineHeight: 1.6, maxWidth: 520 }}>
            We find what your current site is costing you, rebuild it fast and mobile-first, and put the result on a live URL you can open on your own phone. <strong style={{ color: "var(--text-strong)" }}>Like it? Launch in five business days at a fixed price.</strong> Don't? It cost you nothing.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button tone="primary" size="lg" iconRight={<Icon n="arrow-right" />} href="#portfolio">See live examples</Button>
            <Button tone="secondary" size="lg" onClick={onAudit}>Get free audit</Button>
          </div>
          <p style={{ marginTop: 40, fontSize: 14, color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text-body)" }}>7 live rebuilds</strong> for Austin businesses — open any of them on your phone, right now.
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
window.Hero = Hero;

function HeroVisual() {
  const { Badge } = DS();
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <img src={window.CS_IMG.jajo} alt="" style={{ position: "absolute", width: 320, top: -30, opacity: 0.14, filter: "saturate(1.2)", pointerEvents: "none" }} />
      <div style={{ position: "relative", width: 300, height: 600, background: "var(--space-950)", borderRadius: 44, padding: 12, boxShadow: "0 40px 80px rgba(15,23,42,0.30)" }}>
        <div style={{ width: "100%", height: "100%", background: "#fff", borderRadius: 34, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", padding: 18 }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 24, background: "var(--space-950)", borderRadius: "0 0 16px 16px" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6, marginBottom: 16 }}>
            <img src={window.CS_IMG.logo} alt="" style={{ height: 34, width: 34 }} />
            <Icon n="menu" s={20} style={{ color: "var(--slate-400)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            <div style={{ height: 30, background: "var(--slate-100)", borderRadius: 8, width: "75%" }} />
            <div style={{ height: 100, background: "var(--brand-gradient-soft)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--indigo-600)", fontWeight: 600, fontSize: 13 }}>Your new site loads here</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ height: 76, background: "var(--slate-50)", borderRadius: 10 }} />
              <div style={{ height: 76, background: "var(--slate-50)", borderRadius: 10 }} />
            </div>
            <div style={{ height: 48, background: "var(--brand-gradient)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 14, boxShadow: "var(--glow-indigo-sm)" }}>Call Now</div>
          </div>
        </div>
      </div>
      <div className="float-card" style={{ position: "absolute", right: -16, top: 80, background: "#fff", borderRadius: 16, padding: 14, boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 38, height: 38, borderRadius: 999, background: "var(--green-100)", color: "var(--green-600)", display: "grid", placeItems: "center" }}><Icon n="search" s={18} /></span>
        <div><div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-strong)" }}>Free audit</div><div style={{ fontSize: 11, color: "var(--text-muted)" }}>Google-measured</div></div>
      </div>
      <div className="float-card" style={{ position: "absolute", left: -24, bottom: 110, background: "#fff", borderRadius: 16, padding: 14, boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 38, height: 38, borderRadius: 999, background: "var(--tint-indigo)", color: "var(--indigo-600)", display: "grid", placeItems: "center" }}><Icon n="eye" s={18} /></span>
        <div><div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-strong)" }}>Live preview</div><div style={{ fontSize: 11, color: "var(--text-muted)" }}>Before you pay</div></div>
      </div>
    </div>
  );
}
