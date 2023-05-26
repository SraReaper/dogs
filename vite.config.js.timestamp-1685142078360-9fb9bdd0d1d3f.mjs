// vite.config.js
import { defineConfig } from "file:///home/srareaper/workspace/Dogs/node_modules/vite/dist/node/index.js";
import react from "file:///home/srareaper/workspace/Dogs/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///home/srareaper/workspace/Dogs/node_modules/vite-plugin-svgr/dist/index.mjs";
import eslintPlugin from "file:///home/srareaper/workspace/Dogs/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: process.env.VITE_APP_URL ?? "/",
    plugins: [
      react(),
      eslintPlugin({
        cache: false,
        include: ["./src/**/*.js", "./src/**/*.jsx"]
      }),
      svgr()
    ]
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zcmFyZWFwZXIvd29ya3NwYWNlL0RvZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NyYXJlYXBlci93b3Jrc3BhY2UvRG9ncy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9zcmFyZWFwZXIvd29ya3NwYWNlL0RvZ3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIHByb2Nlc3MuZW52ID0geyAuLi5wcm9jZXNzLmVudiwgLi4ubG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKSB9O1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6IHByb2Nlc3MuZW52LlZJVEVfQVBQX1VSTCA/PyAnLycsXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIGVzbGludFBsdWdpbih7XG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaW5jbHVkZTogWycuL3NyYy8qKi8qLmpzJywgJy4vc3JjLyoqLyouanN4J10sXG4gICAgICB9KSxcbiAgICAgIHN2Z3IoKSxcbiAgICBdLFxuICB9KTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBQ3pTLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFFekIsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzNCLFVBQVEsTUFBTSxFQUFFLEdBQUcsUUFBUSxLQUFLLEdBQUcsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFFaEUsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTSxRQUFRLElBQUksZ0JBQWdCO0FBQUEsSUFDbEMsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLFFBQ1gsT0FBTztBQUFBLFFBQ1AsU0FBUyxDQUFDLGlCQUFpQixnQkFBZ0I7QUFBQSxNQUM3QyxDQUFDO0FBQUEsTUFDRCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
