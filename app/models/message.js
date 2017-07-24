import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string', {
    defaultValue() {
      return new Date();
    }
  }),
  from: DS.attr('string'),
  to: DS.attr('string'),
  text: DS.attr('string')
});
