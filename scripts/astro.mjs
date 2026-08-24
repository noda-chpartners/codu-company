import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const astroCli = fileURLToPath(
  new URL("../node_modules/astro/bin/astro.mjs", import.meta.url),
);
const commandArgs = process.argv.slice(2);

const child = spawn(process.execPath, [astroCli, ...commandArgs], {
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1",
  },
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
