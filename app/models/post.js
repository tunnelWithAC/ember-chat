import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  user: DS.attr('string'),
  text: DS.attr('string'),
  votes: DS.attr('number'),
  upvoted: DS.attr('boolean'),
  downvoted: DS.attr('boolean'),
  uservote: DS.attr()
});
