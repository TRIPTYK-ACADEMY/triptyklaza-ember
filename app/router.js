import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('form-new-item');
  this.route('signup');
  this.route('login');

  this.route('series', function() {
    this.route('rickandmorty');
    this.route('happy');
  });
});
