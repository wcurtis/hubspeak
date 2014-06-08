var SoundboardController = Ember.ObjectController.extend({

  actions: {
    addTrack: function() {

      var soundboard = this.get('model');

      var track = this.store.createRecord('track', {
        name: 'New Track',
        soundboard: soundboard,
      });

      // TODO: Save track
      
      soundboard.get("tracks").pushObject(track);
    }
  }

});

export default SoundboardController;
