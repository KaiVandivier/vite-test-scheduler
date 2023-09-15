import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // https://vitejs.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, process.cwd(), ["REACT_APP", "NODE_ENV"]);

  return {
    plugins: [react()],

    // By default, assets are resolved to the root of the domain ('/'), but
    // deployed apps aren't served from there.
    // This option is basically the same as PUBLIC_URL for CRA and Parcel.
    // Works for both dev and production.
    base: "./",

    // Change default ENV prefix from VITE_ to be backward compatible with CRA
    // https://vitejs.dev/config/shared-options.html#envprefix
    envPrefix: "REACT_APP",

    // Need to add vars on process.env here
    define: {
      "process.env": JSON.stringify(env),
    },

    // Allow JSX in .js files (at the cost of performance):
    // https://stackoverflow.com/a/74620428
    // (switching JSX files to .jsx to not need this allows optimization):
    // https://twitter.com/youyuxi/status/1362050255009816577
    esbuild: {
      loader: "jsx",
      include: [
        // Business as usual for .jsx and .tsx files
        "src/**/*.jsx",
        "src/**/*.tsx",
        "node_modules/**/*.jsx",
        "node_modules/**/*.tsx",

        // Optional: Add the specific files you want to allow JSX syntax in
        // "src/LocalJsxInJsComponent.js",
        // "node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
        // "node_modules/bad-jsx-in-js-component/ts/BadTSXInTs.ts",

        // Add these lines to allow all .js files to contain JSX
        "src/**/*.js",
        "node_modules/**/*.js",

        // Add these lines to allow all .ts files to contain JSX
        "src/**/*.ts",
        "node_modules/**/*.ts",
      ],
      exclude: [],
      jsx: "automatic",
    },
  };
});
