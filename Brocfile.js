/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');

// Bootstrap JS
app.import('vendor/bootstrap/js/affix.js');
app.import('vendor/bootstrap/js/alert.js');
app.import('vendor/bootstrap/js/button.js');
app.import('vendor/bootstrap/js/carousel.js');
app.import('vendor/bootstrap/js/collapse.js');
app.import('vendor/bootstrap/js/dropdown.js');
app.import('vendor/bootstrap/js/tab.js');
app.import('vendor/bootstrap/js/transition.js');
app.import('vendor/bootstrap/js/scrollspy.js');
app.import('vendor/bootstrap/js/modal.js');
app.import('vendor/bootstrap/js/tooltip.js');
app.import('vendor/bootstrap/js/popover.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});


module.exports = app.toTree();
