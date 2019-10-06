import { Component, OnInit, DoCheck } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, DoCheck {
  playerData: Array<any>;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.playerData = this.fetchService.fetchedInfo;
  }
}
