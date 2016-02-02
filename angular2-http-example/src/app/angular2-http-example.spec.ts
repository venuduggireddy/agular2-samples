import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2HttpExampleApp} from '../app/angular2-http-example';

beforeEachProviders(() => [Angular2HttpExampleApp]);

describe('App: Angular2HttpExample', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2HttpExampleApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2HttpExampleApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

