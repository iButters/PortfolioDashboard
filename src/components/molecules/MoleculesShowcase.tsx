import { useState } from 'react';
import {
  MetricCard,
  ProjectCard,
  SkillBar,
  TimelineItem,
  SocialButton,
  TechBadge,
  NavButton,
} from './index';
import styles from './MoleculesShowcase.module.css';

export const MoleculesShowcase = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <h1 className={styles.title}>Molecule Components</h1>
        <p className={styles.subtitle}>
          Complex, reusable UI patterns combining atomic components
        </p>
      </div>

      {/* MetricCard Section */}
      <section className={styles.section} id="metric-cards">
        <h2 className={styles.sectionTitle}>MetricCard</h2>
        <p className={styles.description}>
          Animated metric cards with count-up animation and glow effects
        </p>
        <div className={styles.grid3}>
          <MetricCard
            value={42}
            label="Projects Completed"
            icon="code"
            suffix="+"
            delay={0}
          />
          <MetricCard
            value={5}
            label="Years Experience"
            icon="calendar"
            suffix="+"
            delay={0.1}
          />
          <MetricCard
            value={100}
            label="Happy Clients"
            icon="star"
            suffix="+"
            delay={0.2}
          />
        </div>
      </section>

      {/* ProjectCard Section */}
      <section className={styles.section} id="project-cards">
        <h2 className={styles.sectionTitle}>ProjectCard</h2>
        <p className={styles.description}>
          Flippable 3D project cards with front and back content
        </p>
        <div className={styles.grid2}>
          <ProjectCard
            title="3D Portfolio Dashboard"
            description="A modern, interactive portfolio dashboard with 3D backgrounds, smooth animations, and glassmorphic design. Built with React, TypeScript, and Framer Motion."
            tags={['React', 'TypeScript', 'Framer Motion', 'CSS Modules']}
            category="web"
            demoUrl="https://example.com"
            githubUrl="https://github.com/example"
            featured={true}
          />
          <ProjectCard
            title="E-Commerce Platform"
            description="Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics."
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            tags={['Next.js', 'Node.js', 'MongoDB', 'Stripe']}
            category="web"
            demoUrl="https://example.com"
            githubUrl="https://github.com/example"
          />
        </div>
      </section>

      {/* SkillBar Section */}
      <section className={styles.section} id="skill-bars">
        <h2 className={styles.sectionTitle}>SkillBar</h2>
        <p className={styles.description}>
          Animated skill bars with horizontal and vertical orientations
        </p>
        <div className={styles.skillsDemo}>
          <div className={styles.horizontalSkills}>
            <SkillBar skill="React" level={95} variant="primary" delay={0} />
            <SkillBar skill="TypeScript" level={90} variant="secondary" delay={0.1} />
            <SkillBar skill="CSS/SCSS" level={85} variant="accent" delay={0.2} />
            <SkillBar skill="Node.js" level={80} variant="primary" delay={0.3} />
          </div>
          <div className={styles.verticalSkills}>
            <SkillBar skill="UI/UX" level={90} variant="primary" orientation="vertical" />
            <SkillBar skill="3D" level={75} variant="secondary" orientation="vertical" />
            <SkillBar skill="Animation" level={85} variant="accent" orientation="vertical" />
          </div>
        </div>
      </section>

      {/* TimelineItem Section */}
      <section className={styles.section} id="timeline-items">
        <h2 className={styles.sectionTitle}>TimelineItem</h2>
        <p className={styles.description}>
          Timeline items with alternating positions and type-specific icons
        </p>
        <div className={styles.timeline}>
          <TimelineItem
            year={2024}
            title="Senior Frontend Developer"
            description="Leading frontend development for enterprise applications with focus on performance and user experience."
            type="work"
            position="left"
            delay={0}
          />
          <TimelineItem
            year={2023}
            title="Master's Degree in Computer Science"
            description="Graduated with honors, specializing in web technologies and human-computer interaction."
            type="education"
            position="right"
            delay={0.1}
          />
          <TimelineItem
            year={2022}
            title="Best Developer Award"
            description="Recognized for outstanding contribution to open-source community and innovative projects."
            type="achievement"
            position="left"
            delay={0.2}
          />
        </div>
      </section>

      {/* SocialButton Section */}
      <section className={styles.section} id="social-buttons">
        <h2 className={styles.sectionTitle}>SocialButton</h2>
        <p className={styles.description}>
          Social media buttons with platform-specific colors and tooltips
        </p>
        <div className={styles.socialButtons}>
          <SocialButton platform="github" url="https://github.com" delay={0} />
          <SocialButton platform="linkedin" url="https://linkedin.com" delay={0.1} />
          <SocialButton platform="twitter" url="https://twitter.com" delay={0.2} />
          <SocialButton platform="email" url="[email protected]" delay={0.3} />
        </div>
      </section>

      {/* TechBadge Section */}
      <section className={styles.section} id="tech-badges">
        <h2 className={styles.sectionTitle}>TechBadge</h2>
        <p className={styles.description}>
          Technology badges with category-based colors and floating animation
        </p>
        <div className={styles.techBadges}>
          <TechBadge technology="React" category="frontend" icon="code" />
          <TechBadge technology="TypeScript" category="frontend" icon="code" />
          <TechBadge technology="Node.js" category="backend" icon="code" />
          <TechBadge technology="MongoDB" category="backend" icon="code" />
          <TechBadge technology="Figma" category="design" icon="star" />
          <TechBadge technology="Photoshop" category="design" icon="star" />
          <TechBadge technology="Git" category="other" icon="code" />
        </div>
      </section>

      {/* NavButton Section */}
      <section className={styles.section} id="nav-buttons">
        <h2 className={styles.sectionTitle}>NavButton</h2>
        <p className={styles.description}>
          Navigation buttons with active state and smooth scroll functionality
        </p>
        <div className={styles.navButtons}>
          <NavButton
            label="Home"
            href="#home"
            active={activeNav === 'home'}
            onClick={() => setActiveNav('home')}
          />
          <NavButton
            label="About"
            href="#about"
            active={activeNav === 'about'}
            onClick={() => setActiveNav('about')}
          />
          <NavButton
            label="Projects"
            href="#projects"
            active={activeNav === 'projects'}
            onClick={() => setActiveNav('projects')}
          />
          <NavButton
            label="Contact"
            href="#contact"
            active={activeNav === 'contact'}
            onClick={() => setActiveNav('contact')}
          />
        </div>
      </section>
    </div>
  );
};
