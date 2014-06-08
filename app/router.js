var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('soundboard', { path: 'soundboard/:soundboard_id' });
});

export default Router;
