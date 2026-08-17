export interface EcosystemLink {
  id: string;
  title: string;
  category: 'core' | 'docs' | 'platform' | 'identity' | 'whitepaper' | 'guide' | 'brandkit' | 'community';
  description: string;
  url: string;
  badge: string;
  featured?: boolean;
  tags: string[];
  metrics?: string;
  previewImage: string;
  features: string[];
  role: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  category: 'web3' | 'ai' | 'design' | 'architecture';
  level: number; // percentage
  color: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  details: string;
}

export type ActiveSection = 'hero' | 'about' | 'projects' | 'events' | 'contact';
