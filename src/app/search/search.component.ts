import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs/operators";
import {SearchService} from "../search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    // this.searchInput.valueChanges.subscribe(q =>
    //   this.searchService
    //     .doSearch(q)
    //     .subscribe(resp => this.searchService.res$.next(resp))
    // );
    this.searchInput.valueChanges
      .pipe(
        filter(q => !q || q?.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(q => this.searchService.doSearch(q))
      )
      .subscribe(resp => this.searchService.res$.next(resp));
  }
}
