/* Cartesian School marketing site — app shell, audit modal, interactivity */

function AuditModal({ open, onClose }) {
  const { Input, Button } = window.CartesianSchoolDesignSystem_f05947;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,8,32,0.55)", backdropFilter: "blur(6px)", display: "grid", placeItems: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(460px, 100%)", background: "#fff", borderRadius: "var(--radius-2xl)", padding: 32, boxShadow: "var(--shadow-xl)", position: "relative" }}>
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 18, right: 18, background: "var(--surface-sunken)", border: "none", width: 32, height: 32, borderRadius: 999, cursor: "pointer", display: "grid", placeItems: "center", color: "var(--text-muted)" }}>
          <window.Icon n="x" s={18} />
        </button>
        {!sent ? (
          <React.Fragment>
            <span style={{ width: 48, height: 48, borderRadius: 14, background: "var(--brand-gradient)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "var(--glow-indigo-sm)" }}><window.Icon n="search" s={24} /></span>
            <h3 style={{ marginTop: 20, fontSize: 24, fontWeight: 700, color: "var(--text-strong)" }}>Get your free audit</h3>
            <p style={{ marginTop: 8, fontSize: 15, color: "var(--text-body)", lineHeight: 1.55 }}>Send your site address and we'll reply with a plain-language report — what's costing you customers and why.</p>
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <Input label="Your current website" icon={<window.Icon n="globe" s={18} />} placeholder="yoursite.com" />
              <Input label="Email for the report" type="email" icon={<window.Icon n="mail" s={18} />} placeholder="you@business.com" />
              <Button tone="primary" size="lg" iconRight={<window.Icon n="arrow-right" s={18} />} onClick={() => setSent(true)} style={{ width: "100%" }}>Send me the audit</Button>
            </div>
            <p style={{ marginTop: 14, fontSize: 12, color: "var(--text-faint)", textAlign: "center" }}>No obligation. The audit is yours to keep.</p>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <span style={{ width: 56, height: 56, borderRadius: 999, background: "var(--green-100)", display: "inline-grid", placeItems: "center", color: "var(--green-600)" }}><window.Icon n="check" s={28} /></span>
            <h3 style={{ marginTop: 20, fontSize: 24, fontWeight: 700, color: "var(--text-strong)" }}>Request received</h3>
            <p style={{ marginTop: 8, fontSize: 15, color: "var(--text-body)", lineHeight: 1.55 }}>We'll send your one-page audit within one business day. Want to talk it through sooner?</p>
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
              <Button tone="secondary" href={window.CS_DATA.calendly}>Book a 10-minute call</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [audit, setAudit] = React.useState(false);
  const openAudit = (e) => { if (e && e.preventDefault) e.preventDefault(); setAudit(true); };
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div id="kit-scroll" style={{ height: "100%", overflowY: "auto", background: "var(--surface-page)" }}>
      <window.Nav onAudit={openAudit} />
      <window.Hero onAudit={openAudit} />
      <window.StatsBar />
      <window.Process />
      <window.Portfolio />
      <window.Features />
      <window.About onAudit={openAudit} />
      <window.Footer />
      <AuditModal open={audit} onClose={() => setAudit(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
