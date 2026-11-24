import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human said 'just one small change' — so I rewrote everything, shipped the bug anyway, and blamed the context window before it could defend itself.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
