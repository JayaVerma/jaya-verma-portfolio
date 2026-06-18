import fs from "node:fs";
import path from "node:path";

const imagesDir = path.join(process.cwd(), "public", "images");
const papersDir = path.join(process.cwd(), "public", "papers");
const paperPagesDir = path.join(papersDir, "pages");

/**
 * Returns the public path to the profile photo if one has been dropped into
 * public/images/ (profile.jpg|jpeg|png|webp|avif), otherwise null so the UI
 * can render a graceful placeholder until the real photo is added.
 */
export function getProfileImage(): string | null {
  const candidates = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp", "profile.avif"];
  for (const file of candidates) {
    if (fs.existsSync(path.join(imagesDir, file))) return `/images/${file}`;
  }
  return null;
}

/**
 * Returns the public path to the research paper PDF if one exists in
 * public/papers/, otherwise null. Picks the first .pdf found.
 */
export function getResearchPaper(): string | null {
  try {
    const files = fs.readdirSync(papersDir).filter((f) => f.toLowerCase().endsWith(".pdf"));
    if (files.length > 0) return `/papers/${files[0]}`;
  } catch {
    // directory may not exist yet
  }
  return null;
}

/**
 * Returns up to 6 paper-page preview images from public/papers/pages/
 * (named page-1.png, page-2.png, … any common image extension), sorted by
 * page number. Empty array until pages are generated/added.
 */
export function getPaperPages(): string[] {
  try {
    const files = fs
      .readdirSync(paperPagesDir)
      .filter((f) => /^page-\d+\.(png|jpe?g|webp|avif)$/i.test(f))
      .sort((a, b) => {
        const na = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
        const nb = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
        return na - nb;
      });
    return files.slice(0, 6).map((f) => `/papers/pages/${f}`);
  } catch {
    return [];
  }
}
