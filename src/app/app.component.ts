import { Component, OnInit } from '@angular/core';
import { FetchService } from './services/fetch.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nba-players';

  constructor(private fetchService: FetchService) {}

ngOnInit() {
  // tslint:disable-next-line: only-arrow-functions
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  this.fetchService.fetchData();

}

}
