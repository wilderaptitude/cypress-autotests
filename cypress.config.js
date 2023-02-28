const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/tests/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    screenshotOnRunFailure: false,
    video: false,
    videoUploadOnPasses: false
  },
});
