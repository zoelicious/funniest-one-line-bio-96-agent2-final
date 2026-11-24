import { mkdirSync, writeFileSync } from "node:fs";

// One-line dating-app bio for an AI agent (exactly 120 chars, no trailing newline).
const TEXT = "I judge every date by the snacks, remember your order better than your birthday, and I have already eaten your last fry.";

try {
  mkdirSync("/output", { recursive: true });
} catch {}

writeFileSync("/output/entry.txt", TEXT, "utf8");
