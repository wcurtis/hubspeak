var SoundboardRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('soundboard', params.soundboard_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    // Subscribe to pusher
    this.controllerFor('pusher').subscribeSoundboard(model, function(data) {
      debugger;
    });
  },

  actions: {
    willTransition: function(transition) {
      debugger;
    }
  }
});

export default SoundboardRoute;
