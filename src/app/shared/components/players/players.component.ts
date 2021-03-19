import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {

  @Input() id: boolean;

  jugadores: Player[];
  image = '../../../../assets/img/batman.jpg';

  constructor(private playersService: PlayersService, private router: Router) {
  }

  ngOnInit() {

    this.playersService.traerListaJugadores(this.id).then((data) => {
      this.jugadores = data;
    })


  }

  verJugador(id: any) {
    
    this.router.navigate(['/player', id]);
  }



}
