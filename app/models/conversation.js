import DS from 'ember-data';

export default DS.Model.extend({

  activeUser: DS.attr('string'),
  otherUser: DS.attr('string'),

  messages: DS.hasMany('message')
});
