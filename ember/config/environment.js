/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    baseURL: '/',
    locationType: 'auto',
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. 'with-controller': true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // LOG_MODULE_RESOLVER is needed for pre-1.6.0
    ENV.LOG_MODULE_RESOLVER = true;

    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.API_HOST = "http://local-api.hubspeak.com:7000";
    ENV.API_NAMESPACE = "v1";

    ENV.PUSHER_KEY = '28b453ca5257ab58a0f2';
  }

  if (environment === 'production') {
    ENV.API_HOST = "http://api.hubspeak.com";
    ENV.API_NAMESPACE = "v1";
    ENV.PUSHER_KEY = '63f873599c53636fe1b2';
  }

  ENV.API_BASE_URL = ENV.API_HOST + '/' + ENV.API_NAMESPACE;

  return ENV;
};
