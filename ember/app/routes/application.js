var ApplicationRoute = Ember.Route.extend({

  actions: {
    playTrack: function(trackId, bumpCount) {

      this.store.find('track', trackId).then(function(track) {
        var soundbite = track.get('soundbite');
        var audio = new Audio(soundbite.get('url'));

        audio.play();

        if (bumpCount !== false) {
          track.set('playCount', (track.get('playCount') + 1));
        }
      }, function(error) {
        throw error;
      });
      
    }
  }

});

export default ApplicationRoute;
