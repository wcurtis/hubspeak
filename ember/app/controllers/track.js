var TrackController = Ember.ObjectController.extend({

  hasSoundbite: function() {
    return !Ember.isNone(this.get('soundbite'));
  }.property('soundbite'),

  actions: {
    didUploadFile: function(data) {

      // Since we're not going through the serializer, we have
      // to convert the keys to camelcase ourselves
      // TODO: Tap into the serializer somehow
      data.soundbite.fileName = data.soundbite.file_name;
      data.soundbite.playCount = data.soundbite.play_count;

      var soundbite = this.store.createRecord('soundbite', data.soundbite);
      var track = this.get('model');

      track.set('soundbite', soundbite);
    },

    deleteTrack: function() {
      this.get('model').destroyRecord();
    },

    preview: function() {
      this.send('playTrack', this.get('id'));
    }
  }

});

export default TrackController;
