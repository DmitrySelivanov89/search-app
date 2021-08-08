import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {SearchComponent} from "./search/search.component";
import {ResultsComponent} from "./results/results.component";
import {SearchService} from "./search.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent, SearchComponent, ResultsComponent],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule {
}
