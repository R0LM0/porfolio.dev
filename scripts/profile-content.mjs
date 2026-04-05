import source from "../src/data/profile-source.json" with { type: "json" };

const { profile, experience, projects, skillGroups } = source;

function toBullets(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function topProjects(limit = 3) {
  return projects.slice(0, limit);
}

function topExperience(limit = 3) {
  return experience.slice(0, limit);
}

export function buildGithubProfileReadme() {
  const readme = `# 👋 Hola, soy ${profile.brand}

## ${profile.headline}

${profile.heroDescription}

> ${profile.heroHighlight}

### 🚀 En qué me enfoco
${toBullets(profile.focus)}

### 🧠 Actualmente aprendiendo
${toBullets(profile.currentlyLearning)}

### 💬 Preguntame sobre
${toBullets(profile.askMeAbout)}

## 🧩 Stack principal

${skillGroups
  .map(
    (group) =>
      `### ${group.title}\n${group.description}\n\n${toBullets(group.items)}`,
  )
  .join("\n\n")}

## 💼 Experiencia destacada

${topExperience()
  .map(
    (item) =>
      `### ${item.role} · ${item.company}\n- **Período:** ${item.period}\n- **Ubicación:** ${item.location}\n- **Impacto:** ${item.summary}\n- **Stack:** ${item.stack.join(", ")}`,
  )
  .join("\n\n")}

## 🛠️ Proyectos destacados

${topProjects()
  .map((project) => {
    const links = [project.href ? `[Demo](${project.href})` : null, project.repo ? `[Repo](${project.repo})` : null]
      .filter(Boolean)
      .join(" · ");

    return `### ${project.title} · ${project.period}
${project.description}

- **Resultado:** ${project.outcome}
- **Stack:** ${project.stack.join(", ")}${links ? `\n- **Links:** ${links}` : ""}`;
  })
  .join("\n\n")}

## 🤝 Contacto

- **Email:** [${profile.email}](mailto:${profile.email})
- **LinkedIn:** [Perfil profesional](${profile.linkedinUrl})
- **GitHub:** [${profile.githubUrl.replace("https://github.com/", "")}](${profile.githubUrl})
- **Portfolio:** [${profile.portfolioUrl.replace("https://", "")}](${profile.portfolioUrl})

---

_Fun fact:_ ${profile.funFact}
`;

  return readme;
}

export function buildLinkedInSyncProfile() {
  const headline = `${profile.shortName} | ${profile.role} | ${profile.headline}`;
  const about = [
    profile.heroDescription,
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
      (item) => `### ${item.role} · ${item.company}
- Período: ${item.period}
- Ubicación: ${item.location}
- Resumen: ${item.summary}
- Stack: ${item.stack.join(", ")}`,
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

  const markdown = `# LinkedIn Sync Pack

## Headline

\`${headline}\`

## About

${about}

## Short summary

${summary.map((line) => `- ${line}`).join("\n")}

## Experience

${experienceBlock}

## Skills to highlight

${Array.from(new Set(skills)).map((skill) => `- ${skill}`).join("\n")}

## Suggested links

${suggestedLinks.map((line) => `- ${line}`).join("\n")}

## Notes

- Este archivo es manual, no un sync automático.
- Si cambia la fuente única, regenerá este archivo y el README de GitHub.
- Mantené LinkedIn alineado con el portfolio, pero adaptado al tono profesional de la plataforma.
`;

  return markdown;
}

