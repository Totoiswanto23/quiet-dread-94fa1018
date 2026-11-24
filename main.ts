// quiet-dread-94fa1018: the entry is a single-line code review comment that
// approves a pull request while carrying quiet existential dread. This program
// writes that one line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final line: tightened the middle ("Tests pass, the diff is clean" ->
// "Everything passes") so the dread lands faster and the whole comment
// reads flatter, like a tired engineer pasting it before clicking approve.
const LINE =
  'Approved. Everything passes. I feel nothing, which is the most I have felt all week.';

if (LINE.length < 1 || LINE.length > 140 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-140 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-140 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
