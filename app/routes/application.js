// app/routes/application.js
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    metrics: service(),
    router: service(),

    init() {
        this._super(...arguments);

        let router = this.router;
        router.on('routeDidChange', () => {
            const page = router.currentURL;
            const title = router.currentRouteName || 'unknown';

            this.metrics.trackPage({page, title});
        });
    }
});