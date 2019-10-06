import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Array<any>;
  selectSeason: FormGroup;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.players = this.fetchService.playersFetch;

    this.selectSeason = new FormGroup({
      leagueId: new FormControl('NBA'),
      season: new FormControl('2016-17'),
      seasonType: new FormControl('Regular Season')
    });
  }

  selectedPlayer(player) {
    this.fetchService.fetchedInfo = this.fetchService.fetchPlayerInfo(player);
  }

  onSubmit() {
    this.players = [];
    this.fetchService.playersFetch = [];
    this.fetchService.fetchData(
      'Totals',
      this.selectSeason.value.leagueId === 'NBA' ? '00' : '01',
      this.selectSeason.value.season,
      this.selectSeason.value.seasonType
    );
    this.players = this.fetchService.playersFetch;
  }
}
