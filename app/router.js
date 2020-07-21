import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('house', function() {
    this.route('first-floor');
    this.route('second-floor');
    this.route('basement');
    this.route('attic');
  });
});
