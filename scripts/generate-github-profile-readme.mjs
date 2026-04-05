import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import source from "../src/data/profile-source.json" with { type: "json" };

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "generated", "github-profile");
const outputFile = path.join(outputDir, "README.md");

const { profile, experience, projects, skillGroups } = source;

const topProjects = projects.slice(0, 3);
const topExperience = experience.slice(0, 3);

const markdown = `# 👋 Hola, soy ${profile.brand}

## ${profile.headline}

${profile.heroDescription}

> ${profile.heroHighlight}

### 🚀 En qué me enfoco
${profile.focus.map((item) => `- ${item}`).join("\n")}

### 🧠 Actualmente aprendiendo
${profile.currentlyLearning.map((item) => `- ${item}`).join("\n")}

### 💬 Preguntame sobre
${profile.askMeAbout.map((item) => `- ${item}`).join("\n")}

## 🧩 Stack principal

${skillGroups
  .map(
    (group) =>
      `### ${group.title}\n${group.description}\n\n${group.items.map((item) => `- ${item}`).join("\n")}`,
  )
  .join("\n\n")}

## 💼 Experiencia destacada

${topExperience
  .map(
    (item) =>
      `### ${item.role} · ${item.company}\n- **Período:** ${item.period}\n- **Ubicación:** ${item.location}\n- **Impacto:** ${item.summary}\n- **Stack:** ${item.stack.join(", ")}`,
  )
  .join("\n\n")}

## 🛠️ Proyectos destacados

${topProjects
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
- **Portfolio:** [r0lm0.dev](https://r0lm0.dev)

---

_Fun fact:_ ${profile.funFact}
`;

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, markdown, "utf8");

console.log(`README generado en: ${outputFile}`);
