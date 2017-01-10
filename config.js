System.config({
  baseURL: "",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "css": "github:systemjs/plugin-css@0.1.32",
    "event-emitter-lite": "npm:event-emitter-lite@1.0.5",
    "ferrugemjs": "npm:ferrugemjs@0.9.13",
    "incremental-dom": "npm:incremental-dom@0.4.1",
    "npm:ferrugemjs@0.9.13": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "incremental-dom": "npm:incremental-dom@0.4.1"
    }
  }
});
