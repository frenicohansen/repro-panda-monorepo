import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [
    "@pandacss/dev/presets",
    "@park-ui/panda-preset",
    "@acme/react/preset",
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "../generated",
  importMap: {
    css: "@acme/ui-lib/css",
    recipes: "@acme/ui-lib/recipes",
    patterns: "@acme/ui-lib/patterns",
    jsx: "@acme/ui-lib/jsx",
  },
});
