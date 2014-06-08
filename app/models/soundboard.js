var SoundboardModel = DS.Model.extend({
  name:                 DS.attr('string'),
  track:                DS.hasMany('track'),
  createdAt:            DS.attr('date'),
  updatedAt:            DS.attr('date'),
});

SoundboardModel.FIXTURES = [
  {
    id: 1,
    name: "Test Soundboard",
    createdAt: "2014-05-23T18:21:19.000Z",
    updatedAt: "2014-05-23T18:21:19.000Z",
  },
];

/**
 * Ember CLI required this class reopen
 * Source: http://edgycircle.com/blog/2014-using-fixtures-in-combination-with-ember-cli/
 */
SoundboardModel.reopenClass({
  FIXTURES: SoundboardModel.FIXTURES
});

export default SoundboardModel;