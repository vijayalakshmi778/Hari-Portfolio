import { Download, ArrowRight, User } from "lucide-react";
import { heroBadges, kpis } from "../data/skills";
import useCountUp from "../hooks/useCountUp";
import { GithubIcon, LinkedinIcon } from "./icons";

function KpiItem({ value, label }) {
  const [ref, display] = useCountUp(value);
  return (
    <div className="kpi-item" ref={ref}>
      <span className="kpi-value mono">{display}</span>
      <span className="kpi-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-label mono">2026 ENGINEERING GRADUATE</span>
          <h1 className="hero-heading">
            Data Analyst
            <span className="hero-heading-sub">Turning Data Into Business Insights</span>
          </h1>
          <p className="hero-desc">
            I am a 2026 Engineering graduate aspiring to build my career in Data Analytics,
            with hands-on learning in Excel, SQL, Python, Power BI, Tableau, and Business Analytics.
          </p>

          <div className="hero-badges">
            {heroBadges.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" onClick={scrollTo("projects")} className="btn btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="/resume/Chandrahari_V_Resume.docx" download className="btn btn-ghost">
              <Download size={16} /> Download Resume
            </a>
            <a href="https://github.com/chandrahari-v" target="_blank" rel="noreferrer" className="btn btn-ghost btn-icon" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/chandrahari-v" target="_blank" rel="noreferrer" className="btn btn-ghost btn-icon" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-photo">
              <User size={64} strokeWidth={1.3} />
              <span>Add profile photo here</span>
            </div>
            <div className="profile-ring" />
          </div>

          {/* Decorative dashboard elements */}
          <div className="deco deco-bar" aria-hidden="true">
            <span style={{ "--h": "40%" }} />
            <span style={{ "--h": "70%" }} />
            <span style={{ "--h": "55%" }} />
            <span style={{ "--h": "90%" }} />
            <span style={{ "--h": "65%" }} />
          </div>

          <div className="deco deco-line" aria-hidden="true">
            <svg viewBox="0 0 120 46" fill="none">
              <path d="M2 38 L22 24 L42 30 L62 12 L82 18 L118 4" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="deco deco-kpi mono" aria-hidden="true">
            <span className="deco-kpi-label">SQL</span>
            <span className="deco-kpi-value text-primary">Ready</span>
          </div>

          <div className="deco deco-pie" aria-hidden="true">
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--card-border)" strokeWidth="3.5" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--secondary)" strokeWidth="3.5"
                strokeDasharray="65 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="kpi-strip">
          {kpis.map((k) => (
            <KpiItem key={k.label} value={k.value} label={k.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
