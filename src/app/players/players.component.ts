import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Array<any>;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.fetchData();
    this.fetchService.fetchPlayerInfo();

    this.players = this.fetchService.playersFetch;
  }

  selectedPlayer(player) {
    this.fetchService.fetchedInfo = this.fetchService.fetchPlayerInfo(player);
  }
}
