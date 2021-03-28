import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/models/player.model';
import { PlayersService } from '../../shared/services/players.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.page.html',
  styleUrls: ['./player-edit.page.scss'],
})
export class PlayerEditPage implements OnInit {

  id;
  idJugador;
  playerList: Player[];
  player: Player = {};
  isLoaded = false;
  image = 'https://scontent.fclo9-1.fna.fbcdn.net/v/t1.0-9/21766836_534534336881220_2666974163546243980_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ur_m8xVLtscAX8uQavL&_nc_oc=AQlx8HYOk5PHW_NnBlxgrm-Fc_oJfVpvseBW6-tWZ77ZqingTxqgWnDhH3x3zR4aFa4&_nc_ht=scontent.fclo9-1.fna&oh=e27490cf8303af90515731f2b41b8d41&oe=607E8BEE'

  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayersService, private location: Location) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    )

    this.getPlayer(this.id);

  }


  getPlayer(data: string): any {

    const foo = data.split('/');

    this.playerService.traerJugador(foo['1'], foo['0']).subscribe(

      (response) => {
        const player = {
          id: response.payload.id,
          ...response.payload.data(),
        } as Player;

        // let tempList: Player[] = [player];

        this.player = player;



        // this.playerList = tempList;

        this.isLoaded = true;


      },
      (error) => {

        console.log(error);

      },
    )

  }


  EditPlayer(formulario: NgForm) {


    let foo = this.id.split('/');
    let idPartida = foo['1'];
    let idJugador = foo['0']
    let jugador: Player = formulario.value;

    this.playerService.editarJugador(idPartida, idJugador, jugador)

    this.location.back()


  }




}
