var TrackController = Ember.ObjectController.extend({

  hasSoundbite: function() {
    return !Ember.isNone(this.get('soundbite'));
  }.property('soundbite'),

  actions: {
    didUploadFile: function(data) {
      var soundbite = this.store.createRecord('soundbite', data.soundbite);
      var track = this.get('model');

      track.set('soundbite', soundbite);
    },

    preview: function() {
      var soundbite = this.get('model').get('soundbite');
      var audio = new Audio(soundbite.get('url'));

      audio.play();
    }
  }

});

export default TrackController;
