import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const [active, setActive] = useState(null);
  const scopeRef = useReveal([]);

  return (
    <section id="projects" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Case Studies</span>
          <h2>Featured Analytics Projects</h2>
          <p>Business Problem → Data → Analysis → Visualization → Insights.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
