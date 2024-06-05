import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const newJiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
newJiti("./src/env.ts");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },
};

export default config;
