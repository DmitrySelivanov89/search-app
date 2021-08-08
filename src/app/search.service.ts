import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {Movie} from "./movie";

@Injectable()
export class SearchService {
  res$ = new Subject<Movie[]>();

  constructor(private $http: HttpClient) {
  }

  doSearch(q: string) {
    return this.$http
      .get<Movie[]>("/assets/movies-db.json")
      .pipe(
        map(items =>
          items.filter(
            item => item.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
          )
        )
      );
  }
}
