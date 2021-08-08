import {Component, OnInit} from "@angular/core";
import {SearchService} from "../search.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  movies$: any;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.movies$ = this.searchService.res$;
  }
}
