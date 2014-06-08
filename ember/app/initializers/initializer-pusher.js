export default {
  name: 'pusher',

  /**
   * Config Options: https://github.com/carhartl/jquery-cookie#configuration
   */
  initialize: function() {
    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };
  }
};