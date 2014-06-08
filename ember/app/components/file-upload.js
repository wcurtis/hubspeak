var FileUploadComponent = Ember.FileField.extend({
  url: 'soundbites',

  /**
   * Pass in with the component definition
   */
  trackId: null,

  filesDidChange: (function() {
    var self = this;
    var uploadUrl = ENV.API_BASE_URL + '/' + this.get('url');
    var files = this.get('files');

    var uploader = Ember.Uploader.create({
      url: uploadUrl,
      paramNamespace: 'soundbite',
      paramName: 'audio'
    });

    var data = {
      track_id: this.get('trackId')
    };

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0], data).then(function(data) {
        self.sendAction('action', data);
      }, function(error) {
        throw error;
      });
    }
  }).observes('files')
});

export default FileUploadComponent;