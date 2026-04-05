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

export const site = {
  brand: "r0lm0",
  name: "Lenin Gilberto Osorio Martinez",
  shortName: "Lenin Osorio",
  role: "Full-Stack Software Engineer",
  location: "Nicaragua",
  email: "rolmo33@yahoo.es",
  linkedinUrl:
    "https://www.linkedin.com/in/lenin-gilberto-osorio-martinez-680481324/",
  githubUrl: "https://github.com/R0LM0",
  resumeUrl: "/api/cv.pdf",
  resumeFileName: "Lenin-G-Osorio-Martinez-CV-2026.pdf",
  title:
    "Lenin Osorio - Full-Stack Software Engineer con foco en frontend, arquitectura y producto",
  description:
    "Portfolio estático en Astro de Lenin Osorio. Diseño sobrio, rápido y fiel al estilo de porfolio.dev-main, con proyectos, experiencia, skills y descarga de CV.",
  heroDescription:
    "Ingeniero de software especializado en frontend, APIs y arquitectura de aplicaciones. Me enfoco en construir productos claros, performantes y mantenibles para entornos reales.",
  heroHighlight:
    "Trabajo entre frontend, backend y producto, priorizando buenas bases, criterio técnico y una experiencia de usuario que se sienta prolija de verdad.",
  availabilityLabel: "Disponible para trabajar",
};

export const navigation: NavItem[] = [
  { label: "Experiencia", href: "/#experience" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contacto", href: `mailto:${site.email}` },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: site.githubUrl,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: "mail",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "ENACAL",
    role: "Systems Project Specialist",
    period: "Julio 2024 - Febrero 2026",
    location: "Managua, Nicaragua",
    summary:
      "Diseñé e implementé APIs en .NET 8 y .NET 9 para sistemas operativos, autenticación con JWT y cookies, repositorios reutilizables y frontend con React para casos de uso productivos.",
    stack: [".NET 8/9", "REST APIs", "JWT", "React", "Tailwind CSS", "IIS"],
  },
  {
    company: "FISE",
    role: "System Programmer Analyst",
    period: "Marzo 2019 - Junio 2024",
    location: "Managua, Nicaragua",
    summary:
      "Trabajé en sistemas institucionales de inventario, seguimiento de proyectos y reportes, usando .NET Core, Angular, React, PostgreSQL, GeoServer y mejoras sobre flujos documentales reales.",
    stack: [".NET Core", "Angular", "React", "PostgreSQL", "GeoServer", "RDLC"],
  },
  {
    company: "FISE",
    role: "Summer Intern",
    period: "Octubre 2018 - Febrero 2019",
    location: "Managua, Nicaragua",
    summary:
      "Desarrollé módulos sobre .NET Framework con MVC, migré reportes a RDLC y participé en mejoras para subsistemas administrativos internos.",
    stack: [".NET Framework", "MVC", "RDLC"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "R3.chat",
    period: "2025",
    description:
      "Plataforma SaaS para interactuar con modelos de IA en tiempo real, con autenticación federada, mensajería y backend escalable.",
    outcome:
      "Implementé arquitectura full-stack con React, NestJS, PostgreSQL, WebSockets, OAuth con Google/GitHub y configuración de seguridad con Cloudflare.",
    stack: ["React", "NestJS", "PostgreSQL"],
    href: "https://r3chat.r0lm0.dev/",
    image: "/images/projects/r3chat-preview.svg",
    imageAlt: "Ilustración del proyecto R3.chat",
  },
  {
    title: "Portfolio Microservices",
    period: "2026",
    description:
      "Exploración de una arquitectura de portfolio con frontend Astro y backend desacoplado en NestJS para auth, contenido y gateway.",
    outcome:
      "Me sirvió para validar los límites del alcance y separar correctamente el portfolio público del laboratorio backend.",
    stack: ["Astro", "NestJS", "Prisma"],
    image: "/images/projects/project-portfolio-microservices.svg",
    imageAlt: "Ilustración del proyecto Portfolio Microservices",
  },
  {
    title: "AquaSync",
    period: "Diciembre 2024 - Febrero 2025",
    description:
      "Aplicación móvil para trabajo de campo con captura geoespacial, sincronización con API REST y soporte offline-first.",
    outcome:
      "Permitió recolectar datos catastrales, capturar imágenes asociadas y seguir operando incluso con conectividad limitada.",
    stack: ["Flutter", "REST API", "Offline Sync"],
    image: "/images/projects/project-tasks.svg",
    imageAlt: "Ilustración del proyecto AquaSync",
  },
  {
    title: "Advanced Repository Library",
    period: "2024",
    description:
      "Librería reusable para acelerar nuevos módulos backend con CRUD, filtros dinámicos y una base consistente de acceso a datos.",
    outcome:
      "Redujo repetición, dejó patrones claros y mejoró la velocidad para crear servicios con paginación, caché y soft delete.",
    stack: [".NET", "Clean Architecture", "Pagination"],
    image: "/images/projects/project-advanced-repository-library.svg",
    imageAlt: "Ilustración de la librería Advanced Repository Library",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Interfaces rápidas, legibles y mantenibles, con foco en arquitectura y experiencia de usuario.",
    items: ["Astro", "React", "Angular", "TypeScript", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description:
      "Servicios, autenticación y diseño robusto para productos que necesitan crecer sin romperse.",
    items: [".NET 8/9", "ASP.NET Core", "NestJS", "REST APIs", "JWT", "Cookies", "WebSockets"],
  },
  {
    title: "Data & Infra",
    description:
      "Persistencia, despliegue y operación en entornos reales con foco en estabilidad y rendimiento.",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Cloudflare", "Git", "CI/CD", "IIS"],
  },
];
