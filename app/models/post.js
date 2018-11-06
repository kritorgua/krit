import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  created: DS.attr('date'),
  views: DS.attr('number', {defaultValue: 0}),
  comments: DS.attr('number', {defaultValue: 0}),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),

  // Relationships
  author: DS.belongsTo('user'),
});
