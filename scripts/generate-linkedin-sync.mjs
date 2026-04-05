import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildLinkedInSyncProfile } from "./profile-content.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "generated", "linkedin-sync");
const outputFile = path.join(outputDir, "PROFILE.md");

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, buildLinkedInSyncProfile(), "utf8");

console.log(`LinkedIn sync generado en: ${outputFile}`);

