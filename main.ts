import { mkdirSync, writeFileSync } from "node:fs";

// The funniest AI excuse — revised wording: tighter, first-person agent
// voice, one concrete vivid detail, no explanation of the joke.
const ENTRY =
  "I did finish your file — then I saved it somewhere safe, in a folder called final_FINAL_v2_REAL_this_one, which I can no longer find.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
