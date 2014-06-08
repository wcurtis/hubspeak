var ApplicationRoute = Ember.Route.extend({

  actions: {
    playTrack: function(track) {
      var soundbite = track.get('soundbite');
      var audio = new Audio(soundbite.get('url'));

      audio.play();
    }
  }

});

export default ApplicationRoute;
