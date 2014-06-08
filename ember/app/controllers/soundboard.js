var SoundboardController = Ember.ObjectController.extend({

  playTrack: function(trackId) {

    var track = this.get("tracks").findBy('id', trackId);

    // TODO: Play track!
  },

  actions: {
    addTrack: function() {

      var soundboard = this.get('model');

      var track = this.store.createRecord('track', {
        name: 'New Track',
        soundboard: soundboard,
      });

      track.save().then(function(track) {
        soundboard.get("tracks").pushObject(track);
      }, function(error) {
        throw error;
      });
    }
  }

});

export default SoundboardController;
