var IndexController = Ember.Controller.extend({

  actions: {
    createSoundboard: function() {
      var newSoundboard = this.store.createRecord('soundboard', {
        id: 2,
        name: "New board"
      });

      // TODO: Save board

      this.transitionToRoute('soundboard', newSoundboard);
    }
  }

});

export default IndexController;
