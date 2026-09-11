import { Database, Sparkles, BarChart2, Lightbulb, CheckCircle2, Target } from "lucide-react";
import useReveal from "../hooks/useReveal";

const flow = [
  { label: "Raw Data", icon: Database },
  { label: "Clean", icon: CheckCircle2 },
  { label: "Analyze", icon: Sparkles },
  { label: "Visualize", icon: BarChart2 },
  { label: "Insight", icon: Lightbulb },
  { label: "Decision", icon: Target },
];

export default function About() {
  const scopeRef = useReveal();

  return (
    <section id="about" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">About</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              I am a 2026 Engineering graduate aspiring to start my career in Data Analytics.
              I enjoy working with data to identify patterns, solve business problems, and
              communicate insights through reports and interactive dashboards.
            </p>
            <p>
              My core analytics toolkit includes Microsoft Excel, SQL, Python, Power BI,
              Tableau, and Business Analytics. I am particularly interested in data cleaning,
              exploratory analysis, KPI development, dashboard creation, and converting
              business requirements into data-driven insights.
            </p>
            <p>
              My engineering background has helped me develop a structured and analytical
              approach to problem solving, along with attention to data accuracy, consistency,
              and process improvement.
            </p>
          </div>

          <div className="about-flow card" data-reveal>
            {flow.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className="flow-row" key={f.label}>
                  <div className="flow-node">
                    <Icon size={17} />
                    <span>{f.label}</span>
                  </div>
                  {i < flow.length - 1 && <div className="flow-connector" aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
