import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
      "@comp": path.resolve(dirname, "src/components"),
      "@hooks": path.resolve(dirname, "src/hooks"),
      "@assets": path.resolve(dirname, "src/assets"),
      "@styles": path.resolve(dirname, "src/assets/styles"),
      "@thunks": path.resolve(dirname, "src/redux/thunks"),
      "@services": path.resolve(dirname, "src/services"),
      "@configs": path.resolve(dirname, "src/configs"),
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    host: true,
  },
  plugins: [react()],
});
