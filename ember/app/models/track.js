var TrackModel = DS.Model.extend({
  name:                 DS.attr('string'),
  soundboard:           DS.belongsTo('soundboard'),
  playCount:           DS.attr('number', {
    defaultValue: 0
  }),
  createdAt:            DS.attr('date'),
  updatedAt:            DS.attr('date'),
});

TrackModel.FIXTURES = [
  {
    id: 1,
    soundboard: 1,
    name: "Track 1",
    playCount: 5,
    createdAt: "2014-05-23T18:21:19.000Z",
    updatedAt: "2014-05-23T18:21:19.000Z",
  },
  {
    id: 2,
    soundboard: 1,
    name: "Track 2",
    playCount: 8,
    createdAt: "2014-05-23T18:21:19.000Z",
    updatedAt: "2014-05-23T18:21:19.000Z",
  },
];

/**
 * Ember CLI required this class reopen
 * Source: http://edgycircle.com/blog/2014-using-fixtures-in-combination-with-ember-cli/
 */
TrackModel.reopenClass({
  FIXTURES: TrackModel.FIXTURES
});

export default TrackModel;