import { bootstrap, provide } from 'angular2/angular2';
import { Router, RouteConfig, RouteParams, LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import { App } from './app/app.js';

bootstrap(App, [
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);