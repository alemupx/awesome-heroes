import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../shared/services/alerts.service';
import { GamesService } from '../../shared/services/games.service';
import { Games } from '../../shared/models/games.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  gamesList: Games[] = [];

  constructor(public alertService: AlertsService, private gamesService: GamesService, private router: Router) {
  }

  ngOnInit() {
    this.getGamesList();
  }

  log() {
    this.alertService.alertaPrompt();
  }

  getGamesList() {
    this.gamesService.traerListaJuegos().then((data) => {
      this.gamesList = data;
    })
  }

  goTo(data) {
    this.router.navigate(['/game', data]);
  }


}
