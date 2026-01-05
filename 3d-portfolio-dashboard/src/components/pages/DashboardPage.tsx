import { type FC } from 'react';
import { 
  Navigation, 
  HeroSection, 
  ProjectsGallery, 
  SkillsSection,
  TimelineSection,
  ContactSection,
  Background,
} from '@/components/organisms';
import { BackgroundController } from '@/components/organisms/Background';
import { ConfettiExplosion } from '@/components/organisms/ConfettiExplosion';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import styles from './DashboardPage.module.css';

/**
 * Complete Portfolio Dashboard for Maya Rivera
 * 
 * Features all sections:
 * - Hero with 3D Avatar
 * - Metrics Grid (6 stats)
 * - Projects Gallery (8 projects with filters)
 * - Skills Section (Radar + Bars)
 * - Timeline (Career journey)
 * - Contact (Social links)
 */
export const DashboardPage: FC = () => {
  const isKonamiActivated = useKonamiCode();

  return (
    <div className={styles.dashboard}>
      {/* Konami Code Easter Egg */}
      <ConfettiExplosion isActive={isKonamiActivated} />
      
      {/* Animated Background */}
      <Background />
      <BackgroundController />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <ProjectsGallery />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>
        
        {/* Timeline Section */}
        <section id="timeline">
          <TimelineSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Maya Rivera. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
};
