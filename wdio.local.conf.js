let remoteConfig = require('./wdio.conf.js').config;

let localConfig = Object.assign(remoteConfig, {

  capabilities: [{
    browserName: 'chrome',
    maxInstances: 1,
    chromeOptions: {
      args: ['--start-maximized'],
      prefs: {
        'download.default_directory': downloadDir
      }
    }
  }]
});

// delete Selenoid hub service information for local run
delete localConfig.host;
delete localConfig.port;
delete localConfig.path;
delete localConfig.maxInstances;

exports.config = localConfig;
