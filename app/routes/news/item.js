import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {hash} from 'rsvp';

export default Route.extend({
  // Services
  store: service(),

  // Model
  model(params) {
    const store = get(this, 'store');

    return hash({
      item: store.findRecord('post', params.id, {reload: true}),
    });
  },

  afterModel(model) {
    const title = get(model, 'item.title');
    set(this, 'title', title);
  },
});
