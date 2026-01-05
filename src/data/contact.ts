export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  isAvailable: boolean;
  availabilityText: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/mayarivera',
    icon: 'github',
    color: '#333',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mayarivera',
    icon: 'linkedin',
    color: '#0077b5',
  },
  {
    id: '3',
    platform: 'Twitter',
    url: 'https://twitter.com/mayarivera',
    icon: 'twitter',
    color: '#1da1f2',
  },
  {
    id: '4',
    platform: 'Email',
    url: 'mailto:maya.rivera@example.com',
    icon: 'mail',
    color: '#ea4335',
  },
];

export const contactInfo: ContactInfo = {
  name: 'Maya Rivera',
  title: "Let's Work Together",
  subtitle: "I'm currently available for freelance projects and full-time opportunities",
  email: 'maya.rivera@example.com',
  isAvailable: true,
  availabilityText: 'Available for Projects',
};
