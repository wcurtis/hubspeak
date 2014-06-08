var PusherController = Ember.Controller.extend({

  pusher: null,

  channel: null,

  soundboard: null,

  init: function() {
    this._super();
    this.set('pusher', new Pusher('28b453ca5257ab58a0f2'));
  },

  subscribeSoundboard: function(soundboard, callback) {

    // TODO: Unsub from a channel if it's present

    var channel = this.get('pusher').subscribe('soundboard_' + soundboard.get('id'));
    channel.bind('play_track', callback);

    this.get('channel', channel);
  },

  unsubscribeSoundboard: function(soundboard) {
    // TODO: Unsub soundboard
  }

});

export default PusherController;
