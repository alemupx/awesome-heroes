import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../shared/services/games.service';
import { Games } from '../../shared/models/games.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  gamesList: Games[] = [];
  id;



  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.gameService.traerJuego(this.id).then((data) => {
        this.gamesList = data;
      })

    });
  }


}
