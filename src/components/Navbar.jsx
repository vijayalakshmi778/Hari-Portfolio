import { useEffect, useState } from "react";
import { Menu, X, Download, BarChart3 } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Analytics Journey" },
  { id: "projects", label: "Projects" },
  { id: "dashboards", label: "Dashboards" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" onClick={goTo("top")} className="brand">
          <BarChart3 size={20} strokeWidth={2.4} />
          <span>CHANDRAHARI V</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={goTo(link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/resume/Chandrahari_V_Resume.docx" download className="btn btn-primary btn-sm nav-cta">
          <Download size={15} /> Resume
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={goTo(link.id)}>
              {link.label}
            </a>
          ))}
          <a href="/resume/Chandrahari_V_Resume.docx" download className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            <Download size={15} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
