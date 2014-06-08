var SoundboardRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('soundboard', params.soundboard_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.find('soundbite', 1).then(function(soundbite) {
      controller.set('soundbite', soundbite);
    });

    // Subscribe to pusher
    this.controllerFor('pusher').subscribeSoundboard(model);
  },

  actions: {
    willTransition: function(transition) {
      this.controllerFor('pusher').unsubscribeSoundboard();
    }
  }
});

export default SoundboardRoute;
