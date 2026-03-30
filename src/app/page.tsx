import Hero3D from "@/components/Hero3D";
import TechCarousel from "@/components/TechCarousel";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with 3D Scroll Rotation */}
      <section id="home">
        <Hero3D />
      </section>

      {/* Infinite Tech Marquee */}
      <TechCarousel />

      {/* About Section with Line Reveal */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Interactive Skills Grid */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Professional Experience Timeline */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Featured Projects with 3D Tilt Cards */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact & Social Footer */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
