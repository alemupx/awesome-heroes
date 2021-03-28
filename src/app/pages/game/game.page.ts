import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../../shared/services/games.service';
import { Games } from '../../shared/models/games.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  isLoaded = false;

  gamesList: Games[];
  id;



  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.gameService.traerJuego(this.id).then((data) => {
        this.gamesList = data;
      })

      this.gameService.traerJuego2(this.id).subscribe(
        (response) => {
          const game = {
            id: response.payload.id,
            ...response.payload.data() as Games
          }

          let tempList: Games[] = [game];

          this.gamesList = tempList;

          this.isLoaded = true;

        },
      )

    });
  }

  goTo(data) {
    this.router.navigate(['/add-player', data]);

  }


}
