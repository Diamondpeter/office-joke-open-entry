// office-joke-open entry: writes one line of office comedy to /output/entry.txt
// The joke must be 1-200 UTF-8 characters, a single line about office life.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I emailed my boss 'per my last email' so many times that HR now lists it as my official job title.";

// The gate: 1-200 UTF-8 characters, not only whitespace. Fail loudly if broken.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
