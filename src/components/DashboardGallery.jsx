import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { dashboardGallery } from "../data/projects";
import useReveal from "../hooks/useReveal";

const CATEGORIES = ["All", "Power BI", "Tableau", "Excel"];

export default function DashboardGallery() {
  const [filter, setFilter] = useState("All");
  const scopeRef = useReveal([filter]);

  const items = dashboardGallery.filter((d) => filter === "All" || d.category === filter);

  return (
    <section id="dashboards" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Gallery</span>
          <h2>Dashboard Gallery</h2>
          <p>A closer look at the dashboards behind the case studies above.</p>
        </div>

        <div className="gallery-filters" data-reveal>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-pill ${filter === c ? "is-active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((d) => (
            <article className="gallery-card card" data-reveal key={d.id}>
              <div className="gallery-media">
                <div className="img-placeholder">
                  <ImageIcon size={26} />
                  <span>{d.imagePlaceholder}</span>
                </div>
                <span className="gallery-tag mono">{d.category}</span>
              </div>
              <div className="gallery-body">
                <h3>{d.name}</h3>
                <p className="gallery-tools mono">{d.tools}</p>
                <p>{d.description}</p>
                <a href={`#projects`} className="btn btn-ghost btn-sm">View Project</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
