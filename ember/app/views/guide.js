var GuideView = Ember.View.extend({

  didInsertElement: function() {
    var self = this;

    this.$('.modal').modal({});

    this.$('.modal').on('hidden.bs.modal', function (e) {
      self.get("controller").send("closeModal"); 
    });
  },

  willDestroyElement: function() {
    this.$('.modal').modal('hide');
  },
  
});

export default GuideView;
