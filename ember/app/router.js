var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('soundboard', { path: 'soundboards/:soundboard_id' });
});

export default Router;
