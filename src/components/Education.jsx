import { GraduationCap } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Education() {
  const scopeRef = useReveal();

  return (
    <section id="education" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Academics</span>
          <h2>Education</h2>
        </div>

        <div className="edu-card card" data-reveal>
          <div className="edu-icon"><GraduationCap size={24} /></div>
          <div className="edu-body">
            <h3>B.Tech — Mechanical Engineering</h3>
            <p>Sri Manakula Vinayagar Engineering College</p>
          </div>
          <div className="edu-stats">
            <div className="edu-stat">
              <span className="edu-stat-value mono">7.72</span>
              <span className="edu-stat-label">CGPA</span>
            </div>
            <div className="edu-stat edu-stat-highlight">
              <span className="edu-stat-value mono text-primary">2026</span>
              <span className="edu-stat-label">Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
