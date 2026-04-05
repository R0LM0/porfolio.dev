import source from "./profile-source.json";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  link?: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  outcome: string;
  stack: string[];
  href?: string;
  repo?: string;
  image: string;
  imageAlt: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

type PortfolioSource = {
  profile: {
    brand: string;
    name: string;
    shortName: string;
    role: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    portfolioUrl: string;
    resumeUrl: string;
    resumeFileName: string;
    title: string;
    description: string;
    heroDescription: string;
    heroHighlight: string;
    availabilityLabel: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
};

const data = source as PortfolioSource;

export const site = {
  brand: data.profile.brand,
  name: data.profile.name,
  shortName: data.profile.shortName,
  role: data.profile.role,
  location: data.profile.location,
  email: data.profile.email,
  phone: data.profile.phone,
  whatsappUrl: data.profile.whatsappUrl,
  linkedinUrl: data.profile.linkedinUrl,
  githubUrl: data.profile.githubUrl,
  portfolioUrl: data.profile.portfolioUrl,
  resumeUrl: data.profile.resumeUrl,
  resumeFileName: data.profile.resumeFileName,
  title: data.profile.title,
  description: data.profile.description,
  heroDescription: data.profile.heroDescription,
  heroHighlight: data.profile.heroHighlight,
  availabilityLabel: data.profile.availabilityLabel,
};

export const navigation: NavItem[] = data.navigation;
export const socialLinks: SocialLink[] = data.socialLinks;
export const experience: ExperienceItem[] = data.experience;
export const projects: ProjectItem[] = data.projects;
export const skillGroups: SkillGroup[] = data.skillGroups;
