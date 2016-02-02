import {bootstrap} from 'angular2/platform/browser';
import {Angular2HttpExampleApp} from './app/angular2-http-example';
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/add/operator/map'

import {DemoService} from './app/services/demo-service/demo-service'


bootstrap(Angular2HttpExampleApp, [HTTP_PROVIDERS, DemoService ]);
