var IndexController = Ember.Controller.extend({

  actions: {
    createSoundboard: function() {
      var self = this;

      var soundboard = this.store.createRecord('soundboard', {
        name: "New board"
      });

      soundboard.save().then(function(soundboard) {
        self.transitionToRoute('soundboard', soundboard.get('id'));
      }, function(error) {
        throw error;
      });
    }
  }

});

export default IndexController;
