import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../shared/services/alerts.service';
import { GamesService } from '../../shared/services/games.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.page.html',
  styleUrls: ['./partidas.page.scss'],
})
export class PartidasPage implements OnInit {
  gamesList: any[];

  constructor(public alertService: AlertsService, private gamesService: GamesService) {
    this.gamesList = gamesService.getGamesList();
  }

  ngOnInit() {
    console.log(this.gamesList);

  }

  log() {
    this.alertService.alertaPrompt();
  }


}
