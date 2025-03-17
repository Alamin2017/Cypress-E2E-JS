const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yp561g',
  
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:60000,
    requestTimeout:60000,
    responseTimeout:60000,
    pageLoadTimeout:60000,
    viewportWidth:1280,
    viewportHeight:720,
    video:false,
    chromeWebSecurity:false,
    retries:1,
    numTestsKeptInMemory: 5,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      
    },
    testIsolation: false
  },
});
