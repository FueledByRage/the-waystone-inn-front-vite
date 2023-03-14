import { defineConfig } from 'vite'
import { resolve } from "path";
import react from "@vitejs/plugin-react";
const root = resolve(__dirname, "src", "pages");
const outDir = resolve(__dirname, "dist");


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [
    react()
  ],
  build:{
    outDir, 
    emptyOutDir : true,
    rollupOptions: {
      input:{
        main : resolve(root, 'index.html'),
        login : resolve(root, 'login', 'index.html'),
        register: resolve(root, 'register', 'index.html'),
        community : resolve(root, 'community', 'index.html')
      }
    }
  },
})
