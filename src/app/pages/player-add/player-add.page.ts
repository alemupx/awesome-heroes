import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../shared/services/alerts.service';
import { Player } from '../../shared/models/player.model';
import { NgForm } from '@angular/forms';
import { PlayersService } from '../../shared/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.page.html',
  styleUrls: ['./player-add.page.scss'],
})
export class PlayerAddPage implements OnInit {
  id;
  player: Player = { lema: '', nivel: 1, puntosExperiencia: 0, puntosSalud: 0, };
  image = 'https://scontent.fclo9-1.fna.fbcdn.net/v/t1.0-9/21766836_534534336881220_2666974163546243980_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ur_m8xVLtscAX8uQavL&_nc_oc=AQlx8HYOk5PHW_NnBlxgrm-Fc_oJfVpvseBW6-tWZ77ZqingTxqgWnDhH3x3zR4aFa4&_nc_ht=scontent.fclo9-1.fna&oh=e27490cf8303af90515731f2b41b8d41&oe=607E8BEE'



  constructor(private alertService: AlertsService, private playerService: PlayersService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    )

  }

  AddPlayer(formulario: NgForm) {

    if (formulario.invalid) {
      this.alertService.alerta('The form is invalid', 'Check if you filled out all the required fields.');
      return;
    }


    // formulario.controls['edad'].setValue(this.calcularEdad(new Date(formulario.value.edad.split('T')[0])))


    // console.log(formulario.value);


    this.playerService.agregarJugador(this.id, formulario.value).then(
      () => {

        this.location.back()

      },
      (error) => {
        console.log(error, 'Error agregando jugador');
      }
    )

  }


  calcularEdad(age: Date) {
    let showAge;

    if (age) {
      const convertAge = new Date(age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
  }

}
