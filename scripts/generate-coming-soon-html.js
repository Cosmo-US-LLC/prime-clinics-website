import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const html = readFileSync(join(distDir, "index.html"), "utf-8");

// Generate DEXA scan page HTML with its own meta
const dexaHtml = html
  .replace(
    /<title>[^<]*<\/title>/,
    "<title>Get a Free $145 DEXA Body Scan \u2013 Prime Clinics Waitlist</title>"
  )
  .replace(
    /<meta\s+name="description"\s+content="[^"]*">/,
    '<meta name="description" content="Join Prime Clinics waitlist for a free $145 DEXA body scan. Get insights into body composition and optimize your health. Only 50 spots available!">'
  );

const dexaDir = join(distDir, "free-dexa-scan");
mkdirSync(dexaDir, { recursive: true });
writeFileSync(join(dexaDir, "index.html"), dexaHtml);

const longevityDir = join(distDir, "free-dexa-scan-and-longevity-assessment");
mkdirSync(longevityDir, { recursive: true });
writeFileSync(join(longevityDir, "index.html"), dexaHtml);

console.log("Generated route-specific HTML files with correct meta tags");
