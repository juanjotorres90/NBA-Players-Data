import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nba-players';

ngOnInit() {
  // tslint:disable-next-line: only-arrow-functions
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
}

}
