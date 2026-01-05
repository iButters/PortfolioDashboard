import { type FC } from 'react';
import { Navigation, HeroSection, MetricsGrid } from '@/components/organisms';
import { Background } from '@/components/organisms/Background';
import { BackgroundController } from '@/components/organisms/Background';
import styles from './MetricsShowcase.module.css';

export const MetricsShowcase: FC = () => {
  return (
    <div className={styles.showcase}>
      <Background />
      <BackgroundController />
      <Navigation />
      
      <HeroSection />
      
      {/* Metrics Grid Section */}
      <MetricsGrid />
      
      {/* Placeholder sections for scroll testing */}
      <section id="projects" className={styles.placeholderSection}>
        <div className={styles.container}>
          <h2>Projects Section</h2>
          <p>Coming next...</p>
        </div>
      </section>
      
      <section id="skills" className={styles.placeholderSection}>
        <div className={styles.container}>
          <h2>Skills Section</h2>
          <p>Coming soon...</p>
        </div>
      </section>
      
      <section id="timeline" className={styles.placeholderSection}>
        <div className={styles.container}>
          <h2>Timeline Section</h2>
          <p>Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className={styles.placeholderSection}>
        <div className={styles.container}>
          <h2>Contact Section</h2>
          <p>Coming soon...</p>
        </div>
      </section>
    </div>
  );
};
