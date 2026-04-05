import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildGithubProfileReadme } from "./profile-content.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "generated", "github-profile");
const outputFile = path.join(outputDir, "README.md");

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, buildGithubProfileReadme(), "utf8");

console.log(`README generado en: ${outputFile}`);

