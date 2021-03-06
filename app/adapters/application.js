import DS from 'ember-data';
import {computed} from '@ember/object';
import config from 'krit/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.api.host,
  namespace: 'api/v2',

  // Headers
  headers: computed('config', function () {
    return {'X-LivaRava-ApiKey': config.api.key};
  }),
});
