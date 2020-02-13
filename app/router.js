import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('news', function () {
        this.route('item', {path: '/:id'});
    });
    this.route('events', function () {
        this.route('item', {path: '/:id'});
    });
    this.route('page', {path: '/:uid/'});
    this.route('notfound');
});