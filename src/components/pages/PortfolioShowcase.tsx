import { SkillsSection } from '../organisms/SkillsSection';
import { TimelineSection } from '../organisms/TimelineSection';
import { ContactSection } from '../organisms/ContactSection';
import styles from './PortfolioShowcase.module.css';

/**
 * PortfolioShowcase
 * 
 * Full portfolio page demonstrating the three major organism components:
 * - SkillsSection: Interactive radar chart, skill bars, and tech badges
 * - TimelineSection: Vertical timeline with alternating cards
 * - ContactSection: Contact card with social links and CTA
 */
export const PortfolioShowcase: React.FC = () => {
  return (
    <div className={styles.portfolioShowcase}>
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
};

export default PortfolioShowcase;
