import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const __dirname = dirname(new URL(import.meta.url).pathname);
const webRoot = resolve(__dirname, "..");

const input = resolve(webRoot, "src/styles/index.css");
const output = resolve(webRoot, "../../packages/types/dist/styles.css");

const css = await readFile(input, "utf8");
const result = await postcss([tailwindcss]).process(css, { from: input });
await writeFile(output, result.css);
