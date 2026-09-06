import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// A helyi fejlesztői szervernek mindig a domain gyökerén kell futnia.
// A Pages/Netlify buildhez megadott változók egy megnyitott PowerShellben
// megmaradhatnak, ezért itt szándékosan nem örökítjük őket tovább.
const environment = { ...process.env };
delete environment.ELEVENTY_PATH_PREFIX;
delete environment.SITE_URL;

const eleventyCli = fileURLToPath(
  new URL("../node_modules/@11ty/eleventy/cmd.cjs", import.meta.url),
);
const child = spawn(process.execPath, [eleventyCli, "--serve", ...process.argv.slice(2)], {
  env: environment,
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("error", (error) => {
  console.error("Az Eleventy fejlesztői szerver nem indítható:", error);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
