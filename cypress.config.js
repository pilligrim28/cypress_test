const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hij1v6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})