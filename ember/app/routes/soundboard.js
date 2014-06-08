var SoundboardRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('soundboard', params.soundboard_id);
  },

});

export default SoundboardRoute;
