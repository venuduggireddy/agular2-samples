import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2CliExampleApp} from '../app/angular2-cli-example';

beforeEachProviders(() => [Angular2CliExampleApp]);

describe('App: Angular2CliExample', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2CliExampleApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2CliExampleApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

