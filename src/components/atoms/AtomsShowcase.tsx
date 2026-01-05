/**
 * Atoms Showcase - Demo page for all atom components
 * Use this to preview and test all atomic components
 */

import { Button, Badge, Text, Icon, Avatar, Card, ProgressBar } from './index';
import styles from './AtomsShowcase.module.css';

export const AtomsShowcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <Text variant="h1" gradient align="center">
          Atom Components Showcase
        </Text>
        <Text variant="body" color="secondary" align="center">
          3D Portfolio Dashboard - Glassmorphism Design System
        </Text>

        {/* Button Section */}
        <section className={styles.section}>
          <Text variant="h2">Button Component</Text>
          <Text variant="body" color="muted">
            Multiple variants and sizes with glassmorphic effects
          </Text>
          
          <div className={styles.grid}>
            <div>
              <Text variant="caption" color="muted">Primary Variants</Text>
              <div className={styles.row}>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">All Variants (md)</Text>
              <div className={styles.row}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">With Icons</Text>
              <div className={styles.row}>
                <Button variant="primary" leftIcon={<Icon name="github" size="sm" />}>
                  GitHub
                </Button>
                <Button variant="secondary" rightIcon={<Icon name="arrow" size="sm" />}>
                  Next
                </Button>
                <Button variant="ghost" leftIcon={<Icon name="code" size="sm" />}>
                  View Code
                </Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">States</Text>
              <div className={styles.row}>
                <Button variant="primary" isLoading>Loading</Button>
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary" fullWidth>Full Width</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badge Section */}
        <section className={styles.section}>
          <Text variant="h2">Badge Component</Text>
          <Text variant="body" color="muted">
            Tech stack tags and status indicators
          </Text>

          <div className={styles.grid}>
            <div>
              <Text variant="caption" color="muted">Variants</Text>
              <div className={styles.row}>
                <Badge variant="primary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="accent">Featured</Badge>
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Beta</Badge>
                <Badge variant="error">Deprecated</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">Sizes</Text>
              <div className={styles.row}>
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">With Dot Indicator</Text>
              <div className={styles.row}>
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="warning" dot>Away</Badge>
                <Badge variant="error" dot>Offline</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Text Section */}
        <section className={styles.section}>
          <Text variant="h2">Text Component</Text>
          <Text variant="body" color="muted">
            Typography system with variants and colors
          </Text>

          <div className={styles.grid}>
            <div>
              <Text variant="caption" color="muted">Headings</Text>
              <Text variant="h1">Heading 1</Text>
              <Text variant="h2">Heading 2</Text>
              <Text variant="h3">Heading 3</Text>
              <Text variant="h4">Heading 4</Text>
              <Text variant="h5">Heading 5</Text>
              <Text variant="h6">Heading 6</Text>
            </div>

            <div>
              <Text variant="caption" color="muted">Body Text</Text>
              <Text variant="bodyLarge">Large body text for important content</Text>
              <Text variant="body">Regular body text for most content</Text>
              <Text variant="bodySmall">Small body text for less important info</Text>
              <Text variant="caption">Caption text for labels</Text>
              <Text variant="overline">Overline text</Text>
            </div>

            <div>
              <Text variant="caption" color="muted">Colors</Text>
              <Text variant="body" color="primary">Primary Color</Text>
              <Text variant="body" color="secondary">Secondary Color</Text>
              <Text variant="body" color="muted">Muted Color</Text>
              <Text variant="body" color="accent">Accent Color</Text>
              <Text variant="h3" gradient>Animated Gradient</Text>
            </div>

            <div>
              <Text variant="caption" color="muted">Monospace</Text>
              <Text variant="body" mono>const portfolio = "awesome";</Text>
              <Text variant="bodySmall" mono color="accent">
                npm install framer-motion
              </Text>
            </div>
          </div>
        </section>

        {/* Icon Section */}
        <section className={styles.section}>
          <Text variant="h2">Icon Component</Text>
          <Text variant="body" color="muted">
            SVG icons with hover effects
          </Text>

          <div className={styles.grid}>
            <div>
              <Text variant="caption" color="muted">Social Icons</Text>
              <div className={styles.iconRow}>
                <Icon name="github" size="lg" hoverEffect />
                <Icon name="linkedin" size="lg" hoverEffect />
                <Icon name="twitter" size="lg" hoverEffect />
                <Icon name="email" size="lg" hoverEffect />
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">UI Icons</Text>
              <div className={styles.iconRow}>
                <Icon name="code" size="lg" hoverEffect />
                <Icon name="star" size="lg" hoverEffect />
                <Icon name="coffee" size="lg" hoverEffect />
                <Icon name="calendar" size="lg" hoverEffect />
                <Icon name="externalLink" size="lg" hoverEffect />
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">Navigation Icons</Text>
              <div className={styles.iconRow}>
                <Icon name="arrowLeft" size="lg" hoverEffect />
                <Icon name="arrowRight" size="lg" hoverEffect />
                <Icon name="arrowUp" size="lg" hoverEffect />
                <Icon name="arrowDown" size="lg" hoverEffect />
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">Icon Sizes</Text>
              <div className={styles.iconRow}>
                <Icon name="star" size="xs" />
                <Icon name="star" size="sm" />
                <Icon name="star" size="md" />
                <Icon name="star" size="lg" />
                <Icon name="star" size="xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Section */}
        <section className={styles.section}>
          <Text variant="h2">Avatar Component</Text>
          <Text variant="body" color="muted">
            3D letter avatars with glassmorphic effects
          </Text>

          <div className={styles.grid}>
            <div>
              <Text variant="caption" color="muted">Sizes</Text>
              <div className={styles.iconRow}>
                <Avatar letter="S" size="sm" />
                <Avatar letter="M" size="md" />
                <Avatar letter="L" size="lg" />
                <Avatar letter="X" size="xl" />
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">Variants</Text>
              <div className={styles.iconRow}>
                <Avatar letter="P" size="lg" variant="primary" />
                <Avatar letter="S" size="lg" variant="secondary" />
                <Avatar letter="A" size="lg" variant="accent" />
              </div>
            </div>

            <div>
              <Text variant="caption" color="muted">Hover to Rotate</Text>
              <div className={styles.iconRow}>
                <Avatar letter="3" size="xl" variant="primary" />
                <Avatar letter="D" size="xl" variant="accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section className={styles.section}>
          <Text variant="h2">Card Component</Text>
          <Text variant="body" color="muted">
            Glassmorphic containers with variants
          </Text>

          <div className={styles.cardGrid}>
            <Card variant="default" padding="lg">
              <Text variant="h4">Default Card</Text>
              <Text variant="body" color="secondary">
                Standard glassmorphic card with blur effect
              </Text>
            </Card>

            <Card variant="elevated" padding="lg" hover>
              <Text variant="h4">Elevated Card</Text>
              <Text variant="body" color="secondary">
                Enhanced shadow, hover to see lift effect
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Text variant="h4">Outlined Card</Text>
              <Text variant="body" color="secondary">
                Transparent with border only
              </Text>
            </Card>

            <Card variant="flat" padding="lg">
              <Text variant="h4">Flat Card</Text>
              <Text variant="body" color="secondary">
                Minimal style without border
              </Text>
            </Card>

            <Card variant="default" padding="lg" hover glow>
              <Text variant="h4">Glow Card</Text>
              <Text variant="body" color="secondary">
                Hover to see gradient border glow
              </Text>
              <div style={{ marginTop: '16px' }}>
                <Badge variant="accent">Featured</Badge>
              </div>
            </Card>

            <Card variant="elevated" padding="lg">
              <Text variant="h4">Full Example</Text>
              <Text variant="body" color="secondary">
                Card with multiple child components
              </Text>
              <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge variant="primary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="accent">Framer Motion</Badge>
              </div>
              <div style={{ marginTop: '16px' }}>
                <Button variant="primary" size="sm" fullWidth>
                  View Project
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* ProgressBar Section */}
        <section className={styles.section}>
          <Text variant="h2">ProgressBar Component</Text>
          <Text variant="body" color="muted">
            Animated skill indicators with shimmer effects
          </Text>

          <div className={styles.progressGrid}>
            <div>
              <Text variant="caption" color="muted">With Labels</Text>
              <ProgressBar value={90} variant="primary" showLabel label="React" />
              <ProgressBar value={85} variant="secondary" showLabel label="TypeScript" />
              <ProgressBar value={80} variant="accent" showLabel label="CSS" />
              <ProgressBar value={75} variant="success" showLabel label="Node.js" />
            </div>

            <div>
              <Text variant="caption" color="muted">Sizes</Text>
              <ProgressBar value={70} size="sm" label="Small" />
              <ProgressBar value={80} size="md" label="Medium" />
              <ProgressBar value={90} size="lg" label="Large" />
            </div>

            <div>
              <Text variant="caption" color="muted">Without Animation</Text>
              <ProgressBar value={60} variant="primary" animated={false} label="Static" />
            </div>
          </div>
        </section>

        {/* Combined Example */}
        <section className={styles.section}>
          <Text variant="h2">Combined Example</Text>
          <Text variant="body" color="muted">
            Real-world usage of multiple components together
          </Text>

          <Card variant="elevated" padding="lg" hover glow>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Avatar letter="M" size="lg" variant="primary" />
              <div>
                <Text variant="h3">Portfolio Dashboard</Text>
                <Text variant="body" color="secondary">Full Stack Developer</Text>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <Badge variant="success" dot>Available</Badge>
                  <Badge variant="primary">Open to Work</Badge>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <Text variant="h5" style={{ marginBottom: '16px' }}>Skills</Text>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ProgressBar value={95} variant="primary" showLabel label="React / Next.js" />
                <ProgressBar value={90} variant="secondary" showLabel label="TypeScript" />
                <ProgressBar value={85} variant="accent" showLabel label="Node.js / Express" />
                <ProgressBar value={80} variant="success" showLabel label="Three.js / 3D" />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <Text variant="h5" style={{ marginBottom: '12px' }}>Tech Stack</Text>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge variant="primary">React</Badge>
                <Badge variant="primary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="accent">Three.js</Badge>
                <Badge variant="accent">Framer Motion</Badge>
                <Badge variant="neutral">PostgreSQL</Badge>
                <Badge variant="neutral">MongoDB</Badge>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button 
                variant="primary" 
                leftIcon={<Icon name="github" size="sm" />}
              >
                View GitHub
              </Button>
              <Button 
                variant="secondary" 
                leftIcon={<Icon name="linkedin" size="sm" />}
              >
                LinkedIn
              </Button>
              <Button 
                variant="ghost" 
                leftIcon={<Icon name="email" size="sm" />}
              >
                Contact Me
              </Button>
            </div>
          </Card>
        </section>

        <footer className={styles.footer}>
          <Text variant="body" color="muted" align="center">
            All components built with React, TypeScript, CSS Modules & Framer Motion
          </Text>
          <Text variant="caption" color="muted" align="center">
            Glassmorphism • Cyber Purple Theme • GPU Accelerated
          </Text>
        </footer>
      </div>
    </div>
  );
};
