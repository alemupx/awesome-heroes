import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {


  @Input() id: number;

  jugadores: Player[];

  image = 'https://scontent.fclo9-1.fna.fbcdn.net/v/t1.0-9/21766836_534534336881220_2666974163546243980_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ur_m8xVLtscAX8uQavL&_nc_oc=AQlx8HYOk5PHW_NnBlxgrm-Fc_oJfVpvseBW6-tWZ77ZqingTxqgWnDhH3x3zR4aFa4&_nc_ht=scontent.fclo9-1.fna&oh=e27490cf8303af90515731f2b41b8d41&oe=607E8BEE'

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {

    this.playersService.traerListaJugadores(this.id).subscribe(
      (response) => {
        const datosConvertidos = (accion: any) => {
          return {
            id: accion.payload.doc.id,
            ...accion.payload.doc.data(),
          } as Player;
        };

        this.jugadores = response.map(datosConvertidos);
      }
    )


  }

  editarJugador(idJugador: string) {
    this.router.navigate(['edit-player', idJugador + '/' + this.id]);
  }

  verJugador(idJugador: any) {
    this.router.navigate(['/player', idJugador + '/' + this.id]);
  }

  deletePlayer(idJugador: string) {
    this.playersService.eliminarJugador(this.id, idJugador)
  }



}
