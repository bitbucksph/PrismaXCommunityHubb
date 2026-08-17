import { EcosystemLink, SkillItem, ExperienceItem } from '../types';
import contentClinicImg from '../assets/content-clinic.png';

export const PRIMARY_LINKS: EcosystemLink[] = [
  {
    id: 'prismax-official',
    title: 'PrismaX Official Website',
    category: 'core',
    description: 'A community built guide to PrismaX, bringing together official links, ecosystem information, project updates, and helpful resources for new and existing members.',
    url: 'https://www.prismax.ai/',
    badge: 'CORE PLATFORM',
    featured: true,
    tags: ['Community Guide', 'Official Portal', 'Resources', 'Updates'],
    metrics: 'Official Portal • Global',
    role: 'Ecosystem & Product Lead',
    previewImage: 'https://i.imgur.com/JrYixSy.png',
    features: [
      'Comprehensive overview of PrismaX Physical AI vision',
      'Next-generation robotics hardware & software integration',
      'Institutional and developer ecosystem onboarding',
      'Global announcements, partnerships, and product updates'
    ]
  },
  {
    id: 'robot-control-center',
    title: 'Robot Control Center',
    category: 'platform',
    description: 'Step inside the PrismaX Robot Control Center, where live Verify Quality, Robot operations, Mission controls, and Network activity come together.',
    url: 'https://app.prismax.ai/',
    badge: 'MISSION CONTROL',
    featured: true,
    tags: ['Quality Verification', 'Robot Operations', 'Mission Control', 'Network Activity'],
    metrics: 'Live Dashboard • Production',
    role: 'Platform & Systems Lead',
    previewImage: 'https://i.imgur.com/YygxfsL.png',
    features: [
      'The PrismaX arm system structure: Training Arm Gold + Black, Arena Arm, and Private Arm (invite-only)',
      'Real-time autonomous robot teleoperation and spatial mapping',
      'Low-latency data streaming and neural command pipeline',
      'Diagnostic telemetry, sensor fusion, and battery health',
      'Multi-agent mission routing and decentralized task allocation'
    ]
  },
  {
    id: 'role-progression-guide',
    title: 'PrismaX Role Progression Guide',
    category: 'guide',
    description: 'A step by step guide to PrismaX community roles, explaining how progression works, what each level represents, and which activities support your growth.',
    url: 'https://app.notion.com/p/PrismaX-Role-Progression-Guide-EN-3679646a007a8054937cc7f8124ac4b5',
    badge: 'NOTION PLAYBOOK',
    tags: ['Community Roles', 'Progression Levels', 'Growth Activities', 'Notion Guide'],
    metrics: 'Official Guide • EN Edition',
    role: 'Framework Author',
    previewImage: 'https://i.imgur.com/yaImN4D.png',
    features: [
      'Structured contributor tier hierarchy & qualification criteria',
      'Reward distribution mechanisms for verified contributors',
      'Ecosystem leadership expectations and responsibilities',
      'Clear roadmap from community builder to core ambassador'
    ]
  },
  {
    id: 'prismax-whitepaper',
    title: 'PrismaX WhitePaper',
    category: 'whitepaper',
    description: 'A clear, beginner friendly guide to the PrismaX whitepaper, breaking down its vision, technology, ecosystem, and goals for new members, builders, and community contributors.',
    url: 'https://app.prismax.ai/whitepaper#introduction',
    badge: 'TECHNICAL SPEC',
    tags: ['Whitepaper Guide', 'Technology Vision', 'Ecosystem Goals', 'Protocol Specs'],
    metrics: 'V1.0 Introduction • Active',
    role: 'Research & Protocol Strategy',
    previewImage: 'https://i.imgur.com/dM3F1tg.png',
    features: [
      'Foundational thesis on decentralized physical AI networks',
      'Cryptographic validation models for autonomous hardware',
      'Token utility, staking mechanisms, and governance model',
      'Security architecture and distributed computation framework'
    ]
  },
  {
    id: 'community-activity-1',
    title: 'Trivia Tango (Weekly Study Session)',
    category: 'community',
    description: 'Trivia Tango is a weekly event hosted by Ms. Vivian every Tuesday at 18:30 UTC. The session brings community members together for a guided reading of the PrismaX whitepaper and a discussion of its key topics.',
    url: 'https://discord.com/invite/prismax',
    badge: 'WEEKLY EVENT',
    tags: ['Trivia Tango', 'Ms. Vivian', 'Every Tuesday 18:30 UTC', 'Whitepaper Reading'],
    metrics: 'Weekly • Tuesday 18:30 UTC',
    role: 'Hosted by Ms. Vivian',
    previewImage: 'https://i.imgur.com/i8vpM8I.png',
    features: [
      'Weekly interactive session hosted every Tuesday at 18:30 UTC',
      'Guided deep dive and reading of the official PrismaX Whitepaper',
      'Open community discussion and exploration of key physical AI topics',
      'Interactive quiz and knowledge-sharing with community peers'
    ]
  },
  {
    id: 'community-activity-2',
    title: 'Fun Mode Karaoke Session (Weekly Community Hangout)',
    category: 'community',
    description: 'Sing along with the PrismaX community during Fun Mode Karaoke Session, hosted by Ms. Vivian every Thursday at 18:00 UTC. Members gather to perform songs and spend time together.',
    url: 'https://discord.com/invite/prismax',
    badge: 'WEEKLY EVENT',
    tags: ['Fun Mode', 'Karaoke Session', 'Ms. Vivian', 'Every Thursday 18:00 UTC', 'Discord Stage'],
    metrics: 'Weekly • Thursday 18:00 UTC',
    role: 'Hosted by Ms. Vivian',
    previewImage: 'https://i.imgur.com/ED2vMLD.png',
    features: [
      'Sing along and live vocal performances with global community members',
      'Hosted by Ms. Vivian every Thursday at 18:00 UTC in Discord Stage',
      'Fun, social and informal bonding atmosphere for all contributors',
      'Community spotlight and casual hangouts with builders and ambassadors'
    ]
  },
  {
    id: 'community-activity-3',
    title: 'Content Clinic (Weekly Review & Showcase)',
    category: 'community',
    description: 'Content Clinic is a weekly event hosted by Ms. Vivian every Friday at 18:00 UTC. The session brings community members together to share their work, with selected content reviewed and highlighted by Ms. Vivian.',
    url: 'https://discord.com/invite/prismax',
    badge: 'WEEKLY EVENT',
    tags: ['Content Clinic', 'Ms. Vivian', 'Every Friday 18:00 UTC', 'Work Showcase', 'Peer Feedback'],
    metrics: 'Weekly • Friday 18:00 UTC',
    role: 'Hosted by Ms. Vivian',
    previewImage: 'https://i.imgur.com/s99rzD3.png',
    features: [
      'Community members submit articles, threads, infographics, and guides',
      'Hosted live by Ms. Vivian every Friday at 18:00 UTC on Discord',
      'Constructive feedback, content coaching, and quality improvement',
      'Selected standout community work highlighted officially by PrismaX'
    ]
  }
];

export const SOFTWARE_SKILLS: SkillItem[] = [
  { name: 'Web3 & EVM Protocols', icon: 'Coins', category: 'web3', level: 96, color: '#f5efe6' },
  { name: 'AI & Physical Robotics', icon: 'Bot', category: 'ai', level: 94, color: '#d4bc92' },
  { name: 'React / Next.js / TypeScript', icon: 'Code2', category: 'architecture', level: 95, color: '#ffffff' },
  { name: 'Notion Architecture & Playbooks', icon: 'BookOpen', category: 'architecture', level: 98, color: '#e2d2b5' },
  { name: 'UI / UX & Brand Systems', icon: 'Palette', category: 'design', level: 92, color: '#f5efe6' },
  { name: 'Tokenomics & Technical Docs', icon: 'FileText', category: 'web3', level: 94, color: '#d4bc92' },
];

export const EXPERIENCE_MILESTONES: ExperienceItem[] = [
  {
    period: '2024 — PRESENT',
    role: 'Ecosystem Lead & Core Contributor',
    organization: 'PrismaX Network',
    details: 'Spearheading Physical AI integration, Robot Control Center platform rollout, Brandkit systems, and Notion progression pathways.'
  },
  {
    period: '2023 — 2024',
    role: 'Web3 Architect & Digital Strategist',
    organization: 'Autonomous Protocols',
    details: 'Built decentralized user experiences, personal Web3 hubs, token economic documentation, and multi-chain interface designs.'
  },
  {
    period: '2022 — 2023',
    role: 'Lead UI/UX & Technical Researcher',
    organization: 'NextGen Tech Lab',
    details: 'Designed cohesive brand identity systems, automated developer documentation, and interactive dashboards.'
  }
];

export const COMMUNICATION_METRICS = [
  { label: 'Ecosystem Architecture', score: '98%' },
  { label: 'Physical AI / Robotics', score: '95%' },
  { label: 'Brand & Technical Docs', score: '96%' },
  { label: 'Community Leadership', score: '94%' },
];
