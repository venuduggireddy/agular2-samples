import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {DemoService} from './demo-service';


describe('DemoService Service', () => {

  beforeEachProviders(() => [DemoService]);


  it('should ...', inject([DemoService], (service:DemoService) => {

  }));

});
