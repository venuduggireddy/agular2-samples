import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Rx'


@Injectable()
export class DemoService {

  constructor(private http:Http ) {}
  
  getFoods(){
      return this.http.get('/app/data/foods.json').map((res:Response) => { console.log(res.json); return res.json()});
  }
  
  getBooksAndMovies(){
      return Observable.forkJoin(
          this.http.get('/app/data/books.json').map((res:Response) => res.json()),
          this.http.get('/app/data/movies.json').map((res:Response) => res.json())
      );
  }
  

}
