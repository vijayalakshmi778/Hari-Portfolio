import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <BarChart3 size={18} />
          <span>Chandrahari V</span>
        </div>
        <p className="footer-role">Data Analyst | SQL | Python | Excel | Power BI | Tableau</p>
        <p className="footer-tagline">"Turning Data Into Business Insights."</p>
        <p className="footer-copy mono">© 2026 Chandrahari V</p>
      </div>
    </footer>
  );
}
