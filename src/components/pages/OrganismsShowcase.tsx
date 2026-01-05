import { Navigation } from '../organisms/Navigation';
import { HeroSection } from '../organisms/HeroSection';
import { Text } from '../atoms/Text';
import { Card } from '../atoms/Card';
import styles from './OrganismsShowcase.module.css';

export const OrganismsShowcase: React.FC = () => {
  return (
    <div className={styles.showcase}>
      <Navigation />
      
      <HeroSection />

      {/* Mock sections for scroll spy demonstration */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionContent}>
          <Text variant="h2" align="center" gradient>
            Projects Section
          </Text>
          <Card variant="elevated" hover>
            <Text color="secondary">
              This is a placeholder for the Projects section. The navigation
              above tracks which section is active using scroll spy.
            </Text>
          </Card>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionContent}>
          <Text variant="h2" align="center" gradient>
            Skills Section
          </Text>
          <Card variant="elevated" hover>
            <Text color="secondary">
              This is a placeholder for the Skills section. Notice how the
              navigation changes as you scroll.
            </Text>
          </Card>
        </div>
      </section>

      <section id="timeline" className={styles.section}>
        <div className={styles.sectionContent}>
          <Text variant="h2" align="center" gradient>
            Timeline Section
          </Text>
          <Card variant="elevated" hover>
            <Text color="secondary">
              This is a placeholder for the Timeline section. Try scrolling up
              and down to see the navigation behavior.
            </Text>
          </Card>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.sectionContent}>
          <Text variant="h2" align="center" gradient>
            Contact Section
          </Text>
          <Card variant="elevated" hover>
            <Text color="secondary">
              This is a placeholder for the Contact section. The "Get in Touch"
              button in the hero section scrolls here.
            </Text>
          </Card>
        </div>
      </section>
    </div>
  );
};
