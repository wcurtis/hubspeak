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
      
    },

    // Source http://emberjs.com/guides/cookbook/user_interface_and_interaction/using_modal_dialogs/
    openModal: function(modalName, data) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        controller: modalName
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
  }

});

export default ApplicationRoute;
