import {Component} from 'angular2/core';


@Component({
  selector: 'angular2-cli-example-app',
  providers: [],
  templateUrl: 'app/angular2-cli-example.html',
  directives: [],
  pipes: []
})
export class Angular2CliExampleApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
