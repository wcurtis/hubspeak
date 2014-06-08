var PusherController = Ember.Controller.extend({

  /**
   * Singleton Pusher object configured
   * with out public key
   */
  pusher: null,

  /**
   * Current channel we're subscribed to.
   * Can be null, only one channel allowed currently
   */
  channel: null,

  init: function() {
    this._super();
    this.set('pusher', new Pusher('28b453ca5257ab58a0f2'));
  },

  subscribeSoundboard: function(soundboard) {

    var self = this;

    // Unsub channel if one is currently registered
    // (should be cleaned up prior by the route though)
    this.unsubscribeSoundboard(soundboard);

    var channel = this.get('pusher').subscribe('soundboard_' + soundboard.get('id'));
    channel.bind('play_track', function(data) {
      self.send('playTrack', data.track_id);
    });

    this.set('channel', channel);
  },

  unsubscribeSoundboard: function(soundboard) {
    /**
     * Clean up channel if one exists
     */
    var channel = this.get('channel');

    if (!Ember.isNone(channel)) {
      channel.unbind('play_track');
      this.get('pusher').unsubscribe(channel.name);
      this.set('channel', null);
    }
  }

});

export default PusherController;
