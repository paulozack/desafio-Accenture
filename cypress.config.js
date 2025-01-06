const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // -> Aqui definimos o path customizado para steps
      config.env.stepDefinitions = "cypress/e2e/steps/[filepath].{js,ts,tsx}";

      return config;
    },
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.feature",
  },
});
