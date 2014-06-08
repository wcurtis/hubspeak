var ApplicationRoute = Ember.Route.extend({

  actions: {
    playTrack: function(trackId) {

      this.store.find('track', trackId).then(function(track) {
        var soundbite = track.get('soundbite');
        var audio = new Audio(soundbite.get('url'));

        audio.play();
      }, function(error) {
        throw error;
      });
      
    }
  }

});

export default ApplicationRoute;
