import { Terminal, ArrowRight } from "lucide-react";
import { sqlConcepts } from "../data/skills";
import useReveal from "../hooks/useReveal";

// Each line is a list of tokens so the terminal card can apply syntax
// highlighting without JSX collapsing the source whitespace/newlines.
const CODE_LINES = [
  [{ t: "kw", v: "SELECT" }, { t: "plain", v: " employee_name, salary" }],
  [{ t: "kw", v: "FROM" }, { t: "plain", v: " employees" }],
  [{ t: "kw", v: "WHERE" }, { t: "plain", v: " salary " }, { t: "op", v: ">" }, { t: "plain", v: " (" }],
  [{ t: "plain", v: "    " }, { t: "kw", v: "SELECT" }, { t: "plain", v: " " }, { t: "fn", v: "AVG" }, { t: "plain", v: "(salary)" }],
  [{ t: "plain", v: "    " }, { t: "kw", v: "FROM" }, { t: "plain", v: " employees" }],
  [{ t: "plain", v: ");" }],
];

export default function SQLShowcase() {
  const scopeRef = useReveal();

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sql" ref={scopeRef}>
      <div className="container sql-grid">
        <div data-reveal>
          <span className="section-kicker mono">Query Language</span>
          <h2 className="sql-heading">SQL Analysis</h2>
          <p className="sql-copy">
            SQL is where most of my analysis starts — querying, joining and aggregating data
            directly at the source before it ever reaches a spreadsheet or dashboard.
          </p>

          <p className="project-problem-label mono">Business Question</p>
          <p className="sql-question">Which employees earn more than the average salary?</p>

          <div className="sql-concepts">
            {sqlConcepts.map((c) => (
              <span key={c} className="badge mono">{c}</span>
            ))}
          </div>

          <a href="#projects" onClick={scrollToProjects} className="btn btn-primary" style={{ marginTop: 28 }}>
            Explore SQL Project <ArrowRight size={16} />
          </a>
        </div>

        <div className="terminal card" data-reveal>
          <div className="terminal-bar">
            <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
            <span className="terminal-title mono"><Terminal size={13} /> query.sql</span>
          </div>
          <pre className="terminal-body mono">
            {CODE_LINES.map((line, i) => (
              <div className="code-line" key={i}>
                {line.map((tok, j) => (
                  <span key={j} className={tok.t === "plain" ? undefined : `sql-${tok.t}`}>
                    {tok.v}
                  </span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
