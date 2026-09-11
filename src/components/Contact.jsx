import { Mail, Phone, Download } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { GithubIcon, LinkedinIcon } from "./icons";

const CONTACT = {
  email: "harishoffi23@gmail.com",
  phone: "8220173293",
  linkedin: "linkedin.com/in/chandrahari-v",
  github: "github.com/chandrahari-v",
};

export default function Contact() {
  const scopeRef = useReveal();

  return (
    <section id="contact" ref={scopeRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker mono">Contact</span>
          <h2>Let's Connect</h2>
          <p>I am actively looking for entry-level opportunities in Data Analytics and Business Intelligence.</p>
        </div>

        <div className="contact-grid" data-reveal>
          <a href={`mailto:${CONTACT.email}`} className="contact-item card">
            <Mail size={19} />
            <div>
              <span className="contact-label">Email</span>
              <span className="contact-value">{CONTACT.email}</span>
            </div>
          </a>

          <a href={`tel:${CONTACT.phone}`} className="contact-item card">
            <Phone size={19} />
            <div>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{CONTACT.phone}</span>
            </div>
          </a>

          <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="contact-item card">
            <LinkedinIcon size={19} />
            <div>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{CONTACT.linkedin}</span>
            </div>
          </a>

          <a href={`https://${CONTACT.github}`} target="_blank" rel="noreferrer" className="contact-item card">
            <GithubIcon size={19} />
            <div>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{CONTACT.github}</span>
            </div>
          </a>
        </div>

        <div className="contact-actions" data-reveal>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
            <Mail size={16} /> Email Me
          </a>
          <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a href={`https://${CONTACT.github}`} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href="/resume/Chandrahari_V_Resume.docx" download className="btn btn-ghost">
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
