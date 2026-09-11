import { FileSearch, ImageIcon } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card card" data-reveal>
      <div className="project-media">
        <div className="img-placeholder">
          <ImageIcon size={28} />
          <span>{project.imagePlaceholder}</span>
        </div>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <div className="project-tools">
          {project.tools.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        <p className="project-problem-label mono">Business Problem</p>
        <p className="project-problem">{project.businessProblem}</p>

        <p className="project-problem-label mono">Analysis</p>
        <ul className="project-analysis">
          {project.analysis.slice(0, 4).map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a
            href={project.github.startsWith("http") ? project.github : "#contact"}
            target={project.github.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <GithubIcon size={14} /> View GitHub
          </a>
          <button className="btn btn-primary btn-sm" onClick={() => onOpen(project)}>
            <FileSearch size={14} /> Case Study
          </button>
        </div>
      </div>
    </article>
  );
}
