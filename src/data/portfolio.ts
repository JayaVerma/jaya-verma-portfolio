import data from "./portfolio.json";

export interface Personal {
  name: string;
  email: string;
  phone: string;
  location: string;
  visa_status: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  gpa: string;
  activities?: string;
  courses: string[];
}

export interface BulletTags {
  role_types?: string[];
  skills?: string[];
  keywords?: string[];
  strength?: "high" | "medium" | "low";
  impact_type?: string;
}

export interface Bullet {
  id: string;
  text: string;
  tags: BulletTags;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  subtitle?: string;
  location: string;
  dates: string;
  is_current: boolean;
  summary?: string;
  stack?: string;
  bullets: Bullet[];
}

export interface Project {
  id: string;
  title: string;
  url: string;
  tech: string;
  bullets: Bullet[];
}

export interface Achievement {
  id: string;
  text: string;
  tags: BulletTags;
}

export interface Skills {
  programming: string[];
  automation_testing: string[];
  platforms_tools: string[];
  ml_ai: string[];
  frameworks: string[];
  cloud: string[];
}

export interface Portfolio {
  personal: Personal;
  education: Education[];
  skills: Skills;
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
}

export const portfolio = data as Portfolio;

/** Human-friendly labels for the skill groups (keys → display names). */
export const skillGroupLabels: Record<keyof Skills, string> = {
  ml_ai: "ML / AI",
  frameworks: "Frameworks & Libraries",
  cloud: "Cloud & Infra",
  programming: "Languages & Data",
  platforms_tools: "Platforms & Tools",
  automation_testing: "Automation & Testing",
};

/** Order in which skill groups are rendered. */
export const skillGroupOrder: (keyof Skills)[] = [
  "ml_ai",
  "frameworks",
  "cloud",
  "programming",
  "platforms_tools",
  "automation_testing",
];
