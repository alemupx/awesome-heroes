import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.model';
import { AlertsService } from '../../services/alerts.service';


@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss'],
})
export class PlayerComponentComponent implements OnInit {
  image = 'https://scontent.fclo9-1.fna.fbcdn.net/v/t1.0-9/21766836_534534336881220_2666974163546243980_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ur_m8xVLtscAX8uQavL&_nc_oc=AQlx8HYOk5PHW_NnBlxgrm-Fc_oJfVpvseBW6-tWZ77ZqingTxqgWnDhH3x3zR4aFa4&_nc_ht=scontent.fclo9-1.fna&oh=e27490cf8303af90515731f2b41b8d41&oe=607E8BEE'


  isLoaded = false;
  playerList: Player[];
  @Input() id;

  constructor(private playerService: PlayersService,) { }

  ngOnInit() {
    this.getPlayer(this.id);
  }

  getPlayer(data: string): any {

    const foo = data.split('/');

    this.playerService.traerJugador(foo['1'], foo['0']).subscribe(

      (response) => {
        let player = {
          id: response.payload.id,
          ...response.payload.data(),
        } as Player;
        // formulario.controls['edad'].setValue(this.calcularEdad(new Date(formulario.value.edad.split('T')[0])))

        player.edad = this.calcularEdad(new Date(player.edad.split('T')[0]))

        let tempList: Player[] = [player];

        this.playerList = tempList;

        this.isLoaded = true;


      },
      (error) => {

        console.log(error);

      },
    )

  }


  calcularEdad(age: Date) {
    let showAge;

    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365).toString();
    }
  }



}
