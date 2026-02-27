import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const html = readFileSync(join(distDir, "index.html"), "utf-8");

const updatedHtml = html
  .replace(
    /<title>[^<]*<\/title>/,
    "<title>Prime Clinics | Opening This Spring</title>"
  )
  .replace(
    /<meta\s+name="description"\s+content="[^"]*">/,
    '<meta name="description" content="Step into your prime. Prime Clinics offers personalized solutions for physical health, hormone health, intimate health, regenerative aesthetics, weight management, mental fitness, and joint rehabilitation. Opening this spring.">'
  );

const outDir = join(distDir, "coming-soon");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), updatedHtml);

console.log("Generated dist/coming-soon/index.html with correct meta tags");
