var SoundbiteModel = DS.Model.extend({
  name:       DS.attr('string'),
  track:      DS.belongsTo('track'),
  url:        DS.attr('string'),
  duration:   DS.attr('number'),
});

SoundbiteModel.FIXTURES = [
  {
    id: 1,
    url: '/assets/audio/sail.mp3',
    name: "Sail - Awolnation",
  },
];

/**
 * Ember CLI required this class reopen
 * Source: http://edgycircle.com/blog/2014-using-fixtures-in-combination-with-ember-cli/
 */
SoundbiteModel.reopenClass({
  FIXTURES: SoundbiteModel.FIXTURES
});

export default SoundbiteModel;