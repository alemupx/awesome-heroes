import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  anclaPc: boolean;
  anclaMovil: boolean;
  @Input() tarjetaPc: boolean;
  @Input() tarjetaMovil: boolean;
  @Input() tarjetaRespuestaPositiva: boolean;
  @Input() tarjetaRespuestaNegativa: boolean;

  contadorVotacionesPositivas: number;
  contadorVotacionesNegativas: number;
  constructor() {
    this.tarjetaRespuestaPositiva = false;
    this.tarjetaRespuestaNegativa = false;
    this.contadorVotacionesPositivas = 0;
    this.contadorVotacionesNegativas = 0;
  }

  ngOnInit() {}

  votoPositivo() {
    if (this.contadorVotacionesPositivas >= 0) {
      if (this.tarjetaPc) {
        this.tarjetaPc = false;
        this.tarjetaRespuestaPositiva = true;
        this.contadorVotacionesPositivas++;
        this.anclaPc = true;
        console.log('Votación Positivas: ', this.contadorVotacionesPositivas);
      }

      if (this.tarjetaMovil) {
        this.tarjetaMovil = false;
        this.tarjetaRespuestaPositiva = true;
        this.contadorVotacionesPositivas++;
        this.anclaMovil = true;
        console.log('Votación Positivas: ', this.contadorVotacionesPositivas);
      }
    }
  }

  votoNegativo() {
    if (this.contadorVotacionesNegativas >= 0) {
      if (this.tarjetaPc) {
        this.tarjetaPc = false;
        this.tarjetaRespuestaNegativa = true;
        this.contadorVotacionesNegativas++;
        this.anclaPc = true;
        console.log('Votación Positivas: ', this.contadorVotacionesNegativas);
      }

      if (this.tarjetaMovil) {
        this.tarjetaMovil = false;
        this.tarjetaRespuestaNegativa = true;
        this.contadorVotacionesNegativas++;
        this.anclaMovil = true;
        console.log('Votación Positivas: ', this.contadorVotacionesNegativas);
      }
    }
  }

  volverAVotar() {
    this.tarjetaRespuestaPositiva = false;
    this.tarjetaRespuestaNegativa = false;
    if (this.anclaPc) {
      this.tarjetaPc = true;
    }

    if (this.anclaMovil) {
      this.tarjetaMovil = true;
    }
  }
}
