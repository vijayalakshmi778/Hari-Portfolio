import { Factory, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";

const points = [
  "Observed and documented manufacturing process workflows",
  "Supported data collection and record keeping related to production and quality parameters",
  "Contributed to internal reporting-related activities",
  "Collaborated with cross-functional teams",
  "Developed understanding of process consistency and improvement",
];

const transferable = ["Data Accuracy", "Process Understanding", "Documentation", "Analytical Thinking"];

export default function Experience() {
  const scopeRef = useReveal();

  return (
    <section id="experience" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Background</span>
          <h2>Experience</h2>
        </div>

        <div className="exp-card card" data-reveal>
          <div className="exp-header">
            <div className="exp-icon"><Factory size={22} /></div>
            <div>
              <h3>Intern — Supreme Industries Pvt. Ltd.</h3>
              <p>Manufacturing operations · Documentation &amp; reporting support</p>
            </div>
          </div>

          <ul className="exp-points">
            {points.map((p) => (
              <li key={p}><CheckCircle2 size={15} /> {p}</li>
            ))}
          </ul>

          <div className="exp-transfer">
            <p className="project-problem-label mono">What this built</p>
            <div className="project-tools">
              {transferable.map((t) => (
                <span key={t} className="badge badge-secondary">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
