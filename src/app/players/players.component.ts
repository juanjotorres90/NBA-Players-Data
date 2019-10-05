import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

players: Array<any>;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
// this.fetchService.fetchData();
    this.players = this.fetchService.playersFetch;
    console.log(this.players);
  }

}
