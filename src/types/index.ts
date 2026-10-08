export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
}

export type FeatureStatus = 'In Development' | 'Planned' | 'Research Vision';

export interface FeatureCapability {
  id: string;
  title: string;
  subtitle: string;
  status: FeatureStatus;
  description: string;
  technicalDetails: string[];
  plannedPhase: string;
}

export interface RoadmapMilestone {
  phase: number;
  title: string;
  status: 'In Progress' | 'Planned' | 'Future Evaluation';
  timelineLabel: string;
  summary: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  organization?: string;
  message: string;
}
