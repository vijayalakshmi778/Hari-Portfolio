import { targetRoles } from "../data/skills";
import useReveal from "../hooks/useReveal";

export default function CareerFocus() {
  const scopeRef = useReveal();

  return (
    <section id="career-focus" ref={scopeRef}>
      <div className="container">
        <div className="career-card card" data-reveal>
          <span className="section-kicker mono">Career Objective</span>
          <p className="career-statement">
            Seeking an entry-level opportunity where I can apply SQL, Excel, Python, Power BI,
            Tableau, and Business Analytics skills to solve business problems and support
            data-driven decision making.
          </p>

          <p className="project-problem-label mono">Target Roles</p>
          <div className="career-roles">
            {targetRoles.map((r) => (
              <span key={r} className="badge">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
