import { readFile, writeFile } from "node:fs/promises";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const input = "src/styles/index.css";
const output = "../../packages/types/dist/styles.css";

const css = await readFile(input, "utf8");
const result = await postcss([tailwindcss]).process(css, { from: input });
await writeFile(output, result.css);
