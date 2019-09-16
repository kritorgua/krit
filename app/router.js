import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('news', function () {
      this.route('item', {path: '/:id'});
  });
  this.route('events', function () {
  });
  this.route('page', {path: '/:uid/'});
  this.route('notfound');
});

export default Router;
