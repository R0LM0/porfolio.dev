import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildGithubProfileReadme, buildLinkedInSyncProfile } from "./profile-content.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const githubProfileDir = path.join(repoRoot, "generated", "github-profile");
const linkedinSyncDir = path.join(repoRoot, "generated", "linkedin-sync");

await mkdir(githubProfileDir, { recursive: true });
await mkdir(linkedinSyncDir, { recursive: true });

await writeFile(path.join(githubProfileDir, "README.md"), buildGithubProfileReadme(), "utf8");
await writeFile(path.join(linkedinSyncDir, "PROFILE.md"), buildLinkedInSyncProfile(), "utf8");

console.log(`Generated:
- ${path.join(githubProfileDir, "README.md")}
- ${path.join(linkedinSyncDir, "PROFILE.md")}`);

