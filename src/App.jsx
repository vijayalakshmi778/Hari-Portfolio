import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import AnalyticsWorkflow from "./components/AnalyticsWorkflow";
import Projects from "./components/Projects";
import DashboardGallery from "./components/DashboardGallery";
import SQLShowcase from "./components/SQLShowcase";
import BusinessInsights from "./components/BusinessInsights";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CareerFocus from "./components/CareerFocus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AnalyticsWorkflow />
        <Projects />
        <DashboardGallery />
        <SQLShowcase />
        <BusinessInsights />
        <Experience />
        <Education />
        <Certifications />
        <CareerFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
