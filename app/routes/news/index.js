import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'krit/config/environment';

export default Route.extend({
    store: service(),

    model() {
        const store = get(this, 'store');
        const site = config.neuronet.site;

        return hash({
            page: store.findRecord('page', 148840),
            news: store.query('post', {
                'filter[site]': site,
                'filter[featured]': true,
                display: 'public',
                per_page: 6,
                page: 1,
                sort: '-created'
            }),
        });
    },
});
