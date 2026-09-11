import { workflowStages } from "../data/skills";
import useReveal from "../hooks/useReveal";

export default function AnalyticsWorkflow() {
  const scopeRef = useReveal();

  return (
    <section id="journey" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Process</span>
          <h2>My Data Analytics Workflow</h2>
          <p>The seven-stage approach I follow, from business problem to a data-driven action.</p>
        </div>

        <ol className="timeline">
          {workflowStages.map((stage) => (
            <li className="timeline-item" data-reveal key={stage.step}>
              <div className="timeline-marker mono">{stage.step}</div>
              <div className="timeline-body">
                <h3>{stage.title}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
