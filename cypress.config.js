const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5o6hnd',

video : true,

reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    specPattern : 'cypress/e2e/*.js',
  },
});
