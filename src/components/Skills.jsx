import { Table2, Database, Code2, LayoutDashboard, BarChart3, Target } from "lucide-react";
import { toolkit } from "../data/skills";
import useReveal from "../hooks/useReveal";

const ICONS = { Table2, Database, Code2, LayoutDashboard, BarChart3, Target };

export default function Skills() {
  const scopeRef = useReveal();

  return (
    <section id="skills" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Toolkit</span>
          <h2>My Analytics Toolkit</h2>
          <p>The tools I use across the full analytics workflow, from raw data to business decisions.</p>
        </div>

        <div className="toolkit-grid">
          {toolkit.map((tool) => {
            const Icon = ICONS[tool.icon];
            return (
              <div className="toolkit-card card" data-reveal key={tool.id}>
                <div className="toolkit-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <div className="toolkit-tags">
                  {tool.points.map((p) => (
                    <span key={p} className="badge badge-secondary">{p}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
