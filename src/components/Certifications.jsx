import { Award } from "lucide-react";
import { certifications } from "../data/skills";
import useReveal from "../hooks/useReveal";

export default function Certifications() {
  const scopeRef = useReveal();

  return (
    <section id="certifications" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Learning</span>
          <h2>Certifications &amp; Learning</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="cert-card card" data-reveal key={c.org}>
              <div className="cert-icon"><Award size={20} /></div>
              <div>
                <p className="cert-org mono">{c.org}</p>
                <h3>{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
