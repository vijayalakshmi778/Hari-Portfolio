import { Database, Lightbulb, Target, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const columns = [
  { icon: Database, title: "Data", desc: "Raw business data" },
  { icon: Lightbulb, title: "Insight", desc: "Patterns, trends, KPIs and anomalies" },
  { icon: Target, title: "Decision", desc: "Actionable business recommendations" },
];

export default function BusinessInsights() {
  const scopeRef = useReveal();

  return (
    <section id="insights" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Framework</span>
          <h2>From Data to Decision</h2>
        </div>

        <div className="insights-row" data-reveal>
          {columns.map((c, i) => {
            const Icon = c.icon;
            return (
              <div className="insights-step" key={c.title}>
                <div className="insights-card card">
                  <div className="insights-icon"><Icon size={22} /></div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                {i < columns.length - 1 && (
                  <div className="insights-arrow" aria-hidden="true">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
