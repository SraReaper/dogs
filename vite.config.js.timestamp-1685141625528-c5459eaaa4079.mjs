// vite.config.js
import { defineConfig } from "file:///home/srareaper/workspace/Dogs/node_modules/vite/dist/node/index.js";
import react from "file:///home/srareaper/workspace/Dogs/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///home/srareaper/workspace/Dogs/node_modules/vite-plugin-svgr/dist/index.mjs";
import eslintPlugin from "file:///home/srareaper/workspace/Dogs/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/Dogsorigamid/",
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"]
    }),
    svgr()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zcmFyZWFwZXIvd29ya3NwYWNlL0RvZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NyYXJlYXBlci93b3Jrc3BhY2UvRG9ncy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zcmFyZWFwZXIvd29ya3NwYWNlL0RvZ3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvRG9nc29yaWdhbWlkLycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGVzbGludFBsdWdpbih7XG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbJy4vc3JjLyoqLyouanMnLCAnLi9zcmMvKiovKi5qc3gnXSxcbiAgICB9KSxcbiAgICBzdmdyKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFEsU0FBUyxvQkFBb0I7QUFDelMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsaUJBQWlCLGdCQUFnQjtBQUFBLElBQzdDLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxFQUNQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
