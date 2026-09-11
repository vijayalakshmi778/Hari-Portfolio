import { useEffect } from "react";
import { X, ImageIcon, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const kpiList = project.kpiList || null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close case study">
          <X size={20} />
        </button>

        <div className="modal-media">
          <div className="img-placeholder">
            <ImageIcon size={28} />
            <span>{project.imagePlaceholder}</span>
          </div>
        </div>

        <div className="modal-body">
          <h3>{project.title}</h3>
          <div className="project-tools">
            {project.tools.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>

          <div className="modal-section">
            <p className="project-problem-label mono">Business Problem</p>
            <p className="modal-text">{project.businessProblem}</p>
          </div>

          <div className="modal-grid">
            <div className="modal-section">
              <p className="project-problem-label mono">Dataset</p>
              <p className="modal-text">{project.dataset}</p>
            </div>
            <div className="modal-section">
              <p className="project-problem-label mono">Data Cleaning</p>
              <p className="modal-text">{project.dataCleaning}</p>
            </div>
            <div className="modal-section">
              <p className="project-problem-label mono">Data Transformation</p>
              <p className="modal-text">{project.dataTransformation}</p>
            </div>
            <div className="modal-section">
              <p className="project-problem-label mono">Dashboard</p>
              <p className="modal-text">{project.dashboard}</p>
            </div>
          </div>

          <div className="modal-section">
            <p className="project-problem-label mono">Analysis</p>
            <ul className="modal-list">
              {project.analysis.map((a) => (
                <li key={a}><CheckCircle2 size={14} /> {a}</li>
              ))}
            </ul>
          </div>

          {kpiList && (
            <div className="modal-section">
              <p className="project-problem-label mono">KPIs</p>
              <div className="project-tools">
                {kpiList.map((k) => (
                  <span key={k} className="badge badge-secondary">{k}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-grid">
            <div className="modal-section">
              <p className="project-problem-label mono">Key Insights</p>
              <p className="modal-text modal-placeholder">{project.insights}</p>
            </div>
            <div className="modal-section">
              <p className="project-problem-label mono">Business Recommendations</p>
              <p className="modal-text modal-placeholder">{project.recommendations}</p>
            </div>
          </div>

          <div className="project-actions">
            <a
              href={project.github.startsWith("http") ? project.github : "#contact"}
              target={project.github.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              <GithubIcon size={14} /> GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
