import source from "../src/data/profile-source.json" with { type: "json" };

const { profile, experience, projects, skillGroups, githubProfile = {} } = source;

const skillIconMap = {
  Astro: "astro",
  React: "react",
  Angular: "angular",
  TypeScript: "ts",
  Vite: "vite",
  "Tailwind CSS": "tailwind",
  HTML: "html",
  CSS: "css",
  ".NET 8/9": "dotnet",
  ".NET": "dotnet",
  ".NET Core": "dotnet",
  ".NET Framework": "dotnet",
  "ASP.NET Core": "dotnet",
  NestJS: "nestjs",
  "REST APIs": "postman",
  PostgreSQL: "postgres",
  MySQL: "mysql",
  "SQL Server": "sqlite",
  Cloudflare: "cloudflare",
  Docker: "docker",
  Git: "git",
  "CI/CD": "githubactions",
  IIS: "windows",
  Prisma: "prisma",
  "Auth.js": "nextjs",
  "Responsive Design": "figma",
  Flutter: "flutter",
  "Offline Sync": "firebase",
};

const typingLines = githubProfile.typingLines ?? [
  "Full-Stack Engineer especializado en .NET y React",
  "APIs, plataformas de negocio y software en producción",
  "Arquitectura limpia, producto y ejecución real",
];

const featuredFocus = githubProfile.featuredFocus ?? [
  "REST APIs y backend en producción",
  "Frontend con React y Angular para flujos operativos reales",
  "Modernización de sistemas legacy con criterio técnico",
];

const githubSummary =
  githubProfile.summary ??
  "Full-Stack Engineer con experiencia en .NET, sistemas backend escalables, aplicaciones de negocio y plataformas geoespaciales, construyendo software confiable para entornos reales.";

function uniq(items) {
  return [...new Set(items)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function badge(label, logo, href, color = "111827", logoColor = "white") {
  const labelSlug = encodeURIComponent(label);
  const logoSlug = encodeURIComponent(logo);

  return `<a href="${href}"><img src="https://img.shields.io/badge/${labelSlug}-${color}?style=for-the-badge&logo=${logoSlug}&logoColor=${logoColor}" alt="${escapeHtml(label)} badge" /></a>`;
}

function skillIcons(items) {
  const icons = uniq(items.map((item) => skillIconMap[item]).filter(Boolean));

  return icons.length
    ? `https://skillicons.dev/icons?i=${icons.join(",")}&theme=dark`
    : null;
}

function topProjects(limit = 4) {
  return projects.slice(0, limit);
}

function topExperience(limit = 3) {
  return experience.slice(0, limit);
}

function buildProjectTableRows() {
  return topProjects()
    .map((project) => {
      const links = [
        project.href ? `[Demo](${project.href})` : "—",
        project.repo ? `[Repo](${project.repo})` : null,
      ]
        .filter(Boolean)
        .join(" · ");

      const summary = project.outcome ?? project.description;
      const stack = project.stack.slice(0, 4).join(", ");

      return `| **${project.title}** | ${summary} | ${stack} | ${links} |`;
    })
    .join("\n");
}

function buildExperienceCards() {
  return topExperience()
    .map(
      (item) => `
<table>
  <tr>
    <td width="22"><strong>▹</strong></td>
    <td>
      <strong>${item.role}</strong><br />
      <sub>${item.company} · ${item.period} · ${item.location}</sub><br />
      ${item.summary}
    </td>
  </tr>
</table>`,
    )
    .join("\n");
}

function buildCategory(title) {
  return skillGroups.find((group) => group.title === title);
}

function buildCategoryBlock(group) {
  if (!group) return "";

  const icons = skillIcons(group.items);
  const chips = group.items.map((item) => `\`${item}\``).join(" ");

  return `### ${group.title}
${group.description}

${icons ? `<img src="${icons}" alt="${escapeHtml(group.title)} icons" />\n\n` : ""}${chips}`;
}

export function buildGithubProfileReadme() {
  const socialBadges = [
    badge("Portfolio", "vercel", profile.portfolioUrl),
    badge("LinkedIn", "linkedin", profile.linkedinUrl, "0A66C2"),
    badge("GitHub", "github", profile.githubUrl, "181717"),
    badge("Email", "gmail", `mailto:${profile.email}`, "EA4335"),
  ].join("\n");

  const typingSvg = `https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&weight=600&size=20&duration=2800&pause=1200&center=true&vCenter=true&width=920&lines=${typingLines
    .map((line) => encodeURIComponent(line))
    .join(";")}`;

  const snapshotItems = [
    "Especializado en .NET, backend escalable y software de negocio en producción.",
    "Experiencia entregando REST APIs, frontend de operaciones y soluciones para sector público y privado.",
    "Cómodo modernizando sistemas legacy, afinando rendimiento y resolviendo autenticación, seguridad y diseño de datos.",
  ];

  const currentFocus = [
    `**Enfoque:** ${profile.focus.join(" · ")}`,
    `**Aprendiendo:** ${profile.currentlyLearning.join(" · ")}`,
    `**Preguntame sobre:** ${profile.askMeAbout.join(" · ")}`,
  ];

  const skillBlocks = [
    buildCategoryBlock(buildCategory("Frontend")),
    buildCategoryBlock(buildCategory("Backend")),
    buildCategoryBlock(buildCategory("Data & Infra")),
  ].filter(Boolean);

  return `<!-- Generated from porfolio.dev source -->
<div align="center">
  <img src="${typingSvg}" alt="Typing intro for ${escapeHtml(profile.name)}" />
</div>

<h1 align="center">Hola, soy ${profile.brand}</h1>
<p align="center"><strong>${profile.headline}</strong></p>
<p align="center">${githubSummary}</p>

<div align="center">
  ${socialBadges}
</div>

## Perfil en una mirada

<table>
  <tr>
    <td width="56%" valign="top">
      <strong>Qué construyo</strong><br /><br />
      ${featuredFocus.map((item) => `• ${item}`).join("<br />")}
      <br /><br />
      <strong>Snapshot profesional</strong><br /><br />
      ${snapshotItems.map((item) => `• ${item}`).join("<br />")}
    </td>
    <td width="44%" valign="top">
      <strong>Ahora mismo</strong><br /><br />
      ${currentFocus.join("<br /><br />")}
    </td>
  </tr>
</table>

## Stack principal

${skillBlocks.join("\n\n")}

## Experiencia reciente

${buildExperienceCards()}

## Proyectos destacados

| Proyecto | Aporte principal | Stack | Links |
| --- | --- | --- | --- |
${buildProjectTableRows()}

## Contacto

- **Portfolio:** ${profile.portfolioUrl}
- **LinkedIn:** ${profile.linkedinUrl}
- **GitHub:** ${profile.githubUrl}
- **Email:** ${profile.email}
- **CV:** ${profile.portfolioUrl}${profile.resumeUrl}

> ${profile.funFact}
`;
}

export function buildLinkedInSyncProfile() {
  const headline = `${profile.shortName} | ${profile.role} | ${profile.headline}`;
  const about = [
    githubSummary,
    profile.heroHighlight,
    `Trabajo desde ${profile.location}, con foco en calidad, arquitectura, APIs y experiencia de usuario.`,
  ].join(" ");

  const summary = [
    `${profile.name}`,
    profile.role,
    `Ubicación: ${profile.location}`,
    `Email: ${profile.email}`,
    `Portfolio: ${profile.portfolioUrl}`,
    `GitHub: ${profile.githubUrl}`,
  ];

  const experienceBlock = topExperience()
    .map(
      (item) => `### ${item.role} · ${item.company}\n- Período: ${item.period}\n- Ubicación: ${item.location}\n- Resumen: ${item.summary}\n- Stack: ${item.stack.join(", ")}`,
    )
    .join("\n\n");

  const skills = [
    ...profile.askMeAbout,
    ...skillGroups.flatMap((group) => group.items),
  ];

  const suggestedLinks = [
    `Portfolio: ${profile.portfolioUrl}`,
    `GitHub: ${profile.githubUrl}`,
    `Email: mailto:${profile.email}`,
    `LinkedIn: ${profile.linkedinUrl}`,
  ];

  return `# LinkedIn Sync Pack

## Headline

\`${headline}\`

## About

${about}

## Short summary

${summary.map((line) => `- ${line}`).join("\n")}

## Experience

${experienceBlock}

## Skills to highlight

${uniq(skills).map((skill) => `- ${skill}`).join("\n")}

## Suggested links

${suggestedLinks.map((line) => `- ${line}`).join("\n")}

## Notes

- Este archivo es manual, no un sync automático.
- Si cambia la fuente única, regenerá este archivo y el README de GitHub.
- Mantené LinkedIn alineado con el portfolio, pero adaptado al tono profesional de la plataforma.
`;
}
