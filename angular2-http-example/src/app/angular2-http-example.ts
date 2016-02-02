import {Component} from 'angular2/core';
import {DemoService} from './services/demo-service/demo-service'
//import 

@Component({
  selector: 'angular2-http-example-app',
  providers: [],
  templateUrl: 'app/angular2-http-example.html',
  directives: [],
  pipes: []
})
export class Angular2HttpExampleApp {
  defaultMeaning: number = 42;
  
  constructor(private _demoService: DemoService){}
  
  public foods;
  public movies;
  public books;
  
  ngOnInit(){
     this.getFoods();
     this.getBooksAndMovies();
  }
  
  getFoods(){
      this._demoService.getFoods().subscribe(
          data => {this.foods = data},
          err => console.error(err),
          () => console.log("Completed !!!")
      );
  }
  
  getBooksAndMovies(){
      this._demoService.getBooksAndMovies().subscribe(
          data => {
              this.books = data[0],
              this.movies = data[1]
          },
          err => console.error(err),
          () => console.log('Completed Getting Books and Movies')
      )
  }
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
