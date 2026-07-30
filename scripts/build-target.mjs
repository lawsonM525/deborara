import { spawnSync } from "node:child_process";

const target = process.env.VERCEL ? "build:vercel" : "build:sites";
const result = spawnSync("npm", ["run", target], {
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
